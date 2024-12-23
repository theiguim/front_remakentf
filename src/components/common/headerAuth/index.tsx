"use client"

import Link from "next/link"
import styles from "./styles.module.scss"
import { Container, Form, Input } from "reactstrap"

import { useEffect, useState } from "react"
import Modal from "react-modal"
import { useRouter } from "next/navigation"


const HeaderAuth = () => {



    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isClient, setIsClient] = useState(false);
    const router = useRouter()

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleOpenModal = () => {
        setModalIsOpen(true)
    }

    const handleCloseModal = () => {
        setModalIsOpen(false)
    }

    const handleLogout = () => {
        sessionStorage.clear()
        router.push("/")

    }

    return (<>



        <Container className={styles.nav}>

            <Link href="">
                <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav} />

            </Link>

            <div className="d-flex align-items-center">
                <Form>
                    <Input name="search" type="search" placeholder="Pesquisar" className={styles.input} />
                </Form>

                <img src="/homeAuth/iconSearch.svg" alt="lupaHeader" className={styles.searchImg} />

                <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} shouldCloseOnEsc={true} className={styles.modal} overlayClassName={styles.overlayModal}>

                <Link href="/profile">
                    <p className={styles.modalLink}>Meus dados</p>
                </Link>
                <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
            </Modal>

        </Container>
    </>)


}

export default HeaderAuth