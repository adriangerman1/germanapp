import { useContext, useState, } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Context } from "../context/CardContext";

const FormContac= () => {

    const {card, clear, Total} = useContext(Context)

    const [id , setId ] = useState("")
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone:"",
        id:"",
        title: "", 
        price: ""
    })

    const changeHandler= (event) => {

        const newForm = {...form, [event.target.name] : event.target.value}
        setForm(newForm)
    }

    const submitHandler = (event) => {

        event.preventDefault()

        const db = getFirestore()
        const contacFormCollection = collection(db, 'orders', 'buyer','items')
        addDoc(contacFormCollection, form).then((snapshot) =>
        setId(snapshot.id))  
    }

    return (
        <div>
            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="name">Nombre</label>
                    <input className="m-2" type="text" name="name" id="name" placeholder="Ingrese su nombre" value={form.name} onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input className="m-2" type="email" name="email" id="email"  placeholder="Ingrese su email" value={form.email} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="phone">Celular</label>
                    <input className="m-2" type="number" name="phone" id="phone" placeholder="Ingrese su numero de telefono-celular" value={form.name} onChange={changeHandler}/>
                </div>

                <button>Enviar</button>

            </form>
        
        </div>    
    )
}

export default FormContac