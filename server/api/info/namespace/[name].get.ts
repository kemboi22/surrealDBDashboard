export default defineEventHandler(async event => {
  const name = event.context.params?.name

  await connectToDatabase(name)

  if (!name) {
    return sendError(event, createError({
      status: 404,
      statusMessage: 'No namespace defined',
    }))
  }

  const namespace = await db.query('INFO FOR NS')

  return {
    data: namespace,
  }
})
