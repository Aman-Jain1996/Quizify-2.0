export const checkName = (name) => new RegExp("^[a-zA-Z_ ]+$").test(name);

export const checkEmail = (email) =>
  new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email);

export const checkPassword = (password) =>
  new RegExp("[a-zA-Z0-9]{6,}").test(password);

export const checkPasswordMatch = (password, confirmPassword) =>
  password === confirmPassword;