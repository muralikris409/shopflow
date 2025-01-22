import React, { useState, useEffect } from 'react';
import { createOrder, failedVerify, verifyPayment } from '../service/PaymentService';  
import { checkOutOrder, getOrderById, verifyPaymentAndUpdateOrder } from '../service/OrderService';
import { useRouter } from 'next/navigation';

const OrderSummary = ({ 
  title, 
 
  userId,
  orders,
 
  totalBill 
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderData, setOrderData] = useState(orders?.orders?.order?.items || orders?.orders?.items);
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [userId]);

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.replace(/([A-Z])/g, ' $1')} is required.`;
    } else {
      switch (name) {
        case 'zip':
          if (!/^[0-9]{5,6}$/.test(value)) {
            error = 'ZIP code must be 5-6 digits.';
          }
          break;
        case 'fullName':
          if (value.length < 3) {
            error = 'Full Name must be at least 3 characters long.';
          }
          break;
        default:
          break;
      }
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return !error;
  };

  const validateForm = () => {
    const fields = Object.keys(formData);
    let isValid = true;
    fields.forEach((field) => {
      const valid = validateField(field, formData[field]);
      if (!valid) isValid = false;
    });
    return isValid;
  };
  const handleSuccess=()=>{
    router.push(`/orders/success`);

  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handlePayment = async () => {
    if (!validateForm()) {
      setError('Please fix the highlighted errors before proceeding.');
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const { razorpayOrder, ...data } = await checkOutOrder(orders?.orders?.order?.id || orders?.orders.id);
      const options = {
        key: 'rzp_test_nTbKdtgjeOQLhc',
        amount: Math.ceil(totalBill * 100),
        currency: razorpayOrder?.currency,
        name: 'Your Shop',
        description: 'Payment for your order',
        order_id: razorpayOrder?.id,
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
  
          try {
            const verificationResult = await verifyPaymentAndUpdateOrder(
              orders?.orders?.order?.id || orders?.orders.id,
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature
            );
  
            if (verificationResult.success) {
              handleSuccess();
            } else {
              await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
              setError('Payment verification failed. Please try again.');
            }
          } catch (error) {
            setError('An unexpected error occurred during verification. Please try again.');
          }
        },
        prefill: {
          name: formData.fullName,
          email: 'customer@example.com',
          contact: '1234567890',
        },
        theme: {
          color: '#F37254',
        },
        modal: {
          ondismiss: async () => {
            try {
              // await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
              setError('Payment was cancelled by the user. Please try again.');
            } catch (error) {
              setError('An error occurred while handling payment cancellation. Please contact support.');
            }
          },
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError('Payment process failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="bg-gray-100">
      {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}

      <div className="p-6 shadow-md bg-white">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="mt-4 grid lg:grid-cols-12 gap-4">

          <div className="lg:col-span-7 bg-white p-4 shadow-sm rounded">
            <h2 className="text-lg font-medium mb-4">Delivery Address</h2>
            {Object.keys(formData)?.map((key) => (
              <div key={key} className="mb-3">
                <label className="block text-sm font-medium capitalize" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  className={`w-full rounded border p-2 text-sm ${formErrors[key] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
                  placeholder={`Enter ${key}`}
                  value={formData[key]}
                  onChange={handleInputChange}
                />
                {formErrors[key] && <p className="text-sm text-red-500 mt-1">{formErrors[key]}</p>}
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 bg-white p-4 shadow-sm rounded">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            {orderData?.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  className="w-20 h-20 object-cover rounded border"
                  src={item.product?.image || '/_assets/image.png'}
                  alt={item.product?.name}
                />
                <div className="ml-4">
                  <h3 className="text-sm font-medium">{item.product?.name}</h3>
                  <p className="text-sm text-gray-500">{item.product?.description}</p>
                  <p className="text-sm font-bold">${item.product?.offerPrice}</p>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <p className="font-medium text-lg">Total: ${totalBill}</p>
            </div>
          </div>

        </div>

        <div className="mt-6 text-center">
          <button
            className={`w-full p-3 rounded text-white ${loading ? 'bg-gray-500' : 'bg-gray-900'} hover:bg-gray-800`}
            disabled={loading}
            onClick={handlePayment}
          >
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
