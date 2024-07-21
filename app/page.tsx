import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className=" h-screen w-full bg-slate-300">
      <Header />
      <Container />
      <Footer/>
    </div>
  );
}
