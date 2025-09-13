import Image from "next/image";

const Skill = () => {
  const skills = {
    Languages: [
      { name: "HTML", img: "/icons/html.png" },
      { name: "CSS", img: "/icons/css.png" },
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
      className="relative flex flex-col justify-center items-center min-h-screen"
    >
      {/* 배경 이미지 */}
      <Image
        src="/images/Skill_background.jpg"
        alt="skills"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <h2 className="relative text-5xl md:text-8xl font-extrabold text-yellow-600">
        Skills
      </h2>

      <div className="relative mt-8 flex flex-col gap-6 w-full max-w-6xl md:px-10">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center p-4 md:hover:border-2 border-yellow-600 rounded-lg h-[100px] md:h-[80px] group"
          >
            {/* 카테고리 이름 */}
            <h3 className="text-xl md:text-2xl font-extrabold text-white min-w-[250px] text-center md:text-left group-hover:text-yellow-600">
              {category}
            </h3>

            {/* 아이콘 리스트 */}
            <ul className="flex flex-wrap gap-6 justify-center md:justify-end min-w-[330px]">
              {items.map(({ name, img }) => (
                <li
                  key={name}
                  className="px-4 py-2 bg-white rounded-lg group flex flex-col items-center justify-center min-h-[40px] md:min-h-[56px]"
                >
                  <Image
                    src={img}
                    alt={name}
                    width={40}
                    height={40}
                    className="w-6 md:w-10 h-auto object-contain group-hover:hidden"
                  />
                  <span className="hidden group-hover:block text-sm font-bold text-center text-black">
                    {name}
                  </span>
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
