import React from 'react';
import { parse } from 'papaparse';

function App() {
  const [contacts, setContacts] = React.useState(() => ({email: "fake@gmail.com", name: "Fake"}));

  return (
    <div>
      <h1 className="text-center text-4x1">Contact Import</h1>
      <div
        classname={`p-6 my-2 mx-auto max-w-md border-2`}
        onDragEnter={() => {}}
        onDragLeave={() => {}}
        onDragOver={() => {}}
        onDrop={() => {}}
      >
        DROP HERE
      </div>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.email}>
              <strong>{contact.name}</strong>: {contact.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
