const MODULE_NAME = `CONTENTS`

export const SET_CURRENT_CONTENT = `${MODULE_NAME}/SET_CURRENT_CONTENT`;

export function setCurrentContent(id) {
  return {
    type: SET_CURRENT_CONTENT,
    id
  };
}
