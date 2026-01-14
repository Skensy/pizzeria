
import React from 'react';
import Link from 'next/link';
import { getHomepageData } from '../lib/api';

const Home = async () => {
  const cmsData = await getHomepageData();

  // Helper to parse HTML or text. For simplicity using raw strings rendered.
  // In a real app with Rich Text from Strapi, use a markdown rendered or dangerousSetInnerHTML sanitizer.

  const heroImage = cmsData?.heroImage || "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1920&auto=format&fit=crop";
  const heroTitle = cmsData?.heroTitle || (
    <>La Vera Pizza <br/><span className="text-red-500">Napoletana</span></>
  );
  const heroSubtitle = cmsData?.heroSubtitle || "Dal cuore di Napoli, direttamente sulla tua tavola. Ingredienti freschi, lievitazione naturale di 48 ore e cottura in forno a legna.";

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Pizza in forno a legna" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-lg leading-tight">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-stone-200 font-medium">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/menu" 
              className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl active:scale-95"
            >
              Esplora il Menù
            </Link>
            <Link 
              href="/contatti" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl active:scale-95"
            >
              Prenota Tavolo
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Perché Sceglierci?</h2>
            <div className="w-24 h-1 bg-red-700 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors duration-300">
                <svg className="w-10 h-10 text-red-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lievitazione 48h</h3>
              <p className="text-stone-600 leading-relaxed">
                Il segreto della nostra leggerezza risiede nella pazienza. Lasciamo riposare il nostro impasto per ben 48 ore a temperatura controllata. Questo lento processo permette ai lieviti di lavorare al meglio, trasformando zuccheri complessi in semplici, garantendo così una pizza non solo dal sapore evoluto e aromatico, ma soprattutto incredibilmente digeribile. Dimentica quella sensazione di pesantezza: la nostra pizza è una nuvola di gusto.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors duration-300">
                <svg className="w-10 h-10 text-green-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ingredienti D.O.P.</h3>
              <p className="text-stone-600 leading-relaxed">
                Non scendiamo a compromessi sulla qualità. Ogni ingrediente racconta una storia di eccellenza italiana: dal Pomodoro San Marzano dell'Agro Sarnese-Nocerino che porta il sole nei nostri piatti, alla Mozzarella di Bufala Campana DOP che arriva fresca ogni mattina. Utilizziamo solo Olio Extravergine di Oliva da uliveti selezionati. La nostra filosofia è semplice: solo il meglio entra nella nostra cucina.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                <svg className="w-10 h-10 text-amber-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tradizione Napoletana</h3>
              <p className="text-stone-600 leading-relaxed">
                Siamo custodi di un'arte antica, riconosciuta Patrimonio dell'Umanità UNESCO. Il nostro maestro pizzaiolo stende ogni disco di pasta rigorosamente a mano, con la tecnica dello "schiaffo", preservando l'aria nel cornicione. La cottura avviene nel nostro forno a legna, costruito artigianalmente da mastri fornai napoletani, che raggiunge i 480°C per cuocere la pizza in soli 60-90 secondi, lasciandola morbida e succosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dish */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Il Nostro Orgoglio:<br/>La Margherita D.O.P.</h2>
              <p className="text-lg text-stone-400 mb-8 leading-relaxed italic">
                "Più che una pizza, è un'esperienza sensoriale. I colori del tricolore si fondono in un abbraccio di sapori autentici."
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Pomodoro San Marzano dell'Agro Sarnese-Nocerino</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Mozzarella di Bufala Campana Fresca</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Olio EVO Colline Salernitane</span>
                </li>
              </ul>
              <Link href="/menu" className="text-red-500 font-bold border-b-2 border-red-500 pb-1 hover:text-red-400 transition-colors uppercase tracking-widest text-sm">
                Scopri tutto il menù
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-red-700/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=800&q=80" 
                alt="Margherita" 
                className="relative z-10 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
