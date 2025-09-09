// API Base URL
export const API_BASE_URL = '/api';

// Auth endpoints
export const AUTH_ENDPOINTS = {
    SIGNUP: `${API_BASE_URL}/auth/signup`,
    LOGIN: `${API_BASE_URL}/auth/login`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
};

// Message endpoints
export const MESSAGE_ENDPOINTS = {
    SEND: `${API_BASE_URL}/messages/send`,
    GET_MESSAGES: `${API_BASE_URL}/messages`,
};

// User endpoints
export const USER_ENDPOINTS = {
    GET_USERS: `${API_BASE_URL}/users`,
    GET_PROFILE: `${API_BASE_URL}/users/profile`,
};

// Query Keys
export const QUERY_KEYS = {
    // Auth
    USER: 'user',
    AUTH: 'auth',
    
    // Messages
    MESSAGES: 'messages',
    CONVERSATIONS: 'conversations',
    
    // Users
    USERS: 'users',
};

// Mutation Keys
export const MUTATION_KEYS = {
    // Auth
    SIGNUP: 'signup',
    LOGIN: 'login',
    LOGOUT: 'logout',
    
    // Messages
    SEND_MESSAGE: 'sendMessage',
    
    // Users
    UPDATE_PROFILE: 'updateProfile',
};
