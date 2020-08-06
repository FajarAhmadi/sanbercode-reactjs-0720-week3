import React from "react";
import "./Style.css";

export default class TabelBuah extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      namaInput: "",
      hargaInput: "",
      beratInput: "",
      indexForm: "",
      editMode: false,
      error: false,
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case "hargaInput":
        if (isNaN(value)) {
          value = "";
        }
        break;

      case "beratInput":
        if (isNaN(value)) {
          value = "";
        }
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { namaInput, hargaInput, beratInput } = this.state;

    if (namaInput && hargaInput && beratInput) {
      const newDataHargaBuah = {
        nama: this.state.namaInput,
        harga: parseInt(this.state.hargaInput),
        berat: parseInt(this.state.beratInput),
      };
      this.setState({
        dataHargaBuah: [...this.state.dataHargaBuah, newDataHargaBuah],
        namaInput: "",
        hargaInput: "",
        beratInput: "",
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  handleEditData = (index) => {
    const data = this.state.dataHargaBuah[index];
    this.setState({
      namaInput: data.nama,
      hargaInput: data.harga,
      beratInput: data.berat,
      indexForm: index,
      editMode: true,
    });
  };

  handleEdit = (event) => {
    event.preventDefault();
    const { namaInput, hargaInput, beratInput } = this.state;

    const index = this.state.indexForm;
    let dataHargaBuah = this.state.dataHargaBuah;

    if (namaInput && hargaInput && beratInput) {
      const newDataHargaBuah = {
        nama: this.state.namaInput,
        harga: parseInt(this.state.hargaInput),
        berat: parseInt(this.state.beratInput),
      };

      dataHargaBuah[index] = newDataHargaBuah;

      this.setState({
        dataHargaBuah: dataHargaBuah,
        namaInput: "",
        hargaInput: "",
        beratInput: "",
        indexForm: "",
        editMode: false,
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  handleDelete = (index) => {
    let dataHargaBuah = this.state.dataHargaBuah;
    dataHargaBuah.splice(index, 1);

    if (this.state.editMode) {
      this.setState({
        dataHargaBuah: dataHargaBuah,
        namaInput: "",
        hargaInput: "",
        beratInput: "",
        indexForm: "",
        editMode: false,
        error: false,
      });
    } else {
      this.setState({
        dataHargaBuah: dataHargaBuah,
      });
    }
  };

  handleCancel = () => {
    this.setState({
      namaInput: "",
      hargaInput: "",
      beratInput: "",
      indexForm: "",
      editMode: false,
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <h1>Form Harga Buah</h1>
        <form
          onSubmit={this.state.editMode ? this.handleEdit : this.handleSubmit}
        >
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
                  name="namaInput"
                  value={this.state.namaInput}
                  onChange={this.handleChange}
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
                  name="hargaInput"
                  value={this.state.hargaInput}
                  onChange={this.handleChange}
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
                  name="beratInput"
                  value={this.state.beratInput}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {this.state.error && (
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

            {this.state.editMode ? (
              <div style={{ display: "inline-block" }}>
                <button
                  className="btn-cancel"
                  style={{ margin: "0 5px" }}
                  onClick={this.handleCancel}
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
            {this.state.dataHargaBuah.map((data, idx) => (
              <tr style={{ textAlign: "left" }} key={idx}>
                <td>{data.nama}</td>
                <td>{data.harga}</td>
                <td>{parseFloat(data.berat / 1000)} kg</td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  <button
                    className="btn-edit"
                    onClick={() => this.handleEditData(idx)}
                  >
                    Edit
                  </button>
                </td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  <button
                    className="btn-delete"
                    onClick={() => this.handleDelete(idx)}
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
  }
}
