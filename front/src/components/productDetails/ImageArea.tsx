
interface Props {
    image: string
    imageAlt: string
    children?: React.ReactNode
};

export const ImageArea: React.FC<Props> = ({children, image}) => {

    return (
        <div className="w-full md:mt-4">
            {children}
            <div className="flex flex-row">
                {/* <div className="flex flex-col ">
                    <div className="w-12 h-12 bg-blue-400 m-4"></div>
                    <div className="w-12 h-12 bg-blue-400 m-4 "></div>
                    <div className="w-12 h-12 bg-blue-400 m-4"></div>
                </div> */}
                <div className="">
                    <img src={`../images/${image}`} />
                </div>
            </div>
        </div>
    )     
};