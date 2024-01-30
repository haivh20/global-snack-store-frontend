import ClientOnly from "@/components/store/ClientOnly";
import Footer from "@/components/store/footer/Footer";
import LoginModal from "@/components/store/modals/LoginModal";
import RegisterModal from "@/components/store/modals/RegisterModal";
import Navbar from "@/components/store/navbar/Navbar";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const currentUser = {
    id: 1,
    name: "User",
    image: "/images/logo.jpg",
  };
  return (
    <div>
      <ClientOnly>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
      </ClientOnly>
      <div className="pb-40 pt-48">{children}</div>
      <Footer />
    </div>
  );
};

export default StoreLayout;
