import React, { useEffect } from 'react'
import { useDashboardStore } from '../store/useDashboard'
import VoteCard from '../components/dashboard/VoteCard';

const Dashboard = () => {
  const {stats,polls,fetchDashboardData}=useDashboardStore();


useEffect(() => {
        const loadData = async () => {
            await fetchDashboardData();
        };
        loadData();
    }, [fetchDashboardData]);
   return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-red-200 p-4 rounded-xl text-center">
          <h3>Total Polls</h3>
          <p className="text-2xl font-bold">{stats?.totalPolls}</p>
        </div>
        <div className="bg-red-200 p-4 rounded-xl text-center">
          <h3>Total Votes</h3>
          <p className="text-2xl font-bold">{stats?.totalVotes}</p>
        </div>
        <div className="bg-red-200 p-4 rounded-xl text-center">
          <h3>Engagement Ratio</h3>
          <p className="text-2xl font-bold">{stats?.engagementRatio}</p>
        </div>
        <div className="bg-red-200 p-4 rounded-xl text-center">
          <h3>Most Active Users</h3>
          <p className="text-2xl font-bold">2</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Created Polls</h2>
        <div className="grid grid-cols-2 gap-4">
          {polls?.map((poll) => (
            <div key={poll._id} className="bg-white shadow-md rounded-xl p-4">
              <h3 className="font-bold">{poll.title}</h3>
              <p className="text-sm text-gray-600">{poll.description}</p>
              <VoteCard poll={poll} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard