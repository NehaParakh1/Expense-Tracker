import React from 'react';
import { useSelector } from 'react-redux';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const email = useSelector(state => state.auth.email);
    const expenseEmail = email.replace('.','');
    const deleteHandler = async (event) => {
        event.preventDefault();
        try {
            console.log(props.item)
            const res = await fetch(`https://expensetracker-a2389-default-rtdb.asia-southeast1.firebasedatabase.app/${expenseEmail}/${props.item.id}.json`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            const data = await res.json();

            if (res.ok) {
                alert("Expense Deleted Successfully")
                props.deleteItem(props.item)

            } else {
                console.log(props.item)
                throw data.error
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const editHandler = async (event) => {
        event.preventDefault();
        props.editItem(props.item);
    }

    return (<>
        <li className='list'> 
        <b className='b1'>Category</b> :- {props.item.category}; 
        <b className='b2'>Amount</b> :- ${props.item.amount}; 
        <b className='b3'>Description</b> :- {props.item.description} 
        <button className='edit-button' onClick={editHandler}>Edit</button> 
        <button className='delete-button' onClick={deleteHandler}>Delete</button> 
        </li>
    </>
    )
}

export default ExpenseItem