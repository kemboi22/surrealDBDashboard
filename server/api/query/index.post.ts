export default defineEventHandler(async event => {
  const body = await readBody(event)
  const { query, namespace, database } = body

  await connectToDatabase(namespace, database)

  const result = await db.query(query.toString())

  return {
    data: result,
  }
})
