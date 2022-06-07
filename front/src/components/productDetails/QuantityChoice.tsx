import { Choices } from "./Choices";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export const QuantityChoice = (props: any) => {
  return (
    <Choices>
      <h3 className="text-color-700 py-3">Quantity</h3>
      <div className="flex flex-row items-center py-3">
        <ChevronLeftIcon className="w-6 h-6 text-gray-800 mx-2" />
        1
        <ChevronRightIcon className="w-6 h-6 text-gray-800 mx-2" />
      </div>
    </Choices>
  );
};
