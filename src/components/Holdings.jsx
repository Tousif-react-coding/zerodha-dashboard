import React, { useEffect, useState } from "react";
//import { holdings } from "../data/data";
import axios from 'axios';
import BarChart from "./BarChart";
const Holdings = () => {
const [allHoldings , setAllHoldings] = useState([])
useEffect(()=>{
const getData = async()=>{
  const response =  await axios.get('http://localhost:3000/allHoldings')
  const result = response.data
  
  setAllHoldings(result)
}
getData()
  
},[])


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
        <thead>
           <tr>

           
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>Cur.Val</th>
            <th>P&L</th>
            <th>Chg.</th>
            <th>day Chg.</th>
            </tr>
          </thead>

          {allHoldings.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss"
            const dayClass = stock.isLoss ? "loss" : "profit"
            return (
              <tbody key={index}>
                <tr>
                
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue}</td>
                <td className={profitClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profitClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
                  
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <BarChart data = {allHoldings}/>
    </>
  );
};

export default Holdings;