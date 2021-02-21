function Section({ children, className }) {
  const containsMarginStylingRegex = new RegExp("mt*");
  const containsMarginStyling = containsMarginStylingRegex.test(className);

  return (
    <section
      className={`${containsMarginStyling ? "" : "mt-12"} max-w-xl${
        className ? " " + className : ""
      }`}
    >
      {children}
    </section>
  );
}

function SectionHeader({ children, className }) {
  return (
    <h2 className={`text-4xl text-primary${className ? " " + className : ""}`}>
      {children}
    </h2>
  );
}

function SectionSubHeader({ children, className }) {
  const containsMarginStylingRegex = new RegExp("mt*");
  const containsMarginStyling = containsMarginStylingRegex.test(className);

  return (
    <h2
      className={`${containsMarginStyling ? "" : "mt-8"} text-2xl text-primary${
        className ? " " + className : ""
      }`}
    >
      {children}
    </h2>
  );
}

function SectionContent({ children, className }) {
  const containsMarginStylingRegex = new RegExp("mt*");
  const containsMarginStyling = containsMarginStylingRegex.test(className);

  return (
    <div
      className={`${containsMarginStyling ? "" : "mt-8"} text-secondary${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
}

export { Section, SectionHeader, SectionSubHeader, SectionContent };
