"use client"
import { UserProtected } from "../../../utils/app/useAuth";

export default function Messages() {
    return <UserProtected>
        <h1>Messages</h1>
    </UserProtected>
}