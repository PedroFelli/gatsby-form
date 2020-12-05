/* eslint-disable no-useless-escape */

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function isUrlValid(url = '') {
  const res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (res == null) return false;
  return true;
}

const inputValidation = (questions) => {
  const questionsError = {
    website: '',
    name: '',
    email: '',
    phoneNo: '',
  };
  // console.log(questions);
  if (questions.email && !validateEmail(questions.email)) {
    questionsError.email = 'Please enter a valid email';
  } else {
    questionsError.email = '';
  }

  if (questions.website && !isUrlValid(questions.website)) {
    questionsError.website = 'Please enter a valid url';
  }
  return questionsError;
};

export default inputValidation;
