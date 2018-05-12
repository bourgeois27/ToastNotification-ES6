import Toast from "./toast.js";

let msgInput = document.getElementById('msg');
let typeInput = document.getElementById('type');
let durationInput = document.getElementById('duration');
let triggerBtn = document.getElementById('trigger');
let clearBtn = document.getElementById('clear');

triggerBtn.addEventListener('click', triggerToastrNotification);
msgInput.addEventListener('keyup', showClearButton);

function triggerToastrNotification() {
  let toastMsg = (msgInput.value.length) ? msgInput.value : false;
  let toastType = typeInput.value;
  let toastDuration = (durationInput.value.length) ? durationInput.value : false;
  if(toastMsg && toastDuration) {
    let toastNotification = new Toast(toastMsg, toastType, toastDuration);
    toastNotification.createToastAccordingToType();
  }
  else {
    alert('vous devez fournir tous les paramètres')
  }
}

function showClearButton() {
  clearBtn.style.visibility = (msgInput.value.length) ? 'visible' : 'hidden';
  clearBtn.onclick = function() {
    this.style.visibility = 'hidden';
    msgInput.value = '';
    durationInput.value = '';
  };
}
