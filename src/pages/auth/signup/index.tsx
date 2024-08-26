import React, { FormEvent, useState } from "react";
import { Link, redirect } from "react-router-dom";
import ButtonWithArrow from "../../../shared/components/button";
import { Button } from "@/components/ui/button";
import SignupOTPInput from "./components/otp-input";


const Signup = () => {
    const [signupProgress, setSignupProgress] = useState<"register" | "otp" | "success">("register")
    function handleFormSubmission(event:FormEvent){
        event.preventDefault();
        setSignupProgress("otp")
    }
    return(
        <React.Fragment>
            <div className="w-full h-screen min-h-screen flex justify-center items-center bg-slate-100">
                {
                signupProgress === "register" &&
                <div>
                    <form className="flex flex-col gap-2" onSubmit={handleFormSubmission}>
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
                            <label htmlFor="tac-checkbox">I hearby agree <Link to={"/terms"} className="underline text-blue-700">terms and conditions</Link></label>
                        </div>
                        <ButtonWithArrow value="Continue"/>
                        
                    </form>
                    <div className="m-6 flex flex-grow items-end text-sm">
                        Already have an account? <Link to={"/auth/signin"} className="text-blue-700 underline"> Signin</Link>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <Button variant="secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                        </Button>
                        <Button variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px"><path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/></svg>
                        </Button>
                    </div>
                </div>
                }
                {
                    signupProgress === "otp" &&
                    <div className="flex flex-col gap-2 items-center w-2/3">
                        <h2>
                            Enter OTP
                        </h2>
                        <div className="text-sm">
                            an otp is sent to the given email address
                        </div>
                        <SignupOTPInput/>
                        <div className="flex-grow"> 
                            <ButtonWithArrow value="Continue" onClick={()=>{setSignupProgress("success");}}/>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Signup;