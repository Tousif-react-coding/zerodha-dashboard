import React, { useState,useContext } from "react";
import { watchlist } from "../data/data";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {KeyboardArrowDown,KeyboardArrowUp} from "@mui/icons-material"
import { Grow,Tooltip,Button } from "@mui/material";
import DonutChart from "./DonutChart";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <>
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return (
            
            <WatchListItem stock={stock} key={index}/>
            
          )
        })}
      </ul>
      <DonutChart data={watchlist}/>
    </div>
   
    </>
  );
};

export default WatchList;

const WatchListItem = ({stock})=>{
const [showWatchListAction , setShowWatchListAction] = useState(false)
  const mounseEnter = ()=>{
setShowWatchListAction(true);
  }
  const mouseLeave =()=>{
    setShowWatchListAction(false);
  }
  return(
    <li onMouseEnter={mounseEnter} onMouseLeave={mouseLeave} index={stock.name}>
<div className="item">
<p className={stock.isDown?"down":"up"}>{stock.name}</p>
<div className="info">
  <span >{stock.percent}</span>
  {stock.isDown?(
    <KeyboardArrowDown className = "down"/>
  ):( <KeyboardArrowUp className = "up"/>)}
 <span >{stock.price}</span>
</div>
    </div>

    {showWatchListAction && <WatchListAction uid={stock.name}/>}
  
    </li>
    
  )
}

const WatchListAction = ({uid})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
return(
  <span className="actions">
    <span>
    <Tooltip title="Buy (B)" arrow placement="top" TransitionComponent={Grow}   onClick={handleBuyClick}>
 <button className="buy">Buy</button>
 
</Tooltip>
    <Tooltip title="Sell (S)" arrow placement="top" TransitionComponent={Grow} >
 <button className="sell">Sell</button>
 
</Tooltip>
    <Tooltip title=" Analysys(A)" arrow placement="top" TransitionComponent={Grow} >
 <button className="action"><BarChartOutlinedIcon /></button>
 
</Tooltip>
    <Tooltip title="More..." arrow placement="top" TransitionComponent={Grow} >
 <button className="action">
 <MoreHorizOutlinedIcon />
 </button>
 
</Tooltip>
    </span>

  </span>
  
)
}