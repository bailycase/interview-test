import { DRAW_POLYGON, DRAW_CIRCLE, DRAW_EDIT } from '../actionTypes';
const defaultState = {
  drawingMode: 'null',
};

const drawingMode = (state = defaultState, action) => {
  switch (action.type) {
    case DRAW_EDIT: {
      return {
        drawingMode: null,
      };
    }
    case DRAW_POLYGON: {
      return {
        drawingMode: 'polygon',
      };
    }
    case DRAW_CIRCLE: {
      return {
        drawingMode: 'circle',
      };
    }
    default:
      return state;
  }
};

export default drawingMode;
