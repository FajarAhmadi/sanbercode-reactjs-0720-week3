import React, { useContext } from "react";
import { FruitContext } from "./FruitContext";
import axios from "axios";
import "./Style.css";

const FruitForm = () => {
  const {
    fruitId,
    setFruitId,
    input,
    setInput,
    setRefreshData,
    editMode,
    setEditMode,
    error,
    setError,
  } = useContext(FruitContext);

  const handleChange = (event) => {
    let newInput = { ...input };
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case "price":
        if (isNaN(value)) {
          value = "";
        }
        break;

      case "weight":
        value = parseInt(value);
        if (isNaN(value)) {
          value = "";
        }
        break;
      default:
        break;
    }

    newInput[name] = value;
    setInput(newInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://backendexample.sanbercloud.com/api/fruits";
    const { name, price, weight } = input;

    if (name && price && weight) {
      axios
        .post(url, input)
        .then((res) => {
          setRefreshData(false);
          setInput({ name: "", price: "", weight: "" });
          setError(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      setError(true);
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const url = `http://backendexample.sanbercloud.com/api/fruits/${fruitId}`;
    const { name, price, weight } = input;

    if (name && price && weight) {
      axios
        .put(url, input)
        .then((res) => {
          setRefreshData(false);
          setInput({ name: "", price: "", weight: "" });
          setFruitId("");
          setEditMode(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      setError(true);
    }
  };

  const handleCancel = () => {
    setInput({ name: "", price: "", weight: "" });
    setFruitId("");
    setEditMode(false);
    setError(false);
  };

  return (
    <>
      <h1>Form Harga Buah</h1>
      <form onSubmit={editMode ? handleEdit : handleSubmit}>
        <div
          style={{
            width: "60%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div style={{ display: "block", marginBottom: "1em" }}>
              <div
                style={{
                  display: "inline-block",
                  width: 80,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Nama
              </div>
              <input
                style={{ display: "inline-block" }}
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "block", marginBottom: "1em" }}>
              <div
                style={{
                  display: "inline-block",
                  width: 80,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Harga
              </div>
              <input
                style={{ display: "inline-block" }}
                type="text"
                name="price"
                value={input.price}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "block", marginBottom: "1em" }}>
              <div
                style={{
                  display: "inline-block",
                  width: 80,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Berat
              </div>
              <input
                style={{ display: "inline-block" }}
                type="text"
                name="weight"
                value={input.weight}
                onChange={handleChange}
              />
            </div>
          </div>
          {error && (
            <div
              style={{
                margin: "0 0 15px 0",
                display: "inline-block",
                width: 200,
                color: "red",
                fontSize: 16,
              }}
            >
              Field tidak boleh kosong!
            </div>
          )}
          {editMode ? (
            <div style={{ display: "inline-block" }}>
              <button
                className="btn-cancel"
                style={{ margin: "0 5px" }}
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="btn-edit"
                style={{ margin: "0 5px" }}
                type="submit"
              >
                Edit
              </button>
            </div>
          ) : (
            <button className="btn-add" type="submit">
              Add
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default FruitForm;
