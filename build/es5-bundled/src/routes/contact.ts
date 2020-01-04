import { html, customElement, css } from "lit-element";

import { PageViewElement } from "../components/page-view-element";
import "../components/social-links";
import sharedStyle from "../css/shared-styles";

@customElement("mx-contact")
export class Contact extends PageViewElement {
  static get styles() {
    return [
      sharedStyle,
      css`
        :host {
          height: 100%;
          width: 100%;
        }

        .container {
          height: 100%;
          flex-direction: column;
        }

        a {
          display: flex;
          align-items: center;
          color: black;
          text-decoration: none;
          justify-content: center;
        }

        a img {
          margin-right: 4px;
        }

        .separator {
          width: 200px;
          margin-top: 20px;
          margin-bottom: 80px;
        }

        .separator div {
          height: 1px;
          background: #979797;
        }

        .separator-top {
          width: 100%;
        }

        .separator-bottom {
          width: 50%;
          margin: 8px 25%;
        }

        .contact-info {
          flex-direction: column;
        }

        h1 {
          margin-bottom: 80px;
        }
      `
    ];
  }

  protected render() {
    return html`
      <div class="container flex v-center h-center">
        <div>
          <h1>Get in Touch</h1>
        </div>
        <div class="flex v-align contact-info">
          <a href="mailto:jainmukul1996@gmail.com">
            <img src="images/contact/email.svg" />
            jainmukul1996@gmail.com
          </a>
          <a href="tel:+918114483580">
            <img src="images/contact/mobile.svg" />
            +91-8114-483-580
          </a>
        </div>

        <div class="separator">
          <div class="separator-top"></div>
          <div class="separator-bottom"></div>
        </div>

        <mx-social-links></mx-social-links>
      </div>
    `;
  }
}
