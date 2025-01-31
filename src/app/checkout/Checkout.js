// import React, { useState, useEffect } from 'react';
// import { createOrder, failedVerify, verifyPayment } from '../service/PaymentService';  
// import { checkOutOrder, getOrderById, verifyPaymentAndUpdateOrder } from '../service/OrderService';
// import { useRouter } from 'next/navigation';

// const OrderSummary = ({ 
//   title, 
 
//   userId,
//   orders,
 
//   totalBill 
// }) => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [orderData, setOrderData] = useState(orders?.orders?.order?.items || orders?.orders?.items);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//   });
//   const [formErrors, setFormErrors] = useState({});

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [userId]);

//   const validateField = (name, value) => {
//     let error = '';
//     if (!value.trim()) {
//       error = `${name.replace(/([A-Z])/g, ' $1')} is required.`;
//     } else {
//       switch (name) {
//         case 'zip':
//           if (!/^[0-9]{5,6}$/.test(value)) {
//             error = 'ZIP code must be 5-6 digits.';
//           }
//           break;
//         case 'fullName':
//           if (value.length < 3) {
//             error = 'Full Name must be at least 3 characters long.';
//           }
//           break;
//         default:
//           break;
//       }
//     }
//     setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//     return !error;
//   };

//   const validateForm = () => {
//     const fields = Object.keys(formData);
//     let isValid = true;
//     fields.forEach((field) => {
//       const valid = validateField(field, formData[field]);
//       if (!valid) isValid = false;
//     });
//     return isValid;
//   };
//   const handleSuccess=()=>{
//     router.push(`/orders/success`);

//   }
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     validateField(name, value);
//   };

//   const handlePayment = async () => {
//     if (!validateForm()) {
//       setError('Please fix the highlighted errors before proceeding.');
//       return;
//     }
  
//     setLoading(true);
//     setError(null);
  
//     try {
//       const { razorpayOrder, ...data } = await checkOutOrder(orders?.orders?.order?.id || orders?.orders.id);
//       const options = {
//         key: 'rzp_test_nTbKdtgjeOQLhc',
//         amount: Math.ceil(totalBill * 100),
//         currency: razorpayOrder?.currency,
//         name: 'Your Shop',
//         description: 'Payment for your order',
//         order_id: razorpayOrder?.id,
//         handler: async function (response) {
//           const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
  
//           try {
//             const verificationResult = await verifyPaymentAndUpdateOrder(
//               orders?.orders?.order?.id || orders?.orders.id,

//               razorpay_order_id,
//               razorpay_payment_id,
//               razorpay_signature
//             );
  
//             if (verificationResult.success) {
//               handleSuccess();
//             } else {
//               await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
//               setError('Payment verification failed. Please try again.');
//             }
//           } catch (error) {
//             setError('An unexpected error occurred during verification. Please try again.');
//           }
//         },
//         prefill: {
//           name: formData.fullName,
//           email: 'customer@example.com',
//           contact: '1234567890',
//         },
//         theme: {
//           color: '#F37254',
//         },
//         modal: {
//           ondismiss: async () => {
//             try {
//               // await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
//               setError('Payment was cancelled by the user. Please try again.');
//             } catch (error) {
//               setError('An error occurred while handling payment cancellation. Please contact support.');
//             }
//           },
//         },
//       };
  
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       setError('Payment process failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
  
//   return (
//     <div className="bg-gray-100">
//       {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}

//       <div className="p-6 shadow-md bg-white">
//         <h1 className="text-xl font-semibold">{title}</h1>
//         <div className="mt-4 grid lg:grid-cols-12 gap-4">

//           <div className="lg:col-span-7 bg-white p-4 shadow-sm rounded">
//             <h2 className="text-lg font-medium mb-4">Delivery Address</h2>
//             {Object.keys(formData)?.map((key) => (
//               <div key={key} className="mb-3">
//                 <label className="block text-sm font-medium capitalize" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
//                 <input
//                   type="text"
//                   id={key}
//                   name={key}
//                   className={`w-full rounded border p-2 text-sm ${formErrors[key] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
//                   placeholder={`Enter ${key}`}
//                   value={formData[key]}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors[key] && <p className="text-sm text-red-500 mt-1">{formErrors[key]}</p>}
//               </div>
//             ))}
//           </div>

//           <div className="lg:col-span-5 bg-white p-4 shadow-sm rounded">
//             <h2 className="text-lg font-medium mb-4">Order Summary</h2>
//             {orderData?.map((item, index) => (
//               <div key={index} className="flex items-center mb-4">
//                 <img
//                   className="w-20 h-20 object-cover rounded border"
//                   src={item.product?.image || '/_assets/image.png'}
//                   alt={item.product?.name}
//                 />
//                 <div className="ml-4">
//                   <h3 className="text-sm font-medium">{item.product?.name}</h3>
//                   <p className="text-sm text-gray-500">{item.product?.description}</p>
//                   <p className="text-sm font-bold">${item.product?.offerPrice}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="border-t pt-4">
//               <p className="font-medium text-lg">Total: ${totalBill}</p>
//             </div>
//           </div>

//         </div>

//         <div className="mt-6 text-center">
//           <button
//             className={`w-full p-3 rounded text-white ${loading ? 'bg-gray-500' : 'bg-gray-900'} hover:bg-gray-800`}
//             disabled={loading}
//             onClick={handlePayment}
//           >
//             {loading ? 'Processing...' : 'Proceed to Payment'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;
import React, { useState, useEffect } from 'react';
import { createOrder, failedVerify, verifyPayment } from '../service/PaymentService';  
import { checkOutOrder, verifyPaymentAndUpdateOrder } from '../service/OrderService';
import { fetchUserAddresses, addAddress } from '../service/UserService';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const OrderSummary = ({ title, userId, orders, totalBill }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const phoneNumber = useSelector(state => state?.session?.user?.phone);
  const [orderData, setOrderData] = useState(orders?.orders?.order?.items || orders?.orders?.items);
  const [phone, setPhone] = useState(phoneNumber || '');
  const [phoneError, setPhoneError] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const token = useSelector(state => state?.session?.token);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
    loadAddresses();
    return () => {
      document.body.removeChild(script);
    };
  }, [userId]);

  const loadAddresses = async () => {
    setLoading(true);
    const result = await fetchUserAddresses(token, userId);
    console.log(result)
    if (result.status === "success") {
      setAddresses(result.data);
      const primaryAddress = result.data.find((addr) => addr.isPrimary);
      if (primaryAddress) setSelectedAddress(primaryAddress);
    } else {
      console.error(result?.message || "Error retrieving address");
    }
    setLoading(false);
  };

  const validatePhone = () => {
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      return 'Valid phone number is required (10 digits).';
    }
    return '';
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value?.trim()) {
      error = `${name.replace(/([A-Z])/g, ' $1')} is required.`;
    } else {
      switch (name) {
        case 'zip':
          if (!/^[0-9]{5,6}$/.test(value)) {
            error = 'ZIP code must be 5-6 digits.';
          }
          break;
        default:
          break;
      }
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return !error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleAddAddress = async () => {
    const isValid = Object.keys(newAddress).every((field) =>
      validateField(field, newAddress[field])
    );

    if (!isValid) return;

    try {
      const result = await addAddress(token,userId, newAddress);
      if (result.status === "success") {
        loadAddresses();
        setShowForm(false);
        setNewAddress({
          street: '',
          city: '',
          state: '',
          country: '',
          zip: '',
        });
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = async () => {
    const phoneValidationError = validatePhone();
    if (phoneValidationError || !selectedAddress) {
      setError('Please provide a valid phone number and select an address.');
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
            setLoading(true);
            const verificationResult = await verifyPaymentAndUpdateOrder(
              orders?.orders?.order?.id || orders?.orders.id,
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature
            );
            setLoading(false);

            if (verificationResult.success) {
             
              router.push(`/orders/success`);
            } else {
              setError('Payment verification failed. Please try again.');
            }
          } catch (error) {
            setError('An unexpected error occurred during verification. Please try again.');
          }
        },
        prefill: {
          name: selectedAddress.fullName,
          email: 'customer@example.com',
          contact: phone,
        },
        theme: {
          color: '#F37254',
        },
        modal: {
          ondismiss: async () => {
            setError('Payment was cancelled by the user. Please try again.');
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

  useEffect(() => {
    const phoneValidationError = validatePhone();
    setPhoneError(phoneValidationError);
  }, [phone]);

  return (
    <div className="bg-gray-100">
  {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}

  <div className="p-6 shadow-md bg-white">
    <h1 className="text-xl font-semibold border-b pb-4">{title}</h1>

    {/* Phone Number Section */}
    <div className="mb-6 mt-4">
  <label className="block text-sm font-semibold text-gray-700 mb-1">
    Phone Number
  </label>
  <input
    type="text"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className={`w-full rounded-lg border p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      phoneError ? "border-red-500 ring-red-500" : "border-gray-300"
    }`}
    placeholder="Enter your 10-digit phone number"
  />
  {phoneError && (
    <p className="text-sm text-red-500 mt-2 italic">{phoneError}</p>
  )}
</div>


    {/* Address Section */}
    <div className="mb-4">
      <h2 className="text-lg font-medium text-gray-700">Select Delivery Address</h2>
      <div className="mt-2 border rounded p-4">
        {addresses.map((address) => (
          <div
          key={address.id}
          className={`flex items-center mb-4 p-4 rounded-lg border-2 ${
            selectedAddress?.id === address.id
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          } shadow-sm hover:shadow-md transition-shadow duration-200`}
        >
          <input
            type="radio"
            name="address"
            checked={selectedAddress?.id === address.id}
            onChange={() => setSelectedAddress(address)}
            className="mr-4 h-5 w-5 accent-blue-500 cursor-pointer"
          />
          <div className="flex flex-col">
            <p className="text-base text-blue-700 font-semibold">
              {address.street}
            </p>
            <p className="text-sm text-gray-600">
              {`${address.city}, ${address.state}, ${address.zip}`}
            </p>
          </div>
        </div>
        
        ))}
      </div>

      <button
        className="text-blue-600 underline mt-2"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : '+ Add New Address'}
      </button>

      {showForm && (
        <div className="mt-4 border rounded p-4 bg-gray-50">
          {Object.keys(newAddress).map((key) => (
            <div key={key} className="mb-3">
              <label className="block text-sm font-medium capitalize text-gray-600" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="text"
                id={key}
                name={key}
                value={newAddress[key]}
                onChange={handleInputChange}
                className={`w-full rounded border p-2 text-sm ${formErrors[key] ? 'border-red-500' : 'border-gray-300'}`}
                placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              />
              {formErrors[key] && <p className="text-sm text-red-500 mt-1">{formErrors[key]}</p>}
            </div>
          ))}
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded mt-2 hover:bg-gray-700"
            onClick={handleAddAddress}
          >
            Save Address
          </button>
        </div>
      )}
    </div>

    {/* Order Summary Section */}
    <div className={`mt-4 ${!selectedAddress || phoneError ? 'opacity-50 pointer-events-none' : ''}`}>
      <h2 className="text-lg font-medium text-gray-700 mb-4 border-b pb-2">Order Summary</h2>
      {orderData?.map((item, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            className="w-20 h-20 object-cover rounded border"
            src={item.product?.image || '/_assets/image.png'}
            alt={item.product?.name}
          />
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-800">{item.product?.name}</h3>
            <p className="text-sm text-gray-500">{item.product?.description}</p>
            <p className="text-sm font-bold text-gray-800">${item.product?.offerPrice}</p>
          </div>
        </div>
      ))}
      <div className="border-t pt-4">
        <p className="font-medium text-lg text-gray-800">Total: ${totalBill}</p>
      </div>
    </div>

    {/* Payment Button */}
    <div className="mt-6 text-center">
      <button
        className={`w-full p-3 rounded text-white ${loading ? 'bg-gray-500' : 'bg-gray-600 hover:bg-gray-700'}`}
        disabled={!selectedAddress || phoneError || loading}
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