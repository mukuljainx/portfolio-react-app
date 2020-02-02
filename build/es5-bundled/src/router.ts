import { installRouter } from "pwa-helpers/router.js";

const init = (cb: (location: Location) => void) => installRouter(cb);

const routes = [
  { name: "home", route: "", displayName: "Home" },
  { name: "about", route: "about", displayName: "About" },
  { name: "work", route: "work", displayName: "Work" },
  { name: "contact", route: "contact", displayName: "Contact" },
  { name: "blog", route: "blog", displayName: "Blog" }
] as const;

type PageNameType = typeof routes[number]["name"] | "workDetail";

const getPage = (location: Location) => {
  const locationArray = location.pathname.split("/");

  if (locationArray.length === 2) {
    const page = (locationArray[1] as PageNameType) || "home";
    switch (page) {
      case "home": {
        import("./routes/home");
        return "home";
      }
      case "about": {
        import("./routes/about");
        return page;
      }
      case "work": {
        import("./routes/work");
        return page;
      }
      case "contact": {
        import("./routes/contact");
        return page;
      }
      case "blog": {
        import("./routes/blog");
        return page;
      }
    }
  } else if (locationArray.length === 3) {
    const page = (locationArray[1] as PageNameType) || "home";
    if (page === "work") {
      import("./routes/work-detail");
      return "workDetail";
    }
  }

  import("./routes/error-404");
  return "Error404";
};

export { init, getPage, PageNameType, routes };
