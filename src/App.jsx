import React, { useState } from "react";

// InternetApp – Mobile-first UX/UI proposal (Login, Home, Solicitudes + Soporte extra)
// Tailwind CSS classes are used for styling.

const Badge = ({ children, tone = "green" }) => (
  <span
    className={`px-2 py-0.5 text-xs rounded-full bg-${tone}-100 text-${tone}-800 border border-${tone}-200`}
  >
    {children}
  </span>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-2">
    <h3 className="text-sm font-semibold text-gray-800 tracking-wide">{title}</h3>
    {subtitle && (
      <p className="text-xs text-gray-500 leading-tight mt-0.5">{subtitle}</p>
    )}
  </div>
);

const TopBar = ({ title, onBack, showBack }) => (
  <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100 px-4 pt-3 pb-2 flex items-center gap-2">
    {showBack && (
      <button
        onClick={onBack}
        className="p-2 -ml-2 rounded-xl hover:bg-gray-100 active:scale-95 transition"
        aria-label="Volver"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    )}
    <div className="flex-1">
      <div className="text-[10px] uppercase tracking-widest text-orange-500 font-semibold">win</div>
      <h2 className="text-base font-semibold text-gray-900 leading-none">{title}</h2>
    </div>
    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 grid place-items-center font-bold text-xs">LW</div>
  </div>
);

const BottomTab = ({ active, setActive }) => {
  const items = [
    { key: "home", label: "Inicio", icon: (a)=> IconHome(a) },
    { key: "smart", label: "Smart WiFi", icon: (a)=> IconWifi(a) },
    { key: "requests", label: "Solicitudes", icon: (a)=> IconClipboard(a) },
    { key: "account", label: "Mi cuenta", icon: (a)=> IconUser(a) },
  ];
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-100 grid grid-cols-4">
      {items.map((it)=> (
        <button
          key={it.key}
          onClick={()=> setActive(it.key)}
          className={`py-2.5 flex flex-col items-center gap-1 ${active===it.key? "text-orange-600" : "text-gray-500"}`}
        >
          {it.icon(active===it.key)}
          <span className="text-[11px]">{it.label}</span>
        </button>
      ))}
    </div>
  );
};

// ===== Icons (pure SVG, no libs) =====
const IconHome = (active)=> (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active?"text-orange-600":"text-gray-500"}><path d="M3 10.5l9-7 9 7V20a2 2 0 0 1-2 2h-3v-7H8v7H5a2 2 0 0 1-2-2v-9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconWifi = (active)=> (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active?"text-orange-600":"text-gray-500"}><path d="M4 9a13 13 0 0 1 16 0M7 12a9 9 0 0 1 10 0M10 15a5 5 0 0 1 4 0M12 19h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconClipboard = (active)=> (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active?"text-orange-600":"text-gray-500"}><path d="M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.8"/><path d="M9 3h6v4H9z" stroke="currentColor" strokeWidth="1.8"/></svg>
);
const IconUser = (active)=> (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active?"text-orange-600":"text-gray-500"}><circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8"/><path d="M5 19a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
);

// ===== Screens =====
function ScreenLogin({ onLogin }){
  const [doc, setDoc] = useState("");
  const [pass, setPass] = useState("");
  const canGo = doc.length >= 8 && pass.length >= 6;
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex-1 bg-gradient-to-b from-orange-500 to-orange-600 text-white p-5 rounded-b-3xl shadow-md">
        <div className="mt-1 text-[12px] uppercase tracking-[0.25em] font-semibold opacity-80">internetapp</div>
        <h1 className="text-2xl font-bold leading-tight">WIN, el mejor internet del Perú</h1>
        <p className="mt-2 text-sm text-orange-50 max-w-[20ch]">Conéctate fácil y seguro. Gestiona tu fibra en segundos.</p>
        <div className="mt-6 h-28 w-full bg-white/15 rounded-2xl grid place-items-center text-white text-xs border border-white/20">
          Imagen real alusiva al servicio (hogar conectado)
        </div>
      </div>

      <div className="px-5 pt-5 pb-4 -mt-8">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <SectionTitle title="Hola, winner" subtitle="Ingresa con tu documento y contraseña" />
          <label className="text-xs text-gray-600">Número de documento</label>
          <input value={doc} onChange={(e)=> setDoc(e.target.value)} inputMode="numeric" placeholder="DNI / CE / RUC" className="mt-1 w-full rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 px-3 py-2 text-sm outline-none" />

          <div className="mt-3">
            <label className="text-xs text-gray-600">Contraseña</label>
            <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder="••••••••" className="mt-1 w-full rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 px-3 py-2 text-sm outline-none" />
          </div>

          <div className="mt-3">
            <label className="text-xs text-gray-600">Verificación</label>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex-1 h-10 rounded-xl border border-dashed border-gray-300 grid place-items-center text-[11px] text-gray-500">Captcha (placeholder)</div>
              <button className="text-xs text-gray-500 underline">Actualizar</button>
            </div>
          </div>

          <button
            className={`mt-4 w-full py-2.5 rounded-xl text-white font-medium ${canGo? "bg-orange-600 active:scale-[.99]" : "bg-orange-300"}`}
            disabled={!canGo}
            onClick={onLogin}
          >
            Ingresar
          </button>

          <div className="mt-3 flex items-center justify-between text-[12px]">
            <button className="text-orange-600 font-medium">¿Olvidaste tu contraseña?</button>
            <button className="text-gray-500">Soporte</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ icon, label, onClick }){
  return (
    <button onClick={onClick} className="p-3 rounded-2xl border border-gray-200 hover:border-orange-300 active:scale-95 transition grid place-items-center text-gray-700">
      {icon}
      <span className="text-[11px] mt-1">{label}</span>
    </button>
  );
}

function Home(){
  return (
    <div className="pb-3">
      <TopBar title="Inicio" />

      <div className="p-4">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-gray-500">Plan Colaborador</div>
              <div className="text-lg font-semibold text-gray-900">650 Mbps (NOV24) v2</div>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                <Badge>Activo</Badge>
                <span>Cod. pago: 1403879</span>
              </div>
              <div className="text-[11px] text-gray-500 mt-1">Avenida La Alborada 1085, Las Brisas</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 grid place-items-center">
              {IconWifi(true)}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-white border border-gray-100 p-3">
              <div className="text-[10px] text-gray-500">Velocidad</div>
              <div className="text-sm font-semibold">650 Mbps</div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 p-3">
              <div className="text-[10px] text-gray-500">Estado</div>
              <div className="text-sm font-semibold text-green-600">Estable</div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 p-3">
              <div className="text-[10px] text-gray-500">Recibo</div>
              <div className="text-sm font-semibold">S/ 0 (al día)</div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <SectionTitle title="¿Qué quieres hacer?" />
          <div className="grid grid-cols-4 gap-2">
            <QuickAction icon={<Icono name="receipt"/>} label="Pagar" />
            <QuickAction icon={<Icono name="pause"/>} label="Suspender" />
            <QuickAction icon={<Icono name="swap"/>} label="Titular" />
            <QuickAction icon={<Icono name="support"/>} label="Soporte" />
          </div>
        </div>

        <div className="mt-6">
          <SectionTitle title="Recomendado para ti" subtitle="Activa tus apps de streaming sin salir de la app" />
          <div className="relative h-32 rounded-2xl overflow-hidden bg-orange-50 border border-orange-100">
            <div className="absolute inset-0 grid md:grid-cols-2">
              <div className="p-4">
                <div className="text-xl font-bold text-orange-700 leading-tight">Activa tus apps
                  <br/>de streaming</div>
                <p className="text-[12px] text-orange-800/80 mt-1">Netflix, Disney+, Prime y más</p>
              </div>
              <div className="hidden md:block"/>
            </div>
            <button className="absolute bottom-3 right-3 bg-orange-600 text-white text-xs px-3 py-2 rounded-xl">Activar ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Requests(){
  const [tab, setTab] = useState("all");
  const tabs = [
    {key:"all", label:"Todas"},
    {key:"susp", label:"Suspensiones"},
    {key:"cont", label:"Contratos"},
    {key:"tit", label:"Cambios de titularidad"},
  ];

  const items = [
    {id:"WIN-RQ-2025-63205", date:"01 SEPT 2025", type:"Suspensión Temporal", status:"Resuelto"},
    {id:"WIN-RQ-2025-63056", date:"30 AGO 2025", type:"Solicitud de contrato", status:"En proceso"},
    {id:"WIN-RQ-2025-63055", date:"30 AGO 2025", type:"Solicitud de contrato", status:"En proceso"},
    {id:"WIN-RQ-2025-62784", date:"28 AGO 2025", type:"Cambio de titularidad", status:"Resuelto"},
    {id:"WIN-RQ-2025-62154", date:"21 AGO 2025", type:"Solicitud de contrato", status:"Cancelado"},
  ];

  const filtered = items.filter(i=>
    tab==="all" ||
    (tab==="susp" && i.type.includes("Suspensión")) ||
    (tab==="cont" && i.type.includes("contrato")) ||
    (tab==="tit" && i.type.includes("titularidad"))
  );

  return (
    <div className="min-h-full flex flex-col">
      <TopBar title="Mis solicitudes" />

      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-auto no-scrollbar">
          {tabs.map(t=> (
            <button key={t.key} onClick={()=> setTab(t.key)} className={`px-3 py-2 text-sm rounded-xl border ${tab===t.key? "bg-orange-600 text-white border-orange-600" : "bg-white text-gray-700 border-gray-200"}`}>
              {t.label}
            </button>
          ))}
          <div className="ml-auto"/>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2">
          {filtered.map((r)=> (
            <div key={r.id} className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-gray-500">{r.date}</div>
                  <div className="text-sm font-semibold text-gray-900">{r.id}</div>
                  <div className="text-[12px] text-gray-600">{r.type}</div>
                </div>
                <StatusPill status={r.status} />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Timeline status={r.status} />
                <button className="ml-auto text-xs px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200">Ver detalle</button>
              </div>
            </div>
          ))}
        </div>

        <button className="fixed right-4 bottom-20 bg-orange-600 text-white rounded-full w-14 h-14 shadow-lg active:scale-95">
          <span className="text-2xl leading-none">＋</span>
        </button>
      </div>
    </div>
  );
}

const statusTone = (status)=> {
  if(status.includes("Resuelto")) return {bg:"green", label:"Resuelto"};
  if(status.includes("proceso")) return {bg:"orange", label:"En proceso"};
  if(status.includes("Cancelado")) return {bg:"gray", label:"Cancelado"};
  return {bg:"gray", label: status};
};

function StatusPill({ status }){
  const tone = statusTone(status).bg;
  return <Badge tone={tone}>{statusTone(status).label}</Badge>
}

function Timeline({ status }){
  const steps = ["Creado","En revisión","En proceso","Resuelto"];
  const current = status.includes("Resuelto")? 4 : status.includes("proceso")? 3 : 2;
  return (
    <div className="flex items-center gap-1 flex-1">
      {steps.map((s, i)=> (
        <div key={s} className="flex items-center gap-1 w-full">
          <div className={`w-6 h-6 grid place-items-center text-[10px] rounded-full border ${i<current?"bg-orange-600 text-white border-orange-600":"bg-white text-gray-400 border-gray-200"}`}>{i+1}</div>
          {i<steps.length-1 && <div className={`h-0.5 flex-1 ${i<current-1?"bg-orange-600":"bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  );
}

function Support(){
  return (
    <div>
      <TopBar title="Soporte técnico" />
      <div className="p-4 space-y-4">
        <div className="rounded-2xl border border-gray-100 p-4 bg-white shadow-sm">
          <SectionTitle title="Diagnóstico rápido" subtitle="Detecta y soluciona problemas comunes"/>
          <div className="grid grid-cols-2 gap-2">
            <QuickAction icon={<Icono name="speed"/>} label="Test velocidad" />
            <QuickAction icon={<Icono name="restart"/>} label="Reiniciar router" />
            <QuickAction icon={<Icono name="qr"/>} label="Ver clave WiFi" />
            <QuickAction icon={<Icono name="chat"/>} label="Hablar con asesor" />
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 p-4 bg-white shadow-sm">
          <SectionTitle title="Cortes programados" subtitle="Te avisaremos si tu zona se ve afectada"/>
          <div className="text-xs text-gray-600">No hay incidencias cercanas.</div>
        </div>
      </div>
    </div>
  );
}

function Icono({ name }){
  const map = {
    receipt: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3z" stroke="currentColor" strokeWidth="1.6"/></svg>,
    pause: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 5h3v14H8zM13 5h3v14h-3z" stroke="currentColor" strokeWidth="1.6"/></svg>,
    swap: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 7h11l-3-3m3 3l-3 3M17 17H6l3 3m-3-3l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    support: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3a7 7 0 0 0-7 7v4a3 3 0 0 0 3 3h2v-6H7m5-8a7 7 0 0 1 7 7v4a3 3 0 0 1-3 3h-2v-6h3" stroke="currentColor" strokeWidth="1.6"/></svg>,
    speed: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 13a8 8 0 1 1 16 0v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3z" stroke="currentColor" strokeWidth="1.6"/><path d="M12 13l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    restart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4v6h6M20 20v-6h-6" stroke="currentColor" strokeWidth="1.6"/><path d="M20 9a8 8 0 1 0 2 5" stroke="currentColor" strokeWidth="1.6"/></svg>,
    qr: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h3v3h-3zM21 15h-3v-3" stroke="currentColor" strokeWidth="1.6"/></svg>,
    chat: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" stroke="currentColor" strokeWidth="1.6"/><path d="M9 13h6M8 10h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  };
  return <div className="text-gray-700">{map[name]}</div>;
}

export default function App(){
  const [isLogged, setIsLogged] = useState(false);
  const [tab, setTab] = useState("home");

  if(!isLogged){
    return (
      <div className="w-full min-h-screen grid place-items-center bg-gray-50 p-3">
        <div className="w-[380px] max-w-full h-[780px] bg-white rounded-[28px] shadow-2xl border border-gray-100 overflow-hidden">
          <ScreenLogin onLogin={()=> setIsLogged(true)} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen grid place-items-center bg-gray-50 p-3">
      <div className="w-[380px] max-w-full h-[780px] bg-white rounded-[28px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        <main className="flex-1 overflow-y-auto">
          {tab === "home" && <Home />}
          {tab === "smart" && <Support />}
          {tab === "requests" && <Requests />}
          {tab === "account" && (
            <div>
              <TopBar title="Mi cuenta" />
              <div className="p-4 space-y-3">
                <div className="rounded-2xl border p-4">
                  <SectionTitle title="Datos personales" />
                  <div className="text-sm text-gray-600">Lucas Winner<br/>lucas@correo.com</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <SectionTitle title="Pagos y facturación" />
                  <button className="text-xs px-3 py-2 rounded-xl bg-gray-50 border">Agregar tarjeta</button>
                </div>
                <div className="rounded-2xl border p-4">
                  <SectionTitle title="Notificaciones" />
                  <div className="text-sm text-gray-600">Recibir recordatorios de pago y avisos de cortes programados.</div>
                </div>
              </div>
            </div>
          )}
        </main>
        <BottomTab active={tab} setActive={setTab} />
      </div>
    </div>
  );
}
