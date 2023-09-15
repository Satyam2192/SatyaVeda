import React from "react";

function WorkProgress() {
  return (
    <>
      <section className="relative bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap mt-32 mb-20 pb-20">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Fixing issues before they happen.
                  </h1>
                  <p className="mt-4 text-lg text-white">
                    We work closely with our clients to understand their
                    specific needs and provide customized services to help them
                    achieve their goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </section>

      <section className="pb-10 bg-blueGray-200 -mt-56 bg-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center relative md:top-20">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"> 1</i>
                  </div>
                  <h6 className="text-xl font-semibold">Customization</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Every modification at your will would be entertained.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-pink-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet">2</i>
                  </div>
                  <h6 className="text-xl font-semibold">Consultation</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Suggestions regarding the best suitability.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center relative md:top-20">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint">3</i>
                  </div>
                  <h6 className="text-xl font-semibold">Quality</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Client satisfaction is of utmost importance to us.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet">4</i>
                  </div>
                  <h6 className="text-xl font-semibold">Support</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    We will always be there for you if any mishap occurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkProgress;
