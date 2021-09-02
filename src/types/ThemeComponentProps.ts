import { Theme } from './theme';
import ReactNativeProps from './ReactNativeProps';

/**
 * `theme`가 적용된 컴포넌트의 `props`을 나타내는 타입입니다
 * @template T 기본 `theme`을 적용하기 전의 `props`를 나타내는 타입입니다.
 */
type ThemeComponentProps<T extends ReactNativeProps> = { theme: Theme } & T;

export default ThemeComponentProps;
