export default function About() {
  return (
    <div className="h-full flex mx-auto max-w-3xl">
      <div className="flex gap-6 my-auto px-4 flex-col sm:flex-row">
        <div className="px-16 sm:px-4">
          <img src="/images/foto.jpeg" alt="imagen perfil" className="rounded-full"/>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl text-violet-500 font-bold">Acerca de mí</h1>
          <p className="text-lg mt-2">Soy de Perú y desde siempre me ha gustado el ecosistema tecnológico, hace más de 5 años me he especializado en el <strong className="text-green-600">Desarrollo Full Stack</strong>. He trabajado tanto en pequeños proyectos como para grandes empresas de Perú, Argentina y Chile.</p>
        </div>
      </div>
    </div>
  );
}