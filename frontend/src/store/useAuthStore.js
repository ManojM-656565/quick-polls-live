import {create} from 'zustand'
import { axiosInstance } from '../../lib/axios'



export const useAuthStore=create((set,get)=>({
    user:null,

    login:async (data) =>{
        const res=await axiosInstance.post("/auth/login",data);
        set({user:res.data.user});
    }
}))