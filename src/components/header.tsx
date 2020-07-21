import React, { ReactElement } from 'react'
import './header.styles.css'
import { HeaderFaq } from './header.faq'
import { HeaderToggle } from './header.toggle'
import { HeaderRepeat } from './header.repeat'

export const Header = (): ReactElement => {

    return (
        <div className="corner-help">
            <HeaderFaq />
            <HeaderToggle />
            <HeaderRepeat />
        </div>
    )

}