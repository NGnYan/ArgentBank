const API_BASE_URL = "http://localhost:3001/api/v1";

/**
 * Login user and get JWT token
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{token: string}>}
 */
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

/**
 * Get user profile with JWT token
 * @param {string} token
 * @returns {Promise<Object>}
 */
export const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch profile");
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Get profile error:", error);
    throw error;
  }
};

/**
 * Update user profile
 * @param {string} token
 * @param {Object} profileData
 * @returns {Promise<Object>}
 */
export const updateUserProfile = async (token, profileData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to update profile");
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Update profile error:", error);
    throw error;
  }
};
