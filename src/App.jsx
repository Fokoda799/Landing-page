import ButtonGradient from './assets/svg/ButtonGradient';
import Footer from './component/layouts/Footer';
import Header from './component/layouts/Header';
import { Hero, Benefits, Collaboration, Services, Pricing, Roadmap } from './component/section';

const App = () => {
  return (
    <>
      <div className="pt-19 lg:pt-21 overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;

