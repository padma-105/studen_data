function Card(props){
    return (
        <>
    <div key={props.index}>
        <p>{props.post.id}</p>
        <p>{props.post.post}</p>
        <p>{props.post.likes}</p>
        <p>{props.post.comments}</p>
      
    </div>
        
        </>
    )
}
export default Card