/**
 * `Gravity`를 쉽게 사용할 수 있도록 만든 상수입니다.
 */
const Gravity = {
  TOP: 1,
  VERTICAL_CENTER: 2,
  MIDDLE: 2,
  BOTTOM: 4,

  START: 8,
  LEFT: 16,
  CENTER: 32,
  RIGHT: 64,
  END: 128,
} as const;

export default Gravity;
