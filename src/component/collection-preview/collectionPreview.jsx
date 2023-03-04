import React from 'react';
import CollectionItem from '../collection-item/collectionItem';

const CollectionPreview = ({ items, title }) => {
    return (
        <div >
            <h1>{title.toUpperCase()}</h1>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                {items.filter((item, index) => index < 4)
                    .map((item) => {
                        return (
                            <CollectionItem key={item.id} item={item} ></CollectionItem>
                        )
                    })

                }
            </div>
        </div>
    )
}
export default CollectionPreview;