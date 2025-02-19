import { StdData } from "../data/stdData"
import { Card } from "../table/card"
import { Table } from "../table/table"

function Student(){
    let column = Object?.keys(StdData[0])
    
    return (
        <>
        <h1>Student Data : </h1>
        <button type="button">insert</button>
          {/* <Table column = {column} dataSource = {StdData}/> */}
          <Card column = {column} dataSource = {StdData}/>
        </>
    )
}

export default Student