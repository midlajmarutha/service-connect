import PageHeader from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
    return (
        <main>
            <div className="flex flex-col p-3 bg-slate-100 min-h-screen font-poppins">
                <PageHeader pageTitle="Payment" />
                <div className="flex flex-col m-4">
                    <div className="flex gap-3 p-4 bg-white rounded-md">
                        <div className="w-24 h-24 bg-gray-500 rounded-md"></div>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Plumbing</h1>
                            <p>Malappuram</p>
                            <div className="text-sm font-bold">Amount : <span className="text-red-600">Rs.500</span></div>
                        </div>
                    </div>

                    <div className="mt-4 text-sm ">
                        <div className="p-4 bg-white rounded-md">
                            <fieldset>
                                <legend>
                                    <div className="font-semibold">
                                        Select payment method
                                    </div>
                                </legend>
                                <div className="flex gap-3 my-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentmethod"
                                        id="gpay"
                                        value={"GPay"}
                                    />
                                    <label htmlFor="gpay">Gpay</label>
                                </div>
                                <div className="flex gap-3 my-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentmethod"
                                        id="UPI"
                                        value={"UPI"}
                                    />
                                    <label htmlFor="UPI">UPI</label>
                                </div>
                                <div className="flex gap-3 my-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentmethod"
                                        id="Card"
                                        value={"Card"}
                                    />
                                    <label htmlFor="Card">Card</label>
                                </div>
                                <div className="flex gap-3 my-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentmethod"
                                        id="NetBanking"
                                        value={"Net Banking"}
                                    />
                                    <label htmlFor="NetBanking">
                                        Net Banking
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                        <div className="my-4 flex justify-between">
                            <Button><Link to={"/payment/addcard"}>Add Card</Link></Button>
                            <Button><Link to={"/payment/addcard"}>Continue Payment</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PaymentPage;
