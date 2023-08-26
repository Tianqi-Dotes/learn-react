import { useNavigate, useParams, useSearchParams } from "react-router-dom"

function withRouter(WrapperComponent) {

    return function (props) {
        // return props=> {
        const navigate = useNavigate()
        const params = useParams()
        
        const [searchParams]=useSearchParams()
        const obj=Object.fromEntries(searchParams)
        const router = { navigate, params,obj }
        return <WrapperComponent {...props} router={router} gg={{ cat: 10 }} />
    }
}

export default withRouter