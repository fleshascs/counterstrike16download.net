import DownloadRow from '../../components/DownloadRow';
import { Row, Col } from '../../components/Grid';
import { RowThumbnail } from '../../components/RowThumbnail';
import { Tag } from '../../components/Tag';

const translations = {
  download: 'Indir CS 1.6',
  directDownload: 'Sitesinden indir',
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
            This is full Counter strike 1.6 client, this CS 1.6 game client don’t have any
            adverstiments. This Counter-Strike 1.6 client is protected from modification of the game
            files (Slowhack – CS 1.6 game files changes, without the player’s consent).
          </p>

          <p className='text-justify pb-4'>
            2003 yılında Counter-Strike 1.6 olarak keşfedildi ve şimdiye kadar yapılmış en iyi
            bilinen oyunlardan biri oldu. CS 1.6 kurulumumuz en iyi oyun deneyimini sağlar. Bu
            kurulum, Yüksek FPS yapılandırmasını ve en yeni yapı sürümünü içerir. Ana oyun fikri
            bizi karşı karşıya getiren iki takıma (Terörle Mücadele ve Teröristler) getiriyor, her
            iki takımın da kendine özgü silahları var, tüfekler, bıçaklar ve el bombaları içeriyor.
          </p>
          <ul className='list-disc list-inside'>
            <li>Windows 10, 8, 7, vista, XP ile uyumlu bu sürüm</li>
            <li>Steam Dışı Kurulum, en son 2019 güncellemelerini içerir</li>
          </ul>

          <p className='text-justify pb-4'>
            CS 1.6 indir, cs 1.6 full indir, counter strike 1.6 indir Etiketler : cs 1.6 indir ,
            counter strike 1.6 indir , cs 1.6 full indir , counter strike 1.6 full indir, botlu cs
            1.6 indir , virüssüz cs 1.6 indir.
          </p>
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
            Çevrimiçi oyun, teknoloji (mekanik ve endüstriyel sanatlar bilimi) dünyasında en
            belirgin olanıdır. İnsanların kendi işleriyle veya işleriyle meşgul olduklarını
            biliyoruz. Herkes kendi hayatında çalışıyor. Hepimiz biliyoruz ki telekomünikasyon dünya
            hayatı yeterince meşgul ama bu teknoloji aynı zamanda oyun şeklinde Eğlence de sağlıyor.
            En muhteşem, muhteşem, muhteşem oyunu sağlarlar.
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
            Bu Teknoloji dünyasındaki en cezbedici çarpıcı Yazılımı mı arıyorsunuz? Tabii ki
            cevabınız evet yani; Counter-Strike 1.6 indirmenizi öneririm. Günümüzde Counter-Strike,
            Bilgisayar dünyasındaki en popüler ve çekici oyundur. Sayısız insanın oyunları çok
            sevdiğini biliyoruz, bu yüzden Counter-Strike 1.6 oyununu oynayanlar. Bu oyunu takdir
            ettiğinizden emin ve garanti ediyoruz. Çünkü 2018'de birçok Kişi Counter-Strike oyununu
            indiriyor. Counter-Strike oyununu kesinlikle eğlendiriyorlar. Asıl amacımız ve
            hedefimiz, oyunumuzu Counter-Strike 1.6 indirmeden zevk alarak oynamanızdır.
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
            Bu yüzden CS 1.6 kurulumunu kendinize göre yapıyoruz. O halde, hadi size Counter-Strike
            1.6 indirmesini oynamanın avantajını veya tercihini anlatıyorum. Terörist ve karşı
            kuvvet olarak oynayabilirsiniz. Farz edelim ki, aşırı çalışma ile birlikte, sinir
            bozucu, yoğun ve sıkıcı hayattan yoruldunuz, o zaman arkadaşlarınız, aile üyeleriniz vb.
            ile oynayabilirsiniz. Counter-Strike 1.6 oynamanın ana avantajlarından biri, zihninizde
            ve düşüncenizde aktif olmaktır.
          </p>
        </Col>
      </Row>

      <DownloadRow lazy={true} translations={translations} />
      <Tag># How to install Counter-Strike 1.6</Tag>
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
            İndirme bağlantısını tıklayın, indirme türünü seçin, internetiniz hızlıysa doğrudan
            indirmeyi enoth ve yavaş internet için torrent'i seçin. Counter-Strike-install.exe
            dosyasını yürütün ve varsayılan ayarları kullanmanız önerilir, ana dahili dosyalarınızın
            yükleneceği dizini seçin. Kurulumdan sonra masaüstünüzde simgeyi arayın, üzerine çift
            tıklayın ve en iyi oyun deneyiminin keyfini çıkarın.
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
            Counter-Strike 1.6'yı indirip yükledikten sonra, menü listesinden sunucuları bul'u açın.
            Herhangi bir sunucuyu seçin ve bağlan'a basın.
          </p>
          <div className='text-2xl p-4 text-amber-300'>Official CS 1.6 settings</div>
          <p className='text-justify p-4'>
            <a href='https://gamebanana.com/scripts/9454' rel='noopener' className='text-sky-500'>
              Default 1.6 config
            </a>{' '}
            - Valve tarafından varsayılan ayarları içeren orijinal bir cs yapılandırma dosyasıdır!
            fps önceliklendirme performansını artıran ve bu cs kurulumunu yeni bir düzeye getiren
            ekstra ayar eklendi.
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
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 indir | Indir Counter-Strike 1.6, Ucretsiz Oyna',
    description:
      'This is full Counter strike 1.6 client, this CS 1.6 game client don’t have any adverstiments. This Counter-Strike 1.6 client is protected from modification of the game files (Slowhack – CS 1.6 game files changes, without the player’s consent).'
  },
  schema: JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'VideoGame',
    operatingSystem: 'Windows',
    name: 'Counter Strike 1.6',
    url: 'https://counterstrike16download.net/tr',
    description: 'Counter-Strike 1.6 indir ve Ücretsiz Oyna!',
    inLanguage: ['Türkçe'],
    applicationCategory: 'Game',
    publisher: 'Valve',
    genre: ['1st Person'],
    processorRequirements: '500 Mhz',
    memoryRequirements: '96 Mb',
    storageRequirements: '1 Gb',
    gamePlatform: ['PC game'],
    sameAs: 'https://tr.wikipedia.org/wiki/Counter-Strike',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '2101243' },
    author: { '@type': 'Organization', name: 'Valve', url: 'http://www.valvesoftware.com/' }
  })
};
