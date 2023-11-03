import { useState } from "react";
import "../css/addNote.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Card,
    Button,
    Container,
    Row,
    FloatingLabel,
    Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function addNote () {
    const navigation = useNavigate();
    const [noteData, setNoteData] = useState();
    const [post, setPost] = useState({
        title: '',
        description: ''
    })

    const handleInput = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(post)
        axios.post('')
    }
}