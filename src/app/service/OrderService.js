import {axiosInstance} from '../api/axios';

export const createOrder = async (userId, items) => {
  try {
    const response = await axiosInstance.post('/user/order/createOrder', { userId, items });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error(error?.response?.data?.message || 'Error creating order.');
  }
};

export const verifyPaymentAndUpdateOrder = async (orderId, paymentId, paymentSignature) => {
  try {
    const response = await axiosInstance.post('/user/order/verify', {}
    ,
    {
        params:{
            orderId,
            paymentId,
            paymentSignature,
        }
    }
    
);
    return response.data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw new Error(error?.response?.data?.message || 'Error verifying payment.');
  }
};

export const checkOutOrder = async (orderId) => {
    console.log("orderid:",orderId)
  try {
    const response = await axiosInstance.post(`/user/order/checkoutOrder?orderId=${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
  }
};

export const cancelOrder = async (orderId) => {
  try {
    const response = await axiosInstance.put(`/user/order/${orderId}/cancel`);
    return response.data;
  } catch (error) {
    console.error('Error cancelling order:', error);
    throw new Error(error?.response?.data?.message || 'Error cancelling order.');
  }
};
