"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = require("next/head");
var Home_module_css_1 = require("../styles/Home.module.css");
function Home() {
    return (<div className={Home_module_css_1.default.container}>
      <head_1.default>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </head_1.default>

      <main className={Home_module_css_1.default.main}>
        <h1 className={Home_module_css_1.default.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={Home_module_css_1.default.description}>
          Get started by editing{' '}
          <code className={Home_module_css_1.default.code}>pages/index.js</code>
        </p>

        <div className={Home_module_css_1.default.grid}>
          <a href="https://nextjs.org/docs" className={Home_module_css_1.default.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={Home_module_css_1.default.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={Home_module_css_1.default.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={Home_module_css_1.default.card}>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={Home_module_css_1.default.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={Home_module_css_1.default.logo}/>
        </a>
      </footer>
    </div>);
}
exports.default = Home;
