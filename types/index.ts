export interface User {
  username: string
  password: string
  remember?: boolean
}

export interface RootInfo {
  namespaces: Record<string, string>
  users: Record<any, string>
}
export interface ResponseData<T> {
  data: T
}
