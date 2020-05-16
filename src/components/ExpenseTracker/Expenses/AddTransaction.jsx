import React, {useState, useContext} from 'react'
import {GlobalContext} from "../../../context/GlobalState"
import { Container, Row, Col } from "react-bootstrap";



export const AddTransaction = () => {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const {addTransaction}   = useContext(GlobalContext)

    const addThis = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount
        }

        addTransaction(newTransaction)
    }


    return (
        <>

        <h3>Add new transaction</h3>
        <Col >
            <form id="form" onSubmit={addThis}>
                <div className="">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
                </div>
                <div className="">
                    <label htmlFor="amount"
                    >Amount <br />
                (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Col>
            

            

        </>
    )
}