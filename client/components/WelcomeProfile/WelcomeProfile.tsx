// Import Modules
import { useState } from 'react';

// Import Config
import { SocialLinks } from '@config/StaticData';

// Import Styles
import style from './WelcomeProfile.module.scss';

const WelcomeProfile = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className={`${style.profileButton} ${profileOpen ? `${style.profileButtonOpen}` : ''}`} title="Akhil Nair">
      <img role="presentation" src="/assets/Me.jpg" className={style.profileButtonImage} alt="Profile" onClick={(prevValue) => setProfileOpen(!prevValue)} />
      {SocialLinks.map((link) => (
        <a
          className={`${style.socialButton}
           ${profileOpen ? `${style.socialButtonOpen}` : ''}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          title={link.name}
          key={link.name}
        >
          <i className={link.favicon} title={link.name} />
        </a>
      ))}
    </div>
  );
};

export default WelcomeProfile;
