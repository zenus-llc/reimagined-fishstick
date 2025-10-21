'use server'

import { redirect } from 'next/navigation'
import { onCurrentUser } from '../user'
import { createIntegration, getIntegration, updateIntegration } from './queries'
import { generateTokens } from '@/lib/fetch'
import axios from 'axios'

export const onOAuthInstagram = (strategy: 'INSTAGRAM' | 'CRM') => {
  if (strategy === 'INSTAGRAM') {
    return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string)
  }
}

export const onIntegrate = async (code: string) => {
  const user = await onCurrentUser()

  try {
    const token = await generateTokens(code)
    console.log('✅ Token generated:', token)

    if (!token) {
      console.log('🔴 401 - Failed to generate token')
      return { status: 401 }
    }

    const insta_id = await axios.get(
      `${process.env.INSTAGRAM_BASE_URL}/me?fields=user_id&access_token=${token.access_token}`
    )

    const today = new Date()
    const expire_date = today.setDate(today.getDate() + 60)

    // Check if integration already exists
    const integration = await getIntegration(user.id)

    if (integration && integration.integrations.length > 0) {
      // Update existing integration
      console.log('🔄 Updating existing integration')
      const updated = await updateIntegration(
        token.access_token,
        new Date(expire_date),
        integration.integrations[0].id,
        insta_id.data.user_id
      )
      return { status: 200, data: { firstname: user.firstName, lastname: user.lastName } }
    } else {
      // Create new integration
      console.log('✨ Creating new integration')
      const create = await createIntegration(
        user.id,
        token.access_token,
        new Date(expire_date),
        insta_id.data.user_id
      )
      return { status: 200, data: create }
    }
  } catch (error) {
    console.log('🔴 500', error)
    return { status: 500, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
