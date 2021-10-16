import React from 'react'
import './rate.css'
import ArrowDropUpTwoToneIcon from '@material-ui/icons/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';

export default function RateCountComponent({rate, onDown, onUp, enabled}) {
    const onUpRate = () => {
        if (!enabled) return 
        onUp(rate + 1)
    }
    const onDownRate = () => {
        if (!enabled) return 
        onDown(rate - 1)
    }
    return (
        <div style={{width: '40px'}}>
            <ul className="rate">
                <li className="rate-li" style={{cursor: enabled ? 'pointer' : ''}} onClick={onUpRate}><div className="triangle-up"></div></li>
                <li className="rate-li" style={{fontSize: 25,margin: 0, padding: 0}}>{rate ? rate : 0}</li>
                <li className="rate-li" style={{cursor: enabled ? 'pointer' : ''}} onClick={onDownRate}  ><div className="triangle-down"></div></li>
            </ul>
        </div>
    )
}
