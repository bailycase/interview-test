import {
  ADD_CIRCLE,
  ADD_POLYGON,
  REMOVE_SHAPE,
  EDIT_SHAPE,
} from '../actionTypes';

const defaultState = {
  allShapeIds: [],
};

const shapes = (state = defaultState, action) => {
  const { allShapeIds } = state;
  switch (action.type) {
    case ADD_POLYGON: {
      const { points, shapeType, createdAt } = action;
      return {
        allShapeIds: [
          ...state.allShapeIds,
          { points, shapeType, createdAt, id: allShapeIds.length },
        ],
      };
    }
    case ADD_CIRCLE: {
      const { center, radius, shapeType, createdAt } = action;
      return {
        allShapeIds: [
          ...state.allShapeIds,
          { center, radius, shapeType, createdAt, id: allShapeIds.length },
        ],
      };
    }
    case EDIT_SHAPE: {
      const { updatedAt, id } = action;
      let newState = allShapeIds.slice();
      newState[id].updatedAt = updatedAt;
      return {
        allShapeIds: [...state.allShapeIds],
      };
    }
    case REMOVE_SHAPE: {
      const { key } = action;
      let newState = allShapeIds.slice();
      newState.splice(key.key, 1);
      return { allShapeIds: newState };
    }
    default:
      return state;
  }
};

export default shapes;
