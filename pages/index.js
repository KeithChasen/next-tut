import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>My App</title>
        <meta name="keywords" content="main page"/>
      </Head>
      <h1>Hello Next</h1>
    </MainLayout>
  )
}
