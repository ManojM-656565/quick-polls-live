import { useEffect } from "react";
import PollCard from "../components/managePoll/PollCard"
import PollForm from "../components/managePoll/PollForm"
import { usePollForm } from "../store/usePollStore"

const ManagePoll = () => {
   const {getPolls,polls}=usePollForm();
   const fetchPolls=()=>{
    getPolls();
   }
   useEffect(()=>{
    fetchPolls();
   },[])
  return (
    <div className="min-h-screen p-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-1 shadow-md rounded-md">
        <PollForm
            fetchPolls={fetchPolls}
        />
    </div>
    <div className="lg:col-span-2 py-4">
        <h2 className="text-3xl font-bold py-4">My Polls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            polls.map((poll)=>(
                <PollCard
                    poll={poll}

                />
            ))
        }

        </div>
    </div>

    </div>

    </div>
  )
}

export default ManagePoll