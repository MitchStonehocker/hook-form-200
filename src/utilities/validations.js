// src/utilities/validations.js
//
// https://regexr.com/
// https://www.regextester.com/
//

export const validations = {
  // eslint-disable-next-line
  EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  INTEGER: /^\d*$/,
  REAL: /^\d+((,\d+)+)?(.\d+)?(.\d+)?(,\d+)?/,
  USA_STATE_ABRV: /^[A-Z]{2}$/
}
