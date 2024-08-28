import React ,{ useEffect, useState,  } from 'react';
import axios from 'axios'
import Cookies from "universal-cookie";
import Home from './Home';
const cookies = new Cookies();
const token = cookies.get("TOKEN");
function AuthComponent() {
    
const [message, setMessage] = useState("");
const [errMsg, setErrMsg] = useState("");
const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        // set configurations for the API call here
        const configuration = {
          method: "get",
          url: "https://zerodha-backend-t5mh.onrender.com/dashboard",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
        // make the API call
        axios(configuration)
          .then((result) => {
            // assign the message in our result to the message we initialized above
            setMessage(result.data.message);
            setIsAuth(true)
          })
          .catch((error) => {
           
            setErrMsg(error.message);
            setErrMsg("You are not Authorized to this page, Please go back to login first!");
            setIsAuth(false)

          });
      }, []);
  return (
   
       <>
     

      {
        isAuth ? <Home/> :  <h3 className="text-center  text-danger" style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100vh'}}>{errMsg}</h3>
      }

</>
  );
}

export default AuthComponent;
