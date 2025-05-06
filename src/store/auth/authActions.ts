import { AppDispatch } from '../store';
import { loginSuccess, logout } from './authSlice';
import axiosInstance from '@/utils/axiosInstance';
import { API_BASE_URL } from '@/utils/constants';

export const login = (credentials: { email: string; password: string }) => async (dispatch: AppDispatch) => {
  try {
    console.log("Trying login request", credentials);
    const response = await axiosInstance.post('/login', credentials);
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    dispatch(loginSuccess({ token, user }));
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const register = (data: { name: string; email: string; password: string }) => async (dispatch: AppDispatch) => {
  try {
    const response = await axiosInstance.post('/register', data);
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    dispatch(loginSuccess({ token, user }));
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

export const logoutUser = () => (dispatch: AppDispatch) => {
  localStorage.removeItem('token');
  dispatch(logout());
};
