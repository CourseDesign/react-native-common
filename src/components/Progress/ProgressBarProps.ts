import { SizeUnit } from 'src/utils';
import ProgressProps from './ProgressProps';

/**
 * `ProgressBar`컴포넌트의 `Props` 타입입니다.
 */
interface ProgressBarProps extends ProgressProps {
  /**
   * `ProgressBar`의 색상을 결정합니다.
   */
  color?: string;
  /**
   * `ProgressBar`의 굵기를 결정합니다.
   */
  thick?: SizeUnit;
}

export default ProgressBarProps;
