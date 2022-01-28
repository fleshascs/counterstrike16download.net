import DownloadRow from '../../components/DownloadRow';
import { Row, Col } from '../../components/Grid';
import { RowThumbnail } from '../../components/RowThumbnail';
import { Tag } from '../../components/Tag';
import { ratingSchema } from '../../components/utils';

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
            Bu yüzden Counter-Strike 1.6 kurulumunu kendinize göre yapıyoruz. O halde, hadi size
            Counter-Strike 1.6 indirmesini oynamanın avantajını veya tercihini anlatıyorum. Terörist
            ve karşı kuvvet olarak oynayabilirsiniz. Farz edelim ki, aşırı çalışma ile birlikte,
            sinir bozucu, yoğun ve sıkıcı hayattan yoruldunuz, o zaman arkadaşlarınız, aile
            üyeleriniz vb. ile oynayabilirsiniz. Counter-Strike 1.6 oynamanın ana avantajlarından
            biri, zihninizde ve düşüncenizde aktif olmaktır.
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
            Önce counter-strike1.6 ücretsiz indirme web sitesine gidin, ardından oyunu indirin
            Sonraki counter-strike 1.6 kurulumunu bilgisayarlarınıza, Cep Telefonlarınıza, Dizüstü
            Bilgisayarınıza kurun Ben size yeterince zevk ve zevk veriyorum, ancak başlangıçta
            deneyim, katılım ve ilgi oynarken. 2018'de sayısız kişi Counter-Strike 1.6 indirme
            2018'i kuruyor ve unutulmaz, etkileyici bir keyif alıyor. Temel amacımız nedeniyle,
            şema, eğlenmek, sevimli İzleyicimizi eğlendirmek Bu yüzden, en büyük önemi aldık, temel
            adımlar ücretsiz Counter-Strike 1.6 indir Bu mantık sayısızdır toplum Counter-Strike
            1.6'yı kurun ve besleyin ve eğlendirmek.
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
            Birçok kişi bir Counter-Strike 1.6 oyununa ilham verir. İnternette Counter-Strike 1.6'da
            arama yaparsanız, birçok insan bu oyunu sever, hatta bazı insanlar bu oyunun hayatını
            değiştirir. Biliyoruz Birçok insan çevrim içi oyunlara ilgi duymaz ve bu oyunu oynamaz
            Ama bu insanlar bizim Counter-Strike 1.6 gibi çevrim içi oyunu öğreniyorlar. Ama şu soru
            ortaya çıkıyor Bu insanlar Oyunları nasıl öğreniyorlar? O insanları merak etme. Şimdi
            bir günün Teknolojisi tüm sorunları çözüyor, bu yüzden bu insanlar counter-strike 1.6'da
            arama yapıyor ve her şeyi öğreniyor, ardından counter-strike 1.6'yı kuruyor ve keyfini
            çıkarıyor.
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
            Counter-strike 1.6 oyununu oynuyorsanız en aktif, en etkili ve rekabetçi bir dünyada
            hayatınızı nasıl geçireceğinize dair aklınızdaki birçok fikir veya güveni de alın. Size
            tekrar tekrar söylediğimizi belirtmek isteriz ki counter-strike 1.6 ücretsiz indir, bu
            yüzden, neden bilgisayar kulübüne gidiyorsunuz ve para ödüyorsunuz Hayır, paranızı
            biriktirdiniz ve Counter-Strike'ın en son sürümünün en şaşırtıcı çarpıcı tadını çıkarın.
            Umarım karşı saldırı 1.6 kurulumunu kurar ve çok eğlenirsiniz. İyi şanslar. Söz
            veriyorum çok eğleneceksin.
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
            Standart CS1.6 exe dosyası parametreleri: Motor sürümü (1.1.2.6 yapı 4554), kurulum
            dosyası boyutu 200Mb, çift protokol, P47 ve P48 sunucularının çalışmasına izin
            verecektir. Counter-strike'ımız çeşitli kötü amaçlı yazılımlara karşı korunmaktadır:
            çeşitli tuş değişiklikleri, kötü amaçlı yazılım sunucularına otomatik yükleme,
            Config.cfg değişiklikleri ve diğerleri.
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

      <DownloadRow lazy={true} translations={translations} />

      <h3 className='text-2xl text-amber-300 mt-12'>Counter-Strike HISTORY</h3>

      <p className='text-justify py-4'>
        Counter-Strike ilk olarak 1999'da geliştirildi ve o zamandan beri, dünyanın en iyi çevrimiçi
        oyunu olmak için yüksek teknoloji yenilikleri ve modifikasyonları ile gelişti. %100 ÜCRETSİZ
        olduğu için daha da güzelleşiyor! Gizli ücret veya masraf yok, indirme düğmesine tıklayın ve
        şimdiye kadarki en eğlenceli ilk nişan oyununun keyfini çıkarmaya hazırlanın. Her şey nasıl
        başladı?
      </p>

      <p className='text-justify py-4'>
        Valve L.L.C tarafından yirmi yıldan uzun bir süre önce tasarımcılar Ming Le ve Jesse Cliffe
        tarafından piyasaya sürülmesinden bu yana, Counter-Strike bugüne kadar hala tüm dünyada
        oynanıyor. Jesse Cliffe ve Ming Le, oyun yaratıcılarının gerçekçi oyunlara çok az önem
        verdiği veya hiç ilgi göstermediği bir zamanda kırılmaz bir ortaklık kurdular. Bilim kurgu
        oyunları günü yönetti. Ming Le ve Jesse Cliffe, Action Quake II'yi geliştiren ekibin bir
        parçasıydı, ancak silahları ve terörle mücadeleyi birleştiren çok oyunculu ücretsiz bir oyun
        yaratma fikrini öneren Ming Le idi. Oluşturulduktan sonra birkaç yeniden yapım yapıldı,
        ancak Counter-Strike 1.6 oyunun son büyük yazılım güncellemesidir.
      </p>

      <p className='text-justify py-4'>
        Counter Strike, tüm zamanların en çok oynanan oyunlarından biridir. Rekabetçi doğasının bir
        sonucu olarak Counter-Strike, sizi mükemmele ulaşmak için saatlerce oyun oynamayı gerektiren
        heyecan verici bir yolculuğa çıkarıyor.
      </p>
      <h3 className='text-2xl text-amber-300'>OYUNUN BAŞLANGICI</h3>

      <p className='text-justify py-4'>
        Oyunun başında size “yeni oyun” yazan bir seçenek sunulacak. Kendi sunucunuzu oluşturmak
        için bu düğmeye tıklayın. Rastgele bir sunucuya katılmak, bilgisayarınızı bir virüs veya
        kötü amaçlı yazılım indirme riskine sokacağından, söz konusu sunucuya bağlı kaldığınızdan
        emin olun. Oyunun başında size 800$ ve birkaç silah verilecek. Sağlanan para, düşmanlarınızı
        ortadan kaldırmanıza ve daha fazla puan kazanmanıza yardımcı olacak daha fazla silah satın
        almak için kullanılabilir! Her haritada veya görevde zafer kazanmaya devam ettikçe, daha
        fazla ekipman satın almak için daha fazla para kazanırsınız. Oyunun heyecan verici bir
        özelliği, bir bombayı bulmak veya dağıtmaktır. Terörist bir bölgeyi bombalamaya çalışacak ve
        ardından bombayı sizin öğrenemeyeceğiniz kadar göze çarpan bir yere saklayacaktır.
        Göreviniz, bombayı saklamalarını engellemek veya daha önce gizlenmişse; bitirin ve dağıtın.
        Başarılı olduğunuzda daha fazla puan kazanacak ve başka bir haritaya geçeceksiniz.
      </p>
      <h3 className='text-2xl text-amber-300'>BIÇAK!</h3>

      <p className='text-justify py-4'>
        The knife is one of the most important weapons to equip you in CS. Two stabs to the enemy,
        and they’re eliminated. But, the trick is; it requires mastery. Hours of play will teach you
        how to handle the knife in CS properly and guess what, it is entirely free!
      </p>
      <iframe
        title='cs 1.6 game'
        height='345'
        className='w-full my-10'
        loading='lazy'
        src='https://www.youtube.com/embed/3VkLB0rWImE'
      />

      <h3 className='text-2xl text-amber-300'>VARLANMAKTAN NASIL KAÇINILIR</h3>
      <p className='text-justify py-4'>
        Diğer oyunlardan farklı olarak, Counter-Strike'ta öldüğünüzde, o raunt için dışarı
        çıkıyorsunuz. Oyuncuların mümkün olduğunca hayatta kalmaya çalışmasının ana nedeni budur ve
        bu stratejilere başvurmaya karar verirseniz, bu oldukça başarılabilir.
      </p>

      <ul className='list-disc list-inside py-4'>
        <li>
          açık silahlı çatışmalardan kaçının ve kendinizi böyle bir durumda bulduğunuzda orada çok
          uzun süre kalmayın.
        </li>
        <li>
          Bir düşmana önden yaklaştığınızda, statik olmayın. Etrafında yürü; olabildiğince sık
          çömelin.
        </li>
        <li>
          Dövüşler sırasında, özellikle dışarıdayken sizi keskin nişancılardan korumak için siper
          kullanın.
        </li>
      </ul>

      <h3 className='text-2xl text-amber-300'>Maps</h3>
      <p className='text-justify py-4'>
        Counter-Strike 1.6'da pek çok heyecan verici sahne var ama işte dört gözle beklemeniz
        gereken haritalardan bazıları
      </p>

      <ul className='list-disc list-inside'>
        <li>
          <b>Aztek</b> - <b>Aztek</b> en büyük haritalardan biridir.
        </li>
        <li>
          <b>Cbble</b> – Son hükümet önerileri ışığında, Lord William, hayatınız anlamına gelse
          bile, mümkün olan her şekilde korunmalıdır. Ana hedefiniz, onu her terörist saldırıdan
          korumak ve planlarını olabildiğince hızlı bir şekilde çürütmek.
        </li>
        <li>
          <b>Dust</b> – Bu, Orta Doğu düzenine sahip heyecan verici bir harita. Bu haritadaki
          tasarım ve özellikler, gerçek anlaşma kadar gerçek!
        </li>
        <li>
          <b>Inferno</b> – Öğlen civarında geçen bu harita, daha iyi bir kullanıcı deneyimi
          oluşturmak için çeşitli değişikliklerden geçti.
        </li>
      </ul>

      <h3 className='text-2xl text-amber-300'>Turnuvalar</h3>

      <p className='text-justify py-4'>
        Kesintisiz kullanıcı deneyiminin yanı sıra, Counter Strike 1.6'nın her zaman en iyi
        çevrimiçi ilk nişancı oyunu olmaya devam etmesinin ve olmaya devam etmesinin ana nedeni bu.
        2018'de Valve, Londra'da yaklaşık dört farklı 50.000$'lık Counter-Strike turnuvasına sponsor
        oldu. Bu yıl, yaklaşık 200.000 $ değerinde ödülle başka bir şampiyona turu açıklandı.
      </p>

      <iframe
        title='cs 1.6 game'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/yTu1ODceGn4'
      />

      <p className='text-justify py-4'>
        Neyi bekliyorsunuz, indirme düğmesine tıklayın ve yepyeni bir oyun deneyimine yolculuğunuza
        başlayın ve eğer sıkı oynarsanız, biraz da harika para kazanın!
      </p>
      <p className='text-justify pt-4 pb-24'>
        Dipnot: Deneyimsiz olanlar için Counter-Strike, arkadaşlarla daha çok keyif alır. Botlara
        karşı oynamaya başlayabilirsiniz, ancak bazen sıkıcı olabilir, bu nedenle arkadaşlarınızı
        indirmeye, takımlar oluşturmaya ve rekabet etmeye davet edin. En iyi takımın kazanmasına
        izin verin, iyi şanslar ve şanslar sonsuza kadar sizin lehinize olsun.
      </p>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 indir | Indir Counter-Strike 1.6, Ucretsiz Oyna',
    description:
      '2003 yılında Counter-Strike 1.6 olarak keşfedildi ve şimdiye kadar yapılmış en iyi bilinen oyunlardan biri oldu. CS 1.6 kurulumumuz en iyi oyun deneyimini sağlar. Bu kurulum, Yüksek FPS yapılandırmasını ve en yeni yapı sürümünü içerir. Ana oyun fikri bizi karşı karşıya getiren iki takıma (Terörle Mücadele ve Teröristler) getiriyor, her iki takımın da kendine özgü silahları var, tüfekler, bıçaklar ve el bombaları içeriyor.'
  },
  schema: ratingSchema({ ratingValue: '4.5', ratingCount: '6694' })
};
