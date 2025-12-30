import "../styles/pages/HomePage.css";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

import chatIcon from "../assets/img/icon-chat.png";
import moneyIcon from "../assets/img/icon-money.png";
import securityIcon from "../assets/img/icon-security.png";

function HomePage() {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroBanner />
        <section className="features">
          <Feature
            icon={chatIcon}
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            icon={moneyIcon}
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
          <Feature
            icon={securityIcon}
            title="Security you can trust"
            text=" We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default HomePage;
