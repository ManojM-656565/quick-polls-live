import React from 'react'
import { useState } from 'react';

const PollCardVote = ({poll}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {title,description,options}=poll

    const handleSubmit=async(e)=>{
        e.preventDefault();
    }
  return (

    <div className='p-6 shadow-md rounded-lg border-2 border-red-200'>
    <h3 className='text-xl font-bold mb-2 text-gray-200'>{title}</h3>
    <p className='text=gray-400 mb-4'>{description}</p>
    <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-2">
                    {options.map((option) => (
                        <div key={option._id} className="flex items-center">
                            <input
                                type="radio"
                                id={option._id}
                                name="poll-option"
                                value={option._id}
                                checked={selectedOption === option._id}
                                onChange={() => setSelectedOption(option._id)}
                                className="h-4 w-4 text-red-600 border-gray-300"
                            />
                            <label 
                                htmlFor={option._id} 
                                className="ml-3 text-base font-medium text-gray-700"
                            >
                                {option.text}
                            </label>
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 mt-4 bg-red-600 text-white font-semibold rounded-md"
                >
                    Vote
                </button>

               
            </form>
    </div>
  )
}

export default PollCardVote