import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from './../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Preloader from '../../components/Preloader/Preloader';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
       const { fetchCollectionsStartAsync } = this.props;
       fetchCollectionsStartAsync();
      }

    render() {
        const { match ,isCollectionLoaded } = this.props;

        return(
            <section>
                <Preloader />
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render ={props=> (
                    <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded}{...props}/>
                    )}
                />    
                <Route exact path={`${match.path}/:collectionId`} render ={props=> (
                    <CollectionPageWithSpinner isLoading={!isCollectionLoaded}{...props}/>
                    )}
                />    
            </div>
            </section>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded:  selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
    
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);