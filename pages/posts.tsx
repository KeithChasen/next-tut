import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MyPost } from "../interfaces/post";
import {NextPageContext} from "next";

interface PostsPageProps {
  posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts');
      const posts = await response.json();
      setPosts(posts);
    }
    if (!serverPosts) {
      load();
    }
  },[]);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }


  return (
    <MainLayout title="Posts" keywords="posts page">
      <h1>Posts</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <Link href={`post/[id]`} as={`post/${post.id}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {
      posts: null
    }
  }
  const response = await fetch('http://localhost:4200/posts');
  const posts: MyPost[] = await response.json();
  return {
    posts
  }
};
