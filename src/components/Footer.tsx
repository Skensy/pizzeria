
import React from 'react';
import Link from 'next/link';
import { getContactInfo } from '../lib/api';

const Footer: React.FC = async () => {
  const contactInfo = await getContactInfo();
  
  return (
    <footer className="bg-stone-900 text-stone-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tighter mb-6 block">
              BELLA <span className="text-green-500">NAPOLI</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              La vera essenza della cucina partenopea portata a tavola con amore e maestria. 
              Dal 1985, il punto di riferimento per gli amanti della pizza.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Link Rapidi</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Menù</Link></li>
              <li><Link href="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link href="/contatti" className="hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contatti</h3>
            <ul className="space-y-4 text-sm">
              <li>{contactInfo.address}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-10 text-center text-xs">
          <p>© {new Date().getFullYear()} Pizzeria Bella Napoli. Tutti i diritti riservati. P.IVA 0123456789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
