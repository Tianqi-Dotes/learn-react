import memo from 'react';

function HookCounter(props){
    return(
        <div>
            <h2>当前计数: 1 </h2>
            <button>+1</button>
            <button>-1</button>
        </div>
    )
}

export default memo(HookCounter)