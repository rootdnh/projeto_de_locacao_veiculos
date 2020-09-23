
import React, { Component } from 'react';
import '../styles/locacao.css'
import Api from '../api_front'

export default class Locacao extends Component {
    constructor(props) {
        super(props)
        this.state = {
          arr: [], 
          code: null,
          dt_hr_locacao :'',
          dt_hr_prevista: '',
           cod_cliente: '', 
          filial_destino: '',
           cod_tipo_veiculo_desejado: ''  
        }
    }

    sendData = () =>{
        Api.post('/cad_locacao',{
            dt_hr_locacao :this.state.dt_hr_locacao,
            dt_hr_prevista: this.state.dt_hr_prevista,
             cod_cliente: this.state.cod_cliente, 
            filial_destino: this.state.filial_destino,
             cod_tipo_veiculo_desejado: this.state.cod_tipo_veiculo_desejado,
        }).then( (resp) => {
             this.setState({dt_hr_locacao: '',dt_hr_locacao_p: '',cod_cliente: '',filial_destino: '',cod_tipo_veiculo_desejado: '', })
          }).catch((error) => {
            alert(error)
          })
    }

    change_dt_hr = (eve)=>{this.setState({dt_hr_locacao: eve.target.value}) }
    change_dt_hr_p = (eve)=>{this.setState({dt_hr_prevista: eve.target.value}) }
    change_cod = (eve)=>{this.setState({cod_cliente: eve.target.value}) }
    change_filial = (eve)=>{this.setState({filial_destino: eve.target.value}) }
    change_desejado = (eve)=>{this.setState({cod_tipo_veiculo_desejado: eve.target.value}) }


    render() {
    return (
      <div className="locacao"> 
          <label>Data e hora da Locação</label>
          <input value={this.state.dt_hr_locacao} onChange={this.change_dt_hr} placeholder='0000-00-00 00:00:00' />
          
          <label>Data e hora Prevista</label>
          <input value={this.state.dt_hr_prevista} onChange={this.change_dt_hr_p} placeholder='0000-00-00 00:00:00' />
          
          <label>Código do Cliente</label>
          <input value={this.state.cod_cliente} onChange={this.change_cod} placeholder='000' />
          
          <label>Filial Destino</label>
          <input value={this.state.filial_destino} onChange={this.change_filial} placeholder='00000000000000' />
          
          <label>Tipo do Veículo</label>
          <input value={this.state.cod_tipo_veiculo_desejado} onChange={this.change_desejado} placeholder='XXXX' />

          <button onClick={this.sendData}>Finalizar Locação</button>
        
  </div>
    );
  }
}
