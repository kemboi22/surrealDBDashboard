export default defineEventHandler(async (event) => {
  await connectToDatabase()

  const root = await db.query('INFO FOR ROOT')

  return {
    data: root,
  }
})
