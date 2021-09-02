import Spring from './Spring';
import Easing from './Easing';

interface Animation {
  duration: {
    fastest: number;
    faster: number;
    fast: number;
    normal: number;
    slow: number;
    slower: number;
    slowest: number;

    screenPush: number;
    screenPop: number;
  };

  spring: Spring;

  easing: {
    in: Easing;
    out: Easing;
    inout: Easing;
    linear: Easing;
  }
}

export default Animation;
