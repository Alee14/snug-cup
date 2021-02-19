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
        <img src="/Project.png" height="17%" width="17%"/>
        <br/>
        <iframe allowFullScreen webkitallowfullscreen width="640" height="480" frameBorder="0" seamless src="https://p3d.in/e/coEzR+spin+load"></iframe>
        <h2>Render</h2>
        <img src="/snug_cup.png" width="50%" height="50%" />
        <h2>Colour palette</h2>
        <img src="/palette.png" width="40%" height="40%" />
        <h2>Price</h2>
        <p>Snug Cup: $25</p>
     </div>
     <h1>Description</h1>
     <p>Snug Cup is a electrical heating cup that heats up beverage. It uses the latest heating technology.</p>
     <h1>Team</h1>
     <ul>
       <li>Andrew Lee (Web Developer & Model Creator)</li>
       <li>Angelo Ching (Advertiser)</li>
       <li>Cleopatra Protopapadakis (Designer)</li>
       <li>Mehar Ahmad (Marketer)</li>
     </ul>
    </Container>
     <footer className={styles.footer}>
       <p>&copy; Copyright 2021, Snug Cup Inc. All rights reserved.</p>
       <p>Made in Next.JS & Hosted on Netlify</p>
     </footer>
    </div>
  )
}
