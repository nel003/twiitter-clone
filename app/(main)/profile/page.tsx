"use client"
import { UserProtected } from "../../../utils/app/useAuth";

export default function Profile() {
    return <UserProtected>
        <h1>Profile</h1>
    </UserProtected>
}