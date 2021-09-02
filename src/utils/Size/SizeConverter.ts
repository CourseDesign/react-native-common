import {
  DefaultSizeUnit, DirectionalSizeUnit,
  PercentPostfix,
  PercentSizeUnit,
  PixelPostfix,
  PixelSizeUnit,
  SizeUnit, UnitPostfix,
  UnitSizeUnit,
} from './Size';

/**
 * {@link DirectionalSizeUnit}을 `Object`화 시켰을때의 타입입니다.
 * {@link SizeConverter.convertDirectionalSize}의 결과값으로 주로 사용됩니다.
 */
export type DirectionalSizeObject = {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
};

/**
 * `Size`를 변환시켜주는 클래스입니다.
 */
class SizeConverter {
  /**
   * `postfix`를 생략하였을때 사용할 기본 단위 입니다. 초기값은 `unit`입니다.
   * @private
   */
  private static defaultUnit: PixelPostfix | PercentPostfix | UnitPostfix = 'unit';

  /**
   * `unit`단위를 어떻게 처리할지 결정하는 함수입니다.
   * @param it `unit`단위의 입력입니다.
   * @return `unit`단위의 결과값으로 `px`과 동일합니다.
   */
  private static unitPattern: (size: number) => number = (it) => it * 2;

  /**
   * 크기를 조절하는 함수입니다.
   * @param size 단위를 입력으로 합니다. `1px`, `30%`, `10unit` 등이 들어갈 수 있습니다.
   * @param basis `%`단위를 px로 변경할때, `100%`일때 값을 정합니다. 생략시 %는 그대로 나옵니다.
   */
  static convertSize(size: SizeUnit, basis?: number): number | string {
    let sizeUnit: SizeUnit = size;
    if (this.isDefault(size)) {
      switch (this.defaultUnit) {
        case 'px':
          sizeUnit = `${size}px`;
          break;
        case '%':
          sizeUnit = `${size}%`;
          break;
        case 'unit':
          sizeUnit = `${size}unit`;
          break;
        default:
          sizeUnit = `${size}${this.defaultUnit}`;
      }
    }

    if (this.isPixel(sizeUnit)) return this.convertPixelSize(sizeUnit);
    if (this.isPercent(sizeUnit)) {
      return (
        basis !== undefined
          ? this.convertPercentSize(sizeUnit, basis)
          : sizeUnit
      );
    }
    if (this.isUnit(sizeUnit)) return this.convertUnitSize(sizeUnit);

    return 0;
  }

  /**
   * {@link SizeConverter.convertSize}의 확장버전입니다.
   * @param size 방향성 있는 단위를 입력으로 합니다. `1px 30%`, `0 30% 10unit 7px` 등이 들어갈 수 있습니다.
   * @param basis `%`단위를 px로 변경할때, `100%`일때 값을 정합니다. 생략시 %는 그대로 나옵니다.
   * @return `Record<string, string | number>` 형태로 `left`, `right`, `top`, `bottom`으로 구분되어 나옵니다.
   * 각 필드의 값은 `px`입니다.
   */
  static convertDirectionalSize(size: DirectionalSizeUnit, basis?: number): DirectionalSizeObject {
    const [a, b, c, d] = size.split(' ') as [SizeUnit, SizeUnit, SizeUnit | undefined, SizeUnit | undefined];
    if (c === undefined || d === undefined) {
      const top = this.convertSize(a, basis);
      const bottom = this.convertSize(b, basis);

      return { top, bottom };
    }
    const top = this.convertSize(a, basis);
    const right = this.convertSize(b, basis);
    const bottom = this.convertSize(c, basis);
    const left = this.convertSize(d, basis);

    return {
      top, bottom, left, right,
    };
  }

  /**
   * 기본 단위를 정합니다
   * @param unit 단위의 `postfix`가 들어갈 수 있습니다.
   */
  static setDefaultUnit(unit: PixelPostfix | PercentPostfix | UnitPostfix): void {
    this.defaultUnit = unit;
  }

  /**
   * `unit`단위를 어떻게 처리할지 설정하는 함수입니다.
   * @param pattern {@link unitPattern}과 동일한 값입니다.
   */
  static setUnitPattern(pattern: (size: number) => number): void {
    this.unitPattern = pattern;
  }

  /**
   * 방향성이 있는 크기인지 확인합니다.
   * @param size 크기 값이 들어갑니다.
   */
  static isDirectional(size: SizeUnit | DirectionalSizeUnit): size is DirectionalSizeUnit {
    return size.toString().indexOf(' ') !== -1;
  }

  /**
   * `SizeUnit`을 type-safe하게 사용할떄 쓰입니다.
   * `postfix`를 생략한 단위인지 확인합니다.
   * @param size 크기 값이 들어갑니다.
   */
  static isDefault(size: SizeUnit): size is DefaultSizeUnit {
    return size === Number(size);
  }

  /**
   * `SizeUnit`을 type-safe하게 사용할떄 쓰입니다.
   * `px`인지 확인합니다.
   * @param size 크기 값이 들어갑니다.
   */
  static isPixel(size: SizeUnit): size is PixelSizeUnit {
    return `${size}`.slice(-2) === 'px';
  }

  /**
   * `SizeUnit`을 type-safe하게 사용할떄 쓰입니다.
   * `%`인지 확인합니다.
   * @param size 크기 값이 들어갑니다.
   */
  static isPercent(size: SizeUnit): size is PercentSizeUnit {
    return `${size}`.slice(-1) === '%';
  }

  /**
   * `SizeUnit`을 type-safe하게 사용할떄 쓰입니다.
   * `unit`인지 확인합니다.
   * @param size 크기 값이 들어갑니다.
   */
  static isUnit(size: SizeUnit): size is UnitSizeUnit {
    return `${size}`.slice(-4) === 'unit';
  }

  /**
   * `px`의 사이즈를 숫자로 변환합니다.
   * @param size `px`단위만 들어갈 수 있습니다.
   * @private
   */
  private static convertPixelSize(size: PixelSizeUnit): number {
    return Number(size.slice(0, -2));
  }

  /**
   * `%`의 사이즈를 숫자로 변환합니다.
   * @param size `%`단위만 들어갈 수 있습니다.
   * @param basis `100%` 기준일떄의 픽셀크기를 지칭합니다.
   * @private
   */
  private static convertPercentSize(size: PercentSizeUnit, basis: number): number {
    const percent = Number(size.slice(0, -1)) / 100;

    return percent * basis;
  }

  /**
   * `unit`의 사이즈를 숫자로 변환합니다.
   * @param size `unit`단위만 들어갈 수 있습니다.
   * @private
   */
  private static convertUnitSize(size: UnitSizeUnit): number {
    const num = Number(size.slice(0, -4));

    return this.unitPattern(num);
  }
}

export default SizeConverter;
