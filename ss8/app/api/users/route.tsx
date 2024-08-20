import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "hieu",
    address: "hn",
    age: "1",
  },
  {
    id: 2,
    name: "hieu",
    address: "hn",
    age: "1",
  },
  {
    id: 3,
    name: "hieu",
    address: "hn",
    age: "1",
  },
];
export async function GET() {
  return NextResponse.json({ data: users });
}

export async function POST(request: any) {
  const data = await request.json();

  return NextResponse.json({
    massage: "thêm mới thành công",
    users: data,
  });
}
