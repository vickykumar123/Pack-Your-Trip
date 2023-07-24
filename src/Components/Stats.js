export default function Stats({ item }) {
  if (!item.length)
    return (
      <footer className="stats">
        <em>Start adding items in your bucket list 📦</em>
      </footer>
    );
  const numItems = item.length;
  const packedItems = item.filter((items) => items.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          🏇🏻You have {numItems} number of items in your bucket and Alreary
          packed {packedItems} ({percentage}%)
        </em>
      ) : (
        <em>You are done and Ready to fly ✈️</em>
      )}
    </footer>
  );
}
