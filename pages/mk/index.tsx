import DownloadRow from '../../components/DownloadRow';
import { Row, Col } from '../../components/Grid';
import { RowThumbnail } from '../../components/RowThumbnail';
import { Tag } from '../../components/Tag';
import { ratingSchema } from '../../components/utils';

const translations = {
  download: 'Преземете CS 1.6',
  directDownload: 'Преземете с сайта',
  torrentDownload: 'Torrent файл'
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
            Откриена во 2003 година како Counter-Strike 1.6 стана една од најпознатите игри некогаш
            направени. Нашата инсталација CS 1.6 обезбедува најдобро искуство со игри. Ова
            поставување вклучува конфигурација со висок FPS и најнова верзија за изградба. Главната
            идеја за играта нè доведува до два борбени тима еден против друг (контратерористи и
            терористи), двата тима имаат свое уникатно оружје, вклучува пушки, ножеви и гранати.
          </p>
          <ul className='list-disc list-inside'>
            <li>Оваа верзија е компатибилна со Windows 10, 8, 7, vista, XP</li>
            <li>Поставувањето без пареа ги вклучува најновите ажурирања од 2021 година</li>
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
            Онлајн играта е најистакната во светот на технологијата (наука за механичките и
            индустриските уметности). Знаеме дека луѓето се целосно зафатени со сопствен бизнис или
            вработување. Секој човек работи во својот живот. Сите луѓе знаеме дека животот во светот
            на телекомуникациите е доволно зафатен, но оваа технологија обезбедува и забава во форма
            на игри. Тие ја обезбедуваат најпрекрасната, најспектакуларната, прекрасна игра.
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
            Дали го барате најзачудувачкиот софтвер во овој технолошки свет? Се разбира, вашиот
            одговор е да така; Ви предлагам да преземете Counter-Strike 1.6. Во денешно време
            Counter-Strike е најпопуларната, привлечна игра во светот на компјутерите. Знаеме
            безброј луѓе кои многу ги сакаат игрите, така што тие луѓе ја играат играта
            Counter-Strike 1.6. Сигурно и гарантираме дека ја цените оваа игра. Бидејќи во 2018
            година многу луѓе ја преземаат играта Counter-Strike. Тие сигурно ја забавуваат играта
            Counter-Strike. Нашата главна цел и цел е да уживате и да ја играте нашата игра за
            преземање Counter-Strike 1.6.
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
            Значи, ние го поставуваме Counter-Strike 1.6 преземањето на сопствено ваше. Значи, ајде
            да одиме, ви ја кажувам предноста или претпочитањето за играње на преземањето
            Counter-Strike 1.6. Можете да играте како терорист и како контрасила. Да претпоставиме
            дека сте го измориле иритираниот зафатен и досаден живот заедно со прекумерната работа,
            тогаш можете да си играте со вашите пријатели, член на семејството итн. Една од главните
            предности на играњето Counter-Strike 1.6 е активно во вашиот ум и размислување.
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
            Прво одите на веб-страницата за бесплатно преземање counter-strike1.6, а потоа преземете
            ја играта Следно инсталирајте го поставувањето за counter-strike 1.6 на вашите
            компјутери, мобилни телефони, лаптоп. во играњето. Во 2018 година безброј луѓе го
            инсталираат преземањето Counter-Strike 1.6 2018 и незаборавно, импресивно уживање.
            Поради нашата суштинска цел, шемата е да уживаме, да се забавуваме нашата сакана публика
            Значи, го презедовме најважното, основните чекори се бесплатно преземање на преземањето
            Counter-Strike 1.6 Таа логика е безброј општество инсталирајте Counter-Strike 1.6 и
            негувајте и забавуваат.
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
            Многу луѓе инспирираат игра со Counter-Strike 1.6. Ако пребарувате во Интернет
            Counter-Strike 1.6, многу луѓе ја сакаат оваа игра дури и некои луѓе го менуваат својот
            живот оваа игра. Знаеме дека многу луѓе не ги интересираат онлајн игрите и не ја играат
            оваа игра Но, тие луѓе ја учат онлајн играта како нашата Counter-Strike 1.6. Но, се
            поставува прашањето како тие луѓе ги учат игрите? Не грижете се тие луѓе. Сега
            технологијата на денот го решава целиот проблем, така што овие луѓе бараат контра-штрајк
            1.6 и учат сè, потоа инсталираат контра-штрајк 1.6 и уживаат.
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
            Ако ја играте играта Counter-strike 1.6 најактивни, ефективни и многу идеи во вашиот ум
            за тоа како да го поминете животот во конкурентен свет или земете ја и довербата. Имајте
            на ум дека ви кажуваме повторно и повторно контра-штрајк 1.6 бесплатно преземање на
            вашиот компјутер, па зошто одите во компјутерски клуб и плаќате пари Не, ги зачувавте
            парите и уживајте во најновата верзија против удари, најневеројатната прекрасна. Се
            надевам дека ќе го инсталирате поставката за counter-strike 1.6 и ќе уживате премногу.
            Среќно да го играте. Ти ветувам премногу уживаш.
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
            Стандардните параметри на датотеката CS1.6 exe: верзија на моторот (1.1.2.6 build 4554),
            големина на датотека за поставување 200Mb, двоен протокол ќе им овозможи на серверите
            P47 и P48 да работат. Нашиот Counter-strike е заштитен од различни малициозен софтвер:
            разни промени при притискање на тастатурата, автоматско вчитување на сервери за
            малициозен софтвер, промени во Config.cfg и друго.
          </p>
        </Col>
      </Row>
      <DownloadRow lazy={true} translations={translations} />
      <Tag># Counter-Strike 1.6</Tag>
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
            Кликнете на врската за преземање, изберете го типот на преземање, директно преземање ако
            вашиот интернет е брз и за бавен интернет изберете торент. Извршете ја датотеката
            Counter-Strike-install.exe и изберете го директориумот каде што ќе се инсталираат
            главните инсталирани датотеки, препорачано да ги користите стандардните поставки. По
            инсталацијата, побарајте икона на вашиот десктоп, кликнете двапати на неа и уживајте во
            најдоброто искуство со игри.
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
            Откако ќе ја преземете и инсталирате Counter-Strike 1.6, отворете најдете сервери од
            списокот со мени. Земете кој било сервер и притиснете Поврзи.
          </p>
          <div className='text-2xl p-4 text-amber-300'>Официјални поставки за CS 1.6</div>
          <p className='text-justify p-4'>
            <a href='https://gamebanana.com/scripts/9454' rel='noopener' className='text-sky-500'>
              Default 1.6 config
            </a>{' '}
            - тоа е оригинална конфигурациска датотека cs што содржи стандардни поставки по вентил!
            додадена дополнителна поставка што ја подобрува приоритизирањето на перформансите на fps
            и доведување на ова поставување cs на ново ниво.
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
          <h3 className='text-2xl text-amber-300'>Минимални системски барања за игра CS 1.6.</h3>
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
          <h3 className='text-2xl text-amber-300'>Препорачани системски барања за игра CS 1.6.</h3>
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
        Counter-Strike за прв пат беше развиен во 1999 година и оттогаш еволуираше преку
        високотехнолошки иновации и модификации за да стане најдобрата онлајн игра во светот.
        Станува уште подобро бидејќи е %100 БЕСПЛАТНО! Без скриени такси или трошоци, кликнете на
        копчето за преземање и подгответе се да уживате во најзабавната игра со прва стрелачка
        досега. Како сето тоа започна
      </p>

      <p className='text-justify py-4'>
        Уште од неговото прво издавање од Valve L.L.C од дизајнерите Минг Ле и Џеси Клиф пред повеќе
        од две децении, а сепак, Counter-Strike сè уште се игра низ целиот свет до денес. Џеси Клиф
        и Минг Ле создадоа нераскинливо партнерство во време кога креаторите на игри посветуваа
        малку или никакво внимание на реалистичните игри. Научно-фантастичните игри владееја на
        денот. Минг Ле и Џеси Клиф беа дел од тимот кој го разви Action Quake II, но Минг Ле беше
        тој што ја предложи идејата да се создаде бесплатна игра со повеќе играчи што комбинира
        оружје и антитероризам. По создавањето, направени се неколку преработки, но Counter-Strike
        1.6 е последното големо софтверско ажурирање на играта.
      </p>

      <p className='text-justify py-4'>
        Counter-Strike е една од најиграните игри на сите времиња. Како резултат на неговата
        конкурентна природа, Counter-Strike ве води на возбудливо патување кое бара часови игра до
        совршенство.
      </p>
      <h3 className='text-2xl text-amber-300'>СТАРТ НА ИГРАТА</h3>

      <p className='text-justify py-4'>
        На почетокот на играта, ќе ви биде овозможена опција која вели „нова игра“. Кликнете на ова
        копче за да креирате сопствен сервер. Погрижете се да се придржувате до конкретниот сервер
        бидејќи приклучувањето на случаен сервер го става вашиот компјутер на ризик од преземање
        вирус или злонамерен софтвер. Ќе ви бидат обезбедени 800 долари и неколку оружја на
        почетокот на играта. Обезбедените пари може да се искористат за купување повеќе оружја кои
        се неопходни за да ви помогнат да ги елиминирате вашите непријатели и да освоите повеќе
        поени! Како што продолжувате да постигнувате победа на секоја мапа или мисија, заработувате
        повеќе пари за да купите повеќе опрема. Една возбудлива карактеристика на играта е лоцирање
        или ширење на бомба. Терористот ќе се обиде да бомбардира област, а потоа ќе ја скрие
        бомбата на видно место кое е премногу незгодно за да ја дознаете. Ваша задача ќе биде да ги
        спречите да ја сокријат бомбата или ако таа веќе е скриена; перкајте го и дифузирајте го.
        Откако ќе успеете, ќе заработите повеќе поени и ќе се преселите на друга карта.
      </p>
      <h3 className='text-2xl text-amber-300'>CS 1.6 НОЖОТ!</h3>

      <p className='text-justify py-4'>
        Ножот е едно од најважните оружја за опремување во CS. Два убоди на непријателот и тие се
        елиминирани. Но, трикот е; бара мајсторство. Часовите на игра ќе ве научат како правилно да
        ракувате со ножот во CS и да погодите што, тој е потполно бесплатен!
      </p>
      <iframe
        title='cs 1.6 game'
        height='345'
        className='w-full my-10'
        loading='lazy'
        src='https://www.youtube.com/embed/3VkLB0rWImE'
      />

      <h3 className='text-2xl text-amber-300'>HOW TO AVOID GETTING HIT</h3>
      <p className='text-justify py-4'>
        За разлика од другите игри, кога ќе умрете во Counter-Strike, вие сте надвор за тој круг.
        Ова е главната причина зошто играчите се обидуваат да останат живи што е можно повеќе, а тоа
        е многу остварливо ако одлучите да ги замолите овие стратегии
      </p>

      <ul className='list-disc list-inside py-4'>
        <li>
          избегнувајте отворени престрелки и секогаш кога ќе се најдете во таква ситуација, не
          останувајте таму предолго.
        </li>
        <li>
          Секогаш кога ќе му пријдете на непријателот од напред, немојте да бидете статични. Движете
          се наоколу; клекнете колку што можете почесто.
        </li>
        <li>
          Користете капак за време на борбите за да ве заштити од снајперисти особено кога сте на
          отворено.
        </li>
      </ul>

      <h3 className='text-2xl text-amber-300'>Maps</h3>
      <p className='text-justify py-4'>
        Има многу возбудливи сцени во Counter-Strike 1.6, но еве некои од мапите на кои треба да се
        радувате
      </p>

      <ul className='list-disc list-inside'>
        <li>
          <b>Aztec</b> - <b>Aztec</b> е една од најголемите мапи.
        </li>
        <li>
          <b>Cbble</b> – Во светлината на неодамнешните владини предлози, Господ Вилијам треба да
          биде заштитен со сите можни средства, иако тоа значи вашиот живот. Вашата главна цел е да
          го заштитите од секој терористички напад и да ги побиете нивните планови најбрзо што
          можете.
        </li>
        <li>
          <b>Dust</b> – Ова е возбудлива мапа со распоред на Блискиот Исток. Дизајнот и
          карактеристиките на оваа мапа се исто толку реални како и вистинската работа!
        </li>
        <li>
          <b>Inferno</b> – поставена околу пладне, оваа карта претрпе неколку измени за да создаде
          подобро корисничко искуство.
        </li>
      </ul>

      <h3 className='text-2xl text-amber-300'>Турнири</h3>

      <p className='text-justify py-4'>
        Настрана од беспрекорното корисничко искуство, токму тука е главната причина зошто Counter
        Strike 1.6 продолжува и секогаш ќе биде најдобрата онлајн игра со прва стрелачка игра. Во
        2018 година, Valve спонзорираше околу четири различни Counter-Strike турнири од 50.000
        долари во Лондон. Оваа година, најавен е уште еден круг на шампионати со вкупна награда од
        околу 200.000 американски долари.
      </p>

      <iframe
        title='cs 1.6 game'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/yTu1ODceGn4'
      />

      <p className='text-justify py-4'>
        Што чекате, кликнете на копчето за преземање и започнете го вашето патување до сосема ново
        искуство со игри, а ако играте напорно, исто така и некои одлични пари!
      </p>
      <p className='text-justify pt-4 pb-24'>
        Фуснота: За неупатените, Counter-Strike е подобро да се ужива со пријателите. Можете да
        започнете со играње против ботови, но понекогаш може да стане досадно, затоа поканете ги
        вашите пријатели да преземаат, да создаваат тимови и да се натпреваруваат. Нека победи
        најдобриот тим, со среќа и нека шансите засекогаш да бидат во ваша корист.
      </p>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Download | Преузмите Counter-Strike 1.6 Full Version',
    description:
      'Откриена во 2003 година како Counter-Strike 1.6 стана една од најпознатите игри некогаш направени. Нашата инсталација CS 1.6 обезбедува најдобро искуство со игри. Ова поставување вклучува конфигурација со висок FPS и најнова верзија за изградба. Главната идеја за играта нè доведува до два борбени тима еден против друг (контратерористи и терористи), двата тима имаат свое уникатно оружје, вклучува пушки, ножеви и гранати.'
  },
  schema: ratingSchema({ ratingValue: '4.7', ratingCount: '16864' })
};
