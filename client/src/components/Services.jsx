import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Database,
  Server,
  ShoppingCart,
  LayoutDashboard,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "React Development",
    text: "Building modern and responsive web applications with React.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Creating clean, simple, and user-friendly interfaces.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Designing websites that work perfectly on all devices.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Developing modern websites with clean and reusable code.",
  },
  {
    icon: Database,
    title: "MongoDB",
    text: "Creating and managing reliable database solutions.",
  },
  {
    icon: Server,
    title: "Backend Development",
    text: "Building REST APIs using Node.js and Express.js.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    text: "Creating modern and responsive online stores.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    text: "Designing clean and functional admin dashboards.",
  },
  {
    icon: Wrench,
    title: "API Integration",
    text: "Connecting applications with APIs and external services.",
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">
              My Services
          </h2>

          <p className="mt-4 text-gray-600">
            I provide modern web development and UI/UX solutions
            to create beautiful and responsive digital experiences.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 flex flex-wrap gap-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="w-full rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#fafafa]"
              >
                {/* Icon */}
                <div className="">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Heading */}
                <h3 className="text-xl font-semibold pt-4 pb-2">
                  {service.title}
                </h3>

                {/* Paragraph */}
                <p className=" text-[15px] md:text-base opacity-70 text-balance0">
                  {service.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;