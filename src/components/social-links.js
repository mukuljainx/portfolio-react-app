var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from "lit-element";
import sharedStyle from "../css/shared-styles";
let SocialLinks = class SocialLinks extends LitElement {
    static get styles() {
        return [
            sharedStyle,
            css `
        a {
          display: flex;
          align-items: center;
          color: black;
          text-decoration: none;
          padding: 4px;
          border: 1px solid rgba(0, 0, 0, 0);
          border-radius: 100%;
        }

        a:hover {
          border: 1px solid;
        }

        a img {
          width: 24px;
          height: 24px;
        }

        a:not(:last-child) {
          margin-right: 16px;
        }

        @media (min-width: 460px) {
        }
      `
        ];
    }
    render() {
        return html `
      <div class="flex" style="margin-top: 16px">
        <a href="https://github.com/mukuljainx" target="_blank">
          <img src="images/social/github.svg" alt="github icon" />
        </a>

        <a href="https://www.behance.net/mukuljainx" target="_blank">
          <img src="images/social/behance.svg" alt="behance icon" />
        </a>

        <a href="https://www.linkedin.com/in/mukuljainx" target="_blank">
          <img src="images/social/linkedin.svg" alt="linkedin icon" />
        </a>

        <a href="https://www.facebook.com/mukuljainx" target="_blank">
          <img src="images/social/facebook.svg" alt="facebook icon" />
        </a>

        <a href="https://plus.google.com/+MukulJainx" target="_blank">
          <img src="images/social/google.svg" alt="google icon" />
        </a>
      </div>
    `;
    }
};
SocialLinks = __decorate([
    customElement("mx-social-links")
], SocialLinks);
export default SocialLinks;
