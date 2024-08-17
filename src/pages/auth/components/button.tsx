const ButtonWithArrow = ({value}:{value:string})=>{
    return (
        <button className="flex text-sm p-1 items-center justify-between bg-blue-700 text-white rounded-full hover:bg-blue-600" type="submit">
            <div className="w-6 h-6"></div>
            {value}
            <div className="w-8 h-8 text-blue-700 bg-white rounded-full">
                &rarr;
            </div>
        </button>
    )
}

export default ButtonWithArrow;