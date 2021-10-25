import { MainLayout } from "../../components/MainLayout";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost } : PostPageProps) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);
  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
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

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

export async function getServerSideProps({ query, req }: PostNextPageContext) {
  if (!req) {
    return { post: null }
  }
  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: MyPost = await response.json();
  return {
    props: { post }
  }
}