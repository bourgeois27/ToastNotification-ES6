let ul = document.querySelector('ul');

function showSuccess(msg, timeout) {
  let toast = document.createElement('li');
  toast.innerText = msg;
  toast.classList.add('toastr' , 'success');
  toast.addEventListener('click', eraseItem);
  ul.prepend(toast);
  window.setTimeout(() => {
    toast.style.display = 'none';
  }, timeout * 1000);
}

function showError(msg, timeout) {
  let toast = document.createElement('li');
  toast.innerText = msg;
  toast.classList.add('toastr', 'error');
  toast.addEventListener('click', eraseItem);
  ul.prepend(toast);
   window.setTimeout(() => {
    toast.style.display = 'none';
   }, timeout * 1000);
}

function showWarning(msg, timeout) {
  let toast = document.createElement('li');
  toast.innerText = msg;
  toast.classList.add('toastr', 'warning');
  toast.addEventListener('click', eraseItem);
  ul.prepend(toast);
  window.setTimeout(() => {
    toast.style.display = 'none';
  }, timeout * 1000);
}

function showInfo(msg, timeout) {
  let toast = document.createElement('li');
  toast.innerText = msg;
  toast.classList.add('toastr', 'info');
  toast.addEventListener('click', eraseItem);
  ul.prepend(toast);
  window.setTimeout(() => {
    toast.style.display = 'none';
  }, timeout * 1000);
}

function eraseItem() {
  this.style.display = 'none';
}

function createToastAccordingToType(msg, type, duration) {
  switch(type) {
    case 'info':
      showInfo(msg, duration);
      break;
    case 'success':
      showSuccess(msg, duration);
      break;
    case 'warning':
      showWarning(msg, duration);
      break;
    case 'error':
      showError(msg, duration);
      break;
  }
}

class Toast {
  constructor(msg, type, duration) {
    this.msg = msg;
    this.type = type;
    this.duration = duration;
  }

  createToastAccordingToType() {
    createToastAccordingToType(this.msg, this.type, this.duration);
  }  
}

export default Toast;