// export interface LoginMessageError {
//   email: string;
//   password: string;
// }

// export interface LoginRegex {
//   email: RegExp;
//   password: RegExp;
// }

export interface LoginMessageError {
  [key: string]: string;
}

export interface LoginRegex {
  [key: string]: RegExp;
}