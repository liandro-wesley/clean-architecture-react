import { HttpTransformResponse } from '@protocols/http/http-transform-response'

export type HttpPostClientParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostClientParams<T>) => Promise<HttpTransformResponse<R>>
}
