import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
} from '@tremor/react';

interface Team {
    id: number;
    name: string;
    size: number;
}

export default function TeamsTable({ teams }: { teams: Team[] }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Team Name</TableHeaderCell>
                    <TableHeaderCell>Username</TableHeaderCell>
                    <TableHeaderCell>Size</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {teams.map((team) => (
                    <TableRow key={team.id}>
                        <TableCell>{team.name}</TableCell>
                        <TableCell>
                            <Text>{team.name}</Text>
                        </TableCell>
                        <TableCell>
                            <Text>{team.size}</Text>
                        </TableCell>
                    </TableRow>
                    ))}
            </TableBody>
        </Table>
        );
}
