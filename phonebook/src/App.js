import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const Notification = ({message}) => {
  if (message.message === null) {
    return null
  } 
  return (
    <div className={message.messageType}>
      {message.message}
    </div>
  )
}

const Filter = ({newFilter, handleFilterChange}) => {
  return (
    <div>
      filter shown with <input value={newFilter} onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({persons, deletePerson}) => {
  return (
    <div>
      {persons.map((person) => 
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </div>
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [notification, setNotification] = useState({message: null, messageType: ''}) 

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setPersonsToShow(initialPersons)
      })
  }, [])

  const handleFilterChange = (event) => {
    const filter = event.target.value // newFilter isn't updated right away (async)
    const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    setFilter(filter)
    setPersonsToShow(filteredPersons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(p => p.name === newName)) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const updatedPerson = { ...person, number: newNumber }
        personService
          .update(person.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
            setPersonsToShow(persons.map(p => p.id !== person.id ? p : returnedPerson))
            setNotification({message: `Updated ${person.name}`, messageType: 'success'})
            setTimeout(() => {
              setNotification({message: null, messageType: ''})
            }, 3000)
            setNewName('')
            setNewNumber('')
            setFilter('')
          })
          .catch(error => {
            setNotification({
              message: error.response.data.error,
              messageType: 'error'
            })
            setTimeout(() => {
              setNotification({message: null, messageType: ''})
            }, 3000)
          })
        }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setPersonsToShow(persons.concat(returnedPerson))
          setNotification({message: `Added ${newName}`, messageType: 'success'})
          setTimeout(() => {
            setNotification({message: null, messageType: ''})
          }, 3000)
          setNewName('')
          setNewNumber('')
          setFilter('')
        })
        .catch(error => {
          setNotification({
            message: error.response.data.error,
            messageType: 'error'
          })
          setTimeout(() => {
            setNotification({message: null, messageType: ''})
          }, 3000)
        })
      } 
    }
  
  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)){
      personService
        .delRequest(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id)) 
          setPersonsToShow(persons.filter(p => p.id !== id)) 
          setNotification({message: `Deleted ${person.name}`, messageType: 'success'})
          setTimeout(() => {
            setNotification({message: null, messageType: ''})
          }, 3000)
          setNewName('')
          setNewNumber('')
          setFilter('')
        })
        .catch(error => {
          console.log(error.response.data)
          setPersons(persons.filter(p => p.id !== id)) 
          setPersonsToShow(persons.filter(p => p.id !== id)) 
          setNotification({
            message: error.response.data.error,
            messageType: 'error'
          })
          setTimeout(() => {
            setNotification({message: null, messageType: ''})
          }, 3000)
          setNewName('')
          setNewNumber('')
          setFilter('')
        })
      }
    }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App