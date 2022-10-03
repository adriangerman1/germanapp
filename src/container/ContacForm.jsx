import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const ContacForm = () =>{

    const [id , setId ] = useState()

    const [form, setForm] = useState({
        name: "",
        apellido: "",
        email: "",
        message:"",
    })

    const changeHandler= (event) => {

        const newForm = {...form, [event.target.name] : event.target.value}
        setForm(newForm)
    }

    const submitHandler = (event) => {

        event.preventDefault()

        const db = getFirestore()
        const contacFormCollection = collection(db, 'contacForm')
        addDoc(contacFormCollection, form).then((snapshot) =>setId(snapshot.id)
        )
        
    }
    return (
        <div>
            {typeof id !== 'undefined' ? 
            (<p>Has enviado un formulario y la id es {id}</p>)
                :
            (
            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="name">Nombre</label>
                    <input className="m-2" type="text" name="name" id="name" placeholder="Ingrese su nombre" value={form.name} onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input className="m-2" type="text" name="apellido" id="apellido" placeholder="Ingrese su Apellido" value={form.apellido} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input className="m-2" type="email" name="email" id="email"  placeholder="Ingrese su email" value={form.email} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea className="m-2" name="message" id="message" cols="30" rows="5" value={form.message} onChange={changeHandler}></textarea>
                </div>

                <button>Enviar</button>

            </form>
            )} 
        </div>    
    )
}

export default ContacForm;