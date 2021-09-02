/**
 * 세로 방향에서 `View`가 위치할 곳을 정합니다.
 * 위는 `top`, 중앙은 `vertical-center 혹은 `middle`, 아래는 `bottom`입니다.
 */
export type VerticalGravity = 'top' | 'vertical-center' | 'middle' | 'bottom';
/**
 * 가로 방향에서 `View`가 위치할 곳을 정합니다.
 * 왼쪽은 `left`, 중앙은 `horizontal-center` 혹은 `center`, 오른쪽은 `right`입니다.
 * RTL 지원을 위해 `start`와 `end`또한 존재합니다. (기본값 `start`=`left`, `end`=`right`)
 */
export type HorizontalGravity = 'start' | 'left' | 'horizontal-center' | 'center' | 'right' | 'end';
/**
 * 모든 방향에서 `View`가 위치할 곳을 정합니다.
 */
export type GravityString = (
  VerticalGravity | HorizontalGravity
  | 'top-left' | 'top-right' | 'top-start' | 'top-end' | 'top-center'
  | 'center-left' | 'center-right' | 'center-start' | 'center-end' | 'center-center'
  | 'bottom-left' | 'bottom-right' | 'bottom-start' | 'bottom-end' | 'bottom-center'
);

/**
 * 세로 방향에서 `View`가 위치할 곳을 정합니다.
 * 위는 `1`, 중앙은 `2`, 아래는 `4`입니다.
 */
export type VerticalGravityNumber = 1 | 2 | 4;
/**
 * 가로 방향에서 `View`가 위치할 곳을 정합니다 왼쪽은 `16`, 중앙은 `32`, 오른쪽은 `64`입니다.
 * RTL 지원을 위해 시작 위치(`8`)와 끝 위치(`128`)또한 존재합니다. (기본값 `8`=`16`, `128`=`64`)
 */
export type HorizontalGravityNumber = 8 | 16 | 32 | 64 | 128;
/**
 * 모든 방향에서 `View`가 위치할 곳을 정합니다.
 */
export type GravityNumber = (
  VerticalGravityNumber | HorizontalGravityNumber
  | 9 | 17 | 33 | 65 | 129 | 10 | 18 | 34 | 66 | 130 | 12 | 20 | 36 | 68 | 132
) | number;

/**
 * `View`가 어느곳에 위치할지 정하는 타입입니다.
 */
type Gravity = GravityString | GravityNumber;

export default Gravity;
