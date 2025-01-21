import { axiosInstance as axios, axiosInstance } from "../api/axios";

export async function login(formdata) {
    const { email, password } = formdata;
  
    try {
        const response = await axios.post("user/login", {
            email: email,
            password: password
        });

        const { token, data } = response.data;

        localStorage.setItem("shopflow_session", JSON.stringify({ user: data, token }));
        return { data, token };
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "An error occurred during login.");
        } else if (error.request) {
            throw new Error("Network error: No response received.");
        } else {
            throw new Error(error.message || "An unknown error occurred during login.");
        }
    }
}

export async function signUp(formdata) {
    const { username: name, email, password } = formdata;

    try {
        const response = await axios.post("user/signup", {
            name,
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "An error occurred during sign-up.");
        } else if (error.request) {
            throw new Error("Network error: No response received.");
        } else {
            throw new Error(error.message || "An unknown error occurred during sign-up.");
        }
    }
}

export async function googleOAuth(data) {
    try {
        const response = await axios.post("user/oauth", {
            name: data.name,
            email: data.email,
            image: data.image,
            id: data.id
        });

        const { token, data: user } = response.data;

        localStorage.setItem("shopflow_session", JSON.stringify({ user: user, token }));
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "An error occurred during Google OAuth.");
        } else if (error.request) {
            throw new Error("Network error: No response received.");
        } else {
            throw new Error(error.message || "An unknown error occurred during Google OAuth.");
        }
    }
}

export async function forgotPassword(email) {
  try {
    const response = await axiosInstance.post(`user/forgotPassword?email=${email}`);
    console.log(response)
    if (response.status === 200) {
      return {
        ok: true,
        data: response.data,
      };
    }
    return {
      ok: false,
      message: response.data?.message || "Something went wrong.",
    };
  } catch (err) {
    console.log(err)
    throw err;
  }
}
export async function resetPassword(token,password){
    try{
    const response=await axiosInstance.post(`user/resetPassword?token=${token}&newPassword=${password}`);
        return response;
    console.log(response);
   
}
catch(err){
    console.log(err);
}
}
export async function getProfileInfo(token,userId){
    try{
        console.log("test")
    const response=await axiosInstance.post(`user/userProfileInfo?userId=${userId}`,{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log(response);
        return response;
   
}
catch(err){
    console.log(err);
}
}
export async function updateProfileInfo(token,userId,data){
    try{
        console.log("test")
    const response=await axiosInstance.post(`user/updateUserProfile?userId=${userId}`,
        data
        

    ,{
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',

        }
    });
    console.log(response);
        return response;
    
   
}
catch(err){
    console.log(err);
    
}
}


export const fetchUserAddresses = async (token,userId) => {
  try {
    const response = await axiosInstance.post(`user/getAllAddress`,{}, {
      params: { userId },
      headers:{
        Authorization:`Bearer ${token}`
    }
    });
    console.log(response)
    return response.data.data; 
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return { error: error.message || "Something went wrong!" };
  }
};
export const makeAddressPrimary = async (token,userId,addressId) => {
    try {
      const response = await axiosInstance.post(`user/makePrimaryAddress`,{}, {
        params: { userId,addressId },
        headers:{
          Authorization:`Bearer ${token}`
      }
      });
      console.log(response)
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return { error: error.message || "Something went wrong!" };
    }
  };

export const addAddress = async (token, userId, addressData) => {
  try {
    const { street, city, state, country, zip, isPrimary } = addressData;

    const response = await axiosInstance.post(
      'user/addAddress',
      {},
      {
        params: {
          userId,
          street,
          city,
          state,
          country,
          zip,
          isPrimary,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data; 
  } catch (error) {
    console.error("Error adding address:", error);
    return { error: error.response?.data?.message || "Something went wrong!" };
  }
};
