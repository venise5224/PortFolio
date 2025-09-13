import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center py-20 min-h-screen"
    >
      {/* 배경 이미지 */}
      <Image
        src="/images/Contact_background.jpg"
        alt="contact"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Contact Contents */}
      <div className="relative flex flex-col justify-center items-center text-white px-6">
        <h2 className="text-5xl md:text-8xl font-extrabold text-yellow-600">
          Contact Me
        </h2>
        <p className="mt-8 text-lg md:text-2xl font-semibold text-gray-400">
          프로젝트 관련 문의나 채용 관련 연락을 환영합니다.
        </p>

        <div className="mt-12 flex flex-col gap-4 items-start text-lg md:text-2xl text-white">
          <p className="font-extrabold">
            TEL <br />
            010-4764-5224
          </p>
          <p className="font-extrabold">
            EMAIL <br />
            devJsonMin@gmail.com
          </p>
        </div>

        <Link
          href="https://github.com/venise5224"
          target="_blank"
          rel="noreferrer"
          className="mt-8 px-6 py-3 bg-yellow-600 text-black font-extrabold text-lg md:text-2xl rounded-lg border-1 border-white hover:bg-yellow-500"
        >
          GitHub 프로필
        </Link>
      </div>
    </section>
  );
};

export default Contact;
