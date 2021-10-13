const Durations = {
  VeryFast: 0.3,
  Fast: 0.6,
  Normal: 0.8,
  Slow: 1.2,
  VerySlow: 1.8,
};

const Easing = [0.6, -0.05, 0.01, 0.99];

const FadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: Durations.Fast, ease: Easing },
  },
};

const FadeInUpSlower = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: Durations.Normal, ease: Easing },
  },
};

const LetterSpace = {
  initial: { opacity: 0 },
  animate: {
    letterSpacing: ["0px", "-10px", "0px"],
    opacity: 1,
    transition: { duration: Durations.Slow, ease: Easing },
  },
};

const SimpleOpacity = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: Durations.Fast, ease: Easing },
  },
};

const ScaleUp = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    opacity: [0, 1],
    scale: [1, 1.05, 1],
    transition: { duration: Durations.VerySlow, ease: Easing },
  },
  lightMode: {
    opacity: [0, 1],
    scale: [0.99, 1.05, 1],
    transition: { duration: Durations.VerySlow, ease: Easing },
  },
};

const MenuAnim = {
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: Easing, duration: Durations.VeryFast },
  },
  hide: {
    opacity: 0,
    y: -100,
    transition: { ease: Easing, duration: Durations.VeryFast },
  },
};

const AvatarAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: Durations.Fast, ease: Easing },
  },
  exit: { opacity: 0 },
};

const Stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const GalleryStagger = {
  animate: { transition: { staggerChildren: 0.2 } },
};

export { Durations, Easing, FadeInUp, FadeInUpSlower, LetterSpace, Stagger, GalleryStagger, SimpleOpacity, MenuAnim, ScaleUp, AvatarAnimation };
