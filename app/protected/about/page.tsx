"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import Navbar from "../../components/Navbar";

export default function Page() {
  return (
    <>
      {/* Contenido público */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderBottom: "1px solid #ccc",
        }}
      >
        <h2>Protected About (contenido público)</h2>
        <p>Puedes verla sin iniciar sesión.</p>
      </div>

      {/* Contenido protegido */}
      <Authenticator>
        {({ signOut }) => (
          <div style={{ padding: "40px" }}>
            <Navbar showSignOut signOut={signOut} />
            <h1>Protected About</h1>
            <p>Contenido completo solo visible después de iniciar sesión.</p>
          </div>
        )}
      </Authenticator>
    </>
  );
}
