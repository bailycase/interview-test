import { ADD_SHAPE } from './actionTypes';

let nextShapeId = 0;

export const addShape = (lat, lng) => ({
  type: ADD_SHAPE,
  payload: {
    id: ++nextShapeId,
    lat: lat,
    lng: lng,
  },
});
