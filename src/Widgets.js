import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import './Widgets.css'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("LinkedIn React is back", "Top news - 9875 readers")}
            {newsArticle("React is occupying all over the world", "Top news - 4775 readers")}
            {newsArticle("Rupee ends 2022 as worst-performing Asian currency: Report", "Top news - 7943 readers")}
            {newsArticle("Mahua Moitra on TMC colleague Saket Gokhale's 3rd arrest: ‘Harassment’", "Top news - 2535 readers")}
            {newsArticle("BJP amasses 72% of donations from electoral trusts in 2021-22: ADR report", "Top news - 1940 readers")}
            {newsArticle("Hrithik Roshan admits to box-office failure of Vikram Vedha: I should learn", "Top news - 0166 readers")}
        </div>
    )
}

export default Widgets