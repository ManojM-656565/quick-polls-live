import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { usePollForm } from "../../store/usePollStore";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import{X} from 'lucide-react';

const COLOURS= ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#00C49F", "#FFBB28"];
const ResultModal = () => {
  const { resultData, clearResult } = usePollForm();

  const chartData=resultData?.options?.map((opt)=>({
    name:opt.text,
    value:opt.voteCount
  }))

  return (
    <Dialog.Root open={!!resultData} onOpenChange={(open) => !open && clearResult()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-transparent data-[state=open]:animate-fadeIn" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-12 shadow-lg focus:outline-none data-[state=open]:animate-scaleIn"
        >
           <Dialog.Close asChild>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
              aria-label="Close"
            >
              <X
               size={22} />
            </button>
          </Dialog.Close>
          <Dialog.Title className="text-xl font-bold mb-3">
            {resultData?.title}
          </Dialog.Title>
          <Dialog.Description className="mb-4 text-gray-700">
            Poll Result:
          </Dialog.Description>

          {/* {resultData?.options?.map((opt) => (
            <div key={opt.optionId} className="mb-2">
              <p>
                <strong>{opt.text}</strong> — {opt.voteCount} votes (
                {opt.percentage.toFixed(1)}%)
              </p>
            </div>
          ))}
           */}

            <div className="w-full h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#8884d8"
                  label
                >
                  {chartData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLOURS[index % COLOURS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-4 font-semibold text-green-600">
            Winner:{" "}
            {
              resultData?.options?.find(
                (opt) => opt.optionId === resultData?.winnerOptionId
              )?.text
            }
          </p>

          {/* <Dialog.Close asChild>
            <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-md">
              Close
            </button>
          </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResultModal;
