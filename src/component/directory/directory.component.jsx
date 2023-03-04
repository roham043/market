import React from 'react';
import Grid from '@mui/material/Grid';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
const Directory = ({ sections }) => {
    return (
        <Grid container spacing={2} sx={{ ml: 3 }}>
            {
                sections.map(({ id, ...props }) =>
                    <MenuItem key={id} {...props} />)
            }
        </Grid>
    );
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);


