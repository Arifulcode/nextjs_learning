import {useRouter} from 'next/router'
function Doc(){
    const router = useRouter()
    const { params =[]} = router.query
    console.log(params)
    if(params.length === 2){
        return <h2>Viewing docs for features {params[0]} and concept {params[1]}</h2>
    }else if(params.length === 1){
        return <h2>Viewing docs for features {params[1]}</h2>
    }
    return <h2>Doc home page</h2>
    
}
export default Doc