import React from 'react';
import './App.css';

class Nama extends React.Component  {
  render() {
    return <td>{this.props.name}</td>;
  }
}

class Harga extends React.Component  {
  render() {
    return <td>{this.props.price}</td>;
  }
}

class Berat extends React.Component  {
  render() {
    return <td>{this.props.weight/1000} kg</td>;
  }
}

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class DataTable extends React.Component {
  render() {
    return (
      <>
        {dataHargaBuah.map(el=> {
          return (
              <tr>
              <Nama name={el.nama}/> 
              <Harga price={el.harga}/> 
              <Berat weight={el.berat}/> 
              </tr>
          )
        })}
      </>
    )
  }
}

function App() {
  return (
    <div>
    <h1> Tabel Harga Buah </h1>
    <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
        </thead>
        <tbody>
          <DataTable/>  
        </tbody>  
    </table>
    </div>
  );
}

export default App;
