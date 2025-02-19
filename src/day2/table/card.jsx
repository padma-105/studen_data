export const Card = (props)=>(
    
    <>
    <div>
     {
            props?.dataSource?.map(((tableData,index)=>(
                <div style={{
              border:"2px solid Red"
                }}>
             {
                 props?.column?.map((column,index)=>(
                    <>
                    <p><b>{column}</b> : {tableData[column]}</p>
                    </>
                ))
             }
                </div>
            )))
         }
         </div>
    </>
)