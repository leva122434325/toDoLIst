import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import s from './ListTodo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function ListTodo({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo);
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    function todoFilter(status) {
        if (status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }
    return (
        <div>
            <Row>
                <Col className={s.filter}>
                    <ButtonGroup aria-label="Basic example" className={s.btn}>
                        <Button variant="secondary" onClick={() => todoFilter('all')}>все</Button>
                        <Button variant="secondary" onClick={() => todoFilter(true)}>открытые</Button>
                        <Button variant="secondary" onClick={() => todoFilter(false)}>закрытые</Button>
                    </ButtonGroup>
                </Col>
            </Row>

            {
                filtered.map(item => (
                    <div key={item.id} className={s.listItems}>
                        {
                            edit === item.id ?
                                <div>
                                    <input onChange={(e) => setValue(e.target.value)} value={value} />

                                </div> :
                                <div className={!item.status ? s.close : ''}>{item.title}</div>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <Button onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></Button>
                                </div> :
                                <div>
                                    <Button size="sm" onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                    <Button size="sm" className={s.btn} onClick={() => editTodo(item.id, item.title)}><FontAwesomeIcon icon={faEdit} /></Button>
                                    <Button size="sm" className={s.btn} onClick={() => statusTodo(item.id)}>
                                        {item.status === true
                                            ? <FontAwesomeIcon icon={faLockOpen} />
                                            : <FontAwesomeIcon icon={faLock} />}
                                    </Button>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ListTodo;