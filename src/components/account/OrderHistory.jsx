import React from 'react';
import { useAuth } from '../../context/AuthContext';

const OrderHistory = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <h2>Order History</h2>
      {currentUser.orders && currentUser.orders.length > 0 ? (
        currentUser.orders.map(order => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <div>
                <span className="order-label">ORDER #</span>
                <span>{order.id}</span>
              </div>
              <div>
                <span className="order-label">DATE PLACED</span>
                <span>{order.date}</span>
              </div>
              <div>
                <span className="order-label">TOTAL</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
            <div className="order-body">
              <span className={`order-status status-${order.status.toLowerCase()}`}>{order.status}</span>
              <p><strong>Items:</strong> {order.items.join(', ')}</p>
            </div>
          </div>
        ))
      ) : (
        <p>You have no past orders.</p>
      )}
    </div>
  );
};
export default OrderHistory;