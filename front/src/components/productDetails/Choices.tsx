export const Choices = (props: any) => {
  return (
    <div className="border-gray-300 border-2 m-4">
      <div className="flex flex-row px-4 py-1 justify-between items-center">
        {props.children}
      </div>
    </div>
  );
};
