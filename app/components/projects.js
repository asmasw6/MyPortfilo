import '../css/style.css';

export default function Projects() {
  return (
    <section
      className="relative grid sm:grid-cols-2 gap-1 md:grid-cols-4  bg-purple-200 space-x-10 items-center pt-2 justify-center m-h-screen"
      id="projects"
    >
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-64 rounded-lg border-2 border-purple1 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800 ">
          <div className="mx-auto mb-4 flex h-24 w-24 m-5 items-center justify-center">
            <img
              src="image/noaa.PNG"
              alt="project 1"
              className="mx-auto mb-4 items-center justify-center rounded-lg"
            />
          </div>

          <h2 className="mt-4 text-xl font-bold text-purple1 dark:text-indigo-400">
            Noaa
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Software Engineering
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/asmasw6/FCIT-project"
              className="rounded-full bg-purple1 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-64 rounded-lg border-2 border-purple1 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800 ">
          <div className="mx-auto mb-4 flex h-24 w-24 m-5 items-center justify-center">
            <img
              src="image/db.PNG"
              alt="project 1"
              className="mx-auto mb-4 items-center justify-center rounded-lg"
            />
          </div>

          <h2 className="mt-4 text-xl font-bold text-purple1 dark:text-indigo-400">
            Smash Up GYM
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">Database</p>
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="rounded-full bg-purple1 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-64 rounded-lg border-2 border-purple1 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800 ">
          <div className="mx-auto mb-4 flex h-24 w-24 m-5 items-center justify-center">
            <img
              src="image/sukoon.png"
              alt="project 1"
              className="mx-auto mb-4 items-center justify-center rounded-lg"
            />
          </div>

          <h2 className="mt-4 text-xl font-bold text-purple1 dark:text-indigo-400">
            Sukoon Application
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Graduation Project
          </p>
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="rounded-full bg-purple1 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-64 rounded-lg border-2 border-purple1 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800 ">
          <div className="mx-auto mb-4 flex h-24 w-24 m-5 items-center justify-center">
            <img
              src="image/flames.png"
              alt="project 1"
              className="mx-auto mb-4 items-center justify-center rounded-lg"
            />
          </div>

          <h2 className="mt-4 text-xl font-bold text-purple1 dark:text-indigo-400">
            Fire Detection
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Artifical Intelligence
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/asmasw6/FCIT-project/blob/main/AI_Project_Fire_Detection_Resnet50.ipynb"
              className="rounded-full bg-purple1 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
