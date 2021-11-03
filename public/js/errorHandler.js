const hideError = () => {
  const el = document.querySelector('.error');
  if (el) el.parentElement.removeChild(el);
};

export const showError = (msg, time = 12) => {
  hideError();
  const markup = `<div class="notification is-danger error">${msg}</div>`;
  document.querySelector('.content').insertAdjacentHTML('afterbegin', markup);

  window.scrollTo(0, 0);
  window.setTimeout(hideError, time * 1000);
};
