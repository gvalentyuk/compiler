import {
  MoveCellAction,
  DeleteCellAction,
  UpdateCellAction,
  InserCellBeforeAction,
  Direction,
} from "../actions/index";
import { CellTypes } from "../cell";
import { ActionType } from "../action-types/index";

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};
export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};
export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};
export const insertBeforeCell = (
  id: string,
  type: CellTypes
): InserCellBeforeAction => {
  return {
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
      id,
      type,
    },
  };
};