import React from 'react';



const CrudTableRow= ({el, setDataToEdit, deleteData}) => {

    let {tituloLibro, precioLibro, autorLibro,  generoLibro, fechaSubida,  idLibro} = el;
    

    return(
        

        <tr>
            <td>{tituloLibro}</td>
            <td>{precioLibro}</td>
            <td>{autorLibro}</td>
            <td>{generoLibro}</td>
            <td>{fechaSubida}</td>
            <td>
                <button onClick={()=>setDataToEdit(el)}>Editar</button>
                <button onClick={()=>deleteData(idLibro)}>Eliminar</button>
            </td>
        </tr>
    );



};

export default CrudTableRow;
