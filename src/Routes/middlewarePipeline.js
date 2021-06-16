const middlewarePipeline = (Component,middlewares,index=0) => {
    console.log("pipe")
    if(middlewares && middlewares.length > 0 && index < middlewares.length ) {
        return middlewares[index](()=>middlewarePipeline(Component,middlewares,index+1))
    }
    return <Component />
}

export default middlewarePipeline