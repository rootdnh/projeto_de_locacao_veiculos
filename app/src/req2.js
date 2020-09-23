import React from 'react';
import  Table from 'react-bootstrap/Table'
import Api from './api_front'
import { json } from 'body-parser';
import './styles/reports.css'
import './styles/inputReport.css'

export default class Req2  extends React.Component{
 
  constructor(props) {
    super(props)
    this.state = {
      arr: [], 
      code: null,
        desc:[''],
        req2: [''],
        //req2: [''],
        
    }
}
 
  async componentDidMount(){



  await  Api.get('/requisicao-2/').then((resp) => {
      let arr = []
      resp.data.response.forEach(element => {
       
        arr.push({ COD: element.cod, Quantidade: element.qtd })
      });
      this.setState({ req2: arr })
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


const keys = Object.keys(this.state.req2[0])

  return (
    <div className="App">
    <h1>Requisição nº 2</h1>
   <div className="s">
   <div className='s' >

<table className="tab">

    <thead >
        <tr>
            {
                keys.map(item =>
                    <th key={item}>{item}</th>
                )
            }
        </tr>
    </thead>
    <tbody>
        {this.state.req2.map(record => <Row record={record} />)}
    </tbody>
</table>
</div>
</div>
{/*///////////////////////////////////////////////////////////////////////// */}

    </div>
  )
  }
}

