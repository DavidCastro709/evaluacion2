import React, { useState } from 'react';
import './App.css';
import Login from './Login'; 

// Importación de imágenes
import profile from './s38.jpeg';
import imgCascada from './Cascada.png';
import imgModeloV from './Modelo en V.png';
import imgAgiles from './Agiles.png';
import imgScrum from './Scrum.png';
import imgKanban from './Kanban.png';
import imgXp from './Xp.png';
import imgHibridas from './Hibridas.png';

// --- COMPONENTE PARCIAL 1: CENTRO DE DESCARGAS (CORREGIDO) ---
function CentroDescargas({ alVolver }) {
  const descargar = (nombreArchivo, extension = 'pdf') => {
    const link = document.createElement('a');
    // Busca el archivo en la carpeta public/
    link.href = `./${nombreArchivo}.${extension}`; 
    link.download = `${nombreArchivo}.${extension}`;
    link.click();
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '15px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)', 
        width: '100%', 
        maxWidth: '450px', 
        textAlign: 'center' 
      }}>
        <h2 style={{ color: '#0d6efd', fontSize: '2rem', marginBottom: '10px', fontWeight: 'bold' }}>
          Centro de Descargas
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '30px' }}>
          Haz clic en los botones para obtener tus archivos PDF.
        </p>
        
        <button onClick={() => descargar("COMANDOS_REACT")} style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          COMANDOS BÁSICOS DE REACT
        </button>

        <button onClick={() => descargar("ESTANDAR_IEEE")} style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#198754', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          ISO / ESTANDAR IEEE
        </button>

        <button onClick={() => descargar("REQUERIMIENTOS")} style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#212529', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
        </button>

        <button onClick={() => descargar("ALGORITMO_PYTHON")} style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#212529', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          CÓDIGO PYTHON ALGORITMO SHA-256
        </button>

        <button onClick={alVolver} style={{ width: '100%', padding: '15px', marginTop: '10px', backgroundColor: '#212529', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          REGRESAR AL PROYECTO PRINCIPAL
        </button>
      </div>
    </div>
  );
}

// --- COMPONENTE PARCIAL 2: METODOLOGÍAS ---
function Metodologias({ alVolver }) {
  const [imagenVisible, setImagenVisible] = useState(null);
  const metodos = [
    { t: "CASCADA", c: "#0d6efd", img: imgCascada },
    { t: "MODELO V", c: "#6c757d", img: imgModeloV },
    { t: "ÁGILES", c: "#198754", img: imgAgiles },
    { t: "SCRUM", c: "#dc3545", img: imgScrum },
    { t: "KANBAN", c: "#ffc107", img: imgKanban },
    { t: "XP", c: "#0dcaf0", img: imgXp },
    { t: "HÍBRIDAS", c: "#212529", img: imgHibridas }
  ];

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '40px', textAlign: 'center', color: 'black' }}>
      <h1>METODOLOGÍAS DE DESARROLLO DE SW</h1>
      <p style={{ fontWeight: 'bold' }}>¿Qué es una metodología de desarrollo de software?</p>
      <p style={{ maxWidth: '800px', margin: '20px auto' }}>Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos...</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', margin: '30px 0' }}>
        {metodos.map((m, i) => (
          <button key={i} onClick={() => setImagenVisible(m.img)} style={{ padding: '10px 20px', backgroundColor: m.c, color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
            {m.t}
          </button>
        ))}
      </div>
      {imagenVisible && <img src={imagenVisible} alt="Metodo" style={{ maxWidth: '70%', borderRadius: '10px', border: '1px solid #ccc' }} />}
      <div style={{ marginTop: '30px' }}>
        <p>LINK A TABLERO DE TRABAJO</p>
        <button onClick={() => window.open('https://davidcastrosoto709.atlassian.net/jira/software/projects/VDA/boards/34', '_blank')} style={{ border: '1px dashed blue', color: 'blue', padding: '10px 30px', background: 'none', cursor: 'pointer' }}>---- JIRA ----</button>
      </div>
      <button onClick={alVolver} style={{ border: '1px solid blue', color: 'blue', padding: '10px 30px', background: 'none', cursor: 'pointer', marginTop: '30px' }}>---- REGRESAR MENÚ PRINCIPAL ----</button>
      <p style={{ marginTop: '30px', fontStyle: 'italic' }}>" Lo que hoy parece difícil, mañana será parte de tu historia de éxito "</p>
      <p style={{ fontWeight: 'bold' }}>Alumno: Castro Soto David Alberto</p>
    </div>
  );
}

// --- COMPONENTE PARCIAL 3: EVALUACIÓN ---
function EvaluacionParcial3({ alVolver }) {
  const descargarERS = () => {
    const link = document.createElement('a');
    link.href = './ers.docx'; 
    link.download = 'ers.docx';
    link.click();
  };

  const estiloBoton = {
    width: '100%', maxWidth: '550px', padding: '25px', fontSize: '1.3rem', backgroundColor: 'white',
    color: 'black', border: '4px solid black', cursor: 'pointer', fontWeight: '900', marginBottom: '25px'
  };

  return (
    <div style={{ backgroundColor: '#282c34', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '60px' }}>EVALUACIÓN PARCIAL 3</h1>
      <button onClick={descargarERS} style={estiloBoton}>DESCARGAR DOCUMENTO ERS DEL PROYECTO</button>
      <button onClick={() => window.open('https://davidcastrosoto709.atlassian.net/jira/software/projects/VDA/boards/34', '_blank')} style={estiloBoton}>TABLERO JIRA PROYECTO SIBA</button>
      <button onClick={alVolver} style={{ ...estiloBoton, border: '4px solid #ff4444', color: '#ff4444' }}>CERRAR SESIÓN PARCIAL 3</button>
    </div>
  );
}

// --- APP PRINCIPAL ---
function App() {
  const [vista, setVista] = useState('inicio');

  if (vista === 'parcial1') return <CentroDescargas alVolver={() => setVista('inicio')} />;
  if (vista === 'parcial2') return <Metodologias alVolver={() => setVista('inicio')} />;
  if (vista === 'parcial3') return <EvaluacionParcial3 alVolver={() => setVista('inicio')} />;

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <img src={profile} alt="perfil" style={{ width: '180px', border: '4px solid #3d4451', marginBottom: '40px', borderRadius: '10px', transform: 'rotate(-10deg)' }} />
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '40px' }}>ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
      <h2 style={{ fontWeight: 'normal', marginBottom: '30px' }}>Alumno(a): Castro Soto David Alberto</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
        <a href="https://www.linkedin.com/in/david-alberto-castro-soto-b62450351" target="_blank" rel="noreferrer" style={{ color: '#61dafb', textDecoration: 'underline', fontSize: '1.2rem' }}>LINKED IN DE MI PROFILE</a>
        <button onClick={() => setVista('parcial1')} style={{ background: 'none', border: 'none', color: '#61dafb', textDecoration: 'underline', fontSize: '1.2rem', cursor: 'pointer' }}>DOCUMENTACION PARCIAL 1</button>
        <button onClick={() => setVista('parcial2')} style={{ background: 'none', border: 'none', color: '#61dafb', textDecoration: 'underline', fontSize: '1.2rem', cursor: 'pointer' }}>DOCUMENTACION PARCIAL 2</button>
      </nav>
      <Login alLoguear={() => setVista('parcial3')} />
    </div>
  );
}

export default App;