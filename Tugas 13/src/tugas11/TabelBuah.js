import React from "react";

export default class TabelBuah extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
        </thead>
        <tbody>
          {this.props.dataHargaBuah.map((data, idx) => (
            <tr style={{ textAlign: "left" }} key={idx}>
              <td>{data.nama}</td>
              <td>{data.harga}</td>
              <td>{parseFloat(data.berat / 1000)} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
