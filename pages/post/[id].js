import {MainLayout} from "../../components/MainLayout";
import { useState, useEffect } from 'react';
import {useRouter} from "next/router";

export default function Post({ post: serverPost }) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);
  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await response.json();
      setPost(data)
    }

    if (!serverPost) {
      load()
    }

  },[]);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="Post" keywords="post page">
      <h1>{post.title}</h1>
      <hr/>
      <p>{post.body}</p>
    </MainLayout>
  )
}

export async function getServerSideProps({ query, req }) {
  if (!req) {
    return { post: null }
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return {
    props: { post }
  }
}