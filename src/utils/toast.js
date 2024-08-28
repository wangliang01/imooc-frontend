import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export function toast(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: '#fff',
      color: '#333'
    }
  }).showToast()
}
