import '../css/style.css';

export default function Nav() {
  return (
    <nav className="bg-dark_purple sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center px-5">
        <div className="text-white font-bold text-xl">
          <img
            src="image/144ppi/6Asset8.png"
            alt=""
            className="p-2 w-3 h-12 sm:w-12"
          />
        </div>
        <div className="flex space-x-4">
          <a
            href="#aboutme"
            className="text-white hover:text-light_purple font-serif font-thin no-underline px-4 sm:px-2"
          >
            About me
          </a>
          <a
            href="#education"
            className="text-white hover:text-light_purple font-serif font-thin no-underline px-4 sm:px-2"
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-white hover:text-light_purple font-serif font-thin no-underline px-4 sm:px-2"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-light_purple font-serif font-thin no-underline px-4 sm:px-2"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-white hover:text-light_purple font-serif font-thin no-underline px-4 sm:px-2"
          >
            Experiences
          </a>
        </div>
      </div>
    </nav>
  );
}
