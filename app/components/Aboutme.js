import '../css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="relative h-screen bg-cover bg-center flex items-center justify-end"
      style={{ backgroundImage: "url('/image/purple_background.avif')" }}
    >
      <div className="py-2 px-2 bg-slate-400 bg-opacity-50 p-8 rounded-lg text-white max-w-md mr-12">
        <p className="text-white text-xl tracking-widest font-semibold">
          I'm Asma saleh
        </p>
        <p className="text-white font-medium">
          Computer Science Specialist in
          <span className="text-dark_purple font-semibold">
            Artificial Intelligence
          </span>
          & <span className="text-dark_purple font-semibold">Flutter</span> App
          Development
        </p>
        <div className="flex p-2 space-x-3">
          <a
            href=""
            className="bg-purple1 flex items-center justify-center h-10 w-10 rounded-full text-white hover:bg-light_purple hover:translate-x-1"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href=""
            className="bg-purple1 flex items-center justify-center h-10 w-10 rounded-full text-white hover:bg-light_purple hover:translate-x-1"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
          <a
            href=""
            className="bg-purple1 flex items-center justify-center h-10 w-10 rounded-full text-white hover:bg-light_purple hover:translate-x-1"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href=""
            className="bg-purple1 flex items-center justify-center h-10 w-10 rounded-full text-white hover:bg-light_purple hover:translate-x-1"
          >
            <i className="fas fa-phone text-xl"></i>
          </a>
          <a
            href=""
            className="bg-purple1 flex items-center justify-center h-10 w-10 rounded-full text-white hover:bg-light_purple hover:translate-x-1"
          >
            <i className="fas fa-map-marker-alt text-xl"></i>
          </a>
        </div>
      </div>
    </section>

    
  );
}
