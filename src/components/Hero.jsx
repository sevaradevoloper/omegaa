import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroImg1 from '../assets/iphone11.svg';
import BrandLogos1 from '../assets/logo 1.svg';
import BrandLogos2 from '../assets/logo 2.svg';
import BrandLogos3 from '../assets/logo 3.svg';
import BrandLogos4 from '../assets/logo 4.svg';
import BrandLogos5 from '../assets/logo 5.svg';

const Hero = () => {
    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden dark:bg-gray-900 transition-colors duration-300">

            {/* Background Shape */}
            <div className="absolute -top-[20%] -left-[10%] w-[1250px] h-[1250px] rounded-full bg-gradient-to-br from-[#8D8DEC]/10 to-[#5454D4]/5 pointer-events-none border border-blue-100/20 dark:border-blue-900/10"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Hero Content */}
                <div className="z-10 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.1] mb-8">
                        {t('hero.title')}<br />
                        <span className="text-blue-600">{t('hero.subtitle')}</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium max-w-lg mb-10 mx-auto lg:mx-0">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="w-[400px]  mb-5 sm:w-auto bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-red-500/40 transition-all hover:-translate-y-1">
                            {t('hero.getStarted')}
                        </button>

                        <button
                            onClick={() => setShowVideo(true)}
                            className="flex mb-5 items-center gap-3 font-bold text-gray-700 dark:text-gray-300 group transition-all"
                        >
                            <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-600/20">
                                ▶
                            </span>
                            {t('hero.watchVideo')}
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative z-10 flex justify-center lg:justify-end">
                    <div className="relative">
                        <img src={HeroImg1} alt="Phone App" className="w-[300px] h-[600px] md:w-[450px] object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)]" />

                        <div className="absolute bottom-30 -right-10 md:left-60 bg-yellow-300 p-4 rounded-2xl shadow-xl max-w-[200px] animate-bounce">
                            <p className="text-[10px] font-black uppercase text-yellow-900">Success!</p>
                            <p className="text-xs font-bold text-black">Appointment with the doctor was successful.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="mt-20 border-t border-gray-100 dark:border-gray-800 pt-10 overflow-hidden relative w-full">
                <div className="flex w-max items-center gap-12 animate-marquee opacity-100 dark:invert">
                    <img src={BrandLogos1} alt="L1" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos2} alt="L2" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos3} alt="L3" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos4} alt="L4" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos5} alt="L5" className="h-8 md:h-10 object-contain" />
                    {/* Repeat for seamless loop */}
                    <img src={BrandLogos1} alt="L1" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos2} alt="L2" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos3} alt="L3" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos4} alt="L4" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos5} alt="L5" className="h-8 md:h-10 object-contain" />
                    {/* Repeat for seamless loop */}
                    <img src={BrandLogos1} alt="L1" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos2} alt="L2" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos3} alt="L3" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos4} alt="L4" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos5} alt="L5" className="h-8 md:h-10 object-contain" />
                    {/* Repeat for seamless loop */}
                    <img src={BrandLogos1} alt="L1" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos2} alt="L2" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos3} alt="L3" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos4} alt="L4" className="h-8 md:h-10 object-contain" />
                    <img src={BrandLogos5} alt="L5" className="h-8 md:h-10 object-contain" />
                </div>
            </div>

            {/* YOUTUBE MODAL */}
            {showVideo && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center font-bold"
                        >
                            ✕
                        </button>
                       <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/iNyUmbmQQZg?autoplay=1"
                            title="Is it normal to talk to yourself?"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;