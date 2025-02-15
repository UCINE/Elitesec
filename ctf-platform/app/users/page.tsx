import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import UsersTable from '../table';
import React from "react";

import {Pagination} from "@nextui-org/react";


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const users = [
    {
        'id': 1,
        'name': 'f0rkr',
        'username': 'f0rkr',
        'email': 'f0rkr42@gmail.com'
    },
    {
        'id': 1,
        'name': 'f0rkr',
        'username': 'f0rkr',
        'email': 'f0rkr42@gmail.com'
    },
    {
        'id': 1,
        'name': '?',
        'username': '?',
        'email': '?@gmail.com'
    },
    {
        'id': 1,
        'name': 'f0rkr',
        'username': 'f0rkr',
        'email': 'f0rkr42@gmail.com'
    },
    {
        'id': 1,
        'name': 'f0rkr',
        'username': 'f0rkr',
        'email': 'f0rkr42@gmail.com'
    },
    ]
export default async function UsersPage({
    searchParams
}: {
    searchParams: { q: string };
}) {
    const search = searchParams.q ?? '';
    
    

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title className="text-white">Users</Title>
            <Text className="text-white">A list of users retrieved from a Postgres database.</Text>
            <Search />
            <div className="mb-6">
                <Card className="mt-6 mb-6 ">
                    <UsersTable users={users} />
                </Card>
                <div className="flex items-center justify-center">
                    <Pagination  isCompact showControls total={10} initialPage={1} />
                </div>
            </div>

        </main>
        );
}
