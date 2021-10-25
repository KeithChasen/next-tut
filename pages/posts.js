import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <MainLayout title="Posts" keywords="posts page">
      <h1>Posts</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <Link href={`post/${post.id}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async () => {
      const response = await fetch('http://localhost:4200/posts');
      const posts = await response.json();
      return {
        posts
      }
};
