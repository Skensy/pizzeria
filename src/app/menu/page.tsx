"use client";

import React, { useState, useEffect } from 'react';
import { MenuItem } from '../../types';
import { getMenuItems } from '../../lib/api';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'tutto'>('tutto');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenu() {
      try {
        const items = await getMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error("Failed to load menu", error);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  const categories = [
    { id: 'tutto', name: 'Tutto' },
    { id: 'pizze', name: 'Le Pizze' },
    { id: 'sfizi', name: 'Sfizi & Fritti' },
    { id: 'dolci', name: 'Dolci' },
    { id: 'bevande', name: 'Bevande' },
  ];

  const filteredItems = activeCategory === 'tutto' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"></div></div>;
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-stone-900 mb-4">Il Nostro Menù</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Ogni piatto è preparato con amore e passione, seguendo le ricette tradizionali e utilizzando solo i migliori ingredienti.
          </p>
          <div className="w-24 h-1 bg-red-700 mx-auto mt-6"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-red-700 text-white shadow-lg scale-105' 
                  : 'bg-white text-stone-600 hover:bg-stone-100 shadow-sm'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.nome} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.isVegetarian && (
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Veg</span>
                  )}
                  {item.isSpicy && (
                    <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Piccante</span>
                  )}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900">{item.nome}</h3>
                    <span className="text-red-700 font-bold text-lg">€{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
