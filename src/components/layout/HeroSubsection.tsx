export default function HeroSubsection({ name }: { name: string }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[35vh] flex-col items-center justify-center text-center">
          <h1 className="font-agency-fb mb-6 text-5xl font-bold text-white md:text-7xl lg:text-8xl">
            {name}
          </h1>

          <p className="font-mono text-xl text-cyan-100 md:text-2xl">
            Indian Institute of Technology (BHU) Varanasi
          </p>
        </div>
      </div>
    </section>
  );
}