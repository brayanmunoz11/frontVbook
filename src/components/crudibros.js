import React , {useState, useEffect} from 'react';
import CrudForm from './crudForm.js';
import CrudTable from './crudTable.js';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './loader';
import Message from './message';



const CrudLibros = () => {
    const [db, setDb] = useState(null);

    const [dataToEdit, setDataToEdit] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

  

    let api = helpHttp();

    let url = "http://localhost:4000/addlibro/44";

    let url1 = "http://localhost:4000/addlibro";

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then((res)=> {
            console.log(res.libros);
            if(!res.err){
                setDb(res.libros)
                setError(null)
            }else {
                setDb(null)
                setError(res)
            }
            setLoading(false);

        })

    }, [url]);

    const createData = (data) => {
        

        let options = {
            body: data, 
            headers:{ "content-type": "application/json"
        }};

        api.post(url,options).then((res)=> {
            console.log(res);
            if(!res.err){
                setDb([...db, res]);
            }else{
                setError(res)
            }
        });
        
        
        setDb([...db, data])
    }
    const updateData = (data) => {
        
        let  endponit = `${url1}/${data.idLibro}`

        let options = {
            body: data, 
            headers:{ "content-type": "application/json"
        }};
        
        api.put(url,options).then((res)=> {
            console.log(res);
            if(!res.err){
                setDb( res.libros);
            }else{
                setError(res)
            }
        });
        
        
        
        

    }
    const deleteData = (idLibro) => {

        console.log(idLibro)
        
        let isDelete = window.confirm(`Estas Seguro de eliminar el registro con el id: '${idLibro}'` )

        if(isDelete){

            let options = {
                body: {idLibro: idLibro}, 
                headers:{ "content-type": "application/json"
            }};
            
            api.del(url,options).then((res)=> {
                
                if(!res.err){
                    setDb(res.libros);
                }else{
                    setError(res)
                }
            });
            
        }
    }

    return(

        <>
        <h2>Crud app</h2>
        <article className='grid-1-2'>

        <CrudForm 
        createData = {createData} 
        updateData = {updateData} 
        dataToEdit={dataToEdit} 
        setDataToEdit = {setDataToEdit}/>

        {loading && <Loader/> }
        <br/>  
        {error && <Message msg = {`Error ${error.status}: ${error.statusText}`} bgColor = "#dc3545"/>}

        {db && 
        <CrudTable 
        data={db}
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}/>
        }
        
        
        </article>

        </>
    )



}

export default CrudLibros;

