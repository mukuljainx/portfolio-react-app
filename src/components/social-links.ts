import { LitElement, html, customElement, css } from "lit-element";

import sharedStyle from "../css/shared-styles";

@customElement("mx-social-links")
class SocialLinks extends LitElement {
  static get styles() {
    return [
      sharedStyle,
      css`
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

  protected render() {
    return html`
      <div class="flex" style="margin-top: 16px">
        <a href="https://github.com/mukuljainx" target="_blank">
          <img src="images/github.svg" alt="github icon" />
        </a>

        <a href="https://www.behance.net/mukuljainx" target="_blank">
          <img src="images/behance.svg" alt="behance icon" />
        </a>

        <a href="https://www.linkedin.com/in/mukuljainx" target="_blank">
          <img src="images/linkedin.svg" alt="linkedin icon" />
        </a>

        <a href="https://www.facebook.com/mukuljainx" target="_blank">
          <img src="images/facebook.svg" alt="facebook icon" />
        </a>

        <a href="https://plus.google.com/+MukulJainx" target="_blank">
          <img src="images/google.svg" alt="google icon" />
        </a>
      </div>
    `;
  }
}

export default SocialLinks;
