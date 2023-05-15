import EmptyState from "@/app/components/EmptyState";

import { getCurrentUser } from "@/app/actions/getCurrentUser";

import FavouritesClient from "./FavouritesClient";
import getFavoriteListings from "../actions/getFavoriteListings";

const Favourites = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorite listings."
            />
        );
    }

    return <FavouritesClient listings={listings} currentUser={currentUser} />;
};

export default Favourites;
