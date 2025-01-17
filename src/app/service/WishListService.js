import { axiosInstance as axios } from '../api/axios'; 

export async function loadWishlist(userId, token) {
  try {
    const response = await axios.get('/viewWishlist', {
      params: { userId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data.products || [];
  } catch (error) {
    console.error('Error loading wishlist:', error);
    return [];
  }
}

export async function addProductToWishlist(userId, product, token) {
  try {
    await axios.post('/addOrRemoveItem', null, {
      params: { userId, productId: product.id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error adding product to wishlist:', error);
  }
}

export async function removeProductFromWishlist(userId, productId, token) {
  try {
    await axios.post('/addOrRemoveItem', null, {
      params: { userId, productId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error removing product from wishlist:', error);
  }
}

export async function getWishlist(userId, token) {
  return await loadWishlist(userId, token);
}

export async function clearWishlist(userId, token) {
  try {
    const wishlist = await loadWishlist(userId, token);
    for (const product of wishlist) {
      await removeProductFromWishlist(userId, product.productId, token);
    }
  } catch (error) {
    console.error('Error clearing wishlist:', error);
  }
}
