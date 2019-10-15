import { ADD_CIRCLE, ADD_POLYGON, REMOVE_SHAPE } from '../actionTypes';

const defaultState = {
  allShapeIds: [],
};

const shapes = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POLYGON: {
      const { points, shapeType } = action;
      return {
        allShapeIds: [...state.allShapeIds, { points, shapeType }],
      };
    }
    case ADD_CIRCLE: {
      const { center, radius, shapeType } = action;
      return {
        allShapeIds: [...state.allShapeIds, { center, radius, shapeType }],
      };
    }
    case REMOVE_SHAPE: {
      const { key } = action;
      const { allShapeIds } = state;
      let newState = allShapeIds.slice();
      newState.splice(key.key, 1);
      return { allShapeIds: newState };
    }
    default:
      return state;
  }
};

export default shapes;
