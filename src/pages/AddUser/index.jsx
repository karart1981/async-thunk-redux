import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addUser } from "../../features/users/user.api"
import { useNavigate } from "react-router-dom"

export const AddUser = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddUser = data => {
        dispatch(addUser(data))
        .unwrap()
        .then(() => {
            reset()
            navigate('/')
        })
    }


    return (
        <>
            <h2 style={{textAlign:"center",margin:"50px"}}>AddUser</h2>

            <form onSubmit={handleSubmit(handleAddUser)}>
                {errors.name && <p>{errors.name.message}</p>}
                <input 
                    type="text"
                    placeholder="name"
                    {...register('name', { required: 'Name is required' })}
                 />

                {errors.name && <p>{errors.surname.message}</p>}

                 <input 
                    type="text"
                    placeholder="surname"
                    {...register('surname', { required: 'Surname is required' })}
                    />

                    <button>Add</button>
            </form>
        </>
    )
}