import { useEffect, useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackageList from "./Components/PackageLists";
import Stats from "./Components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];
export default function App() {
  //Lifting State up- Is the concenpt to move to state nearest parent, So it can be used by both the child components;

  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(function () {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  // const numItems = items.length;
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  useEffect(
    function () {
      localStorage.setItem("items", JSON.stringify(items));
    },
    [items]
  );

  function handleDelete(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirm = window.confirm("Are you sure to clear bucket list ?");

    if (items.length !== 0 && confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList
        itemAdd={items}
        onDeleteItems={handleDelete}
        onPackedItem={handlePackedItems}
        onClear={handleClear}
      />
      {/* <Stats numItems={numItems} /> */}
      <Stats item={items} />
    </div>
  );
}
