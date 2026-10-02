function Hero() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">

        {/* First Heading */}
        <h1 className="text-32l font-bold tracking-tight md:text-6xl">
          Rethink your workflow. Redefine what's possible.
        </h1>


        {/* Third Line */}
        <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
          I build modern, responsive and user-friendly websites
          using React, JavaScript, Tailwind CSS, Node.js,
          Express and MongoDB.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          
          {/* Primary Button */}
          <button className="rounded-full flex items-center justify-center cursor-pointer bg-blue-600 px-10 py-6 md:px-8 h-10 text-sm md:text-[20px] text-white hover:ring-2 hover:ring-primary/70 ring-offset-2 ring-offset-white transition-all hover:scale-[1.02] ring-transparent active:scale-[0.98] active:ring-primary overflow-hidden relative">Start a Conversation</button>


        </div>

      </div>
    </section>
  );
}

export default Hero;