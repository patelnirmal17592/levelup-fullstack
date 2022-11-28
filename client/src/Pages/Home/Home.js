// import { Link } from 'react-router-dom';
import MainFooter from "../../Components/Footer/MainFooter";
import Header from "../../Components/HomepageHeader/Header";
import LoggedInHeader from "../../Components/header";
import "../../App.css";
import HeroImage from "../../Components/HeroImage/HeroImage";
import HomepageMain from "../../Components/HomepageMain/HomepageMain";
import SignUpPanel from "../../Components/HomePage/SignUpPanel";
import HomeSkillSection from "../../Components/HomePageSkillSection/HomeSkillSection";
import "../../Components/HomePageSkillSection/HomeSkillSection.css";
import useToken from "../../Helpers/useToken";

function Home() {
  const { token } = useToken();
  const isLoggedIn = !!token;

  return (
    <div className="app">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}
      <HeroImage />
      <HomepageMain />
      <HomeSkillSection />
      <SignUpPanel />
      <MainFooter />
    </div>
  );
}

export default Home;
