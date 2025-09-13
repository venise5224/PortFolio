"use client";

import { ProjectType } from "@/types/project";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./modal/ProjectModal";

const Project = () => {
  const projects: ProjectType[] = [
    {
      title: "Albaform",
      type: "팀",
      period: "2024.11 ~ 2024.12",
      description:
        "아르바이트 지원자와 구인자를 연결해주는 플랫폼. 구직자는 원하는 알바를 쉽게 지원하고, 사업자는 공고를 등록하여 알바를 채용할 수 있는 서비스",
      imageUrl: "/images/Albaform_Thumbnail.png",
      link: "https://albaform-eight.vercel.app",
      githubUrl: "https://github.com/sprint-9-3/albaform",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Jotai"],
      troubles: [
        "근무지 위치 입력이 부정확할 수 있어 카카오맵 API을 활용해 직관적이고 정확한 위치 선택 UX 제공",
        "모달 컴포넌트를 전역적으로 구현하여 중복 코드 제거 및 유지보수성 향상",
        "React Hook Form + Zod를 활용해 복잡한 폼 검증 로직 단순화 및 가독성 개선",
        "OAuth 기반 간편 로그인 기능으로 사용자 편의성 강화",
      ],
    },
    {
      title: "Linkbrary",
      type: "팀",
      period: "2024.11 ~ 2024.11",
      description:
        "사용자가 자신만의 다양한 링크를 한 곳에 모아서 관리하고, 쉽게 공유할 수 있는 서비스",
      imageUrl: "/images/Linkbrary_Thumbnail.png",
      link: "https://linkbrary-sooty.vercel.app",
      githubUrl: "https://github.com/codeit9-temporary/linkbrary",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
      troubles: [
        "로그인 상태에 따른 동적 페이지 구성을 위해 Zustand 기반 전역 상태 관리 적용",
        "SNS 공유 기능(카카오톡, X, 메타)을 구현해 서비스 확장성 강화",
        "간편 로그인 기능으로 회원가입과 로그인 과정을 단일화해 UX 개선",
        "SEO 최적화를 위해 페이지별 메타데이터 작성 및 구글 서치콘솔 등록",
      ],
    },
    {
      title: "GodLife",
      type: "개인",
      period: "2025.08 ~ 2024.09",
      description:
        "갓생러를 위한, 갓생러에 의한, 갓생러의 앱. 매일의 루틴을 기록하고, 시간을 어떻게 사용했는지 한눈에 파악하세요.",
      imageUrl: "/images/GodLife_Thumbnail.png",
      link: "https://god-life.vercel.app/",
      githubUrl: "https://github.com/venise5224/GodLife",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
      troubles: [
        "로그인 상태에 따른 동적 페이지 구성을 위해 Zustand 기반 전역 상태 관리 적용",
        "간편 로그인 기능으로 회원가입과 로그인 과정을 단일화해 UX 개선",
        "SEO 최적화를 위해 페이지별 메타데이터 작성 및 구글 서치콘솔 등록",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <section
      id="projects"
      className="relative flex flex-col justify-start items-center py-20 min-h-screen"
    >
      {/* 배경 이미지 */}
      <Image
        src="/images/Project_background.jpg"
        alt="projects"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* 제목 */}
      <h2 className="relative mt-6 md:mt-10 text-5xl md:text-8xl font-extrabold text-yellow-600">
        Projects
      </h2>

      {/* 프로젝트 카드 */}
      <div className="relative mt-10 md:mt-30 flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center w-full px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-70 md:w-100 h-[220px] md:h-[350px] flex flex-col p-4 md:p-6 gap-1 md:gap-4 rounded-2xl bg-white cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl md:text-2xl font-bold text-yellow-600">
              {project.title}
            </h3>

            <Image
              src={project.imageUrl}
              alt={`${project.title} 썸네일`}
              width={300}
              height={150}
              className="object-cover rounded-lg border-2 border-black"
              style={{ width: "100%", height: "180px" }}
            />

            <p className="hidden md:block text-sm text-gray-700">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* 모달 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Project;
