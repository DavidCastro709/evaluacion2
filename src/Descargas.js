import React from 'react';

function Descargas({ volver }) {
  const botones = [
    { texto: "COMANDOS BÁSICOS DE REACT", color: "#007bff" },
    { texto: "ISO / ESTANDAR IEEE", color: "#198754" },
    { texto: "REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES", color: "#212529" },
    { texto: "CÓDIGO PYTHON ALGORITMO SHA-256", color: "#212529" },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", textAlign: "center", maxWidth: "500px", width: "100%" }}>
        <h2 style={{ color: "#007bff", marginBottom: "10px" }}>Centro de Descargas</h2>
        <p style={{ color: "#6c757d", fontSize: "0.9rem", marginBottom: "30px" }}>Haz clic en los botones para obtener tus archivos PDF.</p>
        
        {botones.map((btn, index) => (
          <button key={index} style={{ backgroundColor: btn.color, color: "white", border: "none", padding: "12px", width: "100%", borderRadius: "8px", marginBottom: "10px", cursor: "pointer", fontWeight: "bold" }}>
            {btn.texto}
          </button>
        ))}

        <button onClick={volver} style={{ backgroundColor: "#212529", color: "white", border: "none", padding: "12px", width: "100%", borderRadius: "8px", marginTop: "10px", cursor: "pointer", fontWeight: "bold" }}>
          REGRESAR AL PROYECTO PRINCIPAL
        </button>
      </div>
    </div>
  );
}

export default App;