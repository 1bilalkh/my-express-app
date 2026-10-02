import aboutimg1 from "../assets/about-1.jpg"
import aboutimg2 from "../assets/about-2.jpg";

function About() {
  return (
    <>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12 md:flex-row">

            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
                About Me
              </span>

              <h2 className="mt-3 whitespace-pre-wrap font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter capitalize">
                Powering Digital Experiences Through Design & Code
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                I create modern digital experiences by combining thoughtful UI/UX
                design with powerful React development. From concept to final
                product, I focus on clean design, usability, and performance.
              </p>

              <button className="mt-8 rounded-full border border-black px-6 py-3 font-medium transition hover:bg-black hover:text-white">
                Learn More
              </button>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2">
              <img
                src={aboutimg1}
                alt="Workspace"
                className="h-[350px] w-full rounded-2xl object-cover lg:h-[450px]"
              />
            </div>

          </div>
        </div>
      </section>
      <section className="py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">

          {/* Left - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={aboutimg2}
              alt="UI UX Design"
              className="h-[400px] w-full rounded-2xl object-cover lg:h-[500px]"
            />
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2">
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
              What I Do
            </span>

            <h2 className="mt-3 whitespace-pre-wrap font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter capitalize">
              Design & Development That Makes an Impact
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
              I combine creative design with modern development to build
              digital experiences that are beautiful, responsive, and easy
              to use.
            </p>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                <span className="text-gray-700">
                  Modern and responsive UI/UX design
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                <span className="text-gray-700">
                  React websites with clean and reusable components
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                <span className="text-gray-700">
                  Fast, mobile-friendly, and accessible interfaces
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                <span className="text-gray-700">
                  Smooth and engaging user experiences
                </span>
              </li>
            </ul>

            <button className="mt-8 rounded-full border border-gray-300 px-6 py-3 font-medium transition hover:border-black hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default About
