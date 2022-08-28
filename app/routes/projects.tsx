export default function Projects() {
  const projects = [
    {
      title: "RocketCV",
      description: "RocketCV es un sitio donde puedes crear, editar y compartir tu CV de manera rápida.",
      image: "/images/rocketcvscreenshot.png",
      repositorio: "https://github.com/renansalazar/rocketcv",
      url: "https://rocketcv.vercel.app/"
    },
    {
      title: "Covid Vacuna Perú",
      description: "Aplicación Web de Seguimiento de la Vacunación en Perú.",
      image: "/images/covidvacunaperuscreenshot.png",
      repositorio: "https://github.com/renansalazar/covidvacunaperu",
      url: "https://covidvacunaperu.vercel.app/"
    },
    {
      title: "KidRat",
      description: "Videojuego hecho en html y javascript, utilizando la libreria Phaser, todos los recursos utilizados son 100% abiertos.",
      image: "/images/kidratscreenshot.webp",
      repositorio: "https://github.com/renansalazar/kidrat",
      url: "https://kidrat.vercel.app/"
    }
  ]
  return (
    <div className="flex mx-auto max-w-xl">
      <div className="flex gap-6 my-auto px-4 flex-col sm:flex-row">
        <div className="flex flex-col">
          <h1 className="text-3xl text-violet-500 font-bold my-4">Proyectos Personales</h1>
          <ul>
            {
              projects.map(projectItem => {
                return (
                  <li key={projectItem.title + "-key"}>
                    <h2 className="text-2xl font-bold tracking-tight text-green-500">{projectItem.title}</h2>
                    <p className="my-2">
                      {projectItem.description}
                    </p>
                    <img src={projectItem.image} alt="imagen de rocketcv" width="100%" />
                    <div className="flex gap-4 my-4">
                      <a
                        className="group inline-flex items-center justify-center rounded-full py-2 px-5 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-300 text-slate-900 hover:bg-slate-400 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                        href={projectItem.repositorio}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/images/github.svg" alt="icono de github" width="20" className="mr-2" />
                        Repo
                      </a>
                      <a
                        className="group inline-flex items-center justify-center rounded-full py-2 px-5 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-300 text-slate-900 hover:bg-green-400 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                        href={projectItem.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                    <hr className="mb-4"/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}