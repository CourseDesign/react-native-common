import { useMemo } from 'react';
import { ReactNativeStyle, Theme } from '../types';
import { useTheme } from './theme';

/**
 * 스타일을 만드는 `hook`의 파라미터타입 입니다.
 * @template Style `hook`의 결과로 나올 `Style`의 타입입니다. {@link types/ReactNativeStyle}의 하위 타입입니다.
 * @template Arguments `hook`을 사용할때 쓰이는 추가 파라미터의 타입입니다.
 */
export type StyleFactoryType<Style extends ReactNativeStyle, Arguments extends unknown[]> = (
  (theme: Theme, ...args: Arguments) => Style
);

/**
 * 커스텀 스타일을 사용할 수 있도록 해주는 `hook`을 만드는 함수입니다.
 * @example
 * ```tsx
 *const useCustomStyle = makeStyle((theme, color: string) => {
 *  width: '50%',
 *  backgroundColor: color,
 *});
 *
 *const MyComponent = ({ color, children }) => {
 *  const style = useCustomStyle(color);
 *
 *  return (
 *    <View style={style}>
 *      {children}
 *    </View>
 *  )
 *}
 * ```
 * @template Style `hook`의 결과로 나올 `Style`의 타입입니다. {@link ReactNativeStyle}의 하위 타입입니다.
 * @template Arguments `hook`을 사용할때 쓰이는 추가 파라미터의 타입입니다.
 * @param styleFactory 스타일을 만들기 위한 타입입니다.
 */
export function makeStyle<Style extends ReactNativeStyle, Arguments extends unknown[]>(
  styleFactory: StyleFactoryType<Style, Arguments>,
): (...args: Arguments) => Style {
  return (...args) => {
    const theme = useTheme();

    return useMemo(() => styleFactory(theme, ...args), [args, theme]);
  };
}

export default makeStyle;
