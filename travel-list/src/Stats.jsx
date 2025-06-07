
export default function Stats({ items }) {
  if (items.length === 0) return <footer className="stats"><em>please select what you want.</em></footer>;
  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = (packedItem / numItem * 100);
  return (
    <footer className="stats">
      <em>{percentage === 100 ? "Ready to go" : `You have ${numItem} items in the list and you already packed ${packedItem} (${percentage}%)`}</em>
    </footer>
  );
}
