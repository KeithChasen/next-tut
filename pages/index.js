import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout title="My App" keywords="main page">
      <h1>Hello Next</h1>
    </MainLayout>
  )
}
