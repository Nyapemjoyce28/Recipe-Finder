import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkill";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";


export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </div>
    )
}