import { alert } from "../components/Alert"

const handleError = error => {
  if (error.response) {
    let msg = ''
    if (error.response.status === 404) {
      msg = error.response.data.msg || '请求未找到'
    } else {
      msg = error.response.data.msg
    }
    alert(msg)
  }
  return Promise.reject(error);
}   

export default handleError;