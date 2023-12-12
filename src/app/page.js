import Banner from "@/components/shared/Banner";
import MyTechStack from "@/components/shared/MyTechStack";
import Navigation from "@/components/shared/Navigation";
import Projects from "@/components/shared/Projects";
export default function HomePage() {
  return (
    <div className="container-md  mx-auto">
      <Banner />
      <MyTechStack />
      <Projects />
    </div>
  );
}
