import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <img src="/images/logo/logoroxo.svg" alt="logo"/>
            <ul className={styles.menu}>
                <li><a href=""></a>Entrar em Contato</li>
                <li><a href=""></a>Áreas de Atuação</li>
                <li><a href=""></a>Profissionais</li>
                <li><a href=""></a>Endereço</li>
            </ul>
        </header>
    )
}

export default Header;