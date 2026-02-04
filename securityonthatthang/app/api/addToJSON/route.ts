import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const filePath = './app/userDb.json';

        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);

        console.log(jsonData.users.indexOf(body.name))

        jsonData.users.push({
        name: body.name,
        email: body.email,
        address: body.address
        });

        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
        return NextResponse.json({SuccessStatus: 'Successfully wrote data'}, {status: 201});

    } catch (err: any) {
        console.error("Error writing to file:", err.message);
        return NextResponse.json(
            {SuccessStatus: `Something went wrong. Error: ${err.message}`}, {status: 500}
        );
    }
}