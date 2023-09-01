import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                console.log(selectedContactId)
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
                );
                const data = await response.json()
                setContact(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchSelectedContact()
    }, [])

    if (!contact) {
        return <h1>Loading...</h1>;
      }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => {
                setSelectedContactId(null)
            }}>
                Go back
            </button>
        </div>
    )
}