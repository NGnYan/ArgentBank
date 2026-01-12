import "../styles/pages/ProfilePage.css";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileHeader from "../components/ProfileHeader";
import AccountCard from "../components/AccountCard";

function ProfilePage() {
  const { user } = useAuth();
  return (
    <section>
      <Navbar />

      <main className="main bg-dark">
        <ProfileHeader firstName={user?.firstName} lastName={user?.lastName} />
        <AccountCard />
      </main>
      <Footer />
    </section>
  );
}

export default ProfilePage;
