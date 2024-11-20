import React from 'react';

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    // Server Side fetching
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        // Disable caching will mark this component as Static Rendering
        cache: 'no-store', // in case change quickly
        next: {
            revalidate: 10, // get fresh data every 10 seconds
        }
    });
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            {/* static rendering */}
            <p>{new Date().toISOString()}</p>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UsersPage;
