import React, { memo } from 'react'
import HookCounter from './HookCounter'

const App=memo(()=> {
    return (
        <div>
            <div>App</div>
            
            <HookCounter />
        </div>

    )
}
)

export default App