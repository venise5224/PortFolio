import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      title: "Albaform",
      description:
        "아르바이트 지원자와 구인자를 연결해주는 플랫폼. 원하는 알바를 쉽게 지원하고, 공고하는 서비스",
      imageUrl: "/images/Albaform_Thumbnail.png",
      link: "https://albaform-eight.vercel.app/",
      githubUrl: "https://github.com/venise5224/albaform",
    },
    {
      title: "Linkbrary",
      description:
        "사용자가 자신만의 다양한 링크를 한 곳에 모아서 관리하고, 쉽게 공유할 수 있는 서비스",
      imageUrl: "/images/Linkbrary_Thumbnail.png",
      link: "https://linkbrary-sooty.vercel.app/",
      githubUrl: "https://github.com/venise5224/linkbrary",
    },
    {
      title: "GodLife",
      description:
        "갓생러를 위한, 갓생러에 의한, 갓생러의 앱. 매일의 루틴을 기록하고, 시간을 어떻게 사용했는지 한눈에 파악하세요.",
      imageUrl: "/images/GodLife_Thumbnail.png",
      link: "https://god-life.vercel.app/",
      githubUrl: "https://github.com/venise5224/GodLife",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-20 min-h-screen"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="flex gap-4 items-center justify-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col max-w-sm p-6 gap-4 border rounded-2xl bg-white"
          >
            <h3 className="text-2xl font-semibold text-blue-600">
              {project.title}
            </h3>

            <Image
              src={project.imageUrl}
              alt={`${project.title} 썸네일`}
              width={300}
              height={150}
              className="object-cover rounded-lg border-2 border-black mx-auto hover:scale-105 transition-transform"
              style={{ width: "100%", height: "180px" }}
            />

            <p className="text-gray-700">{project.description}</p>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 font-bold group"
            >
              GitHub URL |{" "}
              <span className="group-hover:underline">{project.githubUrl}</span>
            </Link>

            <Link
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 font-bold group"
            >
              배포 URL |{" "}
              <span className="group-hover:underline">{project.link}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
