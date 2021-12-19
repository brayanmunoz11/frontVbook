import React, { useState, useEffect } from 'react';

const initialForm = {
    tituloLibro: "",
    precioLibro: "",
    autorLibro: "",
    generoLibro: "",
    fechaSubida: "",
    idlibro: null
}





const CrudForm = ({createData , updateData, dataToEdit, setDataToEdit}) => {

    
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm);
        }
        
    }, [dataToEdit]);

    

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        }
        );
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!form.tituloLibro || !form.precioLibro || !form.autorLibro || !form.generoLibro){
            alert("Datos incompletos");
            return;
        }
        if(form.id === null){
            createData(form);
        }else{
            updateData(form)
        }
        handleReset();
    };

    const handleReset = (e) =>{
        setForm(initialForm);
        setDataToEdit(null)
    }

    return(

        <div>
            <h3>{dataToEdit ? "Editar": "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type = "text" 
                name="tituloLibro" 
                placeholder='Titulo Libro' 
                onChange={handleChange} 
                value={form.tituloLibro}></input>

                <input 
                type = "number" 
                name="precioLibro" 
                placeholder='Precio Libro' 
                onChange={handleChange} 
                value={form.precioLibro}></input>

                <input 
                type = "text" 
                name="autorLibro" 
                placeholder='Autor' 
                onChange={handleChange} 
                value={form.autorLibro}></input>

                <input 
                type = "text" 
                name="generoLibro" 
                placeholder='Autor' 
                onChange={handleChange} 
                value={form.generoLibro}></input>

                <input type='submit'/>
                <input type='reset' value = "limpiar" onClick={handleReset}/>

            
                

            </form>


        </div>
    );



};

export default CrudForm;

