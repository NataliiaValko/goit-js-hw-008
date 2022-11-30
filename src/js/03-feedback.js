import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const FORM_KEY_LS = 'feedback-form-state';

const getFormDataFromLS = key => JSON.parse(localStorage.getItem(key)); ////

const setFormDataToLS = event => {
  const formData = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
  localStorage.setItem(FORM_KEY_LS, JSON.stringify(formData));
};

const removeFormDataFromLS = key => {
  localStorage.removeItem(key);
};

const setFormDataToForm = form => {
  const formData = getFormDataFromLS(FORM_KEY_LS);
  if (!formData) {
    return;
  }
  for (const key in formData) {
    form.elements[key].value = formData[key];
  }
};

const onSubmitForm = event => {
  event.preventDefault();

  const formData = {
    email: formRef.email.value,
    message: formRef.message.value,
  };

  console.log(formData);

  event.currentTarget.reset();
  removeFormDataFromLS(FORM_KEY_LS);
};

setFormDataToForm(formRef);

formRef.addEventListener('input', throttle(setFormDataToLS, 500));
formRef.addEventListener('submit', onSubmitForm);
