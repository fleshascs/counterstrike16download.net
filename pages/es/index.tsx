import DownloadRow from '../../components/DownloadRow';
import { Row, Col } from '../../components/Grid';
import { RowThumbnail } from '../../components/RowThumbnail';
import { Tag } from '../../components/Tag';
import { ratingSchema } from '../../components/utils';

const translations = {
  download: 'Descargar CS 1.6',
  directDownload: 'Directa',
  torrentDownload: 'Torrent'
};

export default function Page() {
  return (
    <>
      <DownloadRow lazy={false} translations={translations} />
      <Row>
        <Col>
          <RowThumbnail
            alt='original cs 1.6 game'
            src={require('../../images/game/header.jpg?resize&size=485')}
            webp={require('../../images/game/header.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>
            Descubierto en 2003 como Counter-Strike 1.6, se convirtió en uno de los juegos más
            conocidos jamás creados. Nuestra instalación de CS 1.6 garantiza la mejor experiencia de
            juego. Esta configuración incluye una configuración de FPS alto y la versión de
            compilación más reciente. La idea principal del juego nos lleva a dos equipos de lucha
            uno contra el otro (Antiterroristas y Terroristas), ambos equipos tienen sus propias
            armas únicas, incluye rifles, cuchillos y granadas.
          </p>
          <ul className='list-disc list-inside'>
            <li>
              <span className='text-amber-300'>Versión completa de Counter Strike 1.6</span> con un
              Última compilación 8684
            </li>
            <li>Esta versión es compatible con Windows 10, 8, 7, vista, XP</li>
            <li>CS 1.6 Non Steam Setup incluye las últimas actualizaciones</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            alt='cs 1.6 installer'
            src={require('../../images/game/game.png?resize&size=485')}
            webp={require('../../images/game/game.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <Tag># Counter-Strike 1.6</Tag>

          <p className='text-justify p-4'>
            El juego en línea es más destacado en el mundo de la tecnología (ciencia de las artes
            mecánicas e industriales). Sabemos que la gente está muy ocupada en su propio negocio o
            empleo. Toda persona que trabaja en su propia vida. Todos sabemos que la vida en el
            mundo de las telecomunicaciones está bastante ocupada, pero esta tecnología también
            proporciona entretenimiento en forma de juegos. Proporcionan el juego más maravilloso,
            espectacular y fabuloso.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='counter strike 1 6 full version'
            src={require('../../images/game/mix.png?resize&size=485')}
            webp={require('../../images/game/mix.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Está buscando el software más fascinante y sorprendente de este mundo tecnológico? Por
            supuesto, su respuesta es sí; Te sugiero que descargues Counter-Strike 1.6. Hoy en día,
            Counter-Strike es el juego más popular y atractivo en el mundo de las computadoras.
            Conocemos a innumerables personas a las que les gustan los juegos, por eso, esas
            personas que juegan al juego Counter-Strike 1.6. Seguro y garantizamos que aprecias este
            juego. Porque en 2018 mucha gente está descargando el juego Counter-Strike. Seguramente
            entretienen el juego Counter-Strike. Nuestro principal propósito y objetivo es que
            disfrutes y juegues nuestra descarga de Counter-Strike 1.6.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='setup the CS game'
            src={require('../../images/game/public.png?resize&size=485')}
            webp={require('../../images/game/public.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Por lo tanto, configuramos la descarga de Counter-Strike 1.6 en su propia cuenta.
            Entonces, vamos, te estoy diciendo la ventaja o preferencia de jugar la descarga de
            Counter-Strike 1.6. Puedes jugar como terrorista y como contrafuerza. Suponiendo que
            estás cansado, irritado, ocupado y aburrido junto con el exceso de trabajo, entonces
            puedes jugar con tus amigos, familiares, etc. Una de las principales ventajas de jugar
            Counter-Strike 1.6 es activa en tu mente y pensamiento.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='download counter strike 1.6 using torrent'
            src={require('../../images/game/about.png?resize&size=485')}
            webp={require('../../images/game/about.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Primero, vaya al sitio web de descarga gratuita de counter-strike 1.6, luego descargue
            el juego. A continuación, instale la configuración de Counter-Strike 1.6 en sus
            computadoras, teléfonos móviles, computadora portátil. en jugar. En 2018, innumerables
            personas instalan Counter-Strike 1.6 descarga 2018 y disfrutan de manera memorable e
            impresionante. Por razón de Nuestro propósito esencial, el esquema es disfrutar,
            entretener a nuestra adorable Audiencia Entonces, tomamos la mayor importancia, los
            pasos esenciales son descargar gratis Counter-Strike 1.6 descargar Esa lógica es
            innumerable sociedad instalar Counter-Strike 1.6 y apreciar y entretener.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='cs 1.6 free setup'
            src={require('../../images/game/setup.png?resize&size=485')}
            webp={require('../../images/game/setup.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Mucha gente inspira un juego de Counter-Strike 1.6. Si buscas en Internet Counter-Strike
            1.6, muchas personas aman este juego, incluso algunas personas cambian su vida con este
            juego. Sabemos que muchas personas no están interesadas en los juegos en línea y no
            juegan a este juego, pero esas personas aprenden el juego en línea como nuestro
            Counter-Strike 1.6. Pero surge la pregunta: ¿Cómo aprender los juegos? No se preocupen
            esas personas. Ahora, la tecnología resuelve todos los problemas, por lo que estas
            personas buscan Counter-Strike 1.6 y aprenden todos y cada uno de ellos, luego instalan
            Counter-Strike 1.6 y disfrutan.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <iframe
            title='cs 1.6 game'
            height='345'
            className='w-full'
            loading='lazy'
            src='https://www.youtube.com/embed/y7tGzlHgfOQ'
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Si juegas el juego Counter-strike 1.6 más activo, efectivo y muchas ideas en tu mente de
            cómo pasar tu vida en un mundo competitivo o toma la confianza también. Tenga en cuenta
            que le decimos una y otra vez que Counter-Strike 1.6 descarga gratis en su computadora,
            así que, ¿por qué va al club de computadoras y paga dinero? Espero que instales la
            configuración de Counter-Strike 1.6 y disfrutes demasiado. Buena suerte jugando. Te
            prometo que disfrutas demasiado.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='download clean version cs 1.6'
            src={require('../../images/game/cs3-2.png?resize&size=485')}
            webp={require('../../images/game/cs3-2.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Los parámetros del archivo exe estándar CS 1.6: versión del motor (1.1.2.6 build 4554),
            tamaño del archivo de configuración 200Mb, protocolo dual permitirá que se ejecuten los
            servidores P47 y P48. Nuestro Counter-strike está protegido contra una variedad de
            malware: varios cambios de pulsación de teclas, carga automática en servidores de
            malware, cambios en Config.cfg y otros.
          </p>
        </Col>
      </Row>
      <DownloadRow lazy={true} translations={translations} />
      <Tag># How to install CS 1.6</Tag>
      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='how to download cs 1.6'
            src={require('../../images/game/cs_server_list.png?resize&size=485')}
            webp={require('../../images/game/cs_server_list.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Haga clic en el enlace de descarga, elija el tipo de descarga, descarga directa si su
            internet es lo suficientemente rápido y para internet lento elija torrent. Ejecute el
            archivo Counter-Strike-install.exe y elija el directorio donde se instalarán los
            archivos intall principales, recomendado para usar la configuración predeterminada.
            Después de la instalación, busque el ícono en su escritorio, haga doble clic en él y
            disfrute de la mejor experiencia de juego.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='counter strike game preview'
            src={require('../../images/game/awp.png?resize&size=485')}
            webp={require('../../images/game/awp.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Después de descargar e instalar Counter-Strike 1.6, abra buscar servidores en la lista
            del menú. Elija cualquier servidor y presione conectar.
          </p>
          <div className='text-2xl p-4 text-amber-300'>Official КС 1.6 settings</div>
          <p className='text-justify p-4'>
            <a href='https://gamebanana.com/scripts/9454' rel='noopener' className='text-sky-500'>
              Default 1.6 config
            </a>{' '}
            - es un archivo de configuración cs original que contiene configuraciones
            predeterminadas por válvula! Se agregó una configuración adicional que mejora el
            rendimiento de preoritización de fps y lleva esta configuración de cs a un nuevo nivel.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='cs 1.6 game specs minimal requirements'
            src={require('../../images/game/m4a1dust.png?resize&size=485')}
            webp={require('../../images/game/m4a1dust.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h3 className='text-2xl text-amber-300'>Minimal System req's for CS 1.6 gameplay.</h3>
          <small>(for Windows 95, 98, 2000, XP)</small>
          <ul className='list-disc list-inside'>
            <li> CPU with a clock speed of 1200 MHz or higher.</li>
            <li> 512 MB of RAM.</li>
            <li> 32 MB video card +.</li>
            <li> 700 MB of free disk space.</li>
            <li> Operating system Windows 95/2000/XP.</li>
            <li> Mouse, keyboard.</li>
            <li> Internet access.</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='cs 1.6 game specs recommended requirements'
            src={require('../../images/game/cs4.png?resize&size=485')}
            webp={require('../../images/game/cs4.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h3 className='text-2xl text-amber-300'>Recommended System req's for CS 1.6 gameplay</h3>
          <small>(for Windows 95, 98, 2000, XP, Vista, 7, 8, 8.1 or 10)</small>
          <ul className='list-disc list-inside'>
            <li> CPU with a clock speed of 1600 MHz or higher.</li>
            <li> 1GB of RAM.</li>
            <li> 128 MB video card +.</li>
            <li> 700 MB of free disk space.</li>
            <li> Operating system Windows 95/2000/XP/Vista/7/8.</li>
            <li> Mouse, keyboard.</li>
            <li> Internet access.</li>
          </ul>
        </Col>
      </Row>

      <DownloadRow lazy={true} translations={translations} />

      <h3 className='text-2xl text-amber-300 mt-12'>Counter-Strike HISTORY</h3>

      <p className='text-justify py-4'>
        Counter-Strike se desarrolló por primera vez en 1999 y, desde entonces, ha evolucionado a
        través de innovaciones y modificaciones de alta tecnología para convertirse en el mejor
        juego en línea del mundo. ¡Se pone aún mejor porque es 100% GRATIS! Sin tarifas ni cargos
        ocultos, haz clic en el botón de descarga y prepárate para disfrutar del juego de primeros
        disparos más entretenido de todos los tiempos. Cómo empezó todo
      </p>

      <p className='text-justify py-4'>
        Desde su primer lanzamiento por Valve L.L.C de los diseñadores Ming Le y Jesse Cliffe hace
        más de dos décadas, y aún hoy, Counter-Strike todavía se juega en todo el mundo hasta hoy.
        Jesse Cliffe y Ming Le forjaron una asociación inquebrantable en un momento en que los
        creadores de juegos prestaban poca o ninguna atención a los juegos realistas. Los juegos de
        ciencia ficción dominaban el día. Ming Le y Jesse Cliffe formaron parte del equipo que
        desarrolló Action Quake II, pero fue Ming Le quien propuso la idea de crear un juego
        gratuito multijugador que combine armas y antiterrorismo. Tras la creación, se han realizado
        varios remakes, pero Counter-Strike 1.6 es la última gran actualización de software del
        juego. CÓMO JUGAR COUNTERSTRIKE
      </p>

      <p className='text-justify py-4'>
        Counter-Strike es uno de los juegos más jugados de todos los tiempos. Como resultado de su
        naturaleza competitiva, Counter-Strike te lleva a un viaje emocionante que requiere horas de
        juego a la perfección.
      </p>
      <h3 className='text-2xl text-amber-300'>INICIO DEL JUEGO</h3>

      <p className='text-justify py-4'>
        Al comienzo del juego, se le proporcionará una opción que dice "juego nuevo". Haga clic en
        este botón para crear su propio servidor. Asegúrese de ceñirse a ese servidor en particular
        porque unirse a un servidor aleatorio pone a su computadora en riesgo de descargar un virus
        o software malicioso. Se le proporcionará $ 800 y algunas armas al comienzo del juego. ¡El
        dinero proporcionado se puede usar para comprar más armas que sean necesarias para ayudarlo
        a eliminar a sus enemigos y ganar más puntos! A medida que continúe logrando la victoria en
        cada mapa o misión, ganará más dinero para comprar más equipo. Una característica
        interesante del juego es localizar o difundir una bomba. El terrorista intentará bombardear
        un área y luego ocultará la bomba en un lugar visible demasiado complicado para que lo
        descubras. Tu tarea será evitar que oculten la bomba o si ya ha estado oculta; aletarlo y
        difundirlo. Una vez que lo consigas, ganarás más puntos y pasarás a otro mapa.
      </p>
      <h3 className='text-2xl text-amber-300'>НОЖ!</h3>

      <p className='text-justify py-4'>
        El cuchillo es una de las armas más importantes para equiparte en CS. Dos puñaladas al
        enemigo y son eliminados. Pero, el truco es; requiere dominio. Horas de juego te enseñarán
        cómo manejar el cuchillo en CS correctamente y adivina qué, ¡es completamente gratis!
      </p>
      <iframe
        title='cs 1.6 game'
        height='345'
        className='w-full my-10'
        loading='lazy'
        src='https://www.youtube.com/embed/3VkLB0rWImE'
      />

      <h3 className='text-2xl text-amber-300'>CÓMO EVITAR GOLPEAR</h3>
      <p className='text-justify py-4'>
        A diferencia de otros juegos, cuando mueres en Counter-Strike, estás fuera para esa ronda.
        Esta es la razón principal por la que los jugadores intentan mantenerse con vida tanto como
        sea posible, y eso es muy alcanzable si decides implorar estas estrategias.
      </p>

      <ul className='list-disc list-inside py-4'>
        <li>
          evite los tiroteos abiertos y, cuando se encuentre en una situación así, no se quede allí
          por mucho tiempo.
        </li>
        <li>
          Siempre que te acerques a un enemigo desde el frente, no seas estático. Moverse; agáchate
          tan a menudo como puedas.
        </li>
        <li>
          Ponte a cubierto durante las peleas para protegerte de los francotiradores, especialmente
          cuando estés al aire libre.
        </li>
      </ul>

      <h3 className='text-2xl text-amber-300'>Maps</h3>
      <p className='text-justify py-4'>
        Hay muchas escenas emocionantes en Counter-Strike 1.6, pero estos son algunos de los mapas
        que deberías esperar.
      </p>

      <ul className='list-disc list-inside'>
        <li>
          <b> Azteca </b>: <b> Azteca </b> es uno de los mapas más grandes.
        </li>
        <li>
          <b> Cbble </b>: a la luz de las recientes propuestas del gobierno, Lord William debe ser
          protegido por todos los medios posibles, aunque eso signifique su vida. Tu principal
          objetivo es protegerlo de todos los ataques terroristas y refutar sus planes lo más rápido
          que puedas.
        </li>
        <li>
          <b> Polvo </b>: este es un mapa interesante con un diseño de Oriente Medio. ¡El diseño y
          las características de este mapa son tan reales como los reales!
        </li>
        <li>
          <b> Inferno </b>: establecido alrededor del mediodía, este mapa ha sufrido varias
          modificaciones para crear una mejor experiencia de usuario.
        </li>
      </ul>

      <h3 className='text-2xl text-amber-300'>Torneos</h3>

      <p className='text-justify py-4'>
        Aparte de la perfecta experiencia del usuario, esta es la razón principal por la que Counter
        Strike 1.6 sigue siendo y siempre será el mejor juego online de primeros disparos. En 2018,
        Valve patrocinó alrededor de cuatro torneos diferentes de Counter-Strike de $ 50,000 en
        Londres. Este año, se ha anunciado otra ronda de campeonatos con un premio por un total de
        aproximadamente $ 200,000.
      </p>

      <iframe
        title='cs 1.6 game'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/yTu1ODceGn4'
      />

      <p className='text-justify py-4'>
        Qué estás esperando? Haz clic en el botón de descarga y comienza tu viaje hacia una
        experiencia de juego completamente nueva y, si juegas duro, ¡también algo de dinero en
        efectivo!
      </p>
      <p className='text-justify pt-4 pb-24'>
        Nota al pie: Para los no iniciados, Counter-Strike se disfruta mejor con amigos. Puedes
        empezar jugando contra bots, pero a veces puede resultar aburrido, así que invita a tus
        amigos a descargar, crear equipos y competir. Deje que gane el mejor equipo, buena suerte y
        que las probabilidades estén siempre a su favor.
      </p>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Download | Counter-Strike 1.6 Descargar gratis FULL ESPAÑOL',
    description:
      'Descubierto en 2003 como Counter-Strike 1.6, se convirtió en uno de los juegos más conocidos jamás creados. Nuestra instalación de CS 1.6 garantiza la mejor experiencia de juego. Esta configuración incluye una configuración de FPS alto y la versión de compilación más reciente. La idea principal del juego nos lleva a dos equipos de lucha uno contra el otro (Antiterroristas y Terroristas), ambos equipos tienen sus propias armas únicas, incluye rifles, cuchillos y granadas.'
  },
  schema: ratingSchema({ ratingValue: '4.6', ratingCount: 567 })
};
