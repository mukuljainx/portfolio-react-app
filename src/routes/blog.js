var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, css } from "lit-element";
import { PageViewElement } from "../components/page-view-element";
let About = class About extends PageViewElement {
    static get styles() {
        return [
            css `
        :host {
          height: 100%;
          width: 100%;
        }

        .container {
          width: 100%;
          height: 100%;
          padding: 0 16px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .moving-plane {
          height: 7%;
          bottom: 14%;
          bottom: 100px;
          position: absolute;
          z-index: -1;
          animation: animate 12s linear infinite;
          cursor: pointer;
        }

        @keyframes animate {
          from {
            left: calc(100% + 120px);
          }
          to {
            left: -120px;
          }
        }

        @media (max-width: 640px) {
          .moving-plane {
            bottom: 60px;
          }
        }
      `
        ];
    }
    constructor() {
        super();
        location.replace("https://medium.com/@mukuljainx");
    }
    render() {
        return html `
      <div class="container">
        <h4>Redirecting to Medium</h4>
        <div class="moving-plane-container">
          <img
            src="images/plane.svg"
            class="moving-plane plane-animation-start"
          />
        </div>
      </div>
    `;
    }
};
About = __decorate([
    customElement("mx-blog")
], About);
export { About };
