import { HttpPostClientParams } from '@protocols/http/http-post-client'
import { AxiosHttpClient } from '@infra/http/axios-http-client'
import { mockAxios } from '@infra/test'
import axios from 'axios'
import faker from '@faker-js/faker'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

const mockPostRequest = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: faker.commerce.productName()
})

describe('AxiosHttpClient', () => {
  test('Shoud call with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Shoud return the correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
