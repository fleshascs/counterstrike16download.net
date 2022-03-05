import AdSense from 'react-adsense';
import DownloadRow from '../../components/DownloadRow';
import { Row, Col } from '../../components/Grid';
import { RowThumbnail } from '../../components/RowThumbnail';
import { Tag } from '../../components/Tag';
import { ratingSchema } from '../../components/utils';

const translations = {
  download: 'Скачать КС 1.6',
  directDownload: 'Скачать с сайта',
  torrentDownload: 'Torrent файл'
};

export default function Page() {
  return (
    <>
      <AdSense.Google
        client='ca-pub-3219722052726085'
        slot='4013757856'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      />
      <DownloadRow lazy={false} translations={translations} />
      <Row>
        <Col>
          <RowThumbnail
            alt='original KC 1.6 game'
            src={require('../../images/game/header.jpg?resize&size=485')}
            webp={require('../../images/game/header.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>
            Обнаруженный в 2003 году как Counter-Strike 1.6 стал одной из самых известных игр,
            когда-либо сделанных. Наша установка КС 1.6 обеспечивает лучший игровой опыт. Эта
            установка включает в себя высокую конфигурацию FPS и новейшую версию сборки. Основная
            идея игры сводит нас к двум противостоящим друг другу боевым командам (Контр-Террористы
            и террористы), у обеих команд есть свое уникальное оружие, в него входят винтовки, ножи
            и гранаты.
          </p>
          <ul className='list-disc list-inside'>
            <li>
              <span className='text-amber-300'>Полная версия Counter Strike 1.6</span> с Последняя
              сборка 8684
            </li>
            <li>Эта версия совместима с Windows 10, 8, 7, Vista, XP.</li>
            <li>KC 1.6 Non Steam Setup включает последние обновления</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            alt='KC 1.6 installer'
            src={require('../../images/game/game.png?resize&size=485')}
            webp={require('../../images/game/game.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <Tag># Counter-Strike 1.6</Tag>

          <p className='text-justify p-4'>
            Онлайн игра является наиболее заметным в технологии (наука механического и промышленного
            искусства) мира. Мы знаем, что люди полностью заняты в собственном бизнесе или
            занятости. Все люди работают в собственной жизни. Мы все знаем, что Телекоммуникации
            мировой жизни достаточно заняты, но эта технология также обеспечивает развлечения в виде
            игр. Они представляют собой самую чудесную, зрелищную, сказочную игру.
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
            Вы ищете самое соблазнительное потрясающее программное обеспечение в этом
            технологическом мире? Конечно, ваш ответ да так; я предлагаю Вам Counter-Strike 1.6
            скачать. На сегодняшний день Counter-Strike является самой популярной, привлекательной
            игрой в компьютерном мире. Мы знаем бесчисленное множество людей, очень любящих игры,
            поэтому эти люди играют в игру Counter-Strike 1.6. Мы уверены и гарантируем, что вы
            оцените эту игру. Потому что в 2018 году многие люди скачивают игру Counter-Strike. Они
            наверняка развлекают игру Counter-Strike. Наша главная цель и цель-вы наслаждаетесь и
            играете в нашу игру Counter-Strike 1.6 download.
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
            Итак, мы настроили Counter-Strike 1.6 скачать в собственном вашем аккаунте. Итак,
            давайте я говорю вам преимущество или предпочтение играть в Counter-Strike 1.6 скачать.
            Вы можете играть как террорист и как контрфорс. Предположим, что вы устали раздраженный
            занятой и скучной жизни наряду с переутомлением, то вы можете играть с друзьями, членами
            семьи и т.д. Одним из главных преимуществ игры Counter-Strike 1.6 является активность в
            вашем сознании и мышлении.
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
            Сначала вы идете на сайт counter-strike1.6 скачать бесплатно затем скачать игру далее
            установить counter-strike 1.6 setup в ваших компьютерах, мобильных телефонах, ноутбуках
            я обязательство вам достаточно нравится, а также нравится, однако первоначальный опыт,
            участие и интерес к игре. В 2018 году бесчисленные люди устанавливают Counter-Strike 1.6
            скачать 2018 и запоминающимся, впечатляющим наслаждаться. По причине нашей основной
            цели, схема заключается в том, чтобы наслаждаться, развлекать нашу любимую аудиторию,
            поэтому мы приняли самое важное, основные шаги-это бесплатно скачать Counter-Strike 1.6
            скачать, что логика-это бесчисленное общество установить Counter-Strike 1.6 и лелеять и
            развлекать.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='KC 1.6 free setup'
            src={require('../../images/game/setup.png?resize&size=485')}
            webp={require('../../images/game/setup.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Многие люди вдохновляют игру Counter-Strike 1.6. Если вы ищете в Интернете
            Counter-Strike 1.6 многие люди любят эту игру, даже некоторые люди меняют свою жизнь в
            этой игре. Мы знаем, что многие люди не интересуются онлайн-играми и не играют в эту
            игру, но эти люди изучают онлайн-игру, такую как наш Counter-Strike 1.6.Но возникает
            вопрос, как эти люди учатся в играх? Не волнуйтесь эти люди. Теперь технология дня
            решает все проблемы, поэтому эти люди ищут counter-strike 1.6 и изучают все и все, а
            затем устанавливают counter-strike 1.6 и наслаждаются.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <iframe
            title='KC 1.6 game'
            height='345'
            className='w-full'
            loading='lazy'
            src='https://www.youtube.com/embed/y7tGzlHgfOQ'
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Если вы играете в игру Counter-strike 1.6 наиболее активно, эффективно и много идей в
            вашем уме о том, как провести свою жизнь в конкурентном мире или принять уверенность
            также. Обратите внимание, что мы говорим вам снова и снова counter-strike 1.6 скачать
            бесплатно в вашем компьютере так, почему вы собираетесь компьютерный клуб и платить
            деньги Нет, вы сохранили свои деньги и наслаждаться counter-strike последней версии
            самый удивительный потрясающий. Я надеюсь, что вы установите установку counter-strike
            1.6 и получите слишком много удовольствия. Удачи в игре. Я обещаю тебе слишком много
            удовольствия.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='download clean version KC 1.6'
            src={require('../../images/game/cs3-2.png?resize&size=485')}
            webp={require('../../images/game/cs3-2.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Стандартные параметры файла cs1.6 exe: версия двигателя (1.1.2.6 build 4554), размер
            файла установки 200Mb, двойной протокол позволят серверам P47 и P48 работать. Наш
            Counter-strike защищен от различных вредоносных программ: различных изменений нажатия
            клавиш, автоматической загрузки на серверы вредоносных программ, конфигурации.cfg
            изменяет и другое.
          </p>
        </Col>
      </Row>
      <DownloadRow lazy={true} translations={translations} />
      <Tag># Как установить КС 1.6</Tag>
      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='how to download KC 1.6'
            src={require('../../images/game/cs_server_list.png?resize&size=485')}
            webp={require('../../images/game/cs_server_list.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify p-4'>
            Нажмите на ссылку для загрузки, выберите тип загрузки, прямой загрузки, если ваш
            интернет достаточно быстрый и для медленного интернета выберите торрент. Выполните
            Counter-Strike-install.exe-файл и выберите каталог, в котором будут установлены ваши
            основные установочные файлы, рекомендуется использовать настройки по умолчанию. После
            установки найдите значок на рабочем столе, дважды щелкните по нему и наслаждайтесь
            лучшим игровым опытом.
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
            после загрузки и установки Counter-Strike 1.6 откройте find servers из списка меню.
            Возьмите любой сервер и нажмите кнопку Подключиться.
          </p>
          <div className='text-2xl p-4 text-amber-300'>Official КС 1.6 settings</div>
          <p className='text-justify p-4'>
            <a href='https://gamebanana.com/scripts/9454' rel='noopener' className='text-sky-500'>
              Default 1.6 config
            </a>{' '}
            - это оригинальный файл конфигурации cs, который содержит настройки по умолчанию valve!
            добавлена дополнительная настройка, которая улучшает приоритетность производительности
            fps и выводит эту настройку cs на новый уровень.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            loading='lazy'
            alt='KC 1.6 game specs minimal requirements'
            src={require('../../images/game/m4a1dust.png?resize&size=485')}
            webp={require('../../images/game/m4a1dust.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h3 className='text-2xl text-amber-300'>Minimal System req's for КС 1.6 gameplay.</h3>
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
            alt='KC 1.6 game specs recommended requirements'
            src={require('../../images/game/cs4.png?resize&size=485')}
            webp={require('../../images/game/cs4.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h3 className='text-2xl text-amber-300'>Recommended System req's for КС 1.6 gameplay</h3>
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
        Counter-Strike была впервые разработана в 1999 году, и с тех пор она развивалась с помощью
        высокотехнологичных инноваций и модификаций, чтобы стать лучшей в мире онлайн-игрой. Это
        становится еще лучше, потому что это %100 бесплатно! Никаких скрытых платежей или сборов,
        нажмите на кнопку загрузки и приготовьтесь наслаждаться самой интересной игрой первого
        шутера.
      </p>

      <p className='text-justify py-4'>
        С момента своего первого выпуска Valve L. L. C от дизайнеров Ming Le и Jesse Cliffe более
        двух десятилетий назад, и sill еще, Counter-Strike по-прежнему играет во всем мире до
        сегодняшнего дня. Джесси Клифф и Мингл создали Нерушимое партнерство в то время, когда
        создатели игр уделяли мало или вообще не обращали внимания на реалистичные игры.
        Научно-фантастические игры правили днем. Мин ЛЕ и Джесси Клифф были частью команды, которая
        разработала Action Quake II, но именно мин Ле предложил идею создания многопользовательской
        бесплатной игры, которая сочетает в себе оружие и борьбу с терроризмом. После создания было
        сделано несколько ремейков, но Counter-Strike 1.6
      </p>

      <p className='text-justify py-4'>
        Counter-Strike is one of the most-played games of all times. As a result of its competitive
        nature, Counter-Strike takes you on an exciting journey that requires hours of gameplay to
        perfection.
      </p>
      <h3 className='text-2xl text-amber-300'>НАЧАЛО ИГРЫ</h3>

      <p className='text-justify py-4'>
        В начале игры вам будет предоставлена опция с надписью "новая игра". Нажмите на эту кнопку,
        чтобы создать свой собственный сервер. Убедитесь в том, чтобы придерживаться этого
        конкретного сервера, потому что присоединение к случайному серверу ставит ваш компьютер под
        угрозу загрузки вируса или вредоносного программного обеспечения. Вы будете обеспечены $800
        и несколько видов оружия в начале игры. Предоставленные деньги могут быть использованы для
        покупки большего количества оружия, которое необходимо, чтобы помочь вам устранить ваших
        врагов и выиграть больше очков! По мере того, как вы продолжаете добиваться победы на каждой
        карте или миссии, вы зарабатываете больше денег, чтобы купить больше оборудования. Одной из
        интересных особенностей игры является обнаружение или рассеивание бомбы. Террорист будет
        пытаться бомбить область, а затем скрыть бомбу в заметном месте слишком сложно для вас,
        чтобы узнать. Ваша задача будет заключаться в том, чтобы не дать им спрятать бомбу или если
        она уже была спрятана; в ней и рассеять ее. Как только вы преуспеете, вы заработаете больше
        очков и перейдете на другую карту.
      </p>
      <h3 className='text-2xl text-amber-300'>НОЖ!</h3>

      <p className='text-justify py-4'>
        Нож является одним из самых важных видов оружия для оснащения вас в CS. Два удара по врагу,
        и они уничтожены. Но фокус в том, что это требует мастерства. Часы игры научат вас правильно
        обращаться с ножом в CS и угадайте, что это совершенно бесплатно!
      </p>
      <iframe
        title='KC 1.6 game'
        height='345'
        className='w-full my-10'
        loading='lazy'
        src='https://www.youtube.com/embed/3VkLB0rWImE'
      />

      <h3 className='text-2xl text-amber-300'>КАК ИЗБЕЖАТЬ ПОПАДАНИЯ</h3>
      <p className='text-justify py-4'>
        В отличие от других игр, когда вы умираете в Counter-Strike, вы выходите на этот раунд. Это
        основная причина, по которой игроки стараются остаться в живых как можно больше, и это очень
        достижимо, если вы решите умолять эти стратегии
      </p>

      <ul className='list-disc list-inside py-4'>
        <li>
          avoid open gunfights, and whenever you find yourself in such a situation don’t stay there
          for too long.
        </li>
        <li>
          Whenever you approach an enemy from the front, do not be static. Move around; crouch as
          often as you can.
        </li>
        <li>
          Use cover during fights to shield you from snipers especially when you’re out in the open.
        </li>
      </ul>

      <h3 className='text-2xl text-amber-300'>Maps</h3>
      <p className='text-justify py-4'>
        There are lots of exciting scenes in Counter-Strike 1.6 but here are some of the maps you
        should look forward to
      </p>

      <h3 className='text-2xl text-amber-300'>Турниры</h3>

      <p className='text-justify py-4'>
        Помимо бесшовного пользовательского опыта, это прямо здесь является основной причиной,
        почему Counter Strike 1.6 продолжает и всегда будет лучшей онлайн-игрой первого шутера. В
        2018 году Valve спонсировала около четырех различных турниров Counter-Strike стоимостью 50
        000 долларов в Лондоне. В этом году был объявлен еще один раунд чемпионатов с призом на
        общую сумму около $200,000.
      </p>

      <iframe
        title='KC 1.6 game'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/yTu1ODceGn4'
      />

      <p className='text-justify py-4'>
        Что вы ждете, нажмите на кнопку загрузки и начать свой путь к совершенно новому игровому
        опыту, и если вы играете трудно, некоторые прохладные деньги тоже!
      </p>
      <p className='text-justify pt-4 pb-24'>
        Сноска: для непосвященных, Counter-Strike лучше пользоваться с друзьями. Вы можете начать
        играть против ботов, но иногда это может быть скучно, поэтому приглашайте своих друзей
        загружать, создавать команды и соревноваться. Пусть победит лучшая команда, удачи и пусть
        шансы навсегда будут в вашу пользу.
      </p>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'Скачать КС 1.6 - Counter-Strike 1.6 бесплатно',
    description:
      'мы настроили Counter-Strike 1.6 (Скачать КС 1.6) скачать в собственном вашем аккаунте. Итак, давайте я говорю вам преимущество или предпочтение играть в Counter-Strike 1.6 скачать.'
  },
  schema: ratingSchema({ ratingValue: '4.5', ratingCount: '17951' })
};
