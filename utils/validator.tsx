

export function validateEmail(email: string): boolean {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  return re.test(email);
}