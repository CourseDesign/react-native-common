/**
 * 기본 크기의 표기를 나타내는 타입입니다.
 */
export type DefaultPostfix = '';
/**
 * 픽셀의 표기를 나타내는 타입입니다.
 */
export type PixelPostfix = 'px';
/**
 * 비율의 표기를 나타내는 타입입니다.
 */
export type PercentPostfix = '%';
/**
 * 단위의 표기를 나타내는 타입입니다.
 */
export type UnitPostfix = 'unit';
/**
 * 크기를 표기할때 나타내는 타입입니다.
 */
export type SizePostfix = DefaultPostfix | PixelPostfix | PercentPostfix | UnitPostfix;

/**
 * 기본 크기를 나타내는 타입입니다. {@link DefaultPostfix ""}으로 표기합니다.
 */
export type DefaultSizeUnit = `${number}${DefaultPostfix}`;
/**
 * 픽셀의 크기를 나타내는 타입입니다. "{@link PixelPostfix px}"으로 표기합니다.
 */
export type PixelSizeUnit = `${number}${PixelPostfix}`;
/**
 * 비율의 크기를 나타내는 타입입니다. "{@link PercentPostfix %}"으로 표기합니다.
 */
export type PercentSizeUnit = `${number}${PercentPostfix}`;
/**
 * 단위의 크기를 나타내는 타입입니다. "{@link UnitPostfix unit}"으로 표기합니다.
 */
export type UnitSizeUnit = `${number}${UnitPostfix}`;

/**
 * 크기를 나타내는 타입입니다.
 * 총 4가지 종류로
 * 숫자({@link DefaultPostfix ""}),
 * 픽셀({@link PixelPostfix px}),
 * 비율({@link PercentPostfix %}),
 * 단위({@link UnitPostfix unit})가 있습니다.
 * 일반 숫자의 경우 3가지중 기본값으로 설정됩니다. (기본값은 단위({@link UnitPostfix unit}))
 */
export type SizeUnit = number | `${number}${SizePostfix}`;
/**
 * 방향성이 있는 크기를 나타내는 타입으로 여백을 통해 구분됩니다.
 * 주로 `padding`, `margin`에 사용됩니다.
 * 1방향, 2방향, 4방향을 나타낼 수 있습니다.
 * @example
 * ```tsx
 * // 위로 30% 아래로 24px
 *const padding2: DirectionalSizeUnit = '30% 24px';
 * // 위로 30% 오른쪽으로 24px 아래로 2(기본값) 왼쪽으로 3unit
 *const padding3: DirectionalSizeUnit = '30% 24px 2 3unit';
 * ```
 */
export type DirectionalSizeUnit = `${SizeUnit} ${SizeUnit}` | `${SizeUnit} ${SizeUnit} ${SizeUnit} ${SizeUnit}`;

/**
 * `React Native`의 스타일에 사용되는 단위들 입니다.
 * 픽셀과 비율로 이루어져 있습니다.
 */
export type ReactNativeSizeUnit = number | PercentSizeUnit;
