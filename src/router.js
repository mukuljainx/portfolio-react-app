import { installRouter } from "pwa-helpers/router.js";
const init = (cb) => installRouter(cb);
const routes = [
    { name: "home", route: "", displayName: "Home" },
    { name: "about", route: "about", displayName: "About" },
    { name: "work", route: "work", displayName: "Work" },
    { name: "contact", route: "contact", displayName: "Contact" }
];
const getPage = (location) => {
    const locationArray = location.pathname.split("/");
    if (locationArray.length === 2) {
        const page = locationArray[1] || "home";
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
        }
    }
    else if (locationArray.length === 3) {
        const page = locationArray[1] || "home";
        if (page === "work") {
            import("./routes/work-detail");
            return "workDetail";
        }
    }
    import("./routes/error-404");
    return "Error404";
};
export { init, getPage, routes };
