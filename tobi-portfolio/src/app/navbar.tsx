// Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-gradient-to-b from-zinc-900 to-zinc-900/25 text-gray-300 p-3 flex justify-center ml-16">
      <div className="font-mono text-3xl">
        <div>
          <Link href="/cv" className="text-gray-300 hover:text-white mr-28">CV</Link>
          <Link href="/" className="text-white font-bold">Home</Link>
          <Link href="/skills" className="text-gray-300 hover:text-white ml-28">Skills</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
