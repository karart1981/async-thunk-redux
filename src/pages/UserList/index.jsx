import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../features/users/user.api"

export const UserList = () => {

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUsers())
    })

    return (
        <>
            <h2 style={{textAlign:"center", margin: "20px auto"}}>UserList</h2>

            <div className="users-list">
                {
                    users.map(user => 
                        <div
                             key={user.id}
                             className="list"
                        >
                            <p style={{padding:"15px 0 0 0"}}>{user.name} {user.surname}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}