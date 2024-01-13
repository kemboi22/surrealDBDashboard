export default defineEventHandler(async event => {
  const namespace = event.context.params?.name
  const database = event.context.params?.database
  const table = event.context.params?.table

  await connectToDatabase(namespace, database)

  const tableInfo = await db.query(`INFO FOR TABLE ${table}`)

  return {
    data: tableInfo,
  }
})
