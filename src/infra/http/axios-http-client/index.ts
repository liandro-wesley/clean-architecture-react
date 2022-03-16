import { HttpPostClientParams, HttpPostClient } from '@data/protocols/http/http-post-client'
import { HttpTransformResponse } from '@protocols/http/http-transform-response'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostClientParams<any>): Promise<HttpTransformResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
