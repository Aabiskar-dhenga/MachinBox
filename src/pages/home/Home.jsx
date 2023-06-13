import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Front from '../../components/Front/Front'
import {homeCategories} from "../../utils/data.js"

const Home = () => {
  return (
    <div className='home_container'>

<Navbar/>

{
  homeCategories.map((cat,index)=><Front key={cat.name} indexNo={index} data={cat}/>)
}
 

    </div>
  )
}

export default Home