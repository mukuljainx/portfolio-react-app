var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, property, html, customElement, css } from "lit-element";
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-scroll-effects/effects/waterfall.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import { installMediaQueryWatcher } from "pwa-helpers/media-query.js";
import { hamBurgerIcon } from "./icon";
import { routes } from "../router";
let Menu = class Menu extends LitElement {
    constructor() {
        super(...arguments);
        this.page = "";
        this._drawerOpened = false;
        this.updateDrawerState = (state) => {
            this._drawerOpened = state;
        };
    }
    static get styles() {
        return [
            css `
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
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          width: 100%;
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
    render() {
        return html `
      <app-header condenses reveals effects="waterfall">
        <app-toolbar class="toolbar-top">
          <p style="visibility: ${this.page === "home" ? "hidden" : "block"}">
            <img style="height:16px" src="/images/manifest/icon.png" />
            Mukul Jain
          </p>

          <button
            class="menu-btn"
            title="Menu"
            @click="${this._menuButtonClicked}"
          >
            ${hamBurgerIcon}
          </button>
          <nav class="toolbar-list">
            ${routes.map(route => html `
                  <a
                    ?selected="${this.page === route.name}"
                    href="${route.route}"
                  >
                    ${route.displayName}
                  </a>
                `)}
          </nav>
        </app-toolbar>
      </app-header>

      <!-- Drawer content -->
      <app-drawer
        .opened="${this._drawerOpened}"
        @opened-changed="${this._drawerOpenedChanged}"
      >
        <nav class="drawer-list">
          ${routes.map(route => html `
                <a
                  ?selected="${this.page === route.name}"
                  href="${route.route}"
                >
                  ${route.displayName}
                </a>
              `)}
        </nav>
      </app-drawer>
    `;
    }
    firstUpdated() {
        installMediaQueryWatcher(`(min-width: 460px)`, () => this.updateDrawerState(false));
    }
    _menuButtonClicked(event) {
        event.stopPropagation();
        event.preventDefault();
        this.updateDrawerState(true);
    }
    _drawerOpenedChanged(e) {
        this.updateDrawerState(!!e.target.opened);
    }
};
__decorate([
    property({ type: String })
], Menu.prototype, "page", void 0);
__decorate([
    property({ type: Boolean })
], Menu.prototype, "_drawerOpened", void 0);
Menu = __decorate([
    customElement("mx-menu")
], Menu);
export default Menu;
