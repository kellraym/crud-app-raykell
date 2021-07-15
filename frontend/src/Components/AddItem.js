import '../Styles/AddItem.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default function AddItem() {
  const [name, setName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    alert(`You have pressed the submit button`)
    console.log(`default was prevented`, e.target)
  }

  return (
    <form>
      <h2>WOW add an item!</h2>
      <ul>
        <li>
          <label for="name">Item name: </label>
          <input id="name" placeholder="name"></input></li>
        <li>
          <label for="due-date">Due date: </label>
          <input type="date" id="due-date" placeholder="due date"></input>
        </li>
        <li>
          <label id="desc-label" for="description">Description</label>
          <textarea id="description" rows="5" cols="40" placeholder="description(optional)"></textarea>
        </li>
        <li>
          <button onClick={(e) => handleSubmit(e)}>SUBMIT!</button>
        </li>
      </ul>
    </form>
  )
}