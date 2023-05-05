import React from 'react'
import getListingById from '@/app/actions/getListingById'
import EmptyState from '@/app/components/EmptyState'
import getCurrentUser from '@/app/actions/getCurrentUser'
import ListingClient from './ListingClient'

interface IParams {
  listingId?: string
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser()
  const listing = await getListingById(params)

  if (!listing) {
    return <EmptyState />
  }
  return (
    <ListingClient
      currentUser={currentUser}
      listing={listing}
    />
  )
}

export default ListingPage