import { Surreal } from 'surrealdb.js'

const db = new Surreal()
const runtimeConfig = useRuntimeConfig()

const connectToDatabase = async (namespace?: string, database?: string) => {
  await db.connect(runtimeConfig.public.surrealDbHost, {
    database: database === undefined ? runtimeConfig.public.surrealDbDatabase : database,
    namespace: namespace === undefined ? runtimeConfig.public.surrealDbNamespace : namespace,
    auth: {
      username: runtimeConfig.public.surrealDbUsername,
      password: runtimeConfig.public.surrealDbPassword,
      database: database === undefined ? runtimeConfig.public.surrealDbDatabase : database,
      namespace: namespace === undefined ? runtimeConfig.public.surrealDbNamespace : namespace,
    },
  })
}

export const checkIsAuthenticated = async (token: string) => {
  await connectToDatabase()

  return await db.authenticate(token)
}

export { db, connectToDatabase }
