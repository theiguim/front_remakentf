"use client"

import Head from "next/head"
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderHomeNoAuth from "@/components/homeNoAuth/headerHomeNoAuth"
import PresentationSection from "@/components/homeNoAuth/presentationSection"
import CardsSection from "@/components/homeNoAuth/cardsSection"

const HomeNoAuth = () => {

  return (
    <>

      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta name="description" content="Tenha acesso aos melhores conteúdos de programaão de uma forma simples e fácil!" />
      </Head>
      <main>

        <div className={styles.sectionBackground}>
          <HeaderHomeNoAuth />
          <PresentationSection />
        </div>

        <CardsSection />




      </main>

    </>
  )

}

export default HomeNoAuth