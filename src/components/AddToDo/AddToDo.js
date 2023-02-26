import React, { useState } from "react";
import { Col, Row, Button, FormControl } from "react-bootstrap";
import { v1 as uuidv1 } from 'uuid';
import s from './AddToDo.module.css';

function AddTodo ({todo,setTodo}) {

    const [value,setValue] = useState('')
    

    function saveTodo() {
        if(value) {
        setTodo(
            [...todo, {
                id:uuidv1(),
                title: value,
                status: true,
            }]
        )
        setValue('')
        }
        console.log(1)
    }


    
    return(
        <Row className={s.da}>
            <Col className={s.addTodoForm}>
            <FormControl  placeholder="Введите задачу" value={value} onChange={e => setValue(e.target.value)}/>
            <Button  className={s.btn}onClick={saveTodo}>Сохранить</Button>
            </Col>
        </Row>
        
    )
}

export default AddTodo;