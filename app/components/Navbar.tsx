import Link from "next/link";
import { FC } from "react";

interface NavbarProps {
  showSignOut?: boolean;
  signOut?: () => void;
}

const Navbar: FC<NavbarProps> = ({ showSignOut = false, signOut }) => {
  return (
    <nav
      style={{
        padding: "20px",
        borderBottom: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link href="/about" style={{ marginRight: "15px" }}>About</Link>
      <Link href="/protected" style={{ marginRight: "15px" }}>Protected</Link>
      <Link href="/protected/about" style={{ marginRight: "15px" }}>Protected About</Link>

      {showSignOut && signOut && (
        <button
          onClick={signOut}
          style={{ marginLeft: "20px", padding: "5px 10px" }}
        >
          Sign out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
