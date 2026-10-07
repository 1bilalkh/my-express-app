import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import projectLogo from "../assets/logoleather.jpg";
import leatherCover from "../assets/leather1.jpg";
import Coveragri from "../assets/agriculture.jpg";
import machine from "../assets/machine.jpg";
import banking from "../assets/banking.jpg";

const projects = [
  {
    id: 1,
    name: "Leather Jackets",
    description:
      "Designed and developed the complete website with a conversion-focused UI/UX, compelling marketing content, and responsive experiences built to strengthen the brand, engage users, and drive more conversions.",
    categories: ["Development WordPress", "Design"],
    percentage: "40%",
    result: "faster page loads",
    services: ["Website Development", "UI/UX Design"],
    projectLogo,
    cover: leatherCover,
    reverse: false,
  },
  {
    id: 2,
    name: "Agriculture AI Prediction",
    description:
      "Designed and developed the complete website with a conversion-focused UI/UX, compelling marketing content, and responsive experiences built to strengthen the brand, engage users, and drive more conversions.",
    categories: ["AI Insights", "Prediction"],
    percentage: "85%",
    result: "prediction accuracy",
    services: [
      "AI Algorithm Design",
      "Prediction Model",
      "Web App Development",
    ],
    projectLogo: Coveragri,
    cover: Coveragri,
    reverse: true,
  },
  {
    id: 3,
    name: "Tech Startup and AI Inventory",
    description:
      "Designed and developed the complete website with a modern user experience, responsive layouts, and technology-focused presentation to create a stronger digital presence.",
    categories: ["AI Inventory", "Technology"],
    percentage: "75%",
    result: "faster page loads",
    services: [
      "Website Design",
      "Web Development",
      "UI/UX Design",
    ],
    projectLogo: machine,
    cover: machine,
    reverse: false,
  },
  {
    id: 4,
    name: "Banking and Finance AI Chatbot",
    description:
      "Designed and developed a professional website with a modern UI/UX and responsive experience focused on presenting AI-powered banking and financial solutions.",
    categories: ["AI Chatbot", "Finance"],
    percentage: "60%",
    result: "increase in engagement",
    services: [
      "Website Development",
      "Professional UI/UX",
      "AI Integration",
    ],
    projectLogo: banking,
    cover: banking,
    reverse: true,
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-2%"]
  );

  return (
    <div
      ref={cardRef}
      className="sticky top-20 flex h-[78vh] items-center justify-center md:top-24 md:h-[70vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, y }}
        className="relative h-[70vh] w-full origin-top md:h-[60vh]"
      >
        <div
          className={`grid h-full w-full grid-cols-1 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm md:grid-cols-2 md:rounded-2xl ${
            project.reverse
              ? "md:[&>div:first-child]:order-2"
              : ""
          }`}
        >
          {/* IMAGE SIDE */}
          <div className="relative h-[38vh] overflow-hidden bg-neutral-100 md:h-full">
            {/* Cover */}
            <img
              src={project.cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Light overlay */}
            <div className="absolute inset-0 z-10 bg-black/5" />

            {/* Project Logo / Main Image */}
            <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
              <div className="relative h-[75%] w-[75%] items-center justify-center hidden">
                <img
                  src={project.projectLogo}
                  alt={`${project.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="flex min-h-0 flex-col justify-between bg-white p-6 md:p-8 lg:p-10">
            {/* TOP */}
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={project.projectLogo}
                    alt={`${project.name} logo`}
                    className="h-10 w-10 rounded-lg object-contain"
                  />

                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {project.name}
                  </h3>
                </div>

                <span className="text-sm text-neutral-400">
                  0{project.id}
                </span>
              </div>

              {/* Categories */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600 md:mt-6 md:text-base md:leading-7">
                {project.description}
              </p>
            </div>

            {/* BOTTOM */}
            <div className="mt-6">
              {/* Result */}
              <div className="mb-6 md:mb-8">
                <div className="text-4xl font-semibold tracking-tight md:text-6xl">
                  {project.percentage}
                </div>

                <p className="mt-1 text-sm text-neutral-500">
                  {project.result}
                </p>
              </div>

              {/* Services */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-neutral-400">
                  Services
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="text-sm text-neutral-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SelectedProjects() {
  return (
    <section className="relative w-full bg-[#fafafa]">
      {/* SECTION HEADING */}
      <div className="mx-auto mb-24 max-w-6xl px-5 pb-12 pt-12 text-center md:mb-32 md:px-6 md:pb-16 md:pt-32">
        <p className="mb-5 text-sm uppercase tracking-[0.2em] text-neutral-400">
          Things I've Built
        </p>

        <h2 className="text-4xl font-bold leading-[0.95] tracking-tight md:text-4xl lg:text-4xl">
          Performance,
          <br />
          Work & Projects
        </h2>
      </div>

      {/* PROJECT CARDS */}
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* BOTTOM SPACE */}
     
    </section>
  );
}