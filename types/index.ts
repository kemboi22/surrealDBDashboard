export interface User {
  username: string
  password: string
  remember?: boolean
}

export interface RootInfo {
  namespaces: Record<string, string>
  users: Record<any, string>
}

export interface NamespaceInfo {
  databases: Record<string, string>
  tokens: Record<string, string>
  users: Record<string, string>
}

export interface DatabaseInfo {
  analyzers: Record<string, string>
  functions: Record<string, string>
  params: Record<string, string>
  scopes: Record<string, string>
  tables: Record<string, string>
  tokens: Record<string, string>
  users: Record<string, string>
}

export interface TablesInfo {
  events: Record<string, string>
  fields: Record<string, string>
  indexes: Record<string, string>
  lives: Record<string, string>
  tables: Record<string, string>
}

export interface ResponseData<T> {
  data: T
}
