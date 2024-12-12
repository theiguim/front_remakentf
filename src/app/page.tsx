"use client"

import Head from "next/head"
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderHomeNoAuth from "@/components/homeNoAuth/headerHomeNoAuth"
import PresentationSection from "@/components/homeNoAuth/presentationSection"
import CardsSection from "@/components/homeNoAuth/cardsSection"
import SlideSection from "@/components/homeNoAuth/slideSection"
import courseService, { CourseType } from "@/services/courseService"
import { GetStaticProps } from "next"
import { ReactNode, useEffect, useState } from "react"
import Footer from "@/components/common/footer"
import AOS from "aos"
import "aos/dist/aos.css"



const HomeNoAuth = () => {

  const [course, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {

      AOS.init()

      try {
        const res = await courseService.getNewestCourses();
        setCourses(res.data);
      } catch (error) {
        console.log("Error fetch course data")
      }
    };

    fetchCourses();
  }, []);

  return (
    <>

      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta name="description" content="Tenha acesso aos melhores conteúdos de programaão de uma forma simples e fácil!" />
      </Head>
      <main>

        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderHomeNoAuth />
          <PresentationSection />
        </div>
        
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>

        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={course} />
        </div>

        <Footer />




      </main>

    </>
  )

}

export default HomeNoAuth