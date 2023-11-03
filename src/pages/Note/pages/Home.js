import "../css/home.css";
import { React, useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {BsSearchHeart} from "react-icons/bs";
import {MdDateRange} from 'react-icons/md';
import {
    Button,
    Card,
    Col,
    Form,
    Container,
    InputGroup,
    Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Home() {
    const [noteData, setNoteData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/api/notes')
        .then(result => {
            console.log('data API', result);
            setNoteData(result.data)
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [])

    const deleteById = id => {
        axios.delete(`http://localhost:3500/api/notes/${id}`)
        .then(() => {
            alert("Note Has Delete")
            const newNote = noteData.filter((note) => {
                return note.id !== id;
            })
            setNoteData(newNote)
        })

        .catch(err => {
            console.log('error: ', err)
            alert("error: ", err)
        })
    }

    const [src, setSrc] = useState("");
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Form inline className="my-5">
                            <InputGroup>
                                <InputGroup.Text id="bassic-addon1">
                                    <BsSearchHeart />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Search Note..."
                                    aria-label="Search Note..."
                                    aria-describedby="bassic-addon1"
                                    onChange={(e) => {
                                        setSrc(e.target.value);
                                    }} />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {noteData.filter((note) => {
                        if (src == "") {
                            return note;
                        } else if (note.title.toLowerCase().includes(src.toLocaleLowerCase)){
                            return note;
                        }
                    }).map((note, index) => {
                        return(
                         <>
                            <Col>
                            <Card>
                            <Card.Header as="h5">{note.title}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    {note.description}
                                    {' '}
                                </p>
                                <footer className="blockquote-footer">
                                    {/* <cite title="Source Title">{note.createdAt}</cite> */}
                                    <MdDateRange size="16px" />{note.createdat}
                                </footer>
                                </blockquote>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                            <Link to={`/editnote/${note.id}`}><Button variant="outline-primary">Edit</Button></Link>{' '}
                            <a><Button variant="outline-danger" onClick={() => deleteById(note.id)}>Delete</Button></a>
                            </Card.Footer>
                            </Card>
                            </Col>
                         </>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}