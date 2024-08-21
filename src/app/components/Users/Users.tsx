"use client"
import { IUser } from "@/types/types";
import { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div className="border mt-10 py-10 px-10 rounded-xl">
            <h1 className="text-2xl mb-5 font-bold text-black-100">Users</h1>
            <table className="table w-full text-left table-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;