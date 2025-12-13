import apiClient from './apiClient'

interface Filter {
  [key: string]: string
}

class HttpServices {
  endpoint: string
  public constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = async (path?: string, filter?: Filter) => {
    const controller = new AbortController()
    const url = this.endpoint + '/' + path
    const { data } = await apiClient.get(url, {
      params: filter,
      signal: controller.signal,
    })
    return { data, cancel: () => controller.abort() }
  }

  create = async <T>(entity: T) => {
    return await apiClient.post(this.endpoint, entity)
  }
  update = async <T, U>(entity: T, id: U) => {
    return await apiClient.patch(this.endpoint + '/' + id, entity)
  }
  delete = async <T>(id: T) => {
    return await apiClient.delete(this.endpoint + '/' + id)
  }
}

const create = (endpoint: string) => new HttpServices(endpoint)

export default create
