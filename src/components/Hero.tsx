import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center md:items-baseline min-h-screen"
    >
      {/* 배경 이미지 */}
      <Image
        src="/images/Hero_background.jpg"
        alt="hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* 텍스트 부분 */}
      <div className="px-8 md:ml-20 z-1">
        <h2 className="text-5xl md:text-8xl font-extrabold text-yellow-600">
          Front-End Developer
        </h2>
        <p className="mt-4 text-2xl md:text-5xl font-semibold text-gray-400">
          Jeon SangMin
        </p>
        <p className="mt-12 text-lg md:text-2xl text-white">
          사용자 경험을 최우선으로 생각하며, <br />
          깔끔하고 가독성 좋은 코드를 작성하는 개발자입니다.
        </p>
        <p className="mt-4 text-lg md:text-2xl text-white">
          성장의 재미를 느끼며, 문제 해결을 통해 가치 있는 경험을 창출합니다.
        </p>

        <div className="mt-10">
          <Link
            href="#projects"
            className="px-6 py-3 bg-yellow-600 text-black font-bold text-lg md:text-2xl rounded-lg border-1 border-white hover:bg-yellow-500"
          >
            프로젝트 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
