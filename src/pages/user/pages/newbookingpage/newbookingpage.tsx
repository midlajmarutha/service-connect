import ButtonWithArrow from "@/shared/components/button";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";

const NewBookingPage = () => {
    return (
        <div className="font-poppins p-3">
            <div className="flex gap-1 items-center">
                <div className="text-blue-700 cursor-pointer">
                    <ChevronLeftIcon />
                </div>
            </div>
            <div className="flex flex-col m-4 ">
                <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-400 rounded-full">
                        <img
                            className="rounded-full w-full h-full"
                            src="/profilepic.png"
                            alt="profile"
                        />
                    </div>
                    <div>
                        <div className="font-bold">
                            <h1>James</h1>
                        </div>
                        <div className="font-light text-sm">
                            <h2>Plumber</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 py-4 w-full">
                    <div>
                        <input
                            type="text"
                            className="border p-2 w-full rounded-md"
                            placeholder="Fix a bulb"
                        />
                    </div>
                    <div>
                        <textarea
                            className="border p-2 w-full h-48 rounded-md"
                            placeholder="Describe service"
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            className="border p-2 w-full rounded-md"
                        />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="">From:</label>
                                </td>
                                <td>
                                    <div>
                                        <input
                                            type="date"
                                            className="border p-2 rounded-md"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input
                                            type="time"
                                            className="border p-2 rounded-md"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="">To:</label>
                                </td>
                                <td>
                                    <div>
                                        <input
                                            type="date"
                                            className="border p-2 rounded-md"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input
                                            type="time"
                                            className="border p-2 rounded-md"
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div className="flex justify-end">
                    <ButtonWithArrow value="confirm" />
                </div>
            </div>
        </div>
    );
};

export default NewBookingPage;
