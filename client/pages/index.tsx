// Import Modules
import Head from 'next/head';
import Particles from 'react-particles-js';

// Important Components
import WelcomeText from '../components/WelcomeText/WelcomeText';
import WelcomeProfile from '../components/WelcomeProfile/WelcomeProfile';
import IntroText from '../components/IntroText/IntroText';

// Import Styles
import style from '../styles/index.module.scss';

const Homepage = () => (
  <div className={style.homepage}>
    <Head>
      <title>Akhil Nair - Welcome</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className={style.welcomeWrapper}>
        <WelcomeText />
      </div>
      <div className={style.welcomeProfile}>
        <WelcomeProfile />
      </div>
      <div className={style.introWrapper}>
        <IntroText />
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: { enable: true, value_area: 1500 },
            },
            line_linked: { enable: true, opacity: 0.1 },
            move: { direction: 'right', speed: 0.05 },
            size: { value: 1 },
            opacity: {
              anim: { enable: true, speed: 1, opacity_min: 1 },
            },
          },
          interactivity: {
            events: {
              onclick: { enable: true, mode: 'push' },
              onhover: { enable: true, mode: 'repulse' },
            },
            modes: {
              push: { particles_nb: 1 },
            },
          },
          retina_detect: true,
        }}
      />
    </main>
  </div>
);

export default Homepage;
