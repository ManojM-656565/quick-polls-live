import React, { useEffect } from 'react';
import PollCardVote from '../components/polls/PollCardVote';
import { usePollForm } from '../store/usePollStore';

const PollsPage = () => {
    // const [polls, setPolls] = useState([]);

    // const polls=[
    //   {
    //     title:"etgetg",
    //     description:"wwrgwr",
    //     options:[{
    //       _id:"onf",
    //       text:"wrgwrg",
    //     },
    //     {
    //       _id:"jnff",
    //       text:"wrgwrg",
    //     }],
    //   },
    //   {
    //     title:"etgetg",
    //     description:"wwrgwr",
    //     options:[{
    //       _id:"onf",
    //       text:"wrgwrg",
    //     },
    //     {
    //       _id:"jnff",
    //       text:"wrgwrg",
    //     }],
    //   },
    //   {
    //     title:"etgetg",
    //     description:"wwrgwr",
    //     options:[{
    //       _id:"onf",
    //       text:"wrgwrg",
    //     },
    //     {
    //       _id:"jnff",
    //       text:"wrgwrg",
    //     }],
    //   },

    // ]
    const {allPolls,getAll}=usePollForm();
    useEffect(()=>{
      getAll();
    },[getAll])
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 border-b pb-2">Community Polls</h1>
                <p className="mt-2 text-gray-600">Vote on the latest active discussions.</p>
            </header>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPolls.map((poll) => (
                    <PollCardVote 
                        key={poll._id} 
                        poll={poll} 
                    />
                ))}
            </div>
        </div>
    );
};

export default PollsPage;