import { useRouter } from "next/router";


// import Link from "next/link";

export default function Navbar() {
  const location = useRouter().route;

  return (
    <>
    <div style={{display: "flex", flexDirect:"row", justifyContent:"space-around"}}>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a>Page</a>
    </div>
    </>
  );
}
