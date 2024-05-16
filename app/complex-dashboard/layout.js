export default function dashboardLayout({children,users,revenue,notifications,login}){
    const isLoggedIn = true

    if(isLoggedIn){
    
    return  (
        <div className="container">
        <div className="mb-5">{children}</div>
        <div className="row" >
            <div className="col-md-6">
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div className="col-md-6" >
                <div>{notifications}</div>
            </div>
        </div>
        </div>
    )  
}else{
    return(
        <div>{login}</div>
    )
}
}