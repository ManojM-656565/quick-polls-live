import React from "react";
import { usePollForm } from "../../store/usePollStore";
import ResultModal from "./ResultModal";

const PollCard = ({ poll }) => {
  const { _id:pollId,title, status, createdBy, expiryTime } = poll;
  const expiryDate = new Date(expiryTime);
  const {genResult}=usePollForm();

  const formattedExpiry = expiryDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const handleResult=()=>{
    genResult(pollId);

  }

  return (
    <>

    <div className="p-4 border-4 border-red-300">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="text-sm space-y-1 mb-4">
        <p>
          Status: <strong className="uppercase">{status}</strong>
        </p>
        <p>Expires: {formattedExpiry}</p>
        {createdBy && <p>Created By: {createdBy.name || createdBy.email}</p>}
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="py-1 px-3 text-sm bg-red-500 text-white rounded-md">
          Edit
        </button>
        <button onClick={handleResult} className="py-1 px-3 text-sm bg-red-600 text-white rounded-md">
          Gen Result
        </button>
        <button className="py-1 px-3 text-sm bg-red-600 text-white rounded-md">
          Delete
        </button>
      </div>
    </div>
    <ResultModal/>
    </>
  );
};

export default PollCard;
