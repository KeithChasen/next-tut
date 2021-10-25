import Router from 'next/router'
import Head from 'next/head'
import { MainLayout } from "../../components/MainLayout";

export default function Index({ title }) {
  const clickBack = () => {
    Router.push('/')
  };
  return (
  <MainLayout title="About" keywords="about page">
    <h1>{title}</h1>
    <button onClick={clickBack}>Back</button>
  </MainLayout>
  )
};

Index.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();
  return {
    title: data.title
  }
};
