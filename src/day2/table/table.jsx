
export const Table = (props)=>(
    
    <>
    <table border = {1} cellSpacing={0}>
        <thead>
         <tr>
            {
                props?.column?.map((column,index)=>(
                    <>
                    <th>{column}</th>
                    </>
                ))
            }
         </tr>
        </thead>
        <tbody>
         {
            props?.dataSource?.map(((tableData,index)=>(
                <tr>
             {
                 props?.column?.map((column,index)=>(
                    <>
                    <td>{tableData[column]}</td>
                    </>
                ))
             }
                </tr>
            )))
         }
        </tbody>
    </table>
    </>
)