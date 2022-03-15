import { HttpPostClient, HttpPostClientParams } from '@data/protocols/http/http-post-client'
import { HttpTransformResponse, HttpStatusCode } from '@protocols/http/http-transform-response'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpTransformResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClientParams<T>): Promise<HttpTransformResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
