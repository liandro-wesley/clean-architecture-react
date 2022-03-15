import { InvalidCredentialsError } from '@errors/invalida-credentials-errors'
import { UnexpectedError } from '@errors/unexpected-error'
import { NotFoundError } from '@errors/not-found-error'
import { AccountModel } from '@domain/models/account-model'
import { Authentication, AuthenticationParams } from '@domain/usecases/authentication'
import { HttpPostClient } from '@protocols/http/http-post-client'
import { HttpStatusCode } from '@protocols/http/http-transform-response'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.HttpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      case HttpStatusCode.notFound: throw new NotFoundError()
      default: throw new UnexpectedError()
    }
  }
}
