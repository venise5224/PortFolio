const Skill = () => {
  const skills = {
    Languages: [
      "HTML",
      "CSS (Tailwind CSS, Module CSS)",
      "JavaScript",
      "TypeScript",
    ],
    "Web Library / Framework": ["React", "Next.js"],
    "State Management": ["Context API", "Zustand", "Jotai"],
    "Async State Management": ["Fetch", "Axios"],
    Tools: ["Git", "Notion"],
  };

  return (
    <section
      id="skill"
      className="flex flex-col justify-center items-center py-20 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex-1 min-w-[250px] max-w-sm rounded-2xl border border-gray-200 shadow-sm p-6 bg-white hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              {category}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 before:content-['•'] before:text-blue-500 before:font-bold"
                >
                  {item}
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
