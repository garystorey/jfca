import React from 'react'
import classnames from 'classnames'
import {noop} from '../../utils'
import './Button.scss'

export const Button = ({as='primary',className='',children, type='button', onClick=noop,...props}) => {
    const classes =classnames('button',`button-${as}`,className)
    return (
        <button {...props} onClick={onClick} type={type} className={classes}>{children}</button>
    )
}