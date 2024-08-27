import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

  const Orders = () => {
  const [orders, setOrders] = useState([]);
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchOrders();
   

  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading orders: {error.message}</p>;

  return (
    <>
    <h2 className="text-center">Your Order</h2>
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders col-md-6 col-lg-6">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        
        <div className="order-table">

       
        <table className=" " >
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Mode</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => {
              const totalPrice = order.price * order.qty;
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>${order.price.toFixed(2)}</td>
                  <td>${totalPrice.toFixed(2)}</td>
                  <td>{order.mode}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      
      )}
  
    </div>
    </>
  );
};

export default Orders;
