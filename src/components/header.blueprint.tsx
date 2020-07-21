import React, { ReactElement } from 'react'

export const HeaderBlueprint = (props: any): ReactElement => {

    const { icon, onClickFunction } = props

    return (
        <>
            <span
                onClick={onClickFunction}
                onKeyDown={(): void => undefined}
                role="button"
                tabIndex={-1}
            >
                {icon}
            </span>

        </>
    )

}

