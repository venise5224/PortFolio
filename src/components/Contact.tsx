import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-20 min-h-screen"
    >
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <p className="mt-4 text-lg text-gray-600 text-center">
        프로젝트 문의, 협업 요청 등 언제든지 연락주세요!
      </p>

      <div className="mt-8 flex flex-col gap-3 items-center">
        <p>📞 전화번호: 010-4764-5224</p>
        <p>📧 이메일: devJsonMin@gmail.com</p>
        <Link
          href="https://github.com/venise5224"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub 프로필
        </Link>
      </div>

      <Link
        href="mailto:devJsonMin@gmail.com"
        className="mt-8 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
      >
        이메일 보내기
      </Link>
    </section>
  );
};

export default Contact;
