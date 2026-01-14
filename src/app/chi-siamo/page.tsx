
import React from 'react';
import { getAboutData } from '../../lib/api';

const About = async () => {
  const cmsData = await getAboutData();
  const heroImage = cmsData?.heroImage || "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80";
  const galleryImage1 = cmsData?.galleryImage1 || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80";
  const galleryImage2 = cmsData?.galleryImage2 || "https://images.unsplash.com/photo-1507914372368-b2b00361683d?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Interno Pizzeria" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">La Nostra Storia</h1>
          <p className="text-xl text-stone-300">Passione, tradizione e amore per il buon cibo dal 1985.</p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-700 font-bold tracking-widest uppercase text-sm block mb-4">Fondata a Napoli</span>
              <h2 className="text-4xl font-bold mb-8 text-stone-900">Tre Generazioni di Pizzaioli</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  Tutto è iniziato in un piccolo vicolo di Napoli, dove nonno Vincenzo aprì la sua prima pizzeria nel lontano 1985. 
                  Con pochi tavoli, una tovaglia a scacchi e un grande forno a legna che non si spegneva mai, riuscì a conquistare i palati di tutto il quartiere. 
                  Non era solo questione di cibo: era il calore dell'accoglienza, il profumo della legna che ardeva e quel "segreto" nell'impasto che rendeva ogni morso indimenticabile.
                </p>
                <p>
                  Oggi, portiamo avanti quell'eredità con lo stesso immutato orgoglio. Non abbiamo mai smesso di 
                  ricercare i migliori prodotti del territorio e di rispettare i sacri tempi della lievitazione naturale. 
                  Ogni mattina, mentre la città ancora dorme, i nostri pizzaioli sono già al lavoro per preparare un impasto che riposerà per almeno 48 ore, 
                  garantendo quella leggerezza e quella fragranza che sono diventate la nostra firma.
                </p>
                <p>
                  La nostra missione è semplice ma ambiziosa: regalarti un momento di felicità autentica attraverso 
                  il sapore inconfondibile di una vera pizza napoletana. Crediamo che il cibo debba essere un'esperienza che nutre non solo il corpo, ma anche l'anima. 
                  Per questo selezioniamo accuratamente ogni fornitore, privilegiando le piccole realtà locali che condividono la nostra passione per l'eccellenza.
                </p>
                <p>
                  Negli anni abbiamo visto cambiare tante cose, ma una è rimasta sempre la stessa: il sorriso di chi entra nel nostro locale e si sente subito a casa. 
                  Perché da Bella Napoli non sei solo un cliente, sei parte di una grande famiglia che ama la buona tavola e la convivialità. 
                  Vieni a trovarci e scopri perché, dopo trent'anni, siamo ancora qui a impastare felicità.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 text-center border-t border-stone-200 pt-12">
                <div>
                  <div className="text-4xl font-bold text-red-700 mb-2">35+</div>
                  <div className="text-sm font-medium text-stone-500 uppercase tracking-widest">Anni di Esperienza</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-700 mb-2">1M+</div>
                  <div className="text-sm font-medium text-stone-500 uppercase tracking-widest">Pizze Sfornate</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full">
              <img 
                src={galleryImage1} 
                alt="Atmosfera ristorante" 
                className="absolute top-0 right-0 w-4/5 h-3/5 object-cover rounded-3xl shadow-2xl z-0" 
              />
              <img 
                src={galleryImage2} 
                alt="Chef al lavoro" 
                className="absolute bottom-0 left-0 w-4/5 h-3/5 object-cover rounded-3xl shadow-2xl z-10 border-8 border-stone-50" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Eccellenza Assoluta</h3>
              <p className="text-red-100 leading-relaxed">
                Utilizziamo esclusivamente prodotti D.O.P. e I.G.P. certificati. La nostra mozzarella arriva fresca ogni mattina da Battipaglia, e il pomodoro è solo San Marzano. La qualità non ammette scorciatoie.
              </p>
            </div>
            
            <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Calore Napoletano</h3>
              <p className="text-red-100 leading-relaxed">
                L'ospitalità per noi è sacra. Vogliamo che ogni cliente si senta coccolato come a casa propria. Un sorriso sincero e una battuta pronta sono gli ingredienti segreti che non mettiamo sul conto.
              </p>
            </div>
            
            <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Rispetto per la Terra</h3>
              <p className="text-red-100 leading-relaxed">
                Crediamo in un futuro sostenibile. Privilegiamo la filiera corta e i produttori a Km 0 per ridurre l'impatto ambientale e garantire la massima freschezza stagionale dei nostri ingredienti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
