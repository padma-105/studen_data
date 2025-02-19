import {post}  from './post.js'
import Card from './card.jsx'
console.log(post)
 function Child(props){
  console.log(props?.name)
  return(
    <>
    <h1>{props?.name}</h1>
    <h1>{props?.age}</h1>
    <h1>this is product list</h1>
    {post.map((card,index)=>(
      <>
      <Card post ={card} index={index}/>
      </>
    ))}
    </>
  )
}

export default Child