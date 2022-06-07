import { Choices } from "./Choices";

export const ColorChoice = (props: any) => {
  return (
    <Choices>
      <h3 className="text-color-700">Color</h3>
      <div className="flex flex-row items-center">
        <div className="border rounded-full border-sky-500 w-11 h-11">
          <img
            className="rounded-full w-11 h-11 p-1"
            src={`../images/${props.image1}`}
          />
        </div>
        <img
          className="rounded-full w-12 h-13 mb-2"
          src={`../images/${props.image2}`}
        />
      </div>
    </Choices>
  );
};
