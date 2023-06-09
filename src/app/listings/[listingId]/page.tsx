
import getCurrentUser from "@/app/functions/getCurrentUser";
import getListingById from "@/app/functions/getListingById";
import getReservations from "@/app/functions/getReservations";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";


interface IParams {
  listingId?: string;
}

export const metadata = {
  title: 'Listing | Tripnest ',
  description: `Tripnest booking listing `,
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}



export default ListingPage;
