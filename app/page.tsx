"use client";

//estoy usando Next.js 13+

import { useForm } from 'react-hook-form';
import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Home Page</h1>
      <nav>
        <Link href="/about" style={{ marginRight: "15px" }}>About</Link>
        <Link href="/protected" style={{ marginRight: "15px" }}>Protected</Link>
      </nav>
      <p>Bienvenido a tu app Next.js 13+ con App Router y AWS Amplify.</p>
    </div>
  );
}




//<"use client";

//<import { FC, useEffect } from "react";
//<import { Authenticator } from "@aws-amplify/ui-react";
//<import { Hub } from "@aws-amplify/core";
//<import { Link, Routes, Route, useNavigate } from "react-router-dom";
//<import { Amplify } from "aws-amplify";
//import config from "/aws-exports";
//<import config from './aws-exports'
//<import type { AppProps } from 'next/app';


//<Amplify.configure(config);

//<export default function MyApp({ Component, pageProps }: AppProps) {
//<  return <Component {...pageProps} />;
//<}


//<div className="page">
// <Header />
// <Hero />
//  <VideoSection />
// </div>

//<main>
//  <h1>My todos</h1>
//  <button onClick={createTodo}>+ new</button>
//  <ul>
//    {todos.map((todo) => (
//      <li key={todo.id}
//        onClick={() => deleteTodo(todo.id)}>{todo.content}</li>

//    ))}
//  </ul>
//  <button>
//    Cerrar Sesión
//  </button>
//</main>