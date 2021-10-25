import {MainLayout} from "../components/MainLayout";
import { useState,useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function  load() {
      const response = await fetch('http://localhost:4200/posts');
      const json = await response.json();
      setPosts(json);
    }

    load();
  },[]);
  return (
    <MainLayout title="Posts" keywords="posts page">
      <h1>Posts</h1>
      <ul>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </ul>
    </MainLayout>
  )
}
