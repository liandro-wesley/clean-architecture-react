import { InvalidCredentialsError } from '@domain/errors/invalida-credentials-errors'
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
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: return Promise.resolve()
    }
  }
}
