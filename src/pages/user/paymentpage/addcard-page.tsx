import PageHeader from "@/components/shared/page-header";
import React from "react";

const AddCard = () => {
    return (
        <main>
            <div className="flex flex-col p-3 gap-4 font-poppins">
                <div>
                    <PageHeader pageTitle="Add card" />
                </div>
                <div className="w-full max-w-lg px-9 my-4">
                    <div className="flex flex-col gap-6 w-full h-60 p-8 font-mono text-gray-300 bg-gray-900 border-l border-t border-l-gray-300 border-t-gray-300 shadow-2xl rounded-xl">
                        <div>
                            <svg
                                width="38"
                                height="30"
                                viewBox="0 0 28 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.0189 22V15.5294H27.4717V19.5751C27.4717 20.2214 27.1558 20.8372 26.5951 21.2939C26.0266 21.7468 25.2621 22 24.4598 22H19.0189ZM10.566 15.5294V22H16.9057V15.5294L10.566 15.5294ZM3.02972 22C2.22559 22 1.45313 21.7468 0.883272 21.2939C0.321333 20.8372 0 20.2214 0 19.5751V15.5294H8.45283V22H3.02972ZM0.528301 8.41177V13.5882L28 13.5882V8.41177L0.528301 8.41177ZM19.0189 6.47059V0L24.4598 0C25.2621 0 26.0266 0.256549 26.5951 0.703929C27.1558 1.16016 27.4717 1.77688 27.4717 2.41762V6.47059L19.0189 6.47059ZM10.566 0V6.47059H16.9057V0L10.566 0ZM0 6.47059V2.41762C0 1.07927 1.3534 0 3.02972 0L8.45283 0V6.47059L0 6.47059Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        <div className="text-sm">
                            <div className="flex gap-1 items-center">
                                <div className="text-xs">
                                    <div>VALID</div>
                                    <div>TILL</div>
                                </div>
                                <span className="font-bold text-base">
                                    05/27
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>895* **** **** 4598</div>
                            <div>JAMES CAMPELL</div>
                        </div>
                    </div>
                </div>
                <div>
                  <form action="">
                    <label htmlFor="holder">Holder Name</label>
                      <input
                          type="text"
                          id="holder"
                          className="border p-2 w-full rounded-md"
                          placeholder="Eg: James Campell"
                      />
                      <label htmlFor="card">Card Number</label>
                      <input
                          type="text"
                          id="card"
                          className="border p-2 w-full rounded-md"
                          placeholder="Eg: 8953 5372 3583 4635"
                      />
                      <div className="flex gap-5">
                      <div className="w-1/2">

                        <label htmlFor="exp">Expiry date</label>
                        <input
                            type="text"
                            id="exp"
                            className="border p-2 w-full rounded-md"
                            placeholder="10/34"
                        />
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="holder">CVV</label>
                        <input
                            type="text"
                            id="holder"
                            className="border p-2 w-full rounded-md"
                            placeholder="Eg: James Campell"
                        />
                      </div>
                      </div>
                  </form>
                </div>
            </div>
        </main>
    );
};

export default AddCard;
