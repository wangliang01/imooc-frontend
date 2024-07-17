const handleError = error => {
  if (error.response) {
    if (error.response.status === 404) {
      console.log("请求未找到---" + error.response.config.url)
    }
  }
  console.log(error);
  return Promise.reject(error);
}   

export default handleError;