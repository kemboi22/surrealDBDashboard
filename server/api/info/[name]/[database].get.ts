export default defineEventHandler(async event => {
  await connectToDatabase(event.context.params?.name, event.context.params?.database)

  return {
    data: await db.query('INFO FOR DATABASE'),
  }
})
