import {create} from 'zustand';
import { axiosInstance } from '../../lib/axios';
import toast from 'react-hot-toast';

export const usePollForm=create((set,get)=>({

    polls:[],
    allPolls:[],
    create: async(data)=>{
        try{
            const res=await axiosInstance.post("/polls/create",data);
            toast.success(res.data.message)
        }
        catch(error){
              toast.error(error.response?.data?.message);
        }
    },

    getPolls:async()=>{
        try{
            const res=await axiosInstance.get("/polls/getPolls");
   console.log(res);

            set({polls:res.data.polls});
            toast.success(res.data.message||"The Data Fetched Successfully");
        }
        catch(error){
            toast.error(error.response?.data?.message)
        }
    },
    getAll:async()=>{
        try{
            const res=await axiosInstance.get("/polls/getAll");
            set({allPolls:res.data.polls});
            toast.success(res.data.message||"The Data Fetched successfully")
        }
        catch(error){
            toast.error(error.response?.data?.message)
        }
    },
    genResult:async(id)=>{
        try{

            const res=await axiosInstance.post(`/polls/generateResult/${id}`);
            toast.success(res.data.message)
        }
        catch(error){
            toast.error(error.response.data.message);
        }


    }
    
}))