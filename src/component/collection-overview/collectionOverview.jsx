import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../collection-preview/collectionPreview';

const CollectionOverview = ({ collections }) => {
    return (
        <div>{
            collections.map(({ id, ...props }) => {
                return (
                    <CollectionPreview key={id} {...props} ></CollectionPreview>
                )
            })
        }</div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})
export default connect(mapStateToProps)(CollectionOverview);