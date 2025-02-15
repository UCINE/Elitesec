import { sql } from '@vercel/postgres';


import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

function Events() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
          >
          Subscribe
        </Link>
      </CardFooter>
    </Card>
    );
}




export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
//  const search = searchParams.q ?? '';
//  const result = await sql`
//    SELECT id, name, username, email
//    FROM users
//    WHERE name ILIKE ${'%' + search + '%'};
//  `;
//  const users = result.rows as User[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Events />
    </main>
  );
}
