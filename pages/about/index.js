import Router from 'next/router'
import Head from 'next/head'
import { MainLayout } from "../../components/MainLayout";

export default function Index() {
  const clickBack = () => {
    Router.push('/')
  };
  return (
  <MainLayout title="About" keywords="about page">
    <h1>About</h1>
    <button onClick={clickBack}>Back</button>
  </MainLayout>
  )
};
