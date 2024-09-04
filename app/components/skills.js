import '../css/style.css';


export default function Skills() {
  return (
    <div>
      <section
        className="m-12 grid space-y-6 sm:grid-cols-2 md:grid-cols-3 items-center pt-2 justify-center min-h-screen"
        id="skills"
      >
        <div className="w-[200px] h-[240px] mx-12 bg-purple1 shadow-custom flex flex-col items-center justify-center transition-all duration-1000 ease-custom transform hover:scale-105 hover:rounded-br-3xl hover:rounded-tl-3xl">
          <div className="text-4xl mb-4 flex items-center justify-center text-white">
            <img src="image/problem-solving.png" alt="" className="w-16 h-16" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-semibold text-light_purple">
              Problem Soving
            </h2>
          </div>
        </div>

        <div className="w-[200px] h-[240px] mx-12 bg-purple1 shadow-custom flex flex-col items-center justify-center transition-all duration-1000 ease-custom transform hover:scale-105 hover:rounded-br-3xl hover:rounded-tl-3xl">
          <div className="text-4xl mb-4 flex items-center justify-center text-white">
            <img src="image/critical-thinking.png" alt="" className="w-16 h-16" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-semibold text-light_purple">
              Critical Thining
            </h2>
          </div>
        </div>

        <div className="w-[200px] h-[240px] mx-12 bg-purple1 shadow-custom flex flex-col items-center justify-center transition-all duration-1000 ease-custom transform hover:scale-105 hover:rounded-br-3xl hover:rounded-tl-3xl">
          <div className="text-4xl mb-4 flex items-center justify-center text-white">
            <img src="image/people.png" alt="" className="w-16 h-16" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-semibold text-light_purple">
              Team Collaboration
            </h2>
          </div>
        </div>
        <div className="w-[200px] h-[240px] mx-12 bg-purple1 shadow-custom flex flex-col items-center justify-center transition-all duration-1000 ease-custom transform hover:scale-105 hover:rounded-br-3xl hover:rounded-tl-3xl">
          <div className="text-4xl mb-4 flex items-center justify-center text-white">
            <img src="image/project-management.png" alt="" className="w-16 h-16" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-semibold text-light_purple">
              Time Management
            </h2>
          </div>
        </div>
        <div className="w-[200px] h-[240px] mx-12 bg-purple1 shadow-custom flex flex-col items-center justify-center transition-all duration-1000 ease-custom transform hover:scale-105 hover:rounded-br-3xl hover:rounded-tl-3xl">
          <div className="text-4xl mb-4 flex items-center justify-center text-white">
            <img src="image/networking.png" alt="" className="w-16 h-16" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-semibold text-light_purple">
              Communication
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
