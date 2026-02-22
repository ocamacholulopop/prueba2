import { Authenticator } from '@aws-amplify/ui-react'

function Header() {
  return (
    <header className="header">
      <img
        src="/headerEQA.webp"
        alt="Header"
        className="header-image"
      />

      <div className="top-links">
        <a href="#">Iniciar sesión</a>
        <a href="#">Crear cuenta</a>
      </div>
    </header>



  );
}

export default Header;



//<Authenticator>
   //  {({signOut, user} ) => (
    // )}
    //</Authenticator>