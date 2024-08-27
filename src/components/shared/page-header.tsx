import { ChevronLeftCircleIcon } from "lucide-react";
import React from "react";

const PageHeader = ({pageTitle}:{pageTitle:string}) => {
    return (
        <div className="flex gap-1 items-center">
            <div className="text-blue-700 cursor-pointer">
                <ChevronLeftCircleIcon />
            </div>
            <div className="text-blue-700 cursor-pointer">
                {pageTitle}
            </div>
        </div>
    );
};

export default PageHeader;
