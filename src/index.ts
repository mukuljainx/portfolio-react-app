import {
  LitElement,
  html,
  property,
  PropertyValues,
  customElement
} from "lit-element";
import { setPassiveTouchGestures } from "@polymer/polymer/lib/utils/settings.js";
// import { installOfflineWatcher } from "pwa-helpers/network.js";
import { updateMetadata } from "pwa-helpers/metadata.js";

import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-scroll-effects/effects/waterfall.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";

import getDefaultStyle from "./css";
import { init as routerInit, getPage } from "./router";
import "./components/menu";

@customElement("mx-app")
export class App extends LitElement {
  @property({ type: String })
  appTitle = "";

  @property({ type: String })
  private _page = "";

  // @property({ type: Boolean })
  // private _snackbarOpened = false;

  // @property({ type: Boolean })
  // private _offline = false;

  static get styles() {
    return [getDefaultStyle()];
  }

  protected render() {
    // Anything that's related to rendering should be done in here.
    return html`
      <!-- Header -->

      <mx-menu page="${this._page}"></mx-menu>

      <img class="clouds" src="images/clouds.svg" />
      <!-- Main content -->
      <main role="main" class="main-content">
        <mx-home class="page" ?active="${this._page === "home"}"></mx-home>
        <mx-about class="page" ?active="${this._page === "about"}"></mx-about>
        <mx-work class="page" ?active="${this._page === "work"}"></mx-work>
        <mx-work-detail
          class="page"
          ?active="${this._page === "workDetail"}"
        ></mx-work-detail>
        <mx-contact
          class="page"
          ?active="${this._page === "contact"}"
        ></mx-contact>
        <mx-error-404
          class="page"
          ?active="${this._page === "Error404"}"
        ></mx-error-404>
      </main>

      <footer>
        <img src="images/cityscape.svg" />
      </footer>
    `;
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  protected firstUpdated() {
    // installRouter((location: Location) => this.updateCurrentPage(location));
    routerInit(this.updateCurrentPage);
    // installOfflineWatcher(offline => (this._offline = offline));
  }

  protected updated(changedProps: PropertyValues) {
    if (changedProps.has("_page")) {
      const pageTitle =
        this.appTitle +
        " - " +
        this._page[0].toUpperCase() +
        this._page.substr(1);
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  private updateCurrentPage = (location: Location) => {
    this._page = getPage(location);
  };
}
