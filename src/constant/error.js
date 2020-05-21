const errorMessages = {
  fileSizeError: size => `File should be less than ${size} MB in size`,
  resolevError: "Please resolve below error",
  emailValidation: "Entered Email is not valid",
  blank: field => `${field} can not be blank`,
  numberNotValid: field => `${field} can be numeric only.`,
  priceNotValid: field => `${field} can not be blank.`,
  maxLengthReached: (elementName, charLength) =>
    `${elementName} length should not be greater than ${charLength}.`,
  resolve: 'Please resolve below error(s)'
};

export default errorMessages;