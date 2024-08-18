import { ChevronRight } from "lucide-react";

const ButtonWithArrow = ({value, onClick}:{value:string, onClick?:React.MouseEventHandler<HTMLButtonElement>})=>{
    return (
        <button className="flex text-sm p-1 items-center justify-between bg-blue-700 text-white rounded-full hover:bg-blue-600" type="submit" onClick={onClick}>
            <div className="w-6 h-6"></div>
            {value}
            <div className="p-1 text-blue-700 bg-white rounded-full">
                <ChevronRight/>
            </div>
        </button>
    )
}

export default ButtonWithArrow;