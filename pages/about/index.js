import Router from 'next/router'
export default function Index() {
  const clickBack = () => {
    Router.push('/')
  };
  return <>
    <h1>About</h1>
    <button onClick={clickBack}>Back</button>
  </>
}
