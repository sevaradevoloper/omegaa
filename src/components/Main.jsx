import React from 'react';
import { useTranslation } from 'react-i18next'; // Translation hookni import qilishni unutmang

// Import qilingan rasmlar
import HeroImg from '../assets/Img2.svg';
import SideImg from '../assets/Img3.svg';
import Testi1 from '../assets/Oval.svg';
import Testi2 from '../assets/Oval1.svg';
import Testi3 from '../assets/Oval2.svg';
import Bg from '../assets/BG.svg';

const Main = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full overflow-hidden bg-white font-sans text-[#161C2D]">
      
      {/* 2. SECTION: Features */}
      <section 
        className="py-24 px-6 relative overflow-hidden bg-[#473BF0] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Bg})` }} 
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-[1.2]">
            {/* JSON dagi massivni map qilish */}
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-3 transition-all duration-300">
                <div className={`text-2xl mb-6 w-14 h-14 flex items-center justify-center rounded-2xl ${
                  index === 0 ? "bg-red-100 text-red-500" : 
                  index === 1 ? "bg-yellow-100 text-yellow-500" : 
                  index === 2 ? "bg-blue-100 text-blue-500" : "bg-green-100 text-green-500"
                }`}>
                  {index === 0 ? "📊" : index === 1 ? "📱" : index === 2 ? "📄" : "💬"}
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#161C2D]">
                  {t(`main.features_section.items.${index}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`main.features_section.items.${index}.desc`)}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex-1 text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t('main.features_section.title')}
            </h2>
            <p className="text-indigo-100/80 text-lg leading-relaxed">
              {t('main.features_section.description')}
            </p>
            <button className="group flex items-center gap-2 font-bold text-lg border-b-2 border-white pb-1 hover:text-indigo-200 hover:border-indigo-200 transition-all">
              {t('main.features_section.btn')} <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Hero Second Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            {t('main.hero_second.title')}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            {t('main.hero_second.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-[#F04037] hover:bg-[#d93a32] text-white px-9 py-4 rounded-lg font-bold transition-all shadow-lg shadow-red-200">
              {t('main.hero_second.btn')}
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 ">
            <img src={HeroImg} alt="Hero" className="w-full max-w-[500px] h-auto rounded-[2rem] shadow-xl transform hover:scale-105 hover:-rotate-2 transition-all duration-500 ease-in-out border-8 border-white/10 object-cover" />
          </div>
          <div className="absolute bottom-10 -left-8 z-20 bg-[#FFBD06] p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[280px]">
            <div className="bg-[#473BF0] p-3 rounded-full text-white text-xl">🔔</div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-700 opacity-80">{t('main.hero_second.notif_tag')}</p>
              <p className="font-extrabold text-sm">{t('main.hero_second.notif_title')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 relative order-2 md:order-1">
          <div className="bg-indigo-50 dark:bg-gray-800 rounded-[2.5rem] p-4">
            <div className="bg-white dark:bg-gray-700 rounded-[2rem] overflow-hidden border-8 border-white dark:border-gray-700">
              <img src={SideImg} alt="Dashboard" className="w-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 bg-[#F04037] text-white p-6 rounded-2xl shadow-2xl max-w-[220px] transform -rotate-3">
              <p className="text-[10px] uppercase font-bold opacity-70 mb-2">{t('main.benefits.deadline_tag')}</p>
              <p className="font-bold text-base leading-tight">{t('main.benefits.deadline_msg')}</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 space-y-10 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#161C2D]">
            {t('main.benefits.title')}
          </h2>
          <p className="text-gray-500 text-lg">
            {t('main.benefits.description')}
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-5 group">
              <div className="bg-red-50 p-4 rounded-2xl text-[#F04037] group-hover:scale-110 transition-transform">📁</div>
              <div>
                <h4 className="font-bold text-xl">{t('main.benefits.feature1_title')}</h4>
                <p className="text-gray-400 mt-1 italic">{t('main.benefits.feature1_subtitle')}</p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="bg-blue-50 p-4 rounded-2xl text-[#473BF0] group-hover:scale-110 transition-transform">📱</div>
              <div>
                <h4 className="font-bold text-xl">{t('main.benefits.feature2_title')}</h4>
                <p className="text-gray-400 mt-1">{t('main.benefits.feature2_subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: Testimonials */}
      <section className="bg-[#F4F7FA] py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-[#161C2D]">
            {t('main.testimonials.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gray-100 flex flex-col justify-between">
                 <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img src={i === 0 ? Testi1 : i === 1 ? Testi2 : Testi3} alt="User" className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <h4 className="font-bold text-base">{t(`main.testimonials.list.${i}.name`)}</h4>
                       <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">{t(`main.testimonials.list.${i}.role`)}</p>
                     </div>
                   </div>
                   <div className="text-[#1DA1F2] text-xl">
                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                   </div>
                 </div>
                 <p className="text-gray-600 leading-relaxed text-[15px]">"{t(`main.testimonials.list.${i}.text`)}"</p>
              </div>
            ))}
          </div>
          
          <button className="mt-16 text-[#473BF0] font-bold flex items-center gap-3 mx-auto hover:gap-5 transition-all duration-300">
            <span className="bg-[#473BF0] text-white w-8 h-8 flex items-center justify-center rounded-lg shadow-lg shadow-indigo-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </span> 
            {t('main.testimonials.btn')}
          </button>
        </div>
      </section>

    </main>
  );
};

export default Main;