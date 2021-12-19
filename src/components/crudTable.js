import React from 'react';
import CrudTableRow from './crudTableRow';



const CrudTable= ({data, setDataToEdit, deleteData}) => {
    

    return(

        <div>
            <h3>Table de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Titulo: </th>
                        <th>Precio: </th>
                        <th>Autor: </th>
                        <th>Genero: </th>
                        <th>Fecha Subida:</th>
                        <th>Acciones: </th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 
                    ?
                    (<tr><td colSpan = "6">Sin Datos</td></tr>)
                    : 
                    (
                    data.map((el) =><CrudTableRow 
                    key = {el.id} 
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    />)
                    )}
                </tbody>

            </table>


        </div>
    );



};

export default CrudTable;

