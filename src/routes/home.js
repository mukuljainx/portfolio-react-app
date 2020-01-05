var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, css } from "lit-element";
import { PageViewElement } from "../components/page-view-element";
import "../components/social-links";
import sharedStyle from "../css/shared-styles";
let Home = class Home extends PageViewElement {
    static get styles() {
        return [
            sharedStyle,
            css `
        :host {
          height: 100%;
          width: 100%;
        }

        .container {
          height: 100%;
          flex-direction: column;
        }

        h1 {
          font-size: 102px;
          line-height: 102px;
          margin: 0;
          font-weight: 400;
        }

        h4 {
          font-size: 52px;
          line-height: 52px;
          margin: 0;
          top: -3px;
          font-weight: 400;
        }

        p {
          font-size: 27px;
          line-height: 27px;
          top: -1px;
          margin: 0;
        }

        .moving-plane-container {
          position: relative;
          height: 50px;
          width: 100%;
        }
        .moving-plane {
          top: 100px;
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
      `
        ];
    }
    render() {
        return html `
      <div class="container flex v-center h-center">
        <div class="intro-head flex v-center h-center">
          <div>
            <h1>HI</h1>
          </div>
          <div>
            <h4>I'M Mukul Jain</h4>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
        <mx-social-links></mx-social-links>
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
Home = __decorate([
    customElement("mx-home")
], Home);
export { Home };
