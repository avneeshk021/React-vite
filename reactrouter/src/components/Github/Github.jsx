import React, { useEffect, useState } from 'react'

function Github() {
    const [data ,setData]=useState([])
    useEffect(() =>{
fetch('https://api.github.com/users/avneeshk021').then(response => response.json())
.then(data=>{
    console.log(data);
    setData(data)
})
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers :{data.follwers}
    <img className='text-center' src={data.avatar_url} width={300} alt="Git Picture" />
      
    </div>
  )
}

export default Github
