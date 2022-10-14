import "../Style/App.css"
import "./Style/News.css"
function News() {
  return (
     <div className="News" id="yangi">
        <div className="container">
           <h1 className="Prime_Text">Yangiliklar</h1>
           <div className="Cards">
              <div className="P__Card">
                 <img src="1 (1).jpg" alt="" />
                 <div className="content">
                    <span className="Data__Text">16 yanvar 2022</span>
                    <h1>Toshkent shahar xalq ta'limi bosh boshqarmasi</h1>
                    <p className="Secondary_Text">Toshkent shahar xalq ta'limi bosh boshqarmasi boshlig‘i Yashin Sultonov Uchtepa tumanidagi 295-sonli umumta'lim maktabiga tashrif buyurdi. Tashrif chog‘ida mazkur ta'lim muassasasidagi shart-sharoitlar bilan yaqindan tanishdi. Pedagog-o‘qituvchilar bilan muloqot qildi.</p>
                  </div>
              </div>
              <div className="g_Card">
                 <div className="card">
                    <img src="1 (2).jpg" alt="" />
                    <div className="content">
                       <span className="Data__Text">12 yanvar 5021</span>
                       <h1 className="Text_32">O‘zbekistonda maktab o‘quvchilariga uy vazifasini Telegram orqali yuborishga ruxsat berildi</h1>
                        <p className="Text_26">Ta'lim va fan vazirligi onlayn o‘qish davrida o‘qituvchilarga uy vazifalarini istalgan ijtimoiy tarmoqlar va messendjerlar orqali yuborishga ruxsat berdi. Bularning barchasi Kundalikka ulanish bilan bog‘liq doimiy muammolar tufayli.</p>
                    </div>
                 </div>
                 <div className="card">
                    <img src="1 (3).jpg" alt="" />
                    <div className="content">
                       <span className="Data__Text">12 yanvar 5021</span>
                       <h1 className="Text_32">Hamkorlik, do‘stlik rishtalarini mustahkamlovchi kalitlardan biri!</h1>
                        <p className="Text_26">Kuni Toshkent shahrida O‘zbekiston Yoshlar ittifoqi kecha Toshkent shahar sardorlar Kengashi hamda Sirdaryo viloyati sardorlar Kengashi o'rtasida "Hamkorlik memorandumi" imzolandi. br Memorandumda ikki hudud sardorlari tizimni rivojlantirish.</p>
                    </div>
                 </div>
                 <div className="card">
                    <img src="1 (4).jpg" alt="" />
                    <div className="content">
                       <span className="Data__Text">12 yanvar 5021</span>
                       <h1 className="Text_32">Oila va shaxsiy munosabatlar</h1>
                        <p className="Text_26">Toshkent shahar Uchtepa tumani 295-maktabning psixologi "Oila va shaxsiy munosabatlar" mavzusida trening va meditatsiya o'tkazildi. Toshkent shahar Uchtepa tumani 295-maktabning psixologi "Oila va shaxsiy munosabatlar" mavzusida trening va meditatsiya o'tkazildi</p>
                    </div>
                 </div>
              </div>
              <div className="g_Card">
                 <div className="card">
                    <img src="1 (5).jpg" alt="" />
                    <div className="content">
                       <span className="Data__Text">12 yanvar 5021</span>
                       <h1 className="Text_32">QISHGI TA'TIL UZAYTIRILADI</h1>
                        <p className="Text_26">Xalq ta'limi tizimidagi direktor, direktorning o‘quv va ma'naviy-ma'rifiy ishlar bo‘yicha o‘rinbosarlari hamda pedagog-o‘qituvchilarning xalqaro standartlar asosida ishlab chiqarilgan Milliy o‘quv dasturlari asosida malakalarini oshirish kurslarini tashkil etish, shuningdek, o‘quvchi - yoshlar o‘rtasida mavsumiy gripp kasalligining keskin ko‘payishining oldini olish maqsadida xalq ta'limi vazirligi qishki ta'til kunlarini 2022 yil 24 yanvarga qadar uzaytirilganini ma'lum qiladi.</p>
                    </div>
                 </div>
                 <div className="card">
                    <img src="1 (6).jpg" alt="" />
                    <div className="content">
                       <span className="Data__Text">12 yanvar 5021</span>
                       <h1 className="Text_32">MEN ESHITGAN ERTAKLAR</h1>
                        <p className="Text_26">Respublika bolalar kutubxonasi O‘zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev rahbarligida  2019 yil 19 mart kuni o‘tkazilgan videoselektor majlisining 12-sonli bayonida belgilab berilgan vazifalarga muvofiq yosh avlodda xalq og‘zaki ijodiga nisbatan qiziqishni shakllantirish ularda og‘zaki va yozma ijodni yuksaltirishda ko‘maklashish hamda o‘quvchilarning qishki ta’tillarini mazmunli o‘tkazish.</p>
                    </div>
                 </div>
                 <div className="card">
                    <img src="1 (7).jpg" alt="" />
                    <div className="content">
                       <span className="Data__Text">12 yanvar 5021</span>
                       <h1 className="Text_32">Seshanba, 11 yanvar kuni, mamlakatimizdagi barcha maktab o‘quvchilari darsga kelishi shart</h1>
                        <p className="Text_26">Maktab o‘quvchilari uchun ta'til uzaytirilmadi. Qonunga ko‘ra, maktab o‘quvchilari uchun qishki ta'til 28 dekabrdan 10 yanvargacha belgilangan.</p>
                    </div>
                 </div>
              </div>
           </div>
           <button className="btn_prime">Ko'proq ko'rish</button>
        </div>
    </div>
  );
}

export default News;  