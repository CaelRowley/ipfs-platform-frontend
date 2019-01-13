const updateHomeText = (homeText) => ({
  type: 'CHANGE_HOME_TEXT',
  homeText
})

export const changeHomeText = () => async (dispatch, getState) => {
  const state = getState();
  dispatch(updateHomeText('this is the new text'));
}