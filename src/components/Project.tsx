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
        "KakaoMap API를 활용한 위치 선택 기능 구현 → 입력 오류 방지 및 UX 향상",
        "전역 모달 컴포넌트 설계 → 중복 제거 및 유지보수 효율화",
        "React Hook Form + Zod 도입 → 폼 검증 로직 간결화 및 가독성 개선",
        "OAuth 기반 간편 로그인 기능 구현 → 로그인 UX 개선 및 사용자 이탈률 감소",
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
        "로그인 상태 전역 관리(Zustand)로 사용자별 동적 페이지 제공 → UX 개선",
        "카카오톡, X, 메타 공유 기능 구현 → 콘텐츠 확산 및 서비스 확장성 향상",
        "간편 로그인 로직 개선 → 로그인 및 회원가입 절차 단일화로 사용자 이탈률 감소",
        "페이지별 메타데이터 작성 및 Google Search Console 등록 → 검색 노출 최적화",
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
      techStack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Firebase"],
      troubles: [
        "검색 엔진 최적화를 위해 사이트맵, 메타태그, Google/네이버 소유권 인증 적용 → 검색 노출 향상",
        "SSR 환경에서 발생한 hydration mismatch 문제 대응 → 시간 정규화 로직 도입으로 배포 오류 방지",
        "Firebase Authentication 연동 → 이메일/비밀번호 및 Google 간편 로그인 기능 구현으로 UX 개선",
        "모바일 환경 대응을 위해 767px 이하에서 탭 기반 반응형 레이아웃 설계 → 전 기능 접근 가능",
        "활동 계획과 기록을 시각화한 타임라인 UI 설계 → 사용자 몰입도 향상 및 일과 기록 흐름 개선",
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
