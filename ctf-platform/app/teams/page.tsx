import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import UsersTable from '../table';
import TeamsTable from './teamtable';

interface Team {
    id: number;
    name: string;
    size: number;
}

const users = [
    {
        'id': 1,
        'name': 'f0rkr',
        'size': 24,
    },
    {
        'id': 1,
        'name': 'f0rkr',
        'size': 24
    },
    {
        'id': 1,
        'name': 'f0rkr',
        'size': 24,
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
            <Title>Teams</Title>
            <Text>A list of teams retrieved from a Postgres database.</Text>
            <Search />
            <Card className="mt-6">
                <TeamsTable teams={users} />
            </Card>
        </main>
        );
}
