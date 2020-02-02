import { html, customElement, css } from "lit-element";
import { PageViewElement } from "../components/page-view-element";

@customElement("mx-blog")
export class About extends PageViewElement {
  static get styles() {
    return [
      css`
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

  protected render() {
    return html`
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
}
