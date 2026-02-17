import React, { useState } from 'react';
import { 
  Plane, 
  Hotel, 
  Utensils, 
  Users, 
  Wallet, 
  Compass,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Flame,
  TrendingUp,
  CreditCard,
  PieChart,
  BookOpen,
  Star
} from 'lucide-react';

interface Traveler {
  name: string;
  contribution: number;
  pct: number;
  color: string;
}

interface BreakdownItem {
  name: string;
  amount: number;
}

interface ItineraryItem {
  id: number;
  type: string;
  category: string;
  title: string;
  date: string;
  price: number;
  city: string;
  details: string;
  travelers?: number;
  breakdown?: any[]; // Using any[] to accommodate different breakdown structures in the data
  guests?: string;
  duration?: string;
}

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState('itinerary');

  const travelers: Traveler[] = [
    { name: 'Joha', contribution: 11169826, pct: 27.2, color: 'bg-pink-500' },
    { name: 'Aura', contribution: 11169826, pct: 27.2, color: 'bg-purple-500' },
    { name: 'Negro', contribution: 11169826, pct: 27.2, color: 'bg-blue-600' },
    { name: 'Alejo', contribution: 7590826, pct: 18.5, color: 'bg-emerald-500' },
  ];

  const totalBudgetVal = 41100304;
  const foodBudgetTotal = 10799999;

  const itineraryItems: ItineraryItem[] = [
    {
      id: -1,
      type: 'cover',
      category: 'Inversión Total',
      title: 'EUROTRIP: HAY MORAL',
      date: 'Abril - Mayo 2027',
      price: totalBudgetVal,
      city: 'Resumen Inicial',
      details: '',
      breakdown: travelers
    },
    { 
      id: 0, 
      type: 'global', 
      category: 'Fondo Común',
      title: 'MORAL ALIMENTICIA', 
      date: 'Todo el Viaje', 
      price: foodBudgetTotal, 
      travelers: 4, 
      city: 'Europa', 
      details: 'El famoso "marrano". Todos ponemos por igual para asegurar desayunos, almuerzos y cenas durante los 15 días.',
      breakdown: [
        { name: 'Joha', amount: 2700000 },
        { name: 'Aura', amount: 2700000 },
        { name: 'Negro', amount: 2700000 },
        { name: 'Alejo', amount: 2699999 }
      ]
    },
    { id: 1, type: 'transport', category: 'Vuelo', title: 'Bogotá ➝ Madrid', date: '19 Abr 2027', price: 10737000, travelers: 3, guests: 'Negro, Joha, Aura', city: 'Madrid', details: 'Vuelo transatlántico. Alejo llega por separado.' },
    { id: 2, type: 'activity', category: 'Parche', title: 'Tapeo de Bienvenida', date: '19 Abr 2027', price: 360000, travelers: 4, city: 'Madrid', details: 'Primera noche oficial del parche completo.' },
    { id: 3, type: 'stay', category: 'Hospedaje', title: 'Designer Loft Barajas', date: '19 Abr 2027', price: 623000, travelers: 4, city: 'Madrid', duration: '1 noche', details: 'Alojamiento estratégico cerca del aeropuerto.' },
    { id: 4, type: 'transport', category: 'Vuelo', title: 'Madrid ➝ Berlin', date: '20 Abr 2027', price: 2764314, travelers: 4, city: 'Berlin', details: 'Salto hacia la capital alemana.' },
    { id: 5, type: 'stay', category: 'Hospedaje', title: 'Prenzlauer Berg Apt', date: '20 Abr 2027', price: 1870000, travelers: 4, city: 'Berlin', duration: '3 noches', details: 'Tres noches en una de las zonas con más estilo de Berlín.' },
    { id: 6, type: 'activity', category: 'Cultura', title: 'Reichstag & Museos', date: '21 Abr 2027', price: 633999, travelers: 4, city: 'Berlin', details: 'Día de historia: Isla de Museos y Checkpoint Charlie.' },
    { id: 7, type: 'transport', category: 'Traslado', title: 'Berlin ➝ Praga', date: '23 Abr 2027', price: 734000, travelers: 4, city: 'Praga', details: 'Rumbo a la ciudad de las cien torres.' },
    { id: 8, type: 'stay', category: 'Hospedaje', title: 'Old Town Apartment', date: '23 Abr 2027', price: 750000, travelers: 4, city: 'Praga', duration: '2 noches', details: 'Ubicación inmejorable en el corazón histórico.' },
    { id: 9, type: 'activity', category: 'Parche', title: 'Esencia Checa', date: '24 Abr 2027', price: 898002, travelers: 4, city: 'Praga', details: 'Puente Carlos, Reloj Astronómico y cerveza local.' },
    { id: 10, type: 'transport', category: 'Traslado', title: 'Praga ➝ Viena', date: '25 Abr 2027', price: 549996, travelers: 4, city: 'Viena', details: 'Camino a la elegancia de Austria.' },
    { id: 11, type: 'stay', category: 'Hospedaje', title: 'Belvedere Apt', date: '25 Abr 2027', price: 1686000, travelers: 4, city: 'Viena', duration: '3 noches', details: 'Cerca del Palacio Belvedere.' },
    { id: 12, type: 'activity', category: 'Cultura', title: 'Palacios de Viena', date: '26 Abr 2027', price: 687000, travelers: 4, city: 'Viena', details: 'Visita a Schönbrunn y vida vienesa.' },
    { id: 13, type: 'transport', category: 'Day Trip', title: 'Bratislava Express', date: '27 Abr 2027', price: 691999, travelers: 4, city: 'Bratislava', details: 'Un día para conocer Eslovaquia.' },
    { id: 14, type: 'activity', category: 'Parche', title: 'UFO & Castillo', date: '27 Abr 2027', price: 370000, travelers: 4, city: 'Bratislava', details: 'Vistas del Danubio y centro histórico.' },
    { id: 15, type: 'stay', category: 'Hospedaje', title: 'Skyline Budapest', date: '28 Abr 2027', price: 1483999, travelers: 4, city: 'Budapest', duration: '3 noches', details: 'Vistas inigualables del Parlamento.' },
    { id: 16, type: 'transport', category: 'Traslado', title: 'Viena ➝ Budapest', date: '28 Abr 2027', price: 177998, travelers: 4, city: 'Budapest', details: 'Llegada a la Perla del Danubio.' },
    { id: 17, type: 'activity', category: 'Cultura', title: 'Budapest Imperial', date: '29 Abr 2027', price: 1394000, travelers: 4, city: 'Budapest', details: 'Aguas termales y crucero nocturno.' },
    { id: 18, type: 'transport', category: 'Regreso', title: 'Budapest ➝ Madrid', date: '01 May 2027', price: 1390000, travelers: 4, city: 'Madrid', details: 'Vuelo para cerrar el círculo en España.' },
    { id: 19, type: 'stay', category: 'Hospedaje', title: 'Independent Apt 3', date: '01 May 2027', price: 1883000, travelers: 4, city: 'Madrid', duration: '2 noches', details: 'Último refugio del viaje.' },
    { id: 20, type: 'activity', category: 'Parche', title: 'Despedida Madrileña', date: '02 May 2027', price: 615998, travelers: 4, city: 'Madrid', details: 'Museo del Prado y cena final.' },
  ];

  const formatCurrency = (val: number) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  const nextStep = () => currentPage < itineraryItems.length - 1 && setCurrentPage(currentPage + 1);
  const prevStep = () => currentPage > 0 && setCurrentPage(currentPage - 1);

  const currentItem = itineraryItems[currentPage];

  const categoryColors: Record<string, string> = {
    'Inversión Total': 'bg-indigo-900',
    'Fondo Común': 'bg-orange-500',
    'Vuelo': 'bg-blue-600',
    'Hospedaje': 'bg-indigo-700',
    'Traslado': 'bg-sky-500',
    'Parche': 'bg-emerald-600',
    'Cultura': 'bg-amber-500',
    'Day Trip': 'bg-purple-600',
    'Regreso': 'bg-rose-600'
  };

  const ProgressTracker = () => (
    <div className="flex justify-between items-center px-6 mb-6 mt-2 overflow-x-auto no-scrollbar gap-2">
      {itineraryItems.map((_, i) => (
        <div 
          key={i} 
          onClick={() => setCurrentPage(i)}
          className={`h-1 rounded-full transition-all duration-300 min-w-[8px] cursor-pointer ${
            i === currentPage ? 'bg-indigo-400 w-8 shadow-[0_0_8px_rgba(129,140,248,0.5)]' : 
            i < currentPage ? 'bg-indigo-800' : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-32 overflow-hidden flex flex-col">
      {/* Header Fijo */}
      <header className="pt-8 pb-4 px-6 relative z-10 shrink-0">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Flame className="text-orange-500 animate-pulse" size={14} />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-300">Expedición 2027</span>
            </div>
            <h1 className="text-3xl font-black italic uppercase leading-none">
              EUROTRIP<br/>
              <span className="text-indigo-400 text-4xl">HAY MORAL</span>
            </h1>
          </div>
          <div className="flex -space-x-3">
            {travelers.map((t, i) => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-950 flex items-center justify-center text-[10px] font-black shadow-xl ${t.color}`}>
                {t.name[0]}
              </div>
            ))}
          </div>
        </div>
        
        <ProgressTracker />
      </header>

      {/* Diario de Viaje */}
      <main className="flex-1 px-6 flex flex-col items-center justify-center relative">
        {activeTab === 'itinerary' ? (
          <div className="w-full max-w-sm animate-in zoom-in-95 fade-in duration-500 flex flex-col">
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 overflow-hidden text-slate-900 min-h-[460px] flex flex-col">
              
              {/* Categoría y Icono */}
              <div className={`${categoryColors[currentItem.category] || 'bg-slate-800'} p-4 flex justify-between items-center text-white`}>
                <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  {currentItem.type === 'cover' && <TrendingUp size={14} />}
                  {currentItem.type === 'transport' && <Plane size={14} />}
                  {currentItem.type === 'stay' && <Hotel size={14} />}
                  {currentItem.type === 'activity' && <Compass size={14} />}
                  {currentItem.type === 'global' && <Utensils size={14} />}
                  {currentItem.category}
                </span>
                <span className="text-[10px] font-bold opacity-80 uppercase tracking-tighter">{currentItem.date}</span>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1 italic">
                    {currentItem.city}
                  </p>
                  <h2 className="text-3xl font-black leading-none uppercase tracking-tighter italic text-slate-800 mb-2">
                    {currentItem.title}
                  </h2>
                  <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
                </div>

                {/* CONTENIDO ESPECIAL: PORTADA DE INVERSIÓN */}
                {currentItem.type === 'cover' && currentItem.breakdown && (
                  <div className="space-y-3 mb-6">
                    {currentItem.breakdown.map((t: Traveler, i: number) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full ${t.color}`}></div>
                          <span className="text-[11px] font-black text-slate-700 uppercase italic">{t.name}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] font-black text-indigo-700">{formatCurrency(t.contribution)}</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Participación: {t.pct}%</p>
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 p-3 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center justify-between">
                       <span className="text-[10px] font-black text-indigo-900 uppercase italic">Inversión Total Grupo</span>
                       <span className="text-sm font-black text-indigo-700">{formatCurrency(totalBudgetVal)}</span>
                    </div>
                  </div>
                )}

                {/* CONTENIDO ESPECIAL: FONDO DE COMIDA */}
                {currentItem.type === 'global' && currentItem.breakdown && (
                  <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 mb-6">
                    <p className="text-[9px] font-black text-orange-600 uppercase mb-3 flex items-center gap-2">
                      <PieChart size={12} /> Aporte igualitario para los 4:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {currentItem.breakdown.map((b: BreakdownItem, i: number) => (
                        <div key={i} className="bg-white p-2 rounded-xl text-center shadow-sm">
                          <p className="text-[8px] font-bold text-slate-400">{b.name}</p>
                          <p className="text-[10px] font-black text-slate-800 leading-tight">{formatCurrency(b.amount)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentItem.details && (
                  <p className="text-sm font-medium text-slate-500 italic leading-relaxed mb-6">
                    "{currentItem.details}"
                  </p>
                )}

                {/* Footer de la página */}
                {currentItem.type !== 'cover' && (
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-end">
                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <Users size={12} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{currentItem.travelers} Viajeros</span>
                      </div>
                      {currentItem.guests && (
                        <div className="text-[10px] font-black text-indigo-600 uppercase italic">
                           Incluye: {currentItem.guests}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Costo</p>
                      <p className="text-xl font-black text-indigo-600 tracking-tighter italic leading-none">{formatCurrency(currentItem.price)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Controles de Navegación */}
            <div className="flex justify-between mt-8 gap-4 px-2">
              <button 
                onClick={prevStep}
                disabled={currentPage === 0}
                className={`flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 border-2 transition-all ${
                  currentPage === 0 ? 'border-white/5 text-white/10' : 'border-indigo-500/30 text-indigo-400 active:scale-95'
                }`}
              >
                <ChevronLeft size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest italic">Atrás</span>
              </button>
              <button 
                onClick={nextStep}
                disabled={currentPage === itineraryItems.length - 1}
                className={`flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 bg-indigo-600 text-white shadow-lg active:scale-95 transition-all ${
                  currentPage === itineraryItems.length - 1 ? 'opacity-20 pointer-events-none' : ''
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest italic">Continuar</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : activeTab === 'budget' ? (
          <div className="w-full animate-in slide-in-from-right-8 duration-500 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] text-slate-900 shadow-2xl border-b-8 border-indigo-200">
               <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3 mb-8">
                <CreditCard className="text-indigo-600" size={24} /> Las Cuentas de la Moral
              </h3>
              <div className="space-y-6">
                {travelers.map((t, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${t.color}`}></div>
                        <span className="text-sm font-black uppercase tracking-tighter italic">{t.name}</span>
                      </div>
                      <span className="text-sm font-black tracking-tight">{formatCurrency(t.contribution)}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className={`h-full ${t.color}`} style={{ width: `${t.pct}%` }}></div>
                    </div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-right">
                      {t.name === 'Alejo' ? 'Llega directo a Madrid' : 'Paquete Completo'} • {t.pct}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full animate-in slide-in-from-right-8 duration-500 space-y-4">
            <div className="bg-emerald-600 p-6 rounded-[2rem] flex items-center justify-between text-white">
               <h3 className="text-lg font-black italic uppercase tracking-tighter flex items-center gap-2">
                <CheckCircle2 /> Preparativos
              </h3>
              <Star className="opacity-40" />
            </div>
            <div className="bg-white rounded-[3rem] overflow-hidden text-slate-800 shadow-xl p-4 space-y-2">
               {['Tramitar ETIAS (Obligatorio)', 'Pasaportes vigentes', 'Adaptador de Luz Tipo C', 'Seguro de Viaje Schengen', 'Habilitar tarjetas banco'].map((check, i) => (
                 <div key={i} className="p-4 border-b border-slate-50 flex items-center gap-4">
                    <div className="w-6 h-6 rounded-lg border-2 border-slate-100 flex items-center justify-center">
                      <CheckCircle2 className="text-slate-100" size={16} />
                    </div>
                    <span className="text-[10px] font-black uppercase italic tracking-tight">{check}</span>
                 </div>
               ))}
            </div>
          </div>
        )}
      </main>

      {/* Nav Flotante */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
        <div className="bg-slate-900/95 backdrop-blur-3xl border border-white/10 px-8 py-5 flex justify-around items-center rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           <button onClick={() => setActiveTab('itinerary')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'itinerary' ? 'text-indigo-400 scale-110' : 'text-slate-500'}`}>
              <BookOpen size={22} strokeWidth={3} />
              <span className="text-[8px] font-black uppercase tracking-widest">Aventura</span>
           </button>
           <button onClick={() => setActiveTab('budget')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'budget' ? 'text-indigo-400 scale-110' : 'text-slate-500'}`}>
              <Wallet size={22} strokeWidth={3} />
              <span className="text-[8px] font-black uppercase tracking-widest">Lucas</span>
           </button>
           <button onClick={() => setActiveTab('prep')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'prep' ? 'text-emerald-500 scale-110' : 'text-slate-500'}`}>
              <CheckCircle2 size={22} strokeWidth={3} />
              <span className="text-[8px] font-black uppercase tracking-widest">Check</span>
           </button>
        </div>
      </nav>

      {/* Background Decor */}
      <div className="fixed -bottom-20 -left-20 w-80 h-80 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed -top-20 -right-20 w-80 h-80 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default App;