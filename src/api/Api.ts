import axios, { AxiosError } from 'axios'

const serverUrl = 'YOUR_URL'

export const get = <T>(endpoint: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .get(serverUrl + endpoint, {
        headers: generateHeaders(),
      })
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error: AxiosError) {
        reject(error.message)
      })
  })
}

export const post = <T>(endpoint: string, body: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .post(serverUrl + endpoint, body, {
        headers: generateHeaders(),
      })
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error: AxiosError) {
        reject(error.message)
      })
  })
}

// Can't call that 'delete' because there's an operator called like this
export const deleteApi = <T>(endpoint: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .delete(serverUrl + endpoint, {
        headers: generateHeaders(),
      })
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error: AxiosError) {
        reject(error.message)
      })
  })
}

export const put = <T>(endpoint: string, body: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .put(serverUrl + endpoint, body, {
        headers: generateHeaders(),
      })
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error: AxiosError) {
        reject(error.message)
      })
  })
}

const generateHeaders = () => {
  return {
    'Content-type': 'application/json',
  }
}
