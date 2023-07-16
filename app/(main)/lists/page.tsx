"use client"
import { UserProtected } from "../../../utils/app/useAuth";

export default function Lists() {
    return <UserProtected>
        <h1>Lists</h1>
    </UserProtected>
}