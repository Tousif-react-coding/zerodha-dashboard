import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useUser } from "./UserContext";
const Menu = () => {
  const [selectMenu , setSelectMenu] = useState(0);

  const [open, setOpen] = useState(false);

  const  {user} = useUser();
  const menuClick=(index)=>{
setSelectMenu(index)
  }
  
  

  const openDialogue = () => {
    setOpen(true);
  };

  const closeDialogue = () => {
    setOpen(false);
  };

  const menuClass = "menu"
  const activeMenuClass = "menu selected"
  return (
    <div className="menu-container my-3 mt-4">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus ">
        <ul>
          <li>
            <Link style={{textDecoration:'none'}} to='/' onClick={()=>menuClick(0)}>
            <p className={selectMenu===0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to='/orders' onClick={()=>menuClick(1)}>
            <p className={selectMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to='/holdings' onClick={()=>menuClick(2)}>
            <p className={selectMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to='/positions' onClick={()=>menuClick(3)}>
            <p className={selectMenu===3?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to='/funds' onClick={()=>menuClick(4)}>
            <p className={selectMenu===4?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to='/login' onClick={()=>menuClick(5)}>
            <p className={selectMenu===5?activeMenuClass:menuClass}>Login</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to='/apps' onClick={()=>menuClick(6)}>
            <p className={selectMenu===6?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={openDialogue}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        
          <Dialog  open={open} onClose={closeDialogue} className="custom-dialog" >
        <DialogTitle>
         
          <p><strong>
          Profile
            </strong></p></DialogTitle>
        
        <DialogContent>
          {/* Add your dialog content here */}
          <p>Name - {user.name || 'Guest'}!</p>
          <p>Email: {user.email}</p>
         
        </DialogContent>
      </Dialog>
        
        
      </div>
    </div>
  );
};

export default Menu;