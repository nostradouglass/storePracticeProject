import { ColorTypes } from "../../Types";

interface Props {
  text: string;
  colorType: ColorTypes;
}

export const Button = ({ text, colorType }: Props) => {
  const bg =
    colorType == ColorTypes.DARK
      ? "bg-gray-800"
      : "bg-white border-2 border-gray-200";
  const textColor =
    colorType == ColorTypes.DARK ? "text-white" : "text-gray-500";
  return (
    <div className="m-4">
      <button className={`${textColor} ${bg} w-full p-2`}>{text}</button>
    </div>
  );
};
