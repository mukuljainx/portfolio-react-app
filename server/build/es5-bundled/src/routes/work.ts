import { html, customElement, css, property } from "lit-element";

import { PageViewElement } from "../components/page-view-element";
import works from "../data/work";

import sharedStyle from "../css/shared-styles";

@customElement("mx-work")
export class Work extends PageViewElement {
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
          width: 100%;
        }

        .flex-column {
          flex-direction: column;
        }

        .showcase {
          width: 60%;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
          background: #fff;
          border-radius: 4px;
        }

        .showcase-image {
          position: relative;
          width: 100%;
        }

        .showcase-image img {
          width: 100%;
        }

        .showcase-image:hover .showcase-image-hover {
          display: flex;
        }

        .showcase-image:hover img {
          filter: blur(3px) grayscale(75%);
        }

        .showcase-image-hover {
          flex-direction: column;
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }

        .showcase-image-hover-a {
          border: 1px solid;
          padding: 10px 16px;
          color: white;
        }

        .showcase-image-hover-h4 {
          margin: 12px 0 0;
          color: white;
        }

        .dark .showcase-image-hover-a,
        .dark .showcase-image-hover-h4 {
          color: black;
        }

        .detail {
          padding: 12px 16px;
        }

        h3 {
          margin: 0;
          line-height: 1;
          font-weight: 400;
          margin-bottom: 2px;
        }

        p {
          margin: 0;
          font-weight: 300;
          display: flex;
          justify-content: space-between;
        }

        button {
          font-size: 60px;
          font-weight: 300;
          background: none;
          border: none;
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: #000;
        }

        a:hover {
          border-bottom: 1px solid;
        }

        .rotate-180 {
          transform: rotate(180deg);
          margin-left: 32px;
        }

        h2 {
          display: none;
        }

        @media (max-width: 640px) {
          h2 {
            display: block;
          }

          button,
          .not-mobile {
            display: none;
          }

          .container {
            display: flex;
            flex-direction: column;
          }

          .showcase {
            width: calc(100% - 32px);
            margin-bottom: 32px;
          }

          .flex-column {
            padding-top: 48px;
          }

          h2 {
            margin: 0;
          }
        }
      `
    ];
  }

  @property({ type: Number })
  private _workIndex = 0;

  private show = (next: 1 | -1) => {
    const n = works.length;
    this._workIndex = (((this._workIndex + next) % n) + n) % n;
  };

  protected render() {
    const work = works[this._workIndex];
    const isMobile = window.innerWidth <= 640;
    return html`
      <div class="container flex v-center h-center flex-column">
        <h2>Work</h2>
        <!-- for preloading of images -->
        ${!isMobile
          ? works.map(
              workImg =>
                html`
                  <img
                    style="display: none"
                    src="images/work/${workImg.img}"
                    alt=${workImg.altImg}
                  />
                `
            )
          : null}
        <div class="container flex v-center h-center">
          <button style="margin-right: 32px" @click="${() => this.show(-1)}">
            <img src="images/left.svg" />
          </button>
          <div class="showcase not-mobile">
            <div class="showcase-image">
              <img src="images/work/${work.img}" alt=${work.altImg} />
              <div
                class="showcase-image-hover flex v-center h-center ${work.detailTextColor}"
              >
                <a
                  class="showcase-image-hover-a"
                  href="/work/${work.detailLink}"
                >
                  View Project
                </a>
                <h4 class="showcase-image-hover-h4">${work.what}</h4>
              </div>
            </div>
            <div class="detail">
              <h3>${work.name}</h3>
              <p>
                <span>${work.stack}</span>
                <span>
                  ${work.websiteLink &&
                    html`
                      <a target="_blank" href=${work.websiteLink}>Live Demo</a>
                      |
                    `}
                  ${work.githubLink &&
                    html`
                      <a target="_blank" href=${work.githubLink}>Github</a> |
                    `}
                  <a href="/work/${work.detailLink}">Details</a>
                </span>
              </p>
            </div>
          </div>

          <!-- for mobile -->
          ${isMobile
            ? works.map(
                work =>
                  html`
                    <div class="showcase">
                      <div class="showcase-image">
                        <img src="images/work/${work.img}" alt=${work.altImg} />
                        <div
                          class="showcase-image-hover flex v-center h-center ${work.detailTextColor}"
                        >
                          <a
                            class="showcase-image-hover-a"
                            href="/work/${work.detailLink}"
                          >
                            View Project
                          </a>
                          <h4 class="showcase-image-hover-h4">${work.what}</h4>
                        </div>
                      </div>
                      <div class="detail">
                        <h3>${work.name}</h3>
                        <p>
                          <span>${work.stack}</span>
                          <span>
                            ${work.websiteLink &&
                              html`
                                <a target="_blank" href=${work.websiteLink}
                                  >Live Demo</a
                                >
                                |
                              `}
                            ${work.githubLink &&
                              html`
                                <a target="_blank" href=${work.githubLink}
                                  >Github</a
                                >
                                |
                              `}
                            <a href="/work/${work.detailLink}">Details</a>
                          </span>
                        </p>
                      </div>
                    </div>
                  `
              )
            : null}

          <button class="rotate-180" @click="${() => this.show(1)}">
            <img src="images/left.svg" />
          </button>
        </div>
      </div>
    `;
  }
}
