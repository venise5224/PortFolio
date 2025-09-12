import Image from "next/image";

const Skill = () => {
  const skills = {
    Languages: [
      { name: "HTML", img: "/icons/html.png" },
      { name: "CSS (Tailwind CSS, Module CSS)", img: "/icons/css.png" },
      { name: "JavaScript", img: "/icons/javascript.png" },
      { name: "TypeScript", img: "/icons/typescript.png" },
    ],
    "Web Library / Framework": [
      { name: "React", img: "/icons/react.png" },
      { name: "Next.js", img: "/icons/nextjs.png" },
    ],
    "State Management": [
      { name: "Context API", img: "/icons/contextapi.png" },
      { name: "Zustand", img: "/icons/zustand.png" },
      { name: "Jotai", img: "/icons/jotai.png" },
    ],
    "Async State Management": [
      { name: "Fetch", img: "/icons/fetch.png" },
      { name: "Axios", img: "/icons/axios.png" },
    ],
    Tools: [
      { name: "Git", img: "/icons/git.png" },
      { name: "GitHub", img: "/icons/github.png" },
      { name: "Notion", img: "/icons/notion.png" },
    ],
  };

  return (
    <section
      id="skill"
      className="flex flex-col justify-center items-center py-20 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="flex flex-col justify-center gap-6 w-full">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex items-center min-w-full max-w-sm rounded-2xl p-6 bg-white"
          >
            <h3 className="text-xl font-semibold text-blue-600 min-w-[300px]">
              {category}
            </h3>
            <ul className="flex gap-6">
              {items.map(({ name, img }) => (
                <li key={name}>
                  <Image
                    src={img}
                    alt={name}
                    width={80}
                    height={80}
                    className="w-17 h-17 object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
