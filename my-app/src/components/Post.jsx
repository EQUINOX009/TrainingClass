import React, { useEffect } from 'react'

function Post() {
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data= await response.json();
      console.log(data);

    }
    fetchData();
  });
  return <h1>Post</h1>;
  
}
export default Post;
