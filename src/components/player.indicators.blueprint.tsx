import React, { ReactElement } from 'react'

export const PlayerIndicatorsBlueprint = (props: any): ReactElement => {

    const { title, value } = props

    return (
        <>
            {title}
            <form>
                <input
                    disabled
                    type="text"
                    value={value}
                />
            </form>
        </>
    )

}

