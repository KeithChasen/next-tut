import {MainLayout} from "../../components/MainLayout";

export default function Post({ post }) {
  return (
    <MainLayout title="Post" keywords="post page">
      <h1>{post.title}</h1>
      <hr/>
      <p>{post.body}</p>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();
  return {
    post
  }
};
