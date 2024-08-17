import React from "react";
import { Link } from "react-router-dom";
import ButtonWithArrow from "../components/button";

const Signup = () => {
    return(
        <React.Fragment>
            <div className="w-full h-screen min-h-screen flex justify-center items-center bg-slate-100">
                <div>
                    <form className="flex flex-col gap-2">
                        <label>Get Started</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            className="border p-1 rounded-md"
                            required/>
                        <input 
                            type="password" 
                            name="password" 
                            id="email" 
                            placeholder="password"
                            className="border p-1 rounded-md"
                            required/>
                        <div className="flex gap-2 text-sm">
                            <input 
                                type="checkbox" 
                                name="checkbox" 
                                id="tac-checkbox"
                                required/>
                            <label htmlFor="tac-checkbox">I hearby agree <Link to={"/terms"} className="underline">terms and conditions</Link></label>
                        </div>
                        <ButtonWithArrow value="Continue"/>
                        
                    </form>
                    <div className="m-6 flex flex-grow items-end text-sm">
                        Already have an account? <Link to={"/auth/signin"} className="text-blue-700 underline"> Signin</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;