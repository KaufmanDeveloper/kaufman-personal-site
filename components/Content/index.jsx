function Section({ children, className }) {
  const containsMarginStylingRegex = new RegExp("mt*");
  const containsMarginStyling = containsMarginStylingRegex.test(className);

  const containsWidthStylingRegex = new RegExp("w-*");
  const containsWidthStyling = containsWidthStylingRegex.test(className);

  return (
    <section
      className={`${containsMarginStyling ? "" : "mt-12"} ${
        containsWidthStyling ? "" : "w-full lg:w-11/12"
      }${className ? " " + className : ""}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({ children, className }) {
  return (
    <h2
      className={`text-4xl lg:text-6xl text-primary${
        className ? " " + className : ""
      }`}
    >
      {children}
    </h2>
  );
}

function SectionSubHeader({ children, className }) {
  const containsMarginStylingRegex = new RegExp("mt*");
  const containsMarginStyling = containsMarginStylingRegex.test(className);

  return (
    <h2
      className={`${
        containsMarginStyling ? "" : "mt-8 lg:mt-12"
      } text-2xl lg:text-4xl text-primary${className ? " " + className : ""}`}
    >
      {children}
    </h2>
  );
}

function SectionContent({ children, className }) {
  const containsMarginStylingRegex = new RegExp("mt*");
  const containsMarginStyling = containsMarginStylingRegex.test(className);

  const containsTextStylingRegex = new RegExp("text*");
  const containsTextStyling = containsTextStylingRegex.test(className);

  return (
    <div
      className={`${containsMarginStyling ? "" : "mt-8 lg:mt-14"} ${
        containsTextStyling ? "" : "text-secondary"
      }${className ? " " + className : ""} text-base lg:text-lg lg:leading-7`}
    >
      {children}
    </div>
  );
}

export { Section, SectionHeader, SectionSubHeader, SectionContent };
