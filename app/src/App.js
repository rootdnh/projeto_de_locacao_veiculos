import React from 'react';
import  Table from 'react-bootstrap/Table'
import Api from './api_front'
import './styles/reports.css'
import Req2 from './req2'
import Req3 from './req3'
import Routes from './routes_front'

export default class App  extends React.Component{
 
  constructor(props) {
    super(props)
    this.state = {
      arr: [], 
      code: null,
        desc:[''],
        req2: [''],
        req2: [''],
        
    }
}
 
  componentDidMount(){
    Api.get('/requisicao-2/').then((resp) => {
      let arr = []
      let arrDesc = []
      resp.data.response.forEach(element => {
       
        arr.push({ COD: element.cod, Quantidade: element.qtd})
        
      });
      this.setState({ req2: arr })
     // alert(JSON.stringify(arr))
    })


    Api.get('/all-location').then((resp) => {
      let arr = []
      resp.data.response.forEach(element => {
       
        arr.push({ Data_e_hora_Locação: element.dt_hr_locacao, Data_Prevista: element.dt_hr_prevista, Código_Cliente: element.cod_cliente,Filial_Destino: element.filial_destino, Tipo_do_Veículo: element.cod_tipo_veiculo_desejado})
      });
      this.setState({ desc: arr })
    // alert(JSON.stringify(resp))
    })

 }

 render(){
  const  Row = ({record}) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id}>{
            keys.map(key => <td key={key}>{record[key]}</td>)
            }       
            </tr>

    )
}


const keys = Object.keys(this.state.desc[0])

  return (
      <div className="app">

    <h1>Todos os Cadastros</h1>
    
<table className="tab">

    <thead >
        <tr>
            {
                keys.map(item =>
                    <th key={ item}>{item}</th>
                )
            }
        </tr>
    </thead>
    <tbody>
        {this.state.desc.map(record => <Row record={record} />)}
    </tbody>
</table>
</div>
  )
  }
}

