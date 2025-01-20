import React, { useState, useEffect } from 'react';
import { createOrder, failedVerify, verifyPayment } from '../service/PaymentService';  
import { checkOutOrder, getOrderById, verifyPaymentAndUpdateOrder } from '../service/OrderService';
import { useRouter } from 'next/navigation';
// const OrderSummary = ({ 
//   title, 
//   steps, 
//   userId,
//   orders,
//   shippingMethods, 
//   billingAddress,
//   totalBill 
// }) => {
//     console.log(orders?.orders.id);
//    const router=useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [orderData, setOrderData] = useState(orders?.orders?.order?.items || orders.orders.items);
//   console.log("orderData:", orders);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => {
//       // Now you can use Razorpay when the script is fully loaded
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script); // Cleanup script when component unmounts
//     };
//   }, [userId]);

//   const handleVerify = async (orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
//     console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)
//     try {
//       const response = await verifyPaymentAndUpdateOrder(orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature);
//       return response;
//       // Handle successful verification (e.g., redirect to confirmation page)
//     } catch (err) {
//       setError('Payment verification failed. Please try again.');
//       console.error(err);
//     }
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     setError(null); // Reset error state before starting payment
//     try {
//       const { razorpayOrder, ...data } = await checkOutOrder(orders?.orders?.order?.id||orders?.orders.id);
//       console.log(razorpayOrder);
//       const options = {
//         key: 'rzp_test_nTbKdtgjeOQLhc', // Replace with your Razorpay Key
//         amount: Math.ceil(totalBill * 100), // Amount in paise (multiply by 100)
//         currency: razorpayOrder?.currency,
//         name: 'Your Shop',
//         description: 'Payment for your order',
//         order_id: razorpayOrder?.id,
//         handler: async function (response) {
//           console.log(response);
//           const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;

//           // Step 3: Verify the payment
//           const verificationResult = await verifyPayment(orders?.orders?.order?.id||orders?.orders.id,razorpay_order_id, razorpay_payment_id, razorpay_signature);
    
//           if (verificationResult.success) {
//             const res=await handleVerify(orders?.orders?.order?.id||orders?.orders.id,razorpay_order_id, razorpay_payment_id, razorpay_signature);
//             router.push(`/orders/success?dtrcpt=${encodeURIComponent(JSON.stringify(res?.order))}`);
//           } else {
//             setError('Payment verification failed. Please try again.');
//           }
//         },
//         prefill: {
//           name: 'Customer Name',
//           email: 'customer@example.com',
//           contact: '1234567890',
//         },
//         theme: {
//           color: '#F37254',
//         },
//       };

//       // Step 4: Instantiate Razorpay after script load
//       const rzp = new window.Razorpay(options); // Use `window.Razorpay` since it's globally available after script load
//       rzp.open();
      
//     } catch (err) {
//       setError('Payment process failed. Please try again.');
//       console.error('Payment process failed:', err);
//     } finally {
//       setLoading(false); // Ensure loading state is reset
//     }
//   };

//   return (
//     <div>
//       {/* Error Message */}
//       {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}

//       {/* Order summary and steps layout */}
//       <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
//         <a href="#" className="text-2xl font-bold text-gray-800">{title}</a>
//         <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
//           <div className="relative">
//             <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
//               {steps.map((step, index) => (
//                 <li key={index} className="flex items-center space-x-3 text-left sm:space-x-4">
//                   <a className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step.active ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-600 text-white'}`} href={step.href}>
//                     {step.icon ? (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
//                       </svg>
//                     ) : step.number}
//                   </a>
//                   <span className={`font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
      
//       {/* Order items and total */}
//       <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 m-10">
//         <div className="px-4 pt-8">
//           <p className="text-xl font-medium">Order Summary</p>
//           <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
//           {/* Order items display */}
//           <div className="mt-8 space-y-2 max-h-96 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6">
//             {orderData?.map((orderItem, index) => (
//               <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
//                 <img
//                   className="m-2 h-24 w-28 rounded-md border object-cover object-center"
//                   src={orderItem.product?.image || "/_assets/image.png"}
//                   alt={orderItem.product?.name || "Product Image"}
//                 />
//                 <div className="flex w-full flex-col px-4 py-4">
//                   <span className="font-semibold">{orderItem?.product.name || "Product Name"}</span>
//                   <span className="float-right text-gray-400">
//                     {orderItem.product?.description || "No description available."}
//                   </span>
//                   <span className="float-right text-gray-400">
//                     {"Quantity: " + (orderItem.quantity || 1)}
//                   </span>
//                   <p className="text-lg font-bold">
//                     {"$" + (orderItem.product?.offerPrice || "0.00")}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <p className="text-lg p-2">{"Total Bill: $" + totalBill}</p>

//           {/* Shipping Methods */}
//           <p className="mt-8 text-lg font-medium">Shipping Methods</p>
//           <form className="mt-5 grid gap-6">
//             {shippingMethods.map((method, index) => (
//               <div key={index} className="relative">
//                 <input className="peer hidden" id={`radio_${index}`} type="radio" name="radio" defaultChecked={method.defaultChecked} />
//                 <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
//                 <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor={`radio_${index}`}>
//                   <img className="w-14 object-contain" src={method.image} alt={method.name} />
//                   <div className="ml-5">
//                     <span className="mt-2 font-semibold">{method.name}</span>
//                     <p className="text-slate-500 text-sm leading-6">{method.description}</p>
//                   </div>
//                 </label>
//               </div>
//             ))}
//           </form>
//         </div>

//         {/* Billing Address */}
//         <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
//           <p className="text-xl font-medium">Address Details</p>
//           <p className="text-gray-400">Complete your order by providing your delivery address.</p>
//           {/* Billing Address Form */}
//           <div>
//             <label htmlFor="full-name" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
//             <input type="text" id="full-name" name="full-name" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" />
//             <label htmlFor="street-address" className="mt-4 mb-2 block text-sm font-medium">Street Address</label>
//             <input type="text" id="street-address" name="street-address" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="123 Main St" />
//             <div className="flex mt-4">
//               <div className="w-1/2 pr-2">
//                 <label htmlFor="city" className="mb-2 block text-sm font-medium">City</label>
//                 <input type="text" id="city" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City" />
//               </div>
//               <div className="w-1/2 pl-2">
//                 <label htmlFor="state" className="mb-2 block text-sm font-medium">State</label>
//                 <select name="state" id="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
//                   <option value="State">Select State</option>
//                   {billingAddress.states.map((state, index) => (
//                     <option key={index} value={state}>{state}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="flex mt-4">
//               <div className="w-1/2 pr-2">
//                 <label htmlFor="zip" className="mb-2 block text-sm font-medium">ZIP Code</label>
//                 <input type="text" id="zip" name="zip" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP Code" />
//               </div>
//               <div className="w-1/2 pl-2">
//                 <label htmlFor="country" className="mb-2 block text-sm font-medium">Country</label>
//                 <select name="country" id="country" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
//                   <option value="Country">Select Country</option>
//                   {billingAddress.countries.map((country, index) => (
//                     <option key={index} value={country}>{country}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Payment Button */}
//       <div className="py-5 sm:px-6">
//         <button onClick={handlePayment} className="w-full rounded-md bg-green-500 text-white py-3 text-xl hover:bg-green-700">
//           {loading ? 'Processing Payment...' : 'Pay Now'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;


const OrderSummary = ({ 
  title, 
  steps, 
  userId,
  orders,
  shippingMethods, 
  billingAddress,
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
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {};
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [userId]);

  const validateForm = () => {
    const { fullName, streetAddress, city, state, zip, country } = formData;
    const isValid = fullName && streetAddress && city && state && zip && country;
    setIsFormValid(isValid);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleVerify = async (orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
    console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)
    try {
      const response = await verifyPaymentAndUpdateOrder(orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature);
      return response;
    } catch (err) {
      setError('Payment verification failed. Please try again.');
      console.error(err);
    }
  };
  const handlePayment = async () => {
    if (!isFormValid) {
      setError('Please fill all the required fields.');
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
        //   const verificationResult = await verifyPayment(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
        const verificationResult = await handleVerify(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);

          if (verificationResult.success) {
            router.push(`/orders/success?dtrcpt=${encodeURIComponent(JSON.stringify(verificationResult?.order))}`);
          } else {
            console.log("failed");
            await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
            setError('Payment verification failed. Please try again.');
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
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (err) {
      setError('Payment process failed. Please try again.');
      console.error('Payment process failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}
      {/* Order summary and steps layout */}
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">{title}</a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step.active ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-600 text-white'}`} href={step.href}>
                    {step.icon ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
                      </svg>
                    ) : step.number}
                  </a>
                  <span className={`font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Order items and total */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 m-10">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
          <div className="mt-8 space-y-2 max-h-96 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6">
            {orderData?.map((orderItem, index) => (
              <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={orderItem.product?.image || "/_assets/image.png"} alt={orderItem.product?.name || "Product Image"} />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{orderItem?.product.name || "Product Name"}</span>
                  <span className="float-right text-gray-400">{orderItem.product?.description || "No description available."}</span>
                  <span className="float-right text-gray-400">{"Quantity: " + (orderItem.quantity || 1)}</span>
                  <p className="text-lg font-bold">{"$" + (orderItem.product?.offerPrice || "0.00")}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-lg p-2">{"Total Bill: $" + totalBill}</p>

          {/* Shipping Methods */}
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            {shippingMethods.map((method, index) => (
              <div key={index} className="relative">
                <input className="peer hidden" id={`radio_${index}`} type="radio" name="radio" defaultChecked={method.defaultChecked} />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor={`radio_${index}`}>
                  <img className="w-14 object-contain" src={method.image} alt={method.name} />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">{method.name}</span>
                    <p className="text-slate-500 text-sm leading-6">{method.description}</p>
                  </div>
                </label>
              </div>
            ))}
          </form>
        </div>

        {/* Billing Address */}
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Address Details</p>
          <p className="text-gray-400">Complete your order by providing your delivery address.</p>
          <div>
            <label htmlFor="full-name" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
            <input type="text" id="full-name" name="fullName" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} onBlur={validateForm} />
            <label htmlFor="street-address" className="mt-4 mb-2 block text-sm font-medium">Street Address</label>
            <input type="text" id="street-address" name="streetAddress" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="123 Main St" value={formData.streetAddress} onChange={handleInputChange} onBlur={validateForm} />
            <label htmlFor="city" className="mt-4 mb-2 block text-sm font-medium">City</label>
            <input type="text" id="city" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Los Angeles" value={formData.city} onChange={handleInputChange} onBlur={validateForm} />
            <label htmlFor="state" className="mt-4 mb-2 block text-sm font-medium">State/Province</label>
            <input type="text" id="state" name="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="California" value={formData.state} onChange={handleInputChange} onBlur={validateForm} />
            <label htmlFor="zip" className="mt-4 mb-2 block text-sm font-medium">ZIP/Postal Code</label>
            <input type="text" id="zip" name="zip" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="90001" value={formData.zip} onChange={handleInputChange} onBlur={validateForm} />
            <label htmlFor="country" className="mt-4 mb-2 block text-sm font-medium">Country</label>
            <input type="text" id="country" name="country" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="United States" value={formData.country} onChange={handleInputChange} onBlur={validateForm} />
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="mt-10 text-center">
        <button className={`w-3/4 rounded-lg ${loading ? 'bg-gray-500' : 'bg-gray-900'} p-4 text-sm font-medium text-white`} disabled={loading} onClick={handlePayment}>
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
