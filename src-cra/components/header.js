import React from 'react'
import './header.css'
import { HeaderFaq } from './header-faq'
import { HeaderToggle } from './header-toggle'
import { HeaderRepeat } from './header-repeat'

export const Header = () => (
    <div className="corner-help">
        <HeaderFaq/>
        <HeaderToggle/>
        <HeaderRepeat/>
    </div>
)
