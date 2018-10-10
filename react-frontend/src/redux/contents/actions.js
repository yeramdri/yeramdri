const MODULE_NAME = `CONTENTS`

export const SET_CURRENT_CONTENT = `${MODULE_NAME}/SET_CURRENT_CONTENT`;

export function setCurrentContent(id) {
  // debugger // 여기에 걸리기는 하는데, 액션이 실행되고 있지는 않다.
  return {
    type: SET_CURRENT_CONTENT,
    id
  };
}
