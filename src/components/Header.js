import React,{useState} from 'react'
import { Button,Card } from 'react-bootstrap';
import headCss from './Header.module.css'

const Header = () => {
    const alerts = ()=>{
        alert("clicked")
    };
    const [count,setCount]=useState(0);
    function decrementCount(){
        setCount(count-1);
    }
    function incrementCount(){
        setCount(count+1);
    }
  return (
    <>
        <div className={headCss.header}>
            <h1>Component first</h1>

        </div>
        <input type="text" onChange={alerts} />
        <Button variant="primary" onClick={alerts}>Primary</Button>
        <br />
        <button onClick={incrementCount}>+</button>
        <span>{count}</span>
        <button onClick={decrementCount}>-</button>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Header