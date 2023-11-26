import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080'
  //,
  //headers: {
  //  authorization: 'Bearer 123'
  //}
})

export default http
