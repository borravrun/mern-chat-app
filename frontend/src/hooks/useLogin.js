import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logIn } from "../api/auth.js";
import { MUTATION_KEYS } from "../constants/apiEndpoints.js";
import {toast} from "material-react-toastify";

const useLogin = () => {
    const navigate = useNavigate();
    
    return useMutation({
        mutationKey: [MUTATION_KEYS.LOGIN],
        mutationFn: logIn,
        onSuccess: (data) => {
            toast.success("Welcome back!")
            navigate('/');
        },
        onError: (error) => {
            const errorMessage = error.message.message || 'Failed to login. Please check your credentials.';
            toast.error(errorMessage)
        }
    });
};

export default useLogin;