import { useState } from "react";
import Items from "./Items";

export default function PackageList({
  itemAdd,
  onDeleteItems,
  onPackedItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = itemAdd;
  }
  if (sortBy === "description") {
    sortedItems = itemAdd
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed")
    sortedItems = itemAdd
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      {/* <ul>
          {initialItems.map((item) => (
            <Items itemObj={item} key={item.id} />
          ))}
        </ul> */}
      <ul>
        {sortedItems.map((item) => (
          <Items
            itemObj={item}
            onDeleteItems={onDeleteItems}
            onPackedItem={onPackedItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description </option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
