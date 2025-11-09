import PollCard from "../components/managePoll/PollCard"
import PollForm from "../components/managePoll/PollForm"

const ManagePoll = () => {
    const polls=[
        {
            title:"lkjnflkj",
            createdBy:"urgh",
            expiryDate:"hjbc",
            status:"jkwdb"
        }
    ]
  return (
    <div className="min-h-screen p-6">
    <h1 className="text-4xl font-bold pb-2">Manage Polls</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-1">
        <PollForm/>
    </div>
    <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold mb-6">My Polls</h2>
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