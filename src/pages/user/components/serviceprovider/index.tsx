import { servicePoviders } from "@/data";
import ButtonWithArrow from "@/pages/auth/components/button";
import { BoltIcon, ChevronLeftIcon, StarIcon } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const ServiceProvider = () => {
    const { id } = useParams();

    const data = servicePoviders.filter((value) => value.id === id);

    return (
        <div className="font-poppins p-3">
            <div className="flex gap-1 items-center">
                <div className="text-blue-700 cursor-pointer">
                    <ChevronLeftIcon />
                </div>
            </div>
            <div className="flex flex-col m-8 shadow-lg">
                <div className="w-full rounded-t-lg bg-gray-600 h-32 relative">
                    <div className="flex gap-2  absolute -bottom-3 left-3">
                        <div className="w-14 h-14 bg-gray-400 rounded-full">
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
                </div>
                <div className="flex flex-col gap-2 p-4 w-full bg-white rounded-b-xl ">
                    <div>
                        <h2 className="font-semibold text-sm">About</h2>

                        <p className="font-light text-sm">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolore inventore ipsam
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                        <h2 className="font-semibold">Services</h2>
                        <div className="flex gap-1 px-1">
                            <span className="text-gray-600">
                                <BoltIcon size={20} />
                            </span>
                            <span>Plumbing</span>
                        </div>
                        <div className="flex gap-1 px-1">
                            <span className="text-gray-600">
                                <BoltIcon size={20} />
                            </span>
                            <span>Wiring</span>
                        </div>
                        <div className="flex gap-1 px-1">
                            <span className="text-gray-600">
                                <BoltIcon size={20} />
                            </span>
                            <span>Graden maintanance</span>
                        </div>
                        <div className="flex gap-1 px-1">
                            <span className="text-gray-600">
                                <BoltIcon size={20} />
                            </span>
                            <span>asdf</span>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="font-semibold text-sm">Reviews</h2>
                        <div className="text-sm p-2">
                            <div className="flex gap-1 items-center">
                                <h3 className="font-semibold text-xs text-gray-600">John</h3>
                                <div className="flex">
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                </div>
                                
                            </div>
                            <p className="font-light text-xs">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolore inventore ipsam
                            </p>
                        </div>
                        <div className="text-sm p-2">
                            <div className="flex gap-1 items-center">
                                <h3 className="font-semibold text-xs text-gray-600">Suresh</h3>
                                <div className="flex">
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                <StarIcon
                                    size={15}
                                    stroke="#ffc000"
                                    fill="#ffc000"
                                />
                                </div>
                                
                            </div>
                            <p className="font-light text-xs">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolore inventore ipsam
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <ButtonWithArrow value="book now" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvider;
