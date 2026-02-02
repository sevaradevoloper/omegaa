import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#161C2D] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Yuqoridagi binafsha rangli bezak element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#473BF0] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* GET STARTED SECTION (CTA) */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('footer.cta.title')}
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {t('footer.cta.desc')}
          </p>
          
          <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder={t('footer.cta.placeholder_name')}
              className="w-full px-6 py-4 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-[#473BF0] transition-all"
            />
            <input 
              type="email" 
              placeholder={t('footer.cta.placeholder_email')}
              className="w-full px-6 py-4 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-[#473BF0] transition-all"
            />
            <button className="w-full bg-[#F04037] hover:bg-[#d93a32] text-white font-bold py-4 rounded-lg transition-all shadow-lg">
              {t('footer.cta.btn')}
            </button>
          </form>
        </div>

        <hr className="border-gray-800 mb-20" />

        {/* FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Omega</h3>
          </div>

          {['about', 'learn', 'stories', 'hire'].map((col) => (
            <div key={col}>
              <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">
                {t(`footer.columns.${col}.title`)}
              </h4>
              <ul className="space-y-4">
                {/* JSON dagi massivni map qilish */}
                {t(`footer.columns.${col}.links`, { returnObjects: true }).map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-gray-800 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-all"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-all"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-all"><i className="fab fa-google"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;