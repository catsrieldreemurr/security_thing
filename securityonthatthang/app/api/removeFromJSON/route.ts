import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const id = body.id
        const filePath = './app/userDb.json';

        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);

        console.log(id)

        jsonData.users.splice(id, 1)

        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
        return NextResponse.json({SuccessStatus: 'Successfully deleted data'}, {status: 201});

    } catch (err: any) {
        console.error("Error writing to file:", err.message);
        return NextResponse.json(
            {SuccessStatus: `Something went wrong. Error: ${err.message}`}, {status: 500}
        );
    }
}