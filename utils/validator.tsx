

export function validateEmail(email: string): [boolean, string] {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  if(!re.test(email)) {
    return [false, "Invalid email address"]
  }
  return [true, "ok"]
}

export function validateName(name: string): [boolean, string] {
  const re = /^[a-zA-Z ]+$/;
  if(!name || name.length === 0) {
    return [false, "Name is required"]
  }
  if(name.length < 2 || name.length > 30) {
    return [false, "Name must be at least 2 to 30 characters long"]
  }
  if(!re.test(name)) {
    return [false, "Invalid name"]
  }
  return [true, "ok"]
}

// a function that validate username to be at least 3 characters long and only accept letters and nnumber characters
export function validateUsername(username: string): [boolean, string] {
  const re = /^[a-zA-Z0-9]+$/;
  if(!username || username.length === 0) {
    return [false, "Username is required"]
  }
  if(username.length < 3 || username.length > 30) {
    return [false, "Username must be at least 2 to 30 characters long"]
  }
  if(!re.test(username)) {
    return [false, "Invalid username"]
  }
  return [true, "ok"]
}

export function validatePassword(password: string): [boolean, string] {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  if(!password || password.length === 0) {
    return [false, "Password is required"]
  }
  if(password.length < 8) {
    return [false, "Password must be at least 8 characters long"]
  }
  if(!re.test(password)) {
    return [false, "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character"]
  }
  return [true, "ok"]
}

export function validateDate(date: string): [boolean, string] {
  const userDate = new Date(date);
  const dateNow = Date.now();
  const re = /^(19[2-9][0-9]|20[0-9][0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

  if(!date || date.length === 0) {
    return [false, "Date is required"]
  }
  if(userDate.getTime() > dateNow) {
    return [false, "Invalid date"]
  }
  if(!re.test(date)) {
    return [false, "Invalid date"]
  }
  return [true, "ok"]
}