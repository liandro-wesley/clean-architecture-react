import { HttpPostClientParams } from '@data/protocols/http/http-post-client'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostClientParams<any>): Promise<void> {
    await axios(params.url)
  }
}
