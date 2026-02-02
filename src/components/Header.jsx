import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiChevronDown, FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const navLinks = [
    { title: t('header.demos'), dropdown: ['SaaS Landing', 'Startup Landing'] },
    { title: t('header.pages'), dropdown: ['About', 'Pricing'] },
    { title: t('header.support'), dropdown: null },
  ];

  const [scrolled, setScrolled] = useState(false);

  // Skrollni kuzatish
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b
        ${scrolled 
          ? (isDark ? 'bg-[#030712]/90 border-gray-800 py-2' : 'bg-[#030712]/90 border-gray-800 py-2 shadow-sm') 
          : 'bg-transparent border-transparent py-5'
        } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter dark:text-white">Omega</div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group" onMouseEnter={() => setActiveDropdown(idx)} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-sm font-bold hover:text-blue-600 transition-colors dark:text-gray-300">
                {link.title} {link.dropdown && <FiChevronDown />}
              </button>
              {link.dropdown && activeDropdown === idx && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-2 border border-gray-100 dark:border-gray-700">
                  {link.dropdown.map((item, i) => (
                    <a key={i} href="#" className="block py-2 px-4 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">{item}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-xl bg-gray-400 dark:bg-gray-100 dark:text-white">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Language Selector */}
          <div className="relative group p-2 flex items-center gap-1 cursor-pointer font-bold text-xs dark:text-white border dark:border-gray-700 rounded-lg">
            <FiGlobe /> {(i18n.language || 'en').toUpperCase()}
            <div className="absolute top-full right-0 mt-2 w-20 bg-white dark:bg-gray-800 hidden group-hover:block border rounded-lg shadow-lg">
              {['en', 'uz', 'ru'].map(l => (
                <button key={l} onClick={() => changeLanguage(l)} className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 uppercase">{l}</button>
              ))}
            </div>
          </div>

          <button className="bg-red-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-red-600 transition-all">
            {t('header.btn')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-3xl dark:text-white">
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl fixed inset-0 top-20  z-[90] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <button key={i} className="text-left text-2xl font-bold dark:text-white border-b pb-2 dark:border-gray-800">{link.title}</button>
          ))}
          <div className="flex gap-4 mt-4">
            {['en', 'uz', 'ru'].map(l => (
              <button key={l} onClick={() => changeLanguage(l)} className={`px-4 py-2 rounded-lg border dark:text-white ${i18n.language === l ? 'bg-blue-600 text-white' : ''}`}>{l.toUpperCase()}</button>
            ))}
          </div>
          <button className="w-full bg-red-500 text-white py-4 rounded-xl font-bold mt-4">{t('header_btn')}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;