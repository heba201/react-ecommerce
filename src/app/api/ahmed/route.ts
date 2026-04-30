import { NextRequest, NextResponse } from "next/server";

export async function GET(request :NextRequest){
const response = [
    {name:"ahmed",id:1,address:"alex"},
    {name:"ali",id:2,address:"alex"},
    {name:"doaa",id:3,address:"alex"},
]
return NextResponse.json(response)
}