import {ADD_SHAPE} from '../actionTypes'

const defaultState = {
    allShapeIds: [],
};

const shapes = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SHAPE: {
            const {id, points} = action;
            return {
                allShapeIds: [...state.allShapeIds, {id, points}]
            }
        }
        default:
            return state;
    }

}

export default shapes;