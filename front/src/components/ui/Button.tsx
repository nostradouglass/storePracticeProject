import { ColorTypes } from "../../Types";

interface Props {
  text: string;
  colorType: ColorTypes;
  onClick?: () => void
}

export const Button = ({ text, colorType, onClick }: Props) => {
  const bg =
    colorType == ColorTypes.DARK
      ? "bg-gray-800"
      : "bg-white border-2 border-gray-200";
  const textColor =
    colorType == ColorTypes.DARK ? "text-white" : "text-gray-500";
  return (
    <div className="m-4">
      <button onClick={onClick} className={`${textColor} ${bg} w-full p-2`}>{text}</button>
    </div>
  );
};
