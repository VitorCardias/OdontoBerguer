import React, { useState } from 'react'
import styles from "./Form.module.css"

function Form(){

    const [value, setValue] = useState('');

    const handleNameChange = (event) => {
        setValue(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Enviado com Sucesso')
    }

    return(
        <section className={styles.container}>
            <div className={styles.form}>
                <img src="/images/logo/logoroxo.svg" alt="logo" />
                <h2>Consultório OdontoBerguer</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <p>Nome</p>
                        <input type="text" value={value} onChange={handleNameChange} className={styles.input}/>
                        <p>Telefone</p>
                        <input type="text" value={value} onChange={handlePhoneChange} className={styles.input} />
                    </div>
                    <input type="submit" value="Entrar em Contato" className={styles.button} />
                </form>
            </div>
        </section>
    )
}

export default Form;