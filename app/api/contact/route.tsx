import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Insert into Supabase
    const { error } = await supabase.from("contact_messages").insert([
      { name, email, message }
    ]);

    if (error) {
      console.error("Supabase Insert Error:", error);
      return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Message stored in Supabase!" });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
