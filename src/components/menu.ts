import { LitElement, property, html, customElement, css } from "lit-element";
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-scroll-effects/effects/waterfall.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import { installMediaQueryWatcher } from "pwa-helpers/media-query.js";

import { hamBurgerIcon } from "./icon";
import { routes } from "../router";

@customElement("mx-menu")
class Menu extends LitElement {
  @property({ type: String })
  page: string = "";

  @property({ type: Boolean })
  _drawerOpened = false;

  static get styles() {
    return [
      css`
        app-toolbar {
          height: auto;
          float: right;
        }
        app-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          background-color: var(--app-header-background-color);
          color: var(--app-header-text-color);
        }

        .toolbar-top {
          background-color: var(--app-header-background-color);
        }

        .toolbar-list {
          display: none;
          margin: 16px 0;
        }

        .toolbar-list > a {
          display: inline-block;
          text-decoration: none;
          font-size: 16px;
          color: #000;
          font-weight: 300;
          padding: 8px;
        }

        .toolbar-list > a[selected] {
          color: #000;
          border-bottom: 1px solid;
        }

        .menu-btn {
          background: none;
          border: none;
          fill: var(--app-header-text-color);
          cursor: pointer;
          height: 44px;
          width: 44px;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: var(--app-drawer-background-color);
          position: relative;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: var(--app-drawer-text-color);
          line-height: 40px;
          padding: 0 24px;
        }

        .drawer-list > a[selected] {
          color: var(--app-drawer-selected-color);
        }

        @media (min-width: 460px) {
          .toolbar-list {
            display: block;
          }

          .menu-btn {
            display: none;
          }
        }
      `
    ];
  }

  protected render() {
    return html`
      <app-header condenses reveals effects="waterfall">
        <app-toolbar class="toolbar-top">
          <button
            class="menu-btn"
            title="Menu"
            @click="${this._menuButtonClicked}"
          >
            ${hamBurgerIcon}
          </button>
          <nav class="toolbar-list">
            ${routes.map(
              route =>
                html`
                  <a
                    ?selected="${this.page === route.name}"
                    href="${route.route}"
                  >
                    ${route.displayName}
                  </a>
                `
            )}
          </nav>
        </app-toolbar>
      </app-header>

      <!-- Drawer content -->
      <app-drawer
        .opened="${this._drawerOpened}"
        @opened-changed="${this._drawerOpenedChanged}"
      >
        <nav class="drawer-list">
          ${routes.map(
            route =>
              html`
                <a
                  ?selected="${this.page === route.name}"
                  href="${route.route}"
                >
                  ${route.displayName}
                </a>
              `
          )}
        </nav>
      </app-drawer>
    `;
  }

  private updateDrawerState = (state: boolean) => {
    this._drawerOpened = state;
  };

  protected firstUpdated() {
    installMediaQueryWatcher(`(min-width: 460px)`, () =>
      this.updateDrawerState(false)
    );
  }

  private _menuButtonClicked(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.updateDrawerState(true);
  }

  private _drawerOpenedChanged(e: Event) {
    this.updateDrawerState(!!(e.target as any).opened);
  }
}

export default Menu;
