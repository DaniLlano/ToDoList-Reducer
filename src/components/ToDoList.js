import React, { useReducer } from 'react'
import { v4 as uuidv4 } from "uuid";
import {RiEdit2Line, RiDeleteBin5Line} from 'react-icons/ri'
import {ListContainer, Title, ListTitle, ListForm, InputForm, Button, ItemContainer, ItemBtn, Items, BtnContainer} from './ToDoListStyles'

function ToDoList() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT_CHANGE":
                if (state.modoEdicion) {
                    return {
                        ...state,
                        tareaAEditar: {...state.tareaAEditar, texto: action.payload}
                    } 
                } else {
                    return {
                    ...state,
                    tareaInput: action.payload
                    } 
                }
            case "ADD":
                if(state.tareaInput === "") {
                    return {...state,
                        msgError: "No podes agregar una tarea vacía"
                    }
                } else {
                    return {
                    ...state,
                    lista: [...state.lista, {
                        texto: state.tareaInput,
                        id: uuidv4()
                    }],
                    tareaInput: "",
                    msgError: "",
            }
                }
                
            case "DELETE":
                return {
                    ...state,
                    lista: action.payload
                }
            case "EDIT":
                return {
                    ...state,
                    modoEdicion: !state.modoEdicion,
                    tareaAEditar: action.payload,
                    tareaInput: ""
            }
            case "EDITED_LIST":
                const newList = state.lista.map((item) =>
                item.id === state.tareaAEditar.id ? state.tareaAEditar : item)
                return {
                    ...state,
                    lista: newList,
                    tareaAEditar: null,
                    modoEdicion: !state.modoEdicion
                }
        
            default:
                return state;
        }
    }

    const initialState = {
        lista: [],
        tareaInput: "",
        msgError: "",
        modoEdicion: false,
        tareaAEditar: null,
    }

    const [estado, dispatch] = useReducer(reducer, initialState)

    const onInputChange = (e) => {
        dispatch({type: "INPUT_CHANGE", payload: e.target.value})
    }

    const addToDo = (e) => {
        e.preventDefault();
        if (estado.modoEdicion) {
            dispatch({type: "EDITED_LIST"})
        } else {
        dispatch({type: "ADD"})}
    }

    const deleteToDo = (id) => {
        const newToDo = estado.lista.filter((item) => item.id !== id)
        dispatch({type: "DELETE", payload: newToDo})
    }

    const editToDo = (item) => {
        dispatch({type: "EDIT", payload: item})
        console.log(estado)
    }

    return (<>
    <Title>To Do List</Title>
    <ListContainer>
        <ListTitle>Agregá una tarea</ListTitle>
        <ListForm onSubmit={addToDo}>
            <InputForm onChange={onInputChange} value={estado.modoEdicion ? estado.tareaAEditar.texto : estado.tareaInput}/>
            {estado.msgError && <p>{estado.msgError}</p>}
            <Button type="submit">{estado.modoEdicion ? "Guardar" : "Agregar"}</Button>
        </ListForm>
        <ItemContainer>
        {estado.lista.length > 0 &&
        estado.lista.map((item) => {
            return <Items key={item.id}>
            <p>{item.texto}</p>
            <BtnContainer>
            <ItemBtn onClick={() => deleteToDo(item.id)}><RiDeleteBin5Line fontSize={"1.3rem"} /></ItemBtn>
            <ItemBtn onClick={() => editToDo(item)} bgcolor><RiEdit2Line fontSize={"1.3rem"} /></ItemBtn>
            </BtnContainer>
            </Items>})}
            
        </ItemContainer>
    </ListContainer>
        </>
    )
}

export default ToDoList