import React from "react";
import "./Style.css";
import TabelBuah from "./TabelBuah";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

export default class HargaBuah extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h1>Tabel Harga Buah</h1>
        <TabelBuah dataHargaBuah={dataHargaBuah} />
      </div>
    );
  }
}
