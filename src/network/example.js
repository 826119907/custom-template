import { axios, host } from './base'

export function list () {
  return axios.get(`${host}/list`)
    .then()
}
