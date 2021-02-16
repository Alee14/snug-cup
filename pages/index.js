import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '@material-ui/core/Container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snug Cup Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Container>
     <div className={styles.centre}>
        <img src="/Project.png" height="15%" width="15%"/>
        <h1>Welcome to Snug Cup!</h1>
        <h2>slogan here</h2>
        <a href="unity/index.html">3D Scale Demo</a>
        <br/>
        <h2>Render</h2>
        <img src="/snug_cup.png" width="50%" height="50%" />
        <h2>Colour palette</h2>
        <img src="/palette.png" width="40%" height="40%" />
     </div>
     <h1>Who are we?</h1>
     <p>We are a company that inovates cups.</p>
    </Container>
     <footer className={styles.footer}>
       <p>&copy; Copyright 2021, Snug Cup Inc. All rights reserved.</p>
       <p>Made in Next.JS & Hosted on Netlify</p>
     </footer>
    </div>
  )
}
