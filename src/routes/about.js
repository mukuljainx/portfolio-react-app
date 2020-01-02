var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, css, property } from "lit-element";
import { PageViewElement } from "../components/page-view-element";
import skills from "../data/skill-logo";
let About = class About extends PageViewElement {
    constructor() {
        super(...arguments);
        this.typer = undefined;
        this.typeSkillName = (element, name) => {
            let index = 0;
            element.innerText = " ";
            this.typer = {
                timer: setInterval(() => {
                    element.innerText += name[index];
                    index++;
                    if (index === name.length) {
                        clearInterval(this.typer.timer);
                    }
                }, 75),
                target: element
            };
        };
        this.resetTyper = () => {
            if (this.typer) {
                clearInterval(this.typer.timer);
                this.typer.target.innerHTML = "&nbsp;";
            }
        };
        this.handleSkillMouseEnter = (event) => {
            const targetElement = event.target;
            const elementList = targetElement.getElementsByTagName("p");
            if (!elementList.length) {
                return;
            }
            this.typeSkillName(elementList[0], targetElement.id);
        };
        this.handleSkillMouseLeave = () => {
            this.resetTyper();
        };
        this.getSkills = (skills) => skills.map(category => html `
        <div>
          <h4>${category.name}</h4>
          <!-- <div class="skills-container"> -->
          ${category.set.map(skill => html `
                <div
                  class="skill-value"
                  id="${skill.name}"
                  @mouseenter="${this.handleSkillMouseEnter}"
                  @mouseleave="${this.handleSkillMouseLeave}"
                >
                  <img src=${skill.src} />
                  <p>&nbsp;</p>
                </div>
              `)}
          <!-- </div> -->
        </div>
      `);
    }
    static get styles() {
        return [
            css `
        :host {
          height: 100%;
          width: 100%;
          padding-top: 64px;
        }

        .container {
          max-width: 1024px;
          padding: 0 16px;
          margin: auto;
        }

        h3 {
          margin-top: 0;
        }

        .skills-container {
          display: flex;
        }

        .skill-value:not(:last-child) {
          margin-right: 32px;
        }

        .skill-value {
          z-index: 3;
          position: relative;
          margin-bottom: 32px;
          text-align: center;
          display: inline-block;
        }

        .skill-value img {
          height: 50px;
        }

        .skill-value p {
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
        }
      `
        ];
    }
    render() {
        const dob = new Date("02/06/1996");
        const today = new Date();
        return html `
      <div class="container">
        <h3>Introduction</h3>
        <p>
          I am
          ${Math.floor((today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365))}
          old Full-Stack Web Developer, passionate about the Web with a B.Tech
          degree in Computer Science and Engineering from The LNM Institute of
          Information Technology, Jaipur, India. I love building things, I am a
          design enthusiast, having some designing experience. A Music addict,
          foodie and hard worker.
        </p>

        <h3>Skills</h3>
        <div class="flex">
          ${this.getSkills(skills)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], About.prototype, "typer", void 0);
About = __decorate([
    customElement("mx-about")
], About);
export { About };
