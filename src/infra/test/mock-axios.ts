import axios from 'axios'
import faker from '@faker-js/faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: faker.commerce.productName(),
    status: faker.random.alphaNumeric()
  })
  return mockedAxios
}
