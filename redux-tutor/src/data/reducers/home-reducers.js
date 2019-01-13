import extend from 'xtend';
let newState;

const home = (state, action) => {
  var homeState = extend({
    homeText: "this is a redux app",
    componentText1: 'component text 1',
    componentText2: 'component text 2'
  }, state);

  switch (action.type) {
    case 'CHANGE_HOME_TEXT':
      newState = extend(homeState, {
        homeText: action.homeText
      })
      return newState
    default:
      return homeState
  }
}

export default home;