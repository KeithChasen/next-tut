import Router from 'next/router'
import Head from 'next/head'
import { MainLayout } from "../../components/MainLayout";

export default function Index() {
  const clickBack = () => {
    Router.push('/')
  };
  return (
  <MainLayout>
    <Head>
      <title>About</title>
      <meta name="keywords" content="about page"/>
    </Head>
    <h1>About</h1>
    <button onClick={clickBack}>Back</button>
  </MainLayout>
  )
};
