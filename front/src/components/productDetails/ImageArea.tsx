
interface Props {
    image: string
    imageAlt: string
    children?: React.ReactNode
};

export const ImageArea: React.FC<Props> = ({children, image, imageAlt}) => {

    return (
        <div className="md:ml-48 w-full md:mt-4">
            {children}
            <div className="flex flex-row">
                <div className="flex-col hidden md:block">
                    <div className="w-12 h-12  m-4"> 
                    <img alt="primary" src={`../images/${image}`} />
                    </div>
                    <div className="w-12 h-12  m-4"> 
                    <img alt="alternate" src={`../images/${imageAlt}`} />
                    </div>
                </div>
                <div className="">
                    <img alt="primary" src={`../images/${image}`} />
                </div>
            </div>
        </div>
    )     
};