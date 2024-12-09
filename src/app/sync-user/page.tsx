import { auth, clerkClient } from '@clerk/nextjs/server';
import { notFound } from 'next/navigation';
import React from 'react'

const SyncUser = async () => {
    const { userId} = await auth();

    if(!userId) {
        throw new Error('No user ID');
    }
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    if(!user.emailAddresses[0]?.emailAddress) {
        return notFound();
    }

    // await db.user.upsert{
    //   //continue here
    // }



  return (
    <div>Hello</div>
  )
}

export default SyncUser