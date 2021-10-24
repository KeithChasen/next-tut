import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>My App</title>
      <meta name="keywords" content="main page"/>
    </Head>
    <h1>Hello Next</h1>
    <Link href="/posts">Posts</Link>
    <Link href="/about">About</Link>
  </>
}
