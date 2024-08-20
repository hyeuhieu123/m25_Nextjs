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

export async function GET(req: any, res: any) {
  let find = users.find((item) => {
    return item.id == +res.params.id;
  });
  const { params } = res;

  return NextResponse.json({ message: find ? find : "không tìm thấy" });
}

export async function PUT(request: any) {
  const data = await request.json();

  return NextResponse.json({
    massage: "Cập nhật user thành công",
    users: data,
  });
}

export async function PATCH(request: any) {
  const data = await request.json();

  return NextResponse.json({
    massage: "Cập nhật user thành công",
    users: data,
  });
}

export async function DELETE(request: any) {
  const data = await request.json();

  return NextResponse.json({
    massage: "Xóa user thành công",
    users: data,
  });
}
