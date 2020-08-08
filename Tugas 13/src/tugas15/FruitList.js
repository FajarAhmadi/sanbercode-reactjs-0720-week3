import React, { useEffect, useContext } from "react";
import { FruitContext } from "./FruitContext";
import axios from "axios";
import "./Style.css";

const FruitList = () => {
  const {
    fruit,
    setFruit,
    setFruitId,
    setInput,
    refreshData,
    setRefreshData,
    setEditMode,
    setError,
  } = useContext(FruitContext);

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

  const handleDelete = (id) => {
    const url = `http://backendexample.sanbercloud.com/api/fruits/${id}`;

    axios
      .delete(url)
      .then((res) => {
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

  return (
    <>
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
    </>
  );
};

export default FruitList;
