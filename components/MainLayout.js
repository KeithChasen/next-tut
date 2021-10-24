import Link from "next/link";

export function MainLayout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">App</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>
        { children }
      </main>
    </>
  )
}