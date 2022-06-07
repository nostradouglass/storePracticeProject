import { useAppSelector } from "../../redux/hooks";


export const ImageArea = (props: any) => {

    const { isMobile } = useAppSelector(
        (state) => state.mobileStatus as { isMobile: boolean }
      );

    return (
        <div className="w-full md:mt-4">
            {props.children}
            <div className="flex flex-row">
                {/* <div className="flex flex-col ">
                    <div className="w-12 h-12 bg-blue-400 m-4"></div>
                    <div className="w-12 h-12 bg-blue-400 m-4 "></div>
                    <div className="w-12 h-12 bg-blue-400 m-4"></div>
                </div> */}
                <div className="">
                    <img src={`../images/${props.image}`} />
                </div>
            </div>
        </div>
    )     
}