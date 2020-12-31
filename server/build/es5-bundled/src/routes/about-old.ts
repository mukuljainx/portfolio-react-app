// import { html, customElement, css } from "lit-element";
// import { PageViewElement } from "../components/page-view-element";
// import skills, { ISkills } from "../data/skills";

// @customElement("mx-about")
// export class About extends PageViewElement {
//   static get styles() {
//     return [
//       css`
//         :host {
//           height: 100%;
//           width: 100%;
//           padding-top: 64px;
//         }
//         .flex {
//           display: flex;
//         }

//         .flex.h-center {
//           justify-content: center;
//         }

//         .flex.v-center {
//           align-items: center;
//         }

//         .container {
//           max-width: 1024px;
//           padding: 0 16px;
//           margin: auto;
//         }

//         h3 {
//           margin-top: 0;
//         }

//         .score-indicator {
//           display: flex;
//         }

//         .score-indicator div:not(:last-child) {
//           margin-right: 4px;
//         }

//         .score-indicator .filled {
//           width: 14px;
//           height: 14px;
//           border-radius: 100%;
//           background: #4a4a4a;
//         }

//         .score-indicator .empty {
//           width: 13px;
//           height: 13px;
//           border-radius: 100%;
//           border: 1px solid;
//         }

//         .skills-container {
//           display: flex;
//           flex-wrap: wrap;
//         }

//         .skill-value:not(:last-child) {
//           margin-right: 16px;
//         }

//         .skill-value {
//           display: flex;
//           align-items: center;
//         }

//         .skill-value p {
//           /* margin: 0 16px 0 0; */
//           /* width: 86px; */
//         }
//       `
//     ];
//   }

//   private createScoreIndicator = (score: number) =>
//     html`
//       <div class="score-indicator">
//         ${[...Array(10).keys()].map(index => {
//           if (index < score) {
//             return html`
//               <div class="filled" />
//             `;
//           }
//           return html`
//             <div class="empty" />
//           `;
//         })}
//       </div>
//     `;

//   private getSkills = (skills: ISkills) =>
//     skills.map(
//       category => html`
//         <h4>${category.categoryName}</h4>
//         <div class="skills-container">
//           ${category.set.map(
//             skill =>
//               html`
//                 <div class="skill-value">
//                   <p>${skill.name} <span>&bull;</span></p>
//                 </div>
//               `
//           )}
//         </div>
//       `
//     );

//   protected render() {
//     const dob = new Date("02/06/1996");
//     const today = new Date();
//     return html`
//       <div class="container">
//         <h3>Introduction</h3>
//         <p>
//           I am
//           ${Math.floor(
//             (today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365)
//           )}
//           old Full-Stack Web Developer, passionate about the Web with a B.Tech
//           degree in Computer Science and Engineering from The LNM Institute of
//           Information Technology, Jaipur, India. I love building things, I am a
//           design enthusiast, having some designing experience. A Music addict,
//           foodie and hard worker.
//         </p>

//         <h3>Skills</h3>

//         ${this.getSkills(skills)}
//       </div>
//     `;
//   }
// }
