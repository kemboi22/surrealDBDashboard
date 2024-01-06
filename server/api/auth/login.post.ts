import type { User } from '~/types'

export default defineEventHandler(async event => {
  const body = readBody(event)
  const { username, password } = await body as User

  const signIn = async (user: User) => {
    return await db.signin({
      username: user.username,
      password: user.password,
    })
  }

  return {
    token: await signIn({ username, password }),
  }
})
