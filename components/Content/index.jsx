function Section({ children }) {
  return <section className="mt-12 max-w-xl">{children}</section>;
}

function SectionHeader({ children }) {
  return <h2 className="text-4xl text-primary">{children}</h2>;
}

function SectionContent({ children }) {
  return <div className="mt-8 text-secondary">{children}</div>;
}

export { Section, SectionHeader, SectionContent };
