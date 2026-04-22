import React from "react";
import { GoogleLogin } from '@react-oauth/google';

function Login({ alLoguear }) {
  return (
    <div style={{ 
      marginTop: '20px', 
      display: 'flex', 
      justifyContent: 'center', 
      width: '100%' 
    }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Acceso exitoso:", credentialResponse);
          alLoguear(); // Llama a la función de App.js para confirmar el inicio
        }}
        onError={() => {
          console.log('Error en la autenticación con Google');
        }}
        // Esto hace que el botón se vea más integrado con tu diseño oscuro
        theme="filled_blue" 
        shape="pill"
      />
    </div>
  );
}

export default Login;