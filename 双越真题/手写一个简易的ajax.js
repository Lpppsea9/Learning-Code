//XMLHttpRequest

//状态码

//

const xhr = new XMLHttpRequest()
xhr.open("GET", "/api", true)  //异步的请求
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      alert(xhr.responseText)
    }
  }
}

xhr.send(null)
