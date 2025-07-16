import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/dbConnect";
import User from "../../../../models/signup";


export async function POST(req: Request) {
    try {
        await connectToDatabase();
        
        const { name: fullName, email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "Email already exists on the waitlist" },
                { status: 400 }
            );
        }

        // Create new user in database
        const newUser = new User({
            fullName,
            email
        });
        await newUser.save();

        return NextResponse.json(
            { message: "Joined waitlist successfully!" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Waitlist submission error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    try {
        console.log("about to connect to database")
        await connectToDatabase();

        return NextResponse.json({ message: "database connected." }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "something went wrong" }, { status: 500 })
    }
}