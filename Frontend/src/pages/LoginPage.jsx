import "../styles/pages/LoginPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <section className="login-page">
      <header>
        <Navbar />
      </header>

      <main className="main bg-dark">
        <LoginForm />
      </main>

      <Footer />
    </section>
  );
}

export default LoginPage;
