import styles from "./App.module.css"
import Container from "./components/Container";

import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Title from "./components/Title";


function App() {
  return (
    <div>
      <Header />
      <section className={styles.inicio}>
        <h1>Consultório<br/>OdontoBerguer</h1>
      </section>
      <div className={styles.form}>
        <Form/>
      </div>
      <Container>
        <Title>Todo o cuidado que seu sorriso merece!</Title>
        <Title>Nossa equipe de profissionais!</Title>
        <Title>Venha nos conhecer pessoalmente!</Title>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
