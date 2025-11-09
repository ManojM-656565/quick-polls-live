import {create} from 'zustand'
import { axiosInstance } from '../../lib/axios'
import toast from 'react-hot-toast';



export const useAuthStore=create((set,get)=>({
    user:null,

    login:async (data) =>{
        try{
            const res=await axiosInstance.post("/auth/login",data);
            set({user:res.data.user});
            toast.success(res.data.message);
        }
        catch(error){
            toast.error(error.response?.data?.message);
        }
    },

    register:async (data) =>{
        try{
            const res=await axiosInstance.post("/auth/register",data,{withCredentials:true});
            set({user:res.data.user});
            toast.success(res.data.message)
        }
        catch(error){
            toast.error(error.response?.data?.message);
            console.log(error);
        }
    },

    logout: async () => {
    try {
      await axiosInstance.post("/auth/logout", {}, { withCredentials: true });
      set({ user: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  },
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check", { withCredentials: true });
      set({ user: res.data });
    } catch (error) {
      console.log("Auth check failed", error);
      set({ user: null });
    } 
  },

}))