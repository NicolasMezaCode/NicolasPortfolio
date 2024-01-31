import React from 'react'
import music from '../../assets/images/DALL·E 2023-05-26 11.39.09 - old dj  equipment and vintage music stuff (1).webp'
import salsa from '../../assets/images/DALL·E 2023-05-26 11.50.53 - personas bailando salsa con el estilo de pintura de van gohg (1).webp'
import tiempo from '../../assets/images/DALL·E 2023-05-26 11.57.14 - viajar en el tiempo con musica (1).webp'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Musica() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <article className='bg-background op text-white px-6 md:px-16 lg:px-18 xl:px-20 2xl:px-24 pb-12'>
    <div className='px-8 px-10 md:px-44 lg:px-52 xl:px-56 2xl:px-60 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-10 lg:pb-14'>
        <span>
            <h1 className='font-serif  text-2xl md:text-4xl lg:text-5xl p-2 border-b border-gray-700 text-slate-100'>La banda sonora de mi vida</h1>
        </span>
        <h5 className='opacity-80 mt-4 md:mt-6 lg:mt-8 p-2'>22 May. 2023, 4 MIN READ</h5>
    </div>
    <figure className='flex justify-center mb-12'>
        <img src={music} alt="" className="h-auto max-w-full" />
    </figure>
    <section className="mx-auto px-10 md:px-52 xl:px-56 2xl:px-60 font-serif min-h-230">
        <div className='flex justify-center text-xl items-center flex-col text-letters gap-6 md:gap-8 leading-8'>
            <p className="text-left">
                La música se ha convertido en una parte muy importante de mi vida y le he dado un sentido diferente a la misma con cada día que pasa y con cada nueva canción o artista que descubro.
            </p>
            <p className="text-left">
                Desde que empecé a vivir solo, he escuchado más música que durante toda mi vida y mis audífonos se han vuelto en mis compañeros de vida, el sentir como una guitarra o un sintetizador resuenan en mi cabeza me da <strong>felicidad total</strong>, a pesar de vivir rodeado de música al nacer en Latinoamérica nunca había sentido en verdad la música como hasta ahora y deje de verla como un añadido más al día día sino un personaje más de este.
            </p>
            <p className="text-left">
                Está visión de la música fluyendo por mis venas me ha llevado a pensar y ver como en el sonido siempre ha sido parte vital de nuestra vida como personas y ahora imagino mi vida como una película, como cada día es una nueva escena y la música que escucho es la banda sonora que le da una sensación diferente al vivir, y es increíble ver como las situaciones más monotonas o aburridas se pueden transformar en algo increíble con la canción adecuada, como cuando creo que ya no puedo seguir tengo redobles de tambores épicos que me hacen avanzar más y más.
            </p>
            <p className="text-left">
                Y hay algo que esto me ha llevado a entender de cierto modo a las demás personas, también, con preguntarles cuáles son sus canciones favoritas de una otra forma estás escuchando la banda sonora de los demás y te pueden transmitir el sentimiento que tienen y darte cuenta de cosas que con palabras solas no conseguirías y por eso me parece tan fascinante el como nos conectamos como humanos a través de la música y no hay mejor conexión que el cantar a toda voz alguna canción con alguien que te importa y a pesar de tener vidas totalmente diferentes pareciera que son uno durante 3 minutos.
            </p>
            <img src={salsa}  alt="people dancing salsa" />
            <p className="text-left">
                Con el pasar del tiempo mi percepción de la música ha cambiado mucho y ahora con un criterio mejor y maduro he dejado de pensar en géneros canciones o ritmos y empezar a escuchar sin prejuicios sin importar el artista, el contexto incluso el idioma porque solo así he descubierto joyas musicales que nunca espere escuchar, y mi yo de hace 5 años no le gustaría saber que ahora disfrutamos de una buena salsa que bailamos bachata y que nos entristecemos con reggaetón.
            </p>
            <p className="text-left">
                De una u otra manera el variar de música de época y de ritmo es para mí el equivalente a darme un pequeño viaje donde yo estoy viviendo, lo que pasa dentro de la canción y transportase por un segundo de mi propia realidad y decir wow como es que le ocurrió esto, que le llevó a mezclar esto y esa intriga me ha llevado a investigar y conocer el trasfondo de una canción y es algo maravilloso porque de una u otra manera todo cambia, ya sabes el porqué de la letra, que vivía el artista y le da un nuevo significado totalmente porque todo encaja ya no solo es una canción y pasa a ser un pedacito de historia del artista.
            </p>
            <img src={tiempo} alt="" />
            <p className="text-left">
                Lo que quiero que se lleven de este artículo es que cada uno tiene su propia banda sonora y que no tengan miedo compartirla con los demás, porque cada uno baila y canta a su ritmo. Sigan escuchando música increíble e intenten de vez en cuando experimentar algo nuevo, se van a sorprender de la cantidad de música que nunca han escuchado y que podrían disfrutar dejando de lado los prejuicios.
            </p>
        </div>
    </section>
</article>
  )
}
