import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center py-20 min-h-screen"
    >
      <h1 className="text-5xl font-extrabold">Jeon Sangmin</h1>
      <p className="mt-3 text-xl text-gray-600">Front-End Developer</p>

      <div className="mt-6 flex flex-col gap-2 items-center">
        <p>📱 010-4764-5224</p>
        <p>📧 devJsonMin@gmail.com</p>
        <a
          href="https://github.com/venise5224"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>

      <Link
        href="#projects"
        className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
      >
        See Projects
      </Link>
    </section>
  );
};

export default Hero;
