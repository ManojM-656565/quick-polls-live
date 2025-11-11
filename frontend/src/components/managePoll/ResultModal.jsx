import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { usePollForm } from "../../store/usePollStore";

const ResultModal = () => {
  const { resultData, clearResult } = usePollForm();

  return (
    <Dialog.Root open={!!resultData} onOpenChange={(open) => !open && clearResult()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-transparent data-[state=open]:animate-fadeIn" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-12 shadow-lg focus:outline-none data-[state=open]:animate-scaleIn"
        >
          <Dialog.Title className="text-xl font-bold mb-3">
            {resultData?.title}
          </Dialog.Title>
          <Dialog.Description className="mb-4 text-gray-700">
            Poll Result:
          </Dialog.Description>

          {resultData?.options?.map((opt) => (
            <div key={opt.optionId} className="mb-2">
              <p>
                <strong>{opt.text}</strong> — {opt.voteCount} votes (
                {opt.percentage.toFixed(1)}%)
              </p>
            </div>
          ))}

          <p className="mt-4 font-semibold text-green-600">
            Winner:{" "}
            {
              resultData?.options?.find(
                (opt) => opt.optionId === resultData?.winnerOptionId
              )?.text
            }
          </p>

          <Dialog.Close asChild>
            <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-md">
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResultModal;
