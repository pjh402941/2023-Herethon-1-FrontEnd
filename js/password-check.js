jQuery(function ($) {
  $("*[name=password1], *[name=password2]").on(
    "focusout",
    check_password_integrity
  );
});
