// src/utilities/validations.js
//
// https://regexr.com/
// https://www.regextester.com/
//

export const validations = {
  // eslint-disable-next-line
  NOTHING: /^(.*)/,
  ANYTHING: /^(.+)/,
  EMAIL: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  USA_STATE_ABRV: /^[A-Z]{2}$/,
  PHONE: /^\+?[\d\s]{3,}$/,
  PHONE_W_CODE: /^\+?[\d\s]+\(?[\d\s]{10,}$/,
  // Year 1900-2099
  YEAR: /^(19|20)[\d]{2,2}$/,
  // Date (dd mm yyyy, d/m/yyyy, etc.):
  DATE: /^([1-9]|0[1-9]|[12][0-9]|3[01])\D([1-9]|0[1-9]|1[012])\D(19[0-9][0-9]|20[0-9][0-9])$/,
  INTEGER: /^-?\d*$/,
  INTEGER_GE0: /^\d*$/,
  INTEGER_LE0: /^-\d*$/,
  REAL: /^-?\d+((,\d+)+)?(.\d+)?(.\d+)?(,\d+)?/,
  REAL_GE0: /^\d+((,\d+)+)?(.\d+)?(.\d+)?(,\d+)?/,
  REAL_LE0: /^-\d+((,\d+)+)?(.\d+)?(.\d+)?(,\d+)?/
}

