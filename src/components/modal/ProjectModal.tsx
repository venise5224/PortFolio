import { ProjectType } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-5xl w-full p-6 h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* 제목 + 유형/기간 */}
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-600">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {project.type} 프로젝트 | {project.period}
        </p>

        {/* 썸네일 */}
        <Image
          src={project.imageUrl}
          alt={`${project.title} 상세 이미지`}
          width={600}
          height={300}
          className="mt-2 object-cover rounded-lg mb-4"
          style={{ width: "100%", height: "300px" }}
        />

        {/* 설명 */}
        <p className="text-gray-700 mb-6">{project.description}</p>

        {/* 사용 기술 */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2 text-yellow-600">
            사용 기술
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub / 배포 URL */}
        <div className="flex gap-6 mb-6">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-bold hover:underline"
          >
            GitHub
          </Link>
          <Link
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-bold hover:underline"
          >
            배포
          </Link>
        </div>

        {/* 트러블 슈팅 */}
        <div>
          <h4 className="font-semibold text-lg mb-2 text-yellow-600">
            트러블 슈팅
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {project.troubles.map((trouble, index) => (
              <li key={index}>{trouble}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
