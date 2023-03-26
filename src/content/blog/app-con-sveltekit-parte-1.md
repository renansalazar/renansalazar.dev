---
 title: Aplicación con Sveltekit(Primera parte)
 pubDate: Dec 2 2023
 heroImage: /img/svelte-kit-machine.png
 layout: ../../layouts/BlogLayout.astro
---

Svelte es una tecnología que atrapa mucho mi atención por su simplicidad y ser una alternativa que retorna el desarrollo web a la propia plataforma. Es que ver un fragmento de código en Svelte es ver un fragmento de HTML, claro con la inclusión de la sintaxis de Svelte que nos permite realizar cosas increíbles con muy poco código.

Actualmente puede utilizarce en muchos framework populares como NextJS o Astro; sin embargo Svelte cuenta con un framework oficial que es **[Sveltekit](https://kit.svelte.dev/)**, y en este post crearé desde 0 una aplicación usando este framework, que cuente con 2 funcionalidades: Listar y crear, esto mediante 2 endpoints e integrándolo a una Base de Datos Mysql. Puedes revisar el avance del proyecto en el siguiente link: [**repositorio github**](https://github.com/renansalazar/movies-app).

### Primeros pasos

Creamos el proyecto con el manejador de paquetes que prefieras, yo lo iniciaré con pnpm:

```
  pnpm create svelte@latest my-project
```

Te preguntará acerca de la plantilla con la que deseas iniciar el proyecto, si deseas un proyecto vacío seleccion *Skeleton project*, aunque tampoco esta mal seleccionar el template con una app demo para explorar el proyecto que sveltekit tiene para presentarnos.

Por otro lado te consultará acerca de si deseas utilizar Typescript, ESLint, Prettier, Playwright y Vitest. De los cuáles dejo completamente esta elección a tu criterio, para este ejemplo respondí: No, Si, Si, No y No respectivamente.

Luego ejecutamos los siguientes comando para acceder al proyecto, instalar las dependencias y ejecutar el proyecto en modo de desarrollo:

```
cd my-project
pnpm install
pnpm dev
```

En el navegador en la dirección http://127.0.0.1:5173/ deberías visualizar una pantalla similar a esta:

![Página de Bienvenida de Sveltekit](/img/welcome-to-sveltekit.png)

### Manos a la obra

Al igual que muchos frameworks populares, Sveltekit nos trae enrutamiento por defecto desde una carpeta específica, tenemos la posibilidad de utilizar Layout de una manera muy simple, utilizar o no páginas Server side rendering, etc. Recomiendo una vez finalizado el proyecto de este Post, revisar la documentación oficial acerca de [la estructura de carpetas de Sveltekit](https://kit.svelte.dev/docs/project-structure).

Continuando con el proyecto por ahora tenemos esta estructura de carpeta:

![Estructura de carpeta](/img/estructura-de-carpetas.png)

Como única ruta tenemos +page.svelte(sí, Sveltekit usa el +page.svelte como nombre de página por convención) y toda página debe estar en una carpeta, a excepción de la página de inicio.

Cambiemos un poco la vista y que nuestro proyecto vaya tomando forma.

+page.svelte
```
<script>
  const movies = [
    {
      title: 'Titanic',
      year: 1997
    },
    {
      title: 'El padrino',
      year: 1972
    },
    {
      title: 'Avatar',
      year: 2009
    },
    {
      title: 'The Avengers',
      year: 2012
    }
  ]
</script>

<h1 class="home-title">Página de inicio</h1>
<p>Esta es la lista de peliculas</p>
<ul>
  {#each movies as movie}
    <li>{movie.title} ({movie.year})</li>
  {/each}
</ul>
```

Creo que ahora vamos notando de que va nuestro proyecto y es que trataremos de listar el titulo de una pelicula acompañada de su año de estreno. Ahora veamos a detalle esta parte del código.

En primer lugar si no fuera por la sintaxis de svelte `#each` quizás hubieramos pensado que se trata de un código HTML puro; sin embargo este es código de svelte donde dentro de el tag `<script>` incluímos el código Javascript donde por ahora creamos el array movies.

Fuera de esta etiqueta es solamente HTML a excepción de la sintaxis de svelte como `#each` el cual esta dentro de llaves `{}` y sirve para iterar listas donde `movies` iterará todos sus elementos utilizando `movie` como elemento usado en cada iteración.

Dentro de este recorrido podemos utilizar los datos de esa iteración con el nombre que le dimos en `#each`(movie), y podemos utilizarlo tambien dentro de llaves. Como en este caso `{movie.title} ({movie.year})`.

Solo para agregarle un toque más estilizado, agreguemos estos estilos al final de la página de tal forma que quedaría asi:

```
...
<style>
  .home-title {
    color: #0f62b2;
    font-size: 24px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    padding: 0;
  }
  ul li {
    padding: 16px;
    background: #f2f2f2;
    border-radius: 8px;
  }
</style>
```

Como se puede apreciar, es posible agregar estilos usando como selector tanto por nombre de clase como por tag ya que Svelte nos da esa posibilidad, el alcance de estos estilos solo será para esta página evitándonos entrar en conflicto de estilos.

La página va quedando así:
![Página con estilos](/img/pagina-con-estilo.png)
-

### Layout

En Sveltekit tambien es posible agregar layouts, para nuestro proyecto creamos a la misma altura de nuestra página de inicio el archivo +layout.svelte y le agregamos el sgte. código.

```
<header>
  <a href="/">Movie List</a>
</header>
<main>
  <slot></slot>
</main>
<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  header {
    padding: 20px;
    margin: auto;
  }
  a {
    font-size: 32px;
    color: #0f62b2;
    text-decoration: none;
    font-weight: bold;
  }
  main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  header, main {
    max-width: 250px;
  }
</style>
```
A excepción de `<slot>` y `:global`, el código no deja de ser HTML puro, asi que pasaré a explicar solo acerca de estos 2 elementos en nuestro código.

Slot es una etiqueta especial de Svelte(no Sveltekit) que nos permite inyectar contenido dentro de otro, algo muy parecido a lo que hace React con Children; sin embargo con Svelte tenemos [muchas más posibilidades](https://svelte.dev/docs#template-syntax-slot), en este caso donde estamos usándolo no estamos especificando qué contenido queremos renderizar dentro del slot, aquí es donde Sveltekit hace su magia  debido a que el contenido de +page.svelte se renderizará dentro del slot de +layout.svelte. Es una sinergia en todo el sentido de la palabra.

´:global´ es un selector global propio de css modules, por lo que es probable que lo hayas visto en otros lugares diferente a Svelte, aquí funciona de la misma manera quitando la modularidad, es decir haciendo que el estilo sea global para los selectores dentro del parentesis en este caso: ´html´ y ´body´. 

![Página con layout](/img/pagina-con-layout.png)

### Carga de datos

Hasta ahora hemos cargado la lista de películas en la misma +page.svelte; sin embargo podemos aprovechar la magia de Sveltekit creando la página +page.js a la misma altura de la página que se quiere renderizar, y esta página debería quedar asi:

+page.js
```
/** @type {import('./$types').PageLoad} */
export function load() {
  const movies = [
    {
      title: "Titanic",
      year: 1997
    },
    {
      title: "El padrino",
      year: 1972
    },
    {
      title: "Avatar",
      year: 2009
    },
    {
      title: "The Avengers",
      year: 2012
    }
  ]
  return {
    movies
  };
}
```

Mediante la función load podremos acceder a estos datos de una manera muy simple en la página svelte. Para esto debemos modificar el contenido de +page.svelte inicial, y quedaría asi:

```
<script>
  /** @type {import('./$types').PageData} */
  export let data;
<script>
...
```

Y en la parque del recorrido de los datos modificar por la variable data:

```
...
<ul>
  {#each data.movies as movie}
    <li>{movie.title} ({movie.year})</li>
...
```

Notarás que los datos se siguen mostrando de la misma forma; sin embargo ahora tenemos menos código en la página de svelte y separamos tanto la obtención de los datos como la vista a renderizar.

La función load sirve para obtener los datos en la página Svelte, y este usa tipos, esto lo hace Sveltekit, entre otras cosas, para decirle a Typescript que el tipo que esta devolviendo load sea el mismo que esta usando en data. Puedes revisar más al respecto de estos tipos [aquí](https://kit.svelte.dev/docs/routing#$types).

Otro detalle es que se puede determinar que el codigo dentro de +page.js se ejecute solamente en el servidor, cambiándole de nombre a +page.server.js, esto es util cuando por ejemplo el código solo puede ejecutarse en el servidor como para conectarnos a una Base de datos o acceder a variables de entorno privadas, como las API keys.

### Conclusión

Hemos revisado cómo iniciar un proyecto de Sveltekit y algunas características básicas como el routing y la carga de datos, junto a cómo esto se combina con los poderes de Svelte.

Por el momento ya finalizamos con esta primera parte del proyecto, trataré de completar el proyecto en una segunda parte, revisando tal como hicimos aca lo que Svelte y Sveltekit tienen para ofrecernos. Agradecería me dejes tu feedback o cualquier duda al respecto. Hasta pronto.
