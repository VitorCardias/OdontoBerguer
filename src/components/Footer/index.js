import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>

            <div className={styles.footer_infos}>
                <div>
                    <h2>Redes Sociais</h2>
                    <a href="" className={styles.footer_icons}>
                        <img src="/icons/footerInsta.svg" alt="instagram" />
                        <p>Instagram</p>
                    </a>
                    <a href="" className={styles.footer_icons}>
                        <img src="/icons/footerFace.svg" alt="facebook" />
                        <p>Facebook</p>
                    </a>
                </div>
        
                <div>
                    <h2>Endereço</h2>
                    <h3>Santa Maria - RS</h3>
                    <p>R. Arsênio Machado Soares, 210 - Camobi<br/>CEP: 97110-110</p>
                    <div className={styles.footer_icons}>
                        <img src="/icons/footerPhone.svg" alt="phone" />
                        <p>(55) 98110-9850</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_infos}>
                <div>
                    <h2>Mapa do Site</h2>
                    <li>Entrar em contato</li>
                    <li>Areas de Atuação</li>
                    <li>Profissionais</li>
                    <li>Endereço</li>
                </div>
                <div>
                    <h2>Horários de Funcionamento</h2>
                    <p>Segunda-feira: Atendimento 24 horas</p>
                    <p>Terça-feira: Atendimento 24 horas</p>
                    <p>Quarta-feira: Atendimento 24 horas</p>
                    <p>Quinta-feira: Atendimento 24 horas</p>
                    <p>Sexta-feira: Atendimento 24 horas</p>
                    <p>Sábado: Atendimento 24 horas</p>
                    <p>Domingo: Atendimento 24 horas</p>
                </div>
            </div>
            
            
            
        </footer>
    )
}

export default Footer