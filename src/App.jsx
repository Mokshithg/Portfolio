import './index.css';
import 'tailwindcss/tailwind.css'; 
import LandingPage from './components/LandingPage';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactPage from './components/ContactPage';
import About from './components/About';

function App() {
  return (
    <div className="bg-black-100 min-h-screen">
      <LandingPage/>
      <About/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactPage/>
    </div>
  );
}

export default App;
