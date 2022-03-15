import { InvalidCredentialsError } from '@domain/errors/invalida-credentials-errors'
import { UnexpectedError } from '@domain/errors/unexpected-error'
import { NotFoundError } from '@domain/errors/not-found-error'
import { AuthenticationParams } from '@domain/usecases/authentication'
import { HttpPostClient } from '@protocols/http/http-post-client'
import { HttpStatusCode } from '@protocols/http/http-transform-response'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.HttpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      case HttpStatusCode.notFound: throw new NotFoundError()
      default: throw new UnexpectedError()
    }
  }
}
