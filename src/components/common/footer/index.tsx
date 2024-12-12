import { Container } from "reactstrap"
import styles from "./styles.module.scss"

const Footer = () => {

    return (
        <>
            <Container className={styles.footer}>
                <img src="/logoOnebitcode.SVG" alt="logoFooter" className={styles.footerLogo} />
                <a href="#" className={styles.footerLink}>ONEBITECODE.COM</a>
            </Container>

        </>
    )
}

export default Footer