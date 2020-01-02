import { html, customElement, property, css } from "lit-element";
import { updateMetadata } from "pwa-helpers/metadata.js";

import { PageViewElement } from "../components/page-view-element";
import sharedStyle from "../css/shared-styles";
import WrokDetailData from "../data/work-detail";

@customElement("mx-work-detail")
export class WrokDetail extends PageViewElement {
  @property({ type: Object })
  _work: typeof WrokDetailData["plinth-2017"] | undefined;

  constructor() {
    super();
    const workId = location.pathname
      .split("/")
      .pop() as keyof typeof WrokDetailData;

    this._work = WrokDetailData[workId] as typeof WrokDetailData["plinth-2017"];

    const pageTitle = "Mukul Jain - " + this._work.title;

    updateMetadata({
      title: pageTitle,
      description: pageTitle
      // This object also takes an image property, that points to an img src.
    });
  }

  static get styles() {
    return [
      sharedStyle,
      css`
        :host {
          height: 100%;
          width: 100%;
          padding-top: 64px;
        }

        .container {
          max-width: 1024px;
          padding: 0px 16px;
          margin: auto;
          height: 100%;
          flex-direction: column;
        }

        h3,
        h4,
        h5,
        p {
          margin: 0;
        }

        a {
          border: 1px solid;
          padding: 10px 16px;
          color: #000;
          text-decoration: none;
        }

        a:not(:last-child) {
          margin-right: 16px;
        }

        img {
          margin: 32px 0;
          max-height: 400px;
        }

        img.shadow {
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
        }

        .button-container {
          margin-bottom: 32px;
        }

        .about p {
          margin-bottom: 16px;
        }

        h3 {
          margin-bottom: 16px;
        }

        .about {
          margin-bottom: 16px;
        }

        .technical-sheet {
          margin-bottom: 32px;
          width: 100%;
        }

        .features {
          width: 100%;
          margin-bottom: 32px;
        }

        ul {
          padding-left: 16px;
        }
      `
    ];
  }

  protected render() {
    // const workId = location.pathname
    //   .split("/")
    //   .pop() as keyof typeof WrokDetailData;
    // const work = WrokDetailData[workId];
    const work = this._work;

    if (!work) {
      return html`
        <p>Hmm, Intresting name</p>
      `;
    }

    return html`
      <div class="container flex v-center ">
        <h3 style="margin: 0">${work.title}</h3>
        <p>${work.jobType}</p>
        <img
          src="images/work-detail/${work.mainImg}"
          alt="${work.altMainImg}"
          class="${work.shadow! ? "shadow" : ""}"
        />
        <div class="button-container">
          ${work.website &&
            html`
              <a target="_blank" href=${work.website}>Live Demo</a>
            `}
          ${work.github &&
            html`
              <a target="_blank" href=${work.github}>Github</a>
            `}
        </div>

        <div class="about">
          <h3>About</h3>
          ${work.about.map(
            detail =>
              html`
                <p>${detail}</p>
              `
          )}
        </div>

        <div class="technical-sheet">
          <h3>Technical Sheet</h3>
          ${work.frontEndTech &&
            html`
              <h5>Front-End:</h5>
              <p>${work.frontEndTech}</p>
            `}
          ${work.backEndTech &&
            html`
              <h5>Back-End:</h5>
              <p>${work.backEndTech}</p>
            `}
        </div>

        ${work.features.length > 0
          ? html`
              <div class="features">
                <h3>Features</h3>
                <ul>
                  ${(work.features as string[]).map(
                    feature =>
                      html`
                        <li>${feature}</li>
                      `
                  )}
                </ul>
              </div>
            `
          : ``}
      </div>
    `;
  }
}
