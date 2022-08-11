import {useState,useEffect} from 'react';
import SignUpOrLogin from './com/signupOrLogin';
import {getAllUsers} from './utils/index';
import { Routes, Route, Link } from "react-router-dom"
import {logIn} from "./logIn"
import {signUp} from "./signUp"

import './App.css';


function loggedIn() {
  const [user, setUser] = useState();
  const [myPics, setMyPics] = useState([]);
  const [displayImages, setDisplay] = useState(false);
  const [displayUsers, setUserDisp] = useState(false);

  const [userList, setUserList] = useState([]);

  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data)   //--- myPics = data
    console.log(data)
  }

  useEffect(()=> {
    getAllUsers(setUserList);

    fetchPics();
    console.log(myPics)
  },[])

  return (
    <div>
    
      <SignUpOrLogin setter = {setUser}/>
      <br></br>
      {user ? <h1>{user} logged in</h1> : <h1>not logged in</h1>}
      <br></br>
      {user?<div><button onClick={(event) => setDisplay(!displayImages)}>Toggle Images</button>
          {/* <button onClick={(event) => setUserDisp(!displayUsers)}>Toggle Users</button> */}
        </div>:<h2>Log in to see buttons</h2>} 
        {/* <button onClick={(event) => setDisplay(false)}>Click Me Off</button> */}
{/* 
        { {displayImages && 
        myPics.map((item,index) => {return (<div><h2>{item.author}</h2><img src={item.download_url} alt="Lorem Picsum" /></div>)})} */}

        {displayUsers &&
        userList.map((item,index) => {
          return (
            <div>
            <h2>{item}</h2>
            </div>
          )
        })}

    </div> 
  )
 
    }
  

export default loggedIn;



//   for (let i = 0; i < myArray.length; i++)
//   {
//     console.log(myArray[i].name);
//   }

//   myArray.map((item, index) => {
//     console.log(item.name, index)
//   })
