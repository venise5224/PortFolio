import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  return (
    <header className="fixed left-0 right-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 로고 */}
        <h1>
          <Link href="/" className="text-lg font-bold hover:opacity-80">
            Dev.JsonMin
          </Link>
        </h1>

        {/* 네비게이션 */}
        <nav className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative group">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
