import type { DataFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/services/auth/config.server'

export async function loader({ request, params }: DataFunctionArgs) {
  if (typeof params.provider !== 'string') throw new Error('Invalid provider.')

  return authenticator.authenticate(params.provider, request, {
    successRedirect: '/account',
    failureRedirect: '/login',
  })
}

export default function Screen() {
  return (
    <div className="flex h-screen flex-row items-center justify-center">
      Whops! You should have already been redirected.
    </div>
  )
}
