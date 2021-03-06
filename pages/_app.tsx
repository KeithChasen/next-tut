import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  return <>
      <NextNprogress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
}
