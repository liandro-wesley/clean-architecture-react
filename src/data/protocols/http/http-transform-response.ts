export enum HttpStatusCode {
  noContent = 204,
  unathorized = 401
}
export type HttpTransformResponse = {
  statusCode: HttpStatusCode
  body?: any
}
