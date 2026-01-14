
import React from 'react';
import { getContactInfo } from '../../lib/api';

const Contact: React.FC = async () => {
  const contactInfo = await getContactInfo();
  
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-stone-900 mb-4">Contattaci</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Vuoi prenotare un tavolo o hai domande sul nostro menù? Siamo a tua completa disposizione.
          </p>
          <div className="w-24 h-1 bg-red-700 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            <div className="bg-white p-10 rounded-3xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-8 text-stone-900">Informazioni</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-red-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Indirizzo</h3>
                    <p className="text-stone-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Telefono</h3>
                    <p className="text-stone-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Orari di Apertura</h3>
                    {contactInfo.hours.map((h, i) => (
                      <p key={i} className="text-stone-600">{h.days}: {h.time}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner">
               <img src="https://images.unsplash.com/photo-1476900966873-12c4428b5bf8?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60" alt="Map Placeholder" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 p-4 rounded-xl shadow-lg flex items-center gap-3">
                   <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                   <span className="font-bold text-stone-900">Vieni a trovarci a Napoli!</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold mb-8 text-stone-900">Inviaci un Messaggio</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-red-700/20 transition-all"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-red-700/20 transition-all"
                    placeholder="la-tua@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Oggetto</label>
                <select className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-red-700/20 transition-all">
                  <option>Prenotazione Tavolo</option>
                  <option>Richiesta Informazioni</option>
                  <option>Eventi Privati</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Messaggio</label>
                <textarea 
                  rows={5}
                  className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-red-700/20 transition-all"
                  placeholder="In cosa possiamo aiutarti?"
                ></textarea>
              </div>
              <button className="w-full bg-red-700 text-white font-bold py-4 rounded-xl hover:bg-red-800 shadow-lg shadow-red-700/20 transition-all active:scale-[0.98]">
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
