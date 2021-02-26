function ListItem({ children }) {
  return <li className="text-secondary mt-1 ml-5">{children}</li>;
}

function List({ children, className }) {
  return <ul className={`${className} list-disc`}>{children}</ul>;
}

List.Item = ListItem;

export default List;
