const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (
    /[!@#$%^&*(),.?":{}|<>]/g.test(values.username) ||
    /\d+/g.test(values.username)
  ) {
    errors.username = "accepts alphabets and apace";
  }
  if (!values.associateid) {
    errors.associateid = "Required";
  } else if (
    /[!@#$%^&*(),.?":{}|<>]/g.test(values.associateid) ||
    /^[a-zA-Z]/.test(values.associateid)
  ) {
    errors.associateid = "please enter the assocoate id";
  }
  if (!values.projectid) {
    errors.projectid = "Required";
  } else if (/[!@#$%^&*(),.?":{}|<>]/g.test(values.projectid)) {
    errors.projectid = "invalid id write alphanumeric value";
  } else if (values.projectid.length <= 12) {
    errors.projectid = "invalid associate id";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export default validate;
