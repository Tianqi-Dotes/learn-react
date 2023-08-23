import styled from 'styled-components'
import { pColor,sedColor,small,middle,large } from './style/variables'

export const AppWrapper=styled.div.attrs({})`

.section{
    border:1px solid red;

    .title{
    font-size:${props=>(props.size)}px;
    color:${props=>(props.color)};
}
    .content{
        font-size:${middle}
        color:${pColor};
    }
}

.footer{
    border:1px solid orange;
}
`
export default AppWrapper