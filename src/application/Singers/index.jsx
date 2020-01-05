import React from 'react'
import { renderRoutes } from 'react-router-config'

function Singers(props) {
    console.log('props', props)
    const { route } = props
    return <div>
        <div>Singers</div>
        {renderRoutes(route.routes)}
    </div>
}

export default React.memo(Singers)