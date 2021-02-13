import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '@material-ui/core/Container'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Snug Cup Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div className={styles.centre}>
       <img src="/Project.png" height="15%" width="15%"/>
     <h1>Welcome to the Snug Cup Inc. website!</h1>
     </div>
     <h1>Who are we?</h1>
     <p>We are a company that inovates cups.</p>
     <footer className={styles.footer}>
       <p>&copy; Copyright 2021, Snug Cup Inc. All rights reserved.</p>
       <p>Made in Next.JS & Hosted on Netlify</p>
     </footer>
    </Container>
  )
}
