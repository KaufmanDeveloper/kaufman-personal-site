import FormatQuote from "@material-ui/icons/FiberManualRecord";

export default function List({ children, className }) {
  return (
    <ul className={className}>
      {children.map((child) => {
        return (
          <div className="flex items-center text-secondary mt-1">
            <FormatQuote className="mr-2" style={{ fontSize: 10 }} />
            {child}
          </div>
        );
      })}
    </ul>
  );
}
