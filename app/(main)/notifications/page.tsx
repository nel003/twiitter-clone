"use client"
import { UserProtected } from "../../../utils/app/useAuth";

export default function Notifications() {
    return <UserProtected>
        <h1>Notifications</h1>
    </UserProtected>
}