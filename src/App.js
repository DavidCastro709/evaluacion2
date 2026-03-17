import React, { useState } from 'react';
import profile from './adrian.jpeg'; 
import './App.css';


import imgCascada from './Cascada.png';
import imgModeloV from './Modelo en V.png';
import imgAgiles from './Agiles.png';
import imgScrum from './Scrum.png';
import imgKanban from './Kanban.png';
import imgXP from './Xp.png';
import imgHibridas from './Hibridas.png';


function Modal({ contenido, alCerrar }) {
  if (!contenido) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#fdf8e9', padding: '20px', borderRadius: '10px', maxWidth: '800px', width: '90%', position: 'relative', textAlign: 'center' }}>
        <button onClick={alCerrar} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', fontWeight: 'bold' }}>×</button>
        <h2 style={{ color: '#5d3a1a', borderBottom: '2px solid #e0d5b8', paddingBottom: '10px', marginTop: 0 }}>Vista de {contenido.titulo}</h2>
        <div style={{ marginTop: '15px' }}>
          <img src={contenido.imagen} alt={contenido.titulo} style={{ maxWidth: '100%', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>
      </div>
    </div>
  );
}


function Metodologias({ alVolver }) {
  const [modalInfo, setModalInfo] = useState(null);

  
  const datosMetodos = {
    "CASCADA": { titulo: "Cascada", imagen: imgCascada, c: "#0d6efd" },
    "MODELO V": { titulo: "Modelo V", imagen: imgModeloV, c: "#6c757d" },
    "ÁGILES": { titulo: "Metodologías Ágiles", imagen: imgAgiles, c: "#198754" },
    "SCRUM": { titulo: "Scrum", imagen: imgScrum, c: "#dc3545" },
    "KANBAN": { titulo: "Kanban", imagen: imgKanban, c: "#ffc107" },
    "XP": { titulo: "XP (Extreme Programming)", imagen: imgXP, c: "#0dcaf0" },
    "HÍBRIDAS": { titulo: "Híbridas-Modernas", imagen: imgHibridas, c: "#212529" }
  };


  const estiloTexto = { fontFamily: 'Arial, sans-serif', color: 'black' };
  const estiloLink = { color: '#0d6efd', textDecoration: 'none' };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "40px 20px", ...estiloTexto, textAlign: "center" }}>
      <Modal contenido={modalInfo} alCerrar={() => setModalInfo(null)} />

      {}
      <h1 style={{ fontWeight: 'normal', marginTop: 0 }}>METODOLOGÍAS DE DESARROLLO DE SW</h1>
      
      {}
      <h3 style={{ fontWeight: 'normal', marginTop: '20px' }}>¿Qué es una metodología de desarrollo de software?</h3>
      <p style={{ maxWidth: "1000px", margin: "15px auto", fontSize: "12px", lineHeight: '1.4' }}>
        Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático. El objetivo de las distintas metodologías es el de intentar organizar los equipos de trabajo para que estos desarrollen las funciones de un programa de la mejor manera posible.
      </p>
      
      {}
      <h2 style={{ fontWeight: 'normal', marginTop: '30px', marginBottom: '10px' }}>TIPOS DE METODOLOGÍAS</h2>
      
      <hr style={{ border: '0', borderTop: '1px solid #eee', width: '90%', margin: '0 auto' }} />
      
      {}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "25px 0" }}>
        {Object.keys(datosMetodos).map((key) => (
          <button 
            key={key} 
            onClick={() => setModalInfo(datosMetodos[key])}
            style={{ 
              backgroundColor: datosMetodos[key].c, color: "white", border: "none", 
              padding: "10px 25px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer",
              fontSize: '12px', minWidth: '120px'
            }}
          >
            {key}
          </button>
        ))}
      </div>
      
      <hr style={{ border: '0', borderTop: '1px solid #eee', width: '90%', margin: '0 auto' }} />

      {}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontWeight: 'normal' }}>LINK A TABLERO DE TRABAJO</h3>
        <a 
          href="https://utd-team-hx510t3k.atlassian.net/jira/projects?types=software%2Cbusiness&xpis=eyJicmlkZ2UiOiJhcHBTd2l0Y2hlciIsImlkIjoiIiwic291cmNlIjoiV0FDIn0%3D"
          target="_blank" 
          rel="noreferrer" 
          style={{ display: 'inline-block', border: "1px dashed #0d6efd", padding: "8px 20px", ...estiloLink, fontSize: '12px', borderRadius: '4px' }}
        >
          ---- JIRA ----
        </a>
      </div>
      
      <hr style={{ border: '0', borderTop: '1px solid #eee', width: '90%', margin: '0 auto', marginTop: '30px' }} />

      {}
      <div style={{ marginTop: "30px" }}>
        <button 
          onClick={alVolver} 
          style={{ border: "1px solid #0d6efd", background: "none", ...estiloLink, padding: "8px 20px", cursor: "pointer", fontSize: '12px', borderRadius: '4px', marginBottom: '25px' }}
        >
          ---- REGRESAR MENÚ PRINCIPAL ----
        </button>
        
        {}
        <p style={{ fontSize: "16px", fontStyle: 'italic', margin: '15px 0' }}>
           " Lo que hoy parece dificil,mañana sera parte de tu historia de exito "
        </p>
        
        <p style={{ fontSize: "20px", fontWeight: 'bold', marginTop: '25px' }}>
          Alumno: Castro Soto David Alberto
        </p>
      </div>
    </div>
  );
}


function CentroDescargas({ alVolver }) {
  const botones = [
    { texto: "COMANDOS BÁSICOS DE REACT", color: "#007bff", archivo: "comandos_react.pdf" },
    { texto: "ISO / ESTANDAR IEEE", color: "#198754", archivo: "iso_ieee.pdf" },
    { texto: "REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES", color: "#212529", archivo: "requerimientos.pdf" },
    { texto: "CÓDIGO PYTHON ALGORITMO SHA-256", color: "#212529", archivo: "sha256.py" },
  ];

  const estiloBoton = (color) => ({
    backgroundColor: color, color: "white", border: "none", padding: "15px", width: "100%", borderRadius: "8px", marginBottom: "12px", cursor: "pointer", fontWeight: "bold", display: "block", textDecoration: "none", textAlign: "center", fontSize: '14px'
  });

  return (
    <div style={{ backgroundColor: "#282c34", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: '20px' }}>
      <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "15px", textAlign: "center", width: "100%", maxWidth: "400px" }}>
        <h2 style={{ color: "#007bff", marginTop: 0 }}>Centro de Descargas</h2>
        <p style={{ color: "#666", marginBottom: "30px", fontSize: '14px' }}>Haz clic para obtener tus archivos.</p>
        {botones.map((btn, index) => (
          <a key={index} href={`/docs/${btn.archivo}`} download style={estiloBoton(btn.color)}>{btn.texto}</a>
        ))}
        <button onClick={alVolver} style={{ ...estiloBoton("#333"), marginTop: "20px" }}>REGRESAR AL MENÚ</button>
      </div>
    </div>
  );
}


function App() {
  const [vista, setVista] = useState('inicio');

  if (vista === 'parcial1') return <CentroDescargas alVolver={() => setVista('inicio')} />;
  if (vista === 'parcial2') return <Metodologias alVolver={() => setVista('inicio')} />;

  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
        <p><strong>Alumno(a): Saucedo Gandara Adrian</strong></p>
        <a className="App-link" href="https://www.linkedin.com/in/adrian-saucedo-gandara-aa09653aa/" target="_blank" rel="noopener noreferrer">LINKED IN DE MI PROFILE</a>
        <button onClick={() => setVista('parcial1')} className="App-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', color: '#61dafb', fontSize: 'inherit', marginTop: '15px' }}>DOCUMENTACION PARCIAL 1</button>
        <button onClick={() => setVista('parcial2')} className="App-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', color: '#61dafb', fontSize: 'inherit', marginTop: '15px' }}>DOCUMENTACION PARCIAL 2</button>
      </header>
    </div>
  );
}

export default App;