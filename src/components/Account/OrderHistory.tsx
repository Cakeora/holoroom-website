import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { orders } from '../../api'; // Adjust the import based on your API structure

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  _id: string;
  orderItems: OrderItem[];
  totalPrice: number;
  createdAt: string;
}

const OrderHistory: React.FC = () => {
  const { user } = useAuth();
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orders.getMyOrders();
        setOrdersList(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {ordersList.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {ordersList.map((order) => (
            <li key={order._id} className="order-item">
              <h3>Order ID: {order._id}</h3>
              <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
              <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <div className="order-items">
                {order.orderItems.map((item) => (
                  <div key={item.id} className="order-item-details">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory; 