import { useState } from 'react'
import './App.css'
import backgroundImage from "./assets/4614.png";
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { FaTh } from 'react-icons/fa';

const Container = styled.div `
background-image: url(${backgroundImage});
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

  div{
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    

    p{
      font-family: 'Roboto', sans-serif;
      color: #666666;
    }

    h2{

      text-align: center;
      color: #666666;
      font-family: 'Roboto', sans-serif;
      font-size: 3rem;
    
    }
  }
`

const Bottombar = styled.div `
display: flex;
justify-content: space-around;
// flex-direction: row;
align-items: center;
width: 90%;
background-color: gray;
position: fixed;
bottom: 10%;
padding: 10px; 
background-color: #333;
color: white;
border-radius: 15px;
left: 50%;
transform: translateX(-50%);



.icon{
  // margin: 10px 0;
  font-size: 1rem;
}

`


function App() {

  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount(count + 1);
  };

  return (
    <>
    <Container onClick={handleClick}>
      <div>
        <p>Your Balance :</p>
        <h2>{count}</h2>
      </div>
    </Container>
      <Bottombar>
        <FaHome className='icon'/> 
        <FaTh className='icon' />
      </Bottombar>
    </>
  )
}

export default App;
