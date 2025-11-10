import {create} from 'zustand'
import { axiosInstance } from '../../lib/axios'

export const useDashboardStore=create((set)=>({
    stats:null,
    polls:[],

    fetchDashboardData:async()=>{
        try{
            const polls=await axiosInstance.get("/polls/getPolls");
            console.log(polls)
            const userPolls=polls.data.polls;
            const totalVotes=userPolls.reduce((sum,o)=>sum+o.totalVotes,0);
            const val=userPolls.length
            set({
                stats:{
                    totalPolls:val,
                    totalVotes,
                    engagementRatio:totalVotes/userPolls.length,

                },
                polls:userPolls,
            })

        }
        catch(error){
            console.error(error);
        }
    }
    
}))