import React from 'react';
import { parse } from 'papaparse';

function App() {
  const [contacts, setContacts] = React.useState(() => [{ email: "fake@gmail.com", name: "Fake" }]);
  const [infoList, setInfoList] = React.useState(null);

  return (
    <div>
      <h1 className="text-center text-4xl">Contact Import</h1>
      <div
        className={`p-6 my-2 mx-auto max-w-md border-2`}
        onDragEnter={() => { }}
        onDragLeave={() => { }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer);
          setInfoList(Array.from(e.dataTransfer.files));
        }}
      >
        DROP HERE
      </div>
      {infoList === null ? '' : (<div className="text-center">
        {`You dropped ${infoList.length} files`}
        {infoList.map((info, idx) => {
          return (
            <li key={idx}>
              {info.name}, {info.size} bytes, {info.type}
            </li>
          );
        })}
        </div>)
      }
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
