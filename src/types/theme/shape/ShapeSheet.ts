import Shape from './Shape';

interface ShapeSheet {
  radius: {
    large: Shape;
    regular: Shape;
    small: Shape;
  },
}

export default ShapeSheet;
