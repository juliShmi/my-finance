import Category from "./Category";

export default function CategoriesList({ categories }) {
  const renderedCategories = categories.map((category) => {
    return (
      <div key={category.name}>
        <Category category={category} />
      </div>
    );
  });
  return <div className="flex flex-row">{renderedCategories}</div>;
}
