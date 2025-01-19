import { axiosInstance } from "../api/axios";

export const createOrder = async (userId, items) => {
  try {
    const response = await axiosInstance.post("user/order/createOrder", {
      userId,
      items,
    });
    console.log(response);

    if (response.status !== 201) {
      throw new Error("Error creating order");
    }

    return response.data; // Return the response data directly
  } catch (error) {
    console.error("Error in createOrder:", error);
    throw error;
  }
};

export const verifyPayment = async (orderId, paymentId, paymentSignature) => {
    console.log(orderId);
    console.log(paymentId);
    console.log(paymentSignature)
  try {
    const response = await axiosInstance.post("user/order/verify", {
    },
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
    console.error("Error in verifyPayment:", error);
    throw error;
  }
};
