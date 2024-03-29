import React from "react";
import CarouselComponent from "./carousel";

function About() {
  return (
    <div>
      <section className="bg-blueGray-200 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div className="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              {/* --------------------------------- */}
              <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  className="w-full align-middle rounded-t-lg"
                />

                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-[95px] top-[-94px]"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-500 fill-current "
                    ></polygon>
                  </svg>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    We providde the most economical technological solution that fulfills every micro requirement of your
organisation. We are committed to give you our best in IT
management, software development, network maintenance, plus website designing..
                    </p>
                  </div>
                </blockquote>
              </div>
              {/* --------------------------------- */}
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-26 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-user-friends text-xl">About us</i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Your work is done by top Developers who worked at top tech
                companies like -
              </h3>

              <CarouselComponent />

              
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default About;
