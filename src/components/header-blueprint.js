import React from 'react'

export const HeaderBlueprint = (props) => {

    const { icon, onClickFunction } = props

    return (
        <>
            <span
                onClick={onClickFunction}
                onKeyDown={() => undefined}
                role="button"
                tabIndex={-1}
            >
                {icon}
            </span>

        </>
    )

}

