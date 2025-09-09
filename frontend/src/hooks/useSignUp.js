import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/auth.js";
import { MUTATION_KEYS } from "../constants/apiEndpoints.js";

/**
 * Hook for user signup functionality
 * @returns {Object} Mutation object with signup functionality
 */
export const useSignUp = () => {
    const navigate = useNavigate();
    
    return useMutation({
        mutationKey: [MUTATION_KEYS.SIGNUP],
        mutationFn: signUp,
        onSuccess: () => {
            console.log('Account created successfully! Please login.');
            navigate('/login');
        },
        onError: (error) => {
            const errorMessage = error.message || 'Failed to create account. Please try again.';
            console.error('Signup error:', errorMessage);
        }
    });
};