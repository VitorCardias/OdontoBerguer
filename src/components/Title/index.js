import styles from "./Title.module.css"

function Title({children}){
    return(
        <section>
            <h1 className={styles.title}>
                {children}
            </h1>
            <div className={styles.underline}></div>
        </section>
    )
}

export default Title;