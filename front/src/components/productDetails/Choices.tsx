interface Props {
  children: JSX.Element;
}

export const Choices: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="border-gray-300 border-2 m-4">
      <div className="flex flex-row px-4 py-1 justify-between items-center">
        {children}
      </div>
    </div>
  );
};
