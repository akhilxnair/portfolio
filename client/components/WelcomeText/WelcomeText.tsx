// Import Styles
import style from './WelcomeText.module.scss';

const WelcomeText = () => (
  <div className={style.welcomeText}>
    <span className={style.mainText}>I&apos;m Akhil</span>
    <div className={style.helloText}>
      <div>
        <div>
          Developer
          <span role="img" aria-label="Hello">👋</span>
        </div>
      </div>
      <div>
        <div>
          Designer
          <span role="img" aria-label="Namaste">🙏</span>
        </div>
      </div>
      <div>
        <div>
          Gamer
          <span role="img" aria-label="Hola">👋</span>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeText;
