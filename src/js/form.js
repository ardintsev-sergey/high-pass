document.addEventListener('DOMContentLoaded', function() {
  const aboutFormValidate = new JustValidate(".about__form", {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {},
  });
  aboutFormValidate
    .addField(".about-email", [
      {
        rule: "required",
        errorMessage: "Недопустимый формат",
      },
      {
        rule: "email",
        errorMessage: "Недопустимый формат",
      },
    ])

  const contactsFormValidate = new JustValidate(".form", {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {},
  });
  contactsFormValidate
    .addField(".contacts-name", [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: 'Введите не менее 2 букв',
      },
      {
        rule: "maxLength",
        value: 10,
        errorMessage: 'Введите не более 10 букв',
      },
    ])
    .addField(".contacts-email", [
      {
        rule: "required",
        errorMessage: "Недопустимый формат",
      },
      {
        rule: "email",
        errorMessage: "Недопустимый формат",
      },
    ])
    .addField(".contacts-textarea", [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: 'Введите не менее 2 букв',
      },
      {
        rule: "maxLength",
        value: 1000,
        errorMessage: 'Введите не более 10 букв',
      },
    ]);
})
