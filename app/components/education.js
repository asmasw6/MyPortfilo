import '../css/style.css';

export default function Eduction() {
  return (
    <section
      className="flex flex-col md:flex-row items-center p-2 bg-light_purple justify-center min-h-screen"
      id="education"
    >
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto px-4">
        <div className="md:w-1/3 mb-6 md:mb-0 px-2 py-2 pr-8">
          <img
            src="image/school.png"
            alt="Book Image"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>

        <div className="md:w-2/3 space-y-8 pl-8 justify-center">
          <div className="relative">
            <div className="absolute left-0 top-0 h-full border-l-4 border-gray-300 rounded-lg shadow-lg"></div>
            <div className="ml-8">
              <h3 className="text-xl font-bold">Computer Science</h3>
              <h4 className="text-lg text-dark_purple">
                King Abdulaziz University
              </h4>
              <p className="text-white">2019 - 2024</p>
              <p className="mt-2 text-purple-950 font-thin">
                Bachelor of Science in Computer Science <br />
                4.9 out of 5 (First-Class Honours)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
