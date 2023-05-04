import { Dialog } from "@capacitor/dialog";

export const showAlertDialog = function (title, message, buttonTitle) {
  return Dialog.alert({ title, message, buttonTitle });
};

export const showPromptDialog = function (
  title,
  message,
  okButtonTitle,
  cancelButtonTitle,
  inputPlaceholder,
  inputText
) {
  return Dialog.prompt({
    title,
    message,
    okButtonTitle,
    cancelButtonTitle,
    inputPlaceholder,
    inputText,
  });
};

export const showConfirmDialog = function (
  title,
  message,
  okButtonTitle,
  cancelButtonTitle
) {
  return Dialog.confirm({ title, message, okButtonTitle, cancelButtonTitle });
};
