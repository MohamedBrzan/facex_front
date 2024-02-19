import About from './Helpers/About';
import Activity from './Helpers/Activity';
import Analytics from './Helpers/Anlaystics';
import Education from './Helpers/Education';
import Experience from './Helpers/Experience';
import Info from './Helpers/Info';
import Interests from './Helpers/Interests';
import Skills from './Helpers/Skills';

const ProfileSections = () => {
  return (
    <section className='profile_sections'>
      <Analytics />
      <Info />
      <Activity />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
    </section>
  );
};

export default ProfileSections;
