import { Surreal } from 'surrealdb.js'

const db = new Surreal()
const runtimeConfig = useRuntimeConfig()

const connectToDatabase = async () => {
  await db.connect(runtimeConfig.surrealDbHost, {
    database: runtimeConfig.surrealDbDatabase,
    namespace: runtimeConfig.surrealDbNamespace,
    auth: {
      username: runtimeConfig.surrealDbUsername,
      password: runtimeConfig.surrealDbPassword,
      database: runtimeConfig.surrealDbDatabase,
      namespace: runtimeConfig.surrealDbNamespace,
    },
  })
}

connectToDatabase().then(r => r)

export { db }
