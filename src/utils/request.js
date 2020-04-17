export const request = ({
  url,
  method = 'GET',
  methodAlias,
  params = [],
  body,
  timeOut = 5000,
  header = {},
}) => {
  const message = body ? JSON.stringify(body) : null
  const request = () =>
    fetch(url, {
      method: method,
      headers: {
        method,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...header,
      },
      ...(method.toUpperCase() === 'GET' ? {} : { body: message }),
    })
      .then(async res => {
        try {
          if (res.status >= 200 && res.status < 300) {
            return res.json()
          } else {
            const result = await res.json()
            return Promise.reject({
              status: res.status,
              message: result,
            })
          }
        } catch (e) {
          return Promise.reject({
            status: res.status,
            message: e.message,
          })
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  if (timeOut) {
    return Promise.race([
      request(),
      new Promise((resovle, reject) => {
        setTimeout(() => {
          reject('请求超时')
        }, timeOut)
      }),
    ])
  } else {
    return request()
  }
}
