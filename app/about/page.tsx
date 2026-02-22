import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>About Page</h1>
      <nav>
        <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link href="/protected" style={{ marginRight: "15px" }}>Protected</Link>
      </nav>
      <p>Esta es la página About de tu proyecto.</p>
    </div>
  );
}
