import React from 'react'
import WarningIcon from '@mui/icons-material/Warning';
import './MobileWarning.css'

function MobileWarning() {
    return (
        <div className='mobileWarning'>
            <span>
                <WarningIcon />
                <h1>Can't open in mobile browser</h1>
            </span>
            <div className="mobileWarningSuggestion">
                <h4>Open in desktop mode</h4>
            </div>
        </div>
    )
}

export default MobileWarning