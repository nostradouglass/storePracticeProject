import { Choices } from "./Choices";

interface Props {
  image1: string
  image2: string,
  children?: JSX.Element
};

export const ColorChoice: React.FC<Props> = (props: Props) => {
  return (
    <Choices>
      <>
      <h3 className="text-color-700">Color</h3>
      <div className="flex flex-row items-center">
        <div className="border rounded-full border-sky-500 w-11 h-11">
          <img
          alt="color choice 1"
            className="rounded-full w-11 h-11 p-1"
            src={`../images/${props.image1}`}
          />
        </div>
        <img
        alt="color choice 2"
          className="rounded-full w-12 h-13 mb-2"
          src={`../images/${props.image2}`}
        />
      </div>
      </>
    </Choices>
  );
};
