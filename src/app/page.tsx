import Banner from "@/components/Banner/page";
import AboutMe from "@/components/AboutMe/page";
import Projects from "@/components/Projects/page";
import Tecnologies from "@/components/Tecnologies/page";
import Form from "@/components/Form/page";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Tecnologies />
      <Projects />
      <Form />
    </>
  );
}
