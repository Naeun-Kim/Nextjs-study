import { getProducts } from "@/service/product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const products = await getProducts();
    return NextResponse.json({ products });
}