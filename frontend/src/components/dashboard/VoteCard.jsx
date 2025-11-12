import React from "react";
import {
  LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer,
} from "recharts";

const VoteCard = ({ poll }) => {
  const data = poll.options.map((opt) => ({
    name: opt.text,
    votes: opt.voteCount,
  }));

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow">
      <h3 className="font-semibold mb-3 text-center">{poll.title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="votes"
            stroke="red"
            strokeWidth={2}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VoteCard;
