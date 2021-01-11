import React from 'react'

export default (props) => {
    const {post} = props
        
        if(post.answersContent){
            

            console.log(props)
            return(
                <div>
                    {post.answersContent.map(( index,  answersContent)=>{
                        return <p>{answersContent}</p>
                        
                    })}
                </div>
            )
        }
       
        // return null 
}