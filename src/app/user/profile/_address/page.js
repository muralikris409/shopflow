"use client"
import { useState, useEffect } from 'react';
import { fetchUserAddresses, makeAddressPrimary, addAddress } from '../../../service/UserService'; // Adjust the path as needed

const AddressManagement = ({ userId, token }) => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    isPrimary: false,
  });
  const [showForm, setShowForm] = useState(false);

  const loadAddresses = async () => {
    setLoading(true);
    const result = await fetchUserAddresses(token, userId);
    console.log(result)
    if (!result.error) {
      setAddresses(result);
    } else {
      console.error(result.error);
    }
    setLoading(false);
  };

  const handleAddAddress = async () => {
    const result = await addAddress(token, userId, newAddress);
    if (!result.error) {
      loadAddresses();
      setShowForm(false);
      setNewAddress({ street: '', city: '', state: '', country: '', zip: '', isPrimary: false });
    } else {
      console.error(result.error);
    }
  };

  const handleMakePrimary = async (addressId) => {
    const result = await makeAddressPrimary(token, userId, addressId);
    if (!result.error) {
      loadAddresses();
    } else {
      console.error(result.error);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Address Management</h1>
      {loading ? (
        <p>Loading addresses...</p>
      ) : (
        <div>
          {addresses.map((address) => (
            <div
              key={address.id}
              className="p-6 mb-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center border-l-4 border-indigo-500"
            >
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  {address.street}, {address.city}
                </p>
                <p className="text-gray-500">{address.state}, {address.country} - {address.zip}</p>
                <p className={`text-sm font-medium ${address.isPrimary ? 'text-green-500' : 'text-gray-400'}`}>
                  {address.isPrimary ? "Primary Address" : ""}
                </p>
              </div>
              {!address.isPrimary && (
                <button
                  onClick={() => handleMakePrimary(address.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow transform hover:scale-105 transition duration-300"
                >
                  Make Primary
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow transform hover:scale-105 transition duration-300"
          >
            Add New Address
          </button>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Add New Address</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={newAddress.street}
                onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={newAddress.city}
                onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={newAddress.state}
                onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={newAddress.country}
                onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={newAddress.zip}
                onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="isPrimary"
                  checked={newAddress.isPrimary}
                  onChange={(e) => setNewAddress({ ...newAddress, isPrimary: e.target.checked })}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-gray-600">Set as Primary</span>
              </label>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleAddAddress}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow transform hover:scale-105 transition duration-300"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow transform hover:scale-105 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressManagement;
