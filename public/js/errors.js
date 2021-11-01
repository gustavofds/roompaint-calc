const hideError = () => {
  const el = document.querySelector('.error');
  if (el) el.parentElement.removeChild(el);
};

export const showError = (msg, time = 12) => {
  hideError();
  const markup = `<div class="error">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideError, time * 1000);
};
