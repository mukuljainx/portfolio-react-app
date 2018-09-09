import React from "react";

const NoMatchComponent = () => {
  return (
    <section>
      <h2
        className="text-center raleway page-head"
        style={{ marginBottom: "20px" }}
      >
        Opps
      </h2>
      <h4
        className="text-center raleway page-head"
        style={{ marginTop: "40px", marginBottom: "30px" }}
      >
        This URL does not exit, but can!
      </h4>
    </section>
  );
};

// const NoMatch = AnimatedWrapper(NoMatchComponent);
export default NoMatchComponent;
