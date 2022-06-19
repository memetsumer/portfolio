import { Footer } from "./Footer";

import Scene from "./three/Scene";

export const HeroSection = () => {
  return (
    <div className="background-gradient overflow-hidden h-screen relative select-none">
      <div className="absolute inset-0 z-10">
        <Scene>
          <div className="relative w-screen pb-8 bg-transparent flex items-center h-screen pt-4 sm:pb-16 md:pb-20 ">
            <main className="text-center mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex justify-center items-center flex-col">
              <h1 className="tracking-tight text-gray-900 text-lg md:text-2xl xl:text-3xl">
                <p className="neonText leading-relaxed font-extrabold tracking-tight hero-fade-1">
                  Hey, I’m Mehmet. Indie Developer with a passion to build
                  things.
                </p>
              </h1>
              <div className="tracking-tight text-gray-300 w-max h-16 mt-4 flex items-center justify-center bg-opacity-50 rounded-xl hero-fade-2">
                <p>Scroll, you won’t regret it :)</p>
                <div className="ml-3 scrollBar">
                  <div className="scrollAnim"></div>
                </div>
              </div>
            </main>
          </div>

          <h1 className="text-3xl text-center text-slate-500 h-screen w-screen">
            second page :)
          </h1>
          <h1 className="text-3xl text-center text-amber-500 h-screen">
            third page (:
          </h1>

          <div className="lg:w-1/2 w-screen md:h-screen h-[120vh] flex items-start md:items-center justify-center px-8 pb-16">
            <div className="max-w-md sm:max-w-lg lg:mx-0 mt-4 md:mt-32 lg:mt-0">
              <div className="contact-fade-1">
                <h2 className=" neonText leading-relaxed hero-fade-1 text-2xl font-extrabold tracking-tight sm:text-4xl inline-flex">
                  Let’s work together!
                </h2>
                <p className="mt-1 text-lg text-white md:mt-3">
                  I’d love to hear from you! You can send me a message using the
                  form below, or email me.
                </p>
              </div>

              <form
                action="#"
                method="POST"
                className="mt-3 md:mt-4 lg:mt-9 grid grid-cols-2 gap-y-6 sm:gap-x-8 text-white contact-fade-2"
              >
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-[75%] md:w-full  shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-[75%] md:w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how-can-we-help"
                      className="block text-sm font-medium "
                    >
                      How can I help you?
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      // rows={4}
                      className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md text-black"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="text-right col-span-2 mb-4 md:mb-0">
                  <a className="neon-button">Submit</a>
                </div>
              </form>
            </div>
          </div>
        </Scene>
      </div>

      <div className="absolute z-10 inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};
