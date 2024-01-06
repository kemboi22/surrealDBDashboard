import { Surreal } from 'surrealdb.js'

const db = new Surreal()
const runtimeConfig = useRuntimeConfig()

const connectToDatabase = async () => {
  console.log(`URL: ${runtimeConfig.public.surrealDbHost}`)
  await db.connect(runtimeConfig.public.surrealDbHost, {
    database: runtimeConfig.public.surrealDbDatabase,
    namespace: runtimeConfig.public.surrealDbNamespace,
    auth: {
      username: runtimeConfig.public.surrealDbUsername,
      password: runtimeConfig.public.surrealDbPassword,
      database: runtimeConfig.public.surrealDbDatabase,
      namespace: runtimeConfig.public.surrealDbNamespace,
    },
  })
}

export { db, connectToDatabase }
