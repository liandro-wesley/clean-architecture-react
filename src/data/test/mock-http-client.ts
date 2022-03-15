import { HttpPostClient, HttpPostClientParams } from '@data/protocols/http/http-post-client'
import { HttpTransformResponse, HttpStatusCode } from '@protocols/http/http-transform-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpTransformResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (params: HttpPostClientParams): Promise<HttpTransformResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
