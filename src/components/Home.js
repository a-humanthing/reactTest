import React from 'react'
import Child from './Child'
import homeCss from './Home.module.css'
const Home = () => {
  return (
    <div className={homeCss.header}>
        <h1>
            Home Component
        </h1>
        <Child />
    </div>
  )
}

export default Home