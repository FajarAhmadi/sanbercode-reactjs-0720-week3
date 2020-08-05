import React, {Component} from "react"


class Lists extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            indexForm: -1,
            data: {
                dataNama : "",
                dataHarga : "",
                dataBerat : ""
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event){
        let inputUser = {...this.state.input}
        inputUser[event.target.name] = event.target.value
        this.setState({
           inputUser
        });
        /*if(event.target.id === "nama") {
            this.setState({inputName: event.target.value});
        }else if(event.target.id === "harga") {
            this.setState({inputHarga: event.target.value});
        }else if(event.target.id === "berat") {
            this.setState({inputBerat: event.target.value});
        }*/
    }

    handleSubmit(event){
        event.preventDefault()
        let input = this.state.data
        if(input['nama'].replace(/\s/g, '')!== "" && input['harga'].toString().replace(/\s/g, '') !=="" && input['berat'].toString().replace(/\s/g, '') !== ""){
            let newData = this.state.dataHargaBuah
            let index = this.state.indexForm
            if(index === -1)newData = {...newData, input}
            else{newData[index] = input}

            this.setState({
                newData: newData,
                data:{
                    nama: "",
                    harga: "",
                    berat: ""
                },
            })
        }
    }

    handleEdit(event){
        let index = event.target.value
        let data = event.state.dataHargaBuah[index]
        this.setState({
            input: {
                nama: data.nama,
                harga: data.harga,
                berat: data.berat
            },
            indexForm: index
        })
    }

    handleDelete(event){
        let index = event.target.value
        let newData = this.state.dataHargaBuah
        let rewriteData = newData[this.state.indexForm]
        newData.splice(index,1)

        if(rewriteData !== undefined){
            var newIndex = newData.findIndex((el)=> el === rewriteData)
            this.setState({dataHargaBuah: rewriteData, indexForm: newIndex})
        }else {
            this.setState({dataHargaBuah: rewriteData})
        }
    }

    render(){
        return(
            <div style={{'margin-top': "200px"}}>
                <h1>Tabel Harga Buah</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.dataHargaBuah.map((val, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{val.nama}</td>
                                    <td>{val.harga}</td>
                                    <td>{val.berat/1000} kg</td>
                                    <td>
                                        <button onClick={this.handleEdit} value={index}>Edit</button>
                                        &nbsp;
                                        <button onClick={this.handleDelete} value={index}>Hapus</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                {/* Form */}
                <h1>Form Buah</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>
                        Masukkan nama buah yang baru:<br/>
                    </h3>
                    <input type="text" style={{display:"none"}}/>
                    <label htmlFor={"nama"}>Nama Buah: </label>
                    <input type="text" name='nama' value={this.state.data.name} onChange={this.handleChange}/><br/>
                    <label htmlFor={"harga"}>Harga Buah: </label>
                    <input type="text" name='harga' value={this.state.data.harga} onChange={this.handleChange}/><br/>
                    <label htmlFor={"berat"}>Berat Buah (gram): </label>
                    <input type="text" name='berat' value={this.state.data.berat} onChange={this.handleChange}/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default Lists