const category = [
  {
    name: "Languages",
    set: [
      {
        name: "JavaScript",
        src: "images/skills/js.svg"
      },
      {
        name: "TypeScript",
        src: "images/skills/ts.svg"
      },
      {
        name: "HTML",
        src: "images/skills/html.svg"
      },
      {
        name: "SASS",
        src: "images/skills/sass.svg"
      },
      {
        name: "CSS",
        src: "images/skills/css.svg"
      },
      {
        name: "C++",
        src: "images/skills/cpp.svg"
      }
    ]
  },
  {
    name: "Framework",
    set: [
      {
        name: "React",
        src: "images/skills/react.svg"
      },
      {
        name: "Redux",
        src: "images/skills/redux.svg"
      },
      {
        name: "NodeJS",
        src: "images/skills/node.svg"
      },
      {
        name: "AngularJS 1",
        src: "images/skills/angular1.svg"
      },
      {
        name: "jQuery",
        src: "images/skills/jquery.svg"
      },
      {
        name: "Foundation",
        src: "images/skills/foundation.svg"
      },
      {
        name: "Bootstrap",
        src: "images/skills/bootstrap.svg"
      }
    ]
  },
  {
    name: "Tools",
    set: [
      {
        name: "Sketch",
        src: "images/skills/sketch.svg"
      },
      {
        name: "Webpack",
        src: "images/skills/webpack.png"
      },
      {
        name: "Fuse Box",
        src: "images/skills/fuse-box.svg"
      }
    ]
  }
];

export type ISkills = typeof category;

export default category;
