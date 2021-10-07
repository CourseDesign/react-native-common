import { ViewProps, ViewStyle } from 'react-native';

/**
 * `Progress`계열 컴포넌트의 `Props` 베이스 타입입니다.
 */
interface ProgressProps extends Omit<ViewProps, 'style'> {
  /**
   * `Progress`가 애니메이션을 사용하여 부드럽게 움직일지 결정합니다.
   * 기본값은 `true`입니다.
   */
  animated?: boolean;
  /**
   * `Progress`의 값입니다. 최솟값 `0`, 최댓값 `1`입니다.
   * 기본값은 `0`입니다.
   */
  value?: number;
  /**
   * `Progress`가 무한정 지속되어야 할 때 사용합니다.
   * 기본값은 `false`입니다.
   */
  indeterminate?: boolean;
  /**
   * 버퍼 값을 표시합니다. {@link ProgressProps.value}와 마찬가지로 최솟값 `0`, 최댓값 `1`입니다.
   * 아에 설정하지 않을 경우 버퍼를 표시하지 않습니다.
   */
  bufferValue?: number;

  /**
   * `Progress`의 백그라운드 스타일을 결정합니다.
   * 기본값은 `{ color: 'grey[400]' }` 입니다.
   */
  backgroundStyle?: ViewStyle;
  /**
   * `Progress`의 포그라운드 스타일을 결정합니다.
   * 기본값은 `{ color: 'primary.main' }` 입니다.
   */
  foregroundStyle?: ViewStyle;
  /**
   * `Progress`의 버퍼 스타일 입니다.
   * 기본값은 `{ borderRadius: '100%', color: 'primary.main' }` 입니다.
   */
  bufferStyle?: ViewStyle;
}

export default ProgressProps;
