import React from 'react'
import { useState } from 'react'
import { usePollForm } from '../../store/usePollStore';

const PollForm = () => {
    const {create}=usePollForm();
    const [pollData,setPollData]=useState({
        title:"",
        description:"",
        options:[],
        expiryTime:'',
    });

    const handleChange = (e) => {
        setPollData({ ...pollData, [e.target.name]: e.target.value });
    };

    const handleOptionChange = (index, value) => {
        const newOptions = pollData.options.map((opt, i) => (i === index ? value : opt));
        setPollData({ ...pollData, options: newOptions });
    };

    const addOption = () => {
        setPollData({ ...pollData, options: [...pollData.options, ''] });
    };

    const removeOption = (index) => {
        if (pollData.options.length > 2) {
            setPollData({ ...pollData, options: pollData.options.filter((_, i) => i !== index) });
        }
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        create(pollData);
        setPollData({
            title:'',
            description:'',
            options:[],
            expiryTime:'',
        })
    }
  return (
    <div className='p-6'>
        <h3 className='text-2xl p-6'>Create New Poll</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={pollData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional):</label>
                    <textarea
                        name="description"
                        value={pollData.description}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    ></textarea>
                </div>

                <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Options (Min 2):</label>
                    {pollData.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder={`Option ${index + 1}`}
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                required
                                className="flex-grow p-2 border border-gray-300 rounded-md"
                            />
                            {pollData.options.length > 2 && (
                                <button 
                                    type="button" 
                                    onClick={() => removeOption(index)} 
                                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                    ))}
                    <button 
                        type="button" 
                        onClick={addOption} 
                        className="w-full py-2 border  border-red-500 text-red-500 rounded-md"
                    >
                        + Add Option
                    </button>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Time:</label>
                    <input
                        type="datetime-local"
                        name="expiryTime"
                        value={pollData.expiryTime}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md"
                >
                Submit
                </button>
               
            </form>
    </div>
  )
}

export default PollForm