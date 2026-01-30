import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiChevronDown, FiMoon, FiSun } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const [lang, setLang] = useState('EN');
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { title: 'Demos', dropdown: ['SaaS Landing', 'Startup Landing', 'App Landing', 'Desktop Landing'] },
    { title: 'Pages', dropdown: ['About', 'Pricing', 'Contact'] },
    { title: 'Support', dropdown: null },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter dark:text-white">
          Omega
        </div>

        {/* Desktop Navigation (Center) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <div 
              key={idx} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                {link.title} {link.dropdown && <FiChevronDown className={`transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />}
              </button>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === idx && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-4 border border-gray-100 dark:border-gray-700 animate-in fade-in slide-in-from-top-2">
                  {link.dropdown.map((item, i) => (
                    <a key={i} href="#" className="block py-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions (Dark, Lang, Button) */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Theme Toggle */}
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white hover:scale-110 transition-all">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Lang Toggle */}
          <button onClick={() => setLang(lang === 'EN' ? 'UZ' : 'EN')} className="text-xs font-black dark:text-white border-b-2 border-blue-500">
            {lang}
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg shadow-red-500/30 transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-3xl dark:text-white">
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
           {/* Mobile links logic... */}
           <button className="w-full bg-red-500 text-white py-4 rounded-xl font-bold">Get Started</button>
        </div>
      )}
    </header>
  );
};

export default Header;