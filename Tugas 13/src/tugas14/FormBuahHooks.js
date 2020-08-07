import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";

const FormBuahHooks = () => {
  const [refreshData, setRefreshData] = useState(false);
  const [fruit, setFruit] = useState(null);
  const [fruitId, setFruitId] = useState("");
  const [input, setInput] = useState({ name: "", price: "", weight: "" });
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!refreshData) {
      const url = "http://backendexample.sanbercloud.com/api/fruits";

      axios
        .get(url)
        .then((res) => {
          setFruit(res.data);
          setRefreshData(true);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [refreshData]);

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
          console.log(res);
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

  const handleEditData = (id) => {
    const url = `http://backendexample.sanbercloud.com/api/fruits/${id}`;

    axios
      .get(url)
      .then((res) => {
        setInput({
          name: res.data.name,
          price: res.data.price,
          weight: res.data.weight,
        });
        setFruitId(res.data.id);
        setEditMode(true);
        setError(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const url = `http://backendexample.sanbercloud.com/api/fruits/${fruitId}`;
    const { name, price, weight } = input;

    if (name && price && weight) {
      axios
        .put(url, input)
        .then((res) => {
          console.log(res);
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

  const handleDelete = (id) => {
    const url = `http://backendexample.sanbercloud.com/api/fruits/${id}`;

    axios
      .delete(url)
      .then((res) => {
        console.log(res);
        setRefreshData(false);
        setInput({ name: "", price: "", weight: "" });
        setFruitId("");
        setEditMode(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleCancel = () => {
    setInput({ name: "", price: "", weight: "" });
    setFruitId("");
    setEditMode(false);
    setError(false);
  };

  return (
    <div style={{ width: "100%" }}>
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
      <h1>Tabel Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fruit &&
            fruit.map((data) => (
              <tr style={{ textAlign: "left" }} key={data.id}>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{parseFloat(data.weight / 1000)} kg</td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  <button
                    className="btn-edit"
                    onClick={() => handleEditData(data.id)}
                  >
                    Edit
                  </button>
                </td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormBuahHooks;
