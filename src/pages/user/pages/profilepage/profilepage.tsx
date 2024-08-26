import ButtonWithArrow from "@/shared/components/button";
import CountrySelector from "@/shared/components/countryselector";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  

    return (
        <div>
            <div className="font-poppins p-3">
                <div className="flex gap-1 items-center">
                    <div className="text-blue-700 cursor-pointer">
                        <ChevronLeftIcon />
                    </div>
                </div>
                <div className="flex flex-col m-4 ">
                    <h1>Edit Profile</h1>
                    <div className="flex flex-col gap-2 py-4 w-full">
                        <div>
                            <input
                                type="text"
                                className="border p-2 w-full rounded-md"
                                placeholder="Full name"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                className="border p-2 w-full rounded-md"
                                placeholder="+91"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="border p-2 w-full rounded-md"
                                placeholder="email"
                            />
                        </div>
                        <div>
                          <CountrySelector/>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="border p-2 w-full rounded-md"
                                placeholder="state"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="border p-2 w-full rounded-md"
                                placeholder="pin"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="border p-2 w-full rounded-md"
                                placeholder="Fix a bulb"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="border p-2 w-full rounded-md"
                                placeholder="Fix a bulb"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <ButtonWithArrow value="confirm" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
