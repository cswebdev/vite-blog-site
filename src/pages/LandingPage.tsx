import { NavLink } from "react-router-dom";
import { landingPageData } from "../data/landingPage";
import "../styles.css";

export default function LandingPage() {
   return (
      <div className="hero-background flex size-full flex-col bg-blue-500 text-white">
         <div className="mx-auto w-full max-w-7xl px-9 py-24 md:px-10 md:py-24 lg:py-32">
            <section className="x-auto mb-12 w-full max-w-2xl text-left md:mb-16 lg:mb-20">
               <h1 className="mb-4 text-8xl font-semibold md:text-6xl">
                  {landingPageData.headline}
               </h1>
               <p className="mb-5 text-3xl lg:mb-8">
                  {landingPageData.subheadline}
               </p>
               <div className="flex justify-start">
                  <NavLink
                     to="/signup"
                     className="group relative inline-flex h-16 w-40 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white px-6 text-lg font-semibold text-blue-500 transition-all duration-100 [box-shadow:5px_5px_rgb(81_81_81)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:3px_3px_rgb(82_82_82)]"
                  >
                     <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-400/90 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                     <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                        Join Now
                     </span>
                  </NavLink>
               </div>
            </section>
         </div>
         <section className="bg-white text-blue-500">
            <div className="my-20 w-auto">
               {landingPageData.sections.map((section, index) => (
                  <div key={index}>
                     <div className="flex  justify-center flex-col mx-auto sm:my-44 my-28 h-96 p-9 ring-2 sm:w-2/3 lg:w-2/4 rounded-md shadow-md">
                        <h3 className="text-3xl font-bold my-9">
                           {section.title}
                        </h3>
                        <p className="font-thin text-2xl">
                           {section.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </section>
         <section className="flex justify-center">
            <p className="text-4xl leading-relaxed">
               {landingPageData.callToAction.text}
            </p>
            <button>Join Today</button>
         </section>
      </div>
   );
}
