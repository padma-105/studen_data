import { facultyData } from "../data/fscultyData"
import { Card } from "../table/card"
import { Table } from "../table/table"

function Faculty(){
    let column = Object?.keys(facultyData[0])
    
    return (
        <>
        <h1>Faculty data : </h1>
        <button type="button">insert</button>
        <Table column = {column} dataSource = {facultyData}/>
        <Card/>
        </>
    )
}

export default Faculty