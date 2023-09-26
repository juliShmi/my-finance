import Category from "./Category";

export default function CategoriesList({ categories, transactions, onCreate }) {
  const renderedCategories = categories.map((category) => {
    return (
      <div key={category}>
        <Category
          category={category}
          transactions={transactions}
          onCreate={onCreate}
        />
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-row">{renderedCategories}</div>
    </div>
  );
}
