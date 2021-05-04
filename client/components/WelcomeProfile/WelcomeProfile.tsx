// Import Modules
import { useState } from 'react';

// Import Styles
import style from './WelcomeProfile.module.scss';

const SocialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/akhilxnair',
    favicon: 'fab fa-github',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/akhilxnair',
    favicon: 'fab fa-linkedin',
  },
  {
    name: 'Email',
    href: 'mailto: 4khiln4ir@gmail.com',
    favicon: 'fas fa-envelope',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/AkhilxNair',
    favicon: 'fab fa-twitter',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/AkhilxNair/',
    favicon: 'fab fa-facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/akhilxn/',
    favicon: 'fab fa-instagram',
  },
];

const WelcomeProfile = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className={`${style.profileButton} ${profileOpen ? `${style.profileButtonOpen}` : ''}`} title="Akhil Nair">
      <img role="presentation" src="/images/akhil.jpg" className={style.profileButtonImage} alt="Profile" onClick={() => setProfileOpen(!profileOpen)} />
      {SocialLinks.map((link) => (
        <a
          className={`${style.socialButton} ${profileOpen ? `${style.socialButtonOpen}` : ''}`}
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
