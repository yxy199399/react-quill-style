export const ajax = ({
  type,
  url,
  data,
  headers,
  onProgress,
}:{
  type: 'get' | 'post'
  url: string
  data?: string
  headers?: Record<string, any>
  onProgress?: (data: {loaded: number,total: number}) => void
}) => {
  // 创建promise
  return new Promise((resolve, reject) => {
    // 1.创建对象
    const xhr = new XMLHttpRequest()
    // 监听进度，必须在执行之前
    xhr.upload.addEventListener('progress', (e) => {
      onProgress?.({
        loaded: e.loaded,
        total: e.total
      })
    })
    // 2.初始化
    xhr.open(type, url)
    // 3.请求头设置
    for (const key in headers) {//遍历header,设置响应头
      let value = headers[key];
      xhr.setRequestHeader(key,value);
    }
    // 4.发送
    xhr.send(data)
    // 5.处理响应结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //判断响应状态码 2xx
        try {
          if(xhr.status >= 200 && xhr.status < 300) {
            // 成功
            resolve([null, xhr.response]);
          } else {
            // 失败
            resolve([xhr.status, null]);
          }
        } catch {
          reject(new Error('服务器错误请重试'));
        }
      }
    }
  })
}

export const upload = (url: string, data: any, headers: Record<string, any>, onProgress: (data: {loaded: number,total: number}) => void) => {
  return ajax({
    type: 'post',
    url,
    data,
    headers: {
      ...headers,
      'Countent-type':'application/x-www-form-urlencoded'
    },
    onProgress
  })
}