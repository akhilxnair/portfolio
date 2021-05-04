// Import Styles
import style from './IntroText.module.scss';

const IntroText = () => (
  <div className={style.introText}>
    <div className={style.mainText}>Welcome &nbsp; </div>
    <div className={style.droppingTexts}>
      <div>Hello</div>
      <div>Hola</div>
      <div>Namaste</div>
      <div>Bonjour</div>
    </div>
  </div>
);

export default IntroText;
