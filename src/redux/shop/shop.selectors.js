import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//     soaps: 1,
//     oilsandserums: 2,
//     bodybutters: 3,
//     lipbalms: 4,
//     giftsets: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);    

// export const selectCollection = memoize((collectionUrlParam) =>
//     createSelector(
//         [selectCollections],
//         collections =>
//             collections.find(
//                 collection=>collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//             ))
//     );