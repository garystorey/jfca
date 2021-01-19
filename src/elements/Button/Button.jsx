import React from 'react'
import cssclass from '@garystorey/cssclass'
import {noop} from '../../utils'
import './Button.scss'

export const Button = ({as='primary',className,children, type='button', onClick=noop,...props}) => {
    const classes =cssclass('button',`button-${as}`,className)
    return (
        <button {...props} onClick={onClick} type={type} className={classes}>{children}</button>
    )
}