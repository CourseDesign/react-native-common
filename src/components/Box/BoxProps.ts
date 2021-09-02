import { ScrollViewProps, ViewProps, ViewStyle } from 'react-native';

import { Gravity } from '../../types';
import { DirectionalSizeUnit, SizeUnit } from '../../utils';

/**
 * 공용으로 쓰여질 `Box`컴포넌트의 `props`타입입니다.
 */
export interface GeneralBoxProps {
  /**
   * `Box`의 가로 크기를 설정합니다.
   */
  width?: SizeUnit;
  /**
   * `Box`의 세로 크기를 설정합니다.
   */
  height?: SizeUnit;
  /**
   * `Box`의 안쪽 여백을 설정합니다. 4가지 방향을 설정할 수 있습니다.
   * 나머지 `padding`계열의 값이 가장 우선시 됩니다
   * @example
   * ```tsx
   * // 다음과 같이 쓴경우는
   *<Box width={10} height={10} padding={5} paddingLeft={10} />
   * // 아래와 동일합니다
   *<Box width={10} height={10} padding={'5 5 5 10'} />
   * ```
   */
  padding?: SizeUnit | DirectionalSizeUnit;
  /**
   * `Box`의 안쪽 여백을 설정합니다. `start` 방향을 설정할 수 있습니다.
   */
  paddingStart?: SizeUnit;
  /**
   * `Box`의 안쪽 여백을 설정합니다. `end` 방향을 설정할 수 있습니다.
   */
  paddingEnd?: SizeUnit;
  /**
   * `Box`의 안쪽 여백을 설정합니다. `left` 방향을 설정할 수 있습니다.
   */
  paddingLeft?: SizeUnit;
  /**
   * `Box`의 안쪽 여백을 설정합니다. `right` 방향을 설정할 수 있습니다.
   */
  paddingRight?: SizeUnit;
  /**
   * `Box`의 안쪽 여백을 설정합니다. `top` 방향을 설정할 수 있습니다.
   */
  paddingTop?: SizeUnit;
  /**
   * `Box`의 안쪽 여백을 설정합니다. `bottom` 방향을 설정할 수 있습니다.
   */
  paddingBottom?: SizeUnit;
  /**
   * `Box`의 바깥쪽 여백을 설정합니다. 4가지 방향을 설정할 수 있습니다.
   * 나머지 `margin`계열의 값이 가장 우선시 됩니다
   * @example
   * ```tsx
   * // 다음과 같이 쓴경우는
   *<Box width={10} height={10} margin={5} marginLeft={10} />
   * // 아래와 동일합니다
   *<Box width={10} height={10} margin={'5 5 5 10'} />
   * ```
   */
  margin?: SizeUnit | DirectionalSizeUnit;
  /**
   * `Box`의 바깥쪽 여백을 설정합니다. `start` 방향을 설정할 수 있습니다.
   */
  marginStart?: SizeUnit;
  /**
   * `Box`의 바깥쪽 여백을 설정합니다. `end` 방향을 설정할 수 있습니다.
   */
  marginEnd?: SizeUnit;
  /**
   * `Box`의 바깥쪽 여백을 설정합니다. `left` 방향을 설정할 수 있습니다.
   */
  marginLeft?: SizeUnit;
  /**
   * `Box`의 바깥쪽 여백을 설정합니다. `right` 방향을 설정할 수 있습니다.
   */
  marginRight?: SizeUnit;
  /**
   * `Box`의 바깥쪽 여백을 설정합니다. `top` 방향을 설정할 수 있습니다.
   */
  marginTop?: SizeUnit;
  /**
   * `Box`의 바깥쪽 여백을 설정합니다. `bottom` 방향을 설정할 수 있습니다.
   */
  marginBottom?: SizeUnit;
  /**
   * `Box`의 `position`을 결정합니다.
   */
  position?: ViewStyle['position'];
  /**
   * `Box`의 정렬 방향을 설정합니다. 세로방향과 가로방향이 있습니다.
   */
  align?: 'vertical' | 'horizontal';
  /**
   * `Box`안의 `children`이 위치할 공간을 설정합니다. 9가지 위치를 설정할 수 있습니다.
   */
  gravity?: Gravity;
}

/**
 * `Box`가 스크롤 할 수 있는 경우에 사용됩니다.
 * `scrollEnable` 이외의 추가된 필드는 {@link GeneralBoxProps}을 확인해주세요.
 */
export interface ScrolledBoxProps extends Omit<ScrollViewProps, 'scrollEnabled'>, GeneralBoxProps {
  /**
   * `Box`안의 `children`이 스크롤할 수 있는지의 여부를 결정합니다.
   */
  scrollEnabled: true;
}
/**
 * `Box`가 스크롤 할 수 없는 경우에 사용됩니다.
 * `scrollEnable` 이외의 나머지 필드는 {@link GeneralBoxProps}을 확인해주세요.
 */
export interface UnScrolledBoxProps extends ViewProps, GeneralBoxProps {
  /**
   * `Box`안의 `children`이 스크롤할 수 있는지의 여부를 결정합니다.
   */
  scrollEnabled?: false;
}

/**
 * `Box`컴포넌트의 `props`타입입니다.
 */
type BoxProps = ScrolledBoxProps | UnScrolledBoxProps;

export default BoxProps;
