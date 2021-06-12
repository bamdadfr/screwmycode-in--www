import React from 'react'

export const PlayerIndicatorsBlueprint = (props) => {

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

