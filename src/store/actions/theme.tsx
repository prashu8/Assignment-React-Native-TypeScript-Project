export const UPDATE_THEME = 'UPDATE_THEME';

export const updateTheme = theme => {
  console.log('response is for Short Code ' + theme);

  return {type: UPDATE_THEME, payload: theme};
};
