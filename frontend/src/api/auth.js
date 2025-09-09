import { AUTH_ENDPOINTS } from '../constants/apiEndpoints.js';

export const signUp = async (userData) => {
    try {
        const response = await fetch(AUTH_ENDPOINTS.SIGNUP, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || "Server Error");
        }

        return await response.json();
    } catch (error) {
        console.error("SignUp failed:", error.message);
        throw error;
    }
};

export const logIn = async (credentials) => {
    try {
        const response = await fetch(AUTH_ENDPOINTS.LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || "Server Error");
        }

        return await response.json();
    } catch (error) {
        console.error("Login failed:", error.message);
        throw error;
    }
};

/**
 * Log out the current user
 * @returns {Promise<Object>} Logout confirmation
 */
export const logOut = async () => {
    try {
        const response = await fetch(AUTH_ENDPOINTS.LOGOUT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || "Server Error");
        }

        return await response.json();
    } catch (error) {
        console.error("Logout failed:", error.message);
        throw error;
    }
};
