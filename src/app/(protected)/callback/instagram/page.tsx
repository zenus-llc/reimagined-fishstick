import { onIntegrate } from '@/actions/integrations'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import React from 'react'

type Props = {
  searchParams: {
    code: string
  }
}

const Page = async ({ searchParams: { code } }: Props) => {
  if (code) {
    console.log('📥 Received OAuth code:', code.substring(0, 20) + '...')
    const user = await onIntegrate(code.split('#_')[0])
    console.log('✅ Integration result:', user)
    
    if (user.status === 200) {
      // Revalidate the integrations page to refresh the cache
      revalidatePath(`/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`)
      return redirect(
        `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
      )
    } else {
      console.log('❌ Integration failed with status:', user.status)
    }
  }
  return redirect('/sign-up')
}

export default Page
