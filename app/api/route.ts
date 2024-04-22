export async function GET(request: Request) {
  console.info("API called");
  return Response.json({ message: "Hello World" })
}