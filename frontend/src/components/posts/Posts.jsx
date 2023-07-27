import "./Posts.scss"
import Post from "../post/Post"
import { makeRequest } from '../../axios'
import { useQuery } from '@tanstack/react-query'





export const Posts = ({ userId }) => {


  const { isLoading, error, data} = useQuery(["postz"], () =>

    makeRequest.get("/posts?userId=" + userId).then(res => {
      return res.data;
      

    })
    
  )
  
  

  
// const ds =Object.entries(data);
  
console.log(data)


  return (
    <div className='posts'>
        {error
        ? <div className="empty">Something went wrong</div>
        : isLoading
          ? <div className="empty">Loading</div>
          :data.length === 0
          ? <div className="empty">You do not have any post yet</div>
          :  data.map(post => 
            <Post post={post} key={post.id} />
          )}  
    </div>
  )
}

