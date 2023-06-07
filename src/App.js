import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleAddItem = () => {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: parseFloat(itemPrice),
      };

      if (selectedItemIndex !== -1) {
        const updatedCart = cart.map((item, index) =>
          index === selectedItemIndex ? newItem : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, newItem]);
      }

      setSelectedItemIndex(-1);
      setItemName("");
      setItemPrice("");
    }
  };

  const handleEditItem = (index) => {
    const selectedItem = cart[index];
    setSelectedItemIndex(index);
    setItemName(selectedItem.name);
    setItemPrice(selectedItem.price.toString());
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Shopping Cart
      </h1>

      <div>
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                flex: "1",
                textDecoration:
                  selectedItemIndex === index ? "underline" : "none",
              }}
            >
              {item.name} - ${item.price}
            </span>
            <button
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                background: "#ff0000",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
            <button
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                background: "#008000",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleEditItem(index)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: "10px" }}>
        {selectedItemIndex !== -1 ? "Edit Item" : "Add New Item"}
      </h2>
      <form>
        <label
          htmlFor="itemName"
          style={{ marginBottom: "5px", display: "block" }}
        >
          Name:
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        <label
          htmlFor="itemPrice"
          style={{ marginBottom: "5px", display: "block" }}
        >
          Price:
        </label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        <button
          type="button"
          onClick={handleAddItem}
          style={{
            padding: "5px 10px",
            background: "#008000",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {selectedItemIndex !== -1 ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default App;
