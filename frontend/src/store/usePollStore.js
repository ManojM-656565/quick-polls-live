import {create} from 'zustand';
import { axiosInstance } from '../../lib/axios';
import toast from 'react-hot-toast';
import { socket } from '../../lib/socket';

export const usePollForm=create((set,get)=>({

    polls:[],
    allPolls:[],
    resultData:null,

    create: async(data)=>{
        try{
            const res=await axiosInstance.post("/polls/create",data);
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
            set({resultData:res.data.result});
            console.log(res.data.result);
            toast.success(res.data.message)
        }
        catch(error){
            toast.error(error.response.data.message);
        }


    },
    clearResult:()=>{
        set({resultData:null})
    },
    // listenForUpdates:()=>{
    //     socket.on("voteUpdate",(updatedPoll)=>{
    //         console.log(updatedPoll);
    //         set((state)=>({
    //             polls:state.polls.map((p)=>p._id===updatedPoll._id?updatedPoll:p
    //             ),
    //         }))
    //     })

    // }
    
}))