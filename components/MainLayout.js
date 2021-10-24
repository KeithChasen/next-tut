import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title='', keywords='' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content=""/>
      </Head>
      <nav>
        <Link href="/">App</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>
        { children }
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: darkblue;
          color: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}