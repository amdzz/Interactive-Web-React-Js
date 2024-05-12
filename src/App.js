import NavbarComponents from "./components/NavbarComponents";
import HeroComponents from "./components/HeroComponents";
import GalleryComponents from "./components/GalleryComponents";
import LinkComponents from "./components/LinkComponents";
import ServicesComponents from "./components/ServicesComponents";
import FaqComponents from "./components/FaqComponents";
import FooterComponents from "./components/FooterComponents";

function App() {
  return <div>
    <HeroComponents />

    {/* Content */}
    <NavbarComponents />
    <GalleryComponents />
    <ServicesComponents />
    <LinkComponents />
    <FaqComponents />
    {/* Content */}

    <FooterComponents />
  </div>;
}

export default App;
