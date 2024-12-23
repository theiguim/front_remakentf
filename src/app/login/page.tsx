"use client"

import styles from "../../styles/registerLogin.module.scss"
import Head from "next/head"
import HeaderGeneric from "@/components/common/headerGeneric"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import Footer from "@/components/common/footer"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import ToastComponent from "@/components/common/toast"
import authService from "@/services/authService"

const Login = () => {


    const router = useRouter()
    const searchParams = useSearchParams()
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const [toastColor, setToastColor] = useState("")

    useEffect(()=>{
        if(sessionStorage.getItem("auth-token")){
            router.push("/home")
        }
    }, [])


    const registerSuccess = searchParams.get("registred")
    useEffect(() => {

        if (registerSuccess === "true")
            setToastColor("bg-success")
        setToastIsOpen(true)
        setTimeout(() => {
            setToastIsOpen(false)
        }, 3000)
        setToastMessage("Registration completed successfully")
    }, [registerSuccess])

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email")!.toString()
        const password = formData.get("password")!.toString()
        const params = { email, password }

        const { status } = await authService.login(params)

        if (status === 200 || status === 201) {
            router.push("/home")
        } else {
            setToastColor("bg-danger")
            setToastIsOpen(true)
            setTimeout(() => {
                setToastIsOpen(false)
            }, 3000)
            setToastMessage("Incorrect email or password!")
        }
    }

    return (<>

        <Head>
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={styles.main}>
            <HeaderGeneric logoUrl="/" btnUrl="/register" btnContent="Quero fazer parte" />

            <Container className="py-5">
                <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
                <Form className={styles.form} onSubmit={handleLogin}>
                    <p className="text-center"><strong>Bem-vindo(a) ao OnebitFlix!</strong></p>


                    <FormGroup>
                        <Label for="email" className={styles.label}>EMAIL</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Qual o seu e-mail?"
                            required
                            className={styles.input}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password" className={styles.label}>SENHA</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Qual a sua senha?"
                            required
                            className={styles.input}
                        />
                    </FormGroup>


                    <Button type="submit" outline className={styles.formBtn}>ENTRAR</Button>
                    <Footer />


                </Form>

                <ToastComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage} />

            </Container>



        </main>



    </>)

}

export default Login