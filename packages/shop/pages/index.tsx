import Head from 'next/head'

// We need to use top level await on these modules as they are async.
// This is actually what let's module federation work with NextJS
// @ts-ignore
const Nav = (await import('pim/nav')).default;

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Nav />
      <main>
        <h1>
         SHOP
        </h1>

      </main>
    </div>
  )
}
