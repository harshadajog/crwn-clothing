import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    soaps: 1,
    oilsserums: 2,
    bodybutters: 3,
    lipbalms: 4,
    giftsets: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections =>
            collections.find(
                collection=>collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            ))
    );