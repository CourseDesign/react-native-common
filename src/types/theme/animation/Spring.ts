interface Spring {
  damping: number;
  mass: number;
  stiffness: number;
  overshootClamping: boolean;
  restDisplacementThreshold: number;
  restSpeedThreshold: number;
}

export default Spring;
