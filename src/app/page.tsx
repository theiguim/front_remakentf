import Head from "next/head"
import styles from "../styles/HomeNoAuth.module.scss"

export const metadata = {
  title: "Página inicial",
  description: "Bem-vindo à página do meu site"
}

const HomeNoAuth = () => {

  return (
    <>

      <Head>
        <title>Home</title>
      </Head>
      <main></main>

    </>
  )

}

export default HomeNoAuth