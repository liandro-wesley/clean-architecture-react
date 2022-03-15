export class NotFoundError extends Error {
  constructor () {
    super('Ops, Nada foi encontrado!')
    this.name = 'NotFoundError'
  }
}
