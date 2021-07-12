import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from './../../pages/collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        //Firestore db access using Rest API & fetch. But this returns data in deeply nested fashion.
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-clothing-hj/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
           const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
           this.setState({ loading: false});
        })
      }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render ={props=> (
                    <CollectionsOverviewWithSpinner isLoading={loading}{...props}/>
                    )}
                />    
                <Route exact path={`${match.path}/:collectionId`} render ={props=> (
                    <CollectionPageWithSpinner isLoading={loading}{...props}/>
                    )}
                />    
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
    
export default connect(null, mapDispatchToProps)(ShopPage);