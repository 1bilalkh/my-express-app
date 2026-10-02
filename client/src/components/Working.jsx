
import {
  TrendingUp,
  Workflow,
  BrainCircuit,
} from "lucide-react";

function Working() {
  return (
    <>
        <section className="w-full bg-[#000] px-5 py-40">
  <div className="mx-auto max-w-6xl">

    {/* Full Width Heading */}
    <div className="mb-14 w-full text-start">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
        Our Services
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
       AI is changing how we create, build, and work.
      </h2>

      <p className="mt-5 text-base leading-7 text-white">
        AI is changing the way businesses work. The real opportunity is not simply adding AI to existing processes, but rethinking how work is designed from the beginning. By combining human creativity with AI, businesses can build faster, smarter, and more effective experiences.
      </p>
    </div>

    {/* Three Columns */}
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 pt-6">

      {/* Column 1 */}
      <div className="rounded-2xl  border-gray-200 bg-none">
        <span>
            <TrendingUp className="w-14 h-14 text-white mb-4" />
        </span>
        <h3 className="text-xl font-semibold text-white">
        Scalable Business Impact
        </h3>

        <p className="text-sm text-white">
         Operations become faster and smarter.
        </p>
      </div>

      {/* Column 2 */}
      <div className="rounded-2xl  border-gray-200 bg-none">
        <span>
            <Workflow className="w-14 h-14 text-white mb-4" />
        </span>
        <h3 className="text-xl font-semibold text-white">
        Smart Workflow Automation
        </h3>

        <p className="text-sm leading-6 text-white">
          Tasks move automatically.
        </p>
      </div>

      {/* Column 3 */}
      <div className="rounded-2xl  border-gray-200 bg-none">
        <span>
            <BrainCircuit className="w-14 h-14 text-white mb-4" />
        </span>
        <h3 className="text-xl font-semibold text-white">
          Intelligent Decision Systems
        </h3>

        <p className="text-sm leading-6 text-white">
          Systems understand the context.
        </p>
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default Working