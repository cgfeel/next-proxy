export async function GET() {
    return Response.json({ data: 'test' + Date.now() });
}