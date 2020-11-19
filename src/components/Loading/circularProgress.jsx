import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.scss';
function CircularIndeterminate({ className, children, loading }) {
    return (
        <div>
            <CircularProgress
                style={{ display: loading ? '' : 'none' }}
                className={`${className} circularProgress`}
            />
            <div className={loading ? 'circularchildren' : ''}>{children}</div>
        </div>
    );
}

export default CircularIndeterminate;
