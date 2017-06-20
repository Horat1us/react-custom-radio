import React from 'react';
import PropTypes from 'prop-types';

/**
 * Created by horat1us on 3/5/17.
 */
export default {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onChange: PropTypes.func
};