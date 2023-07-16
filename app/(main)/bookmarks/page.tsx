"use client"
import { UserProtected } from "../../../utils/app/useAuth";

export default function Bookmarks() {
    return <UserProtected>
        <h1>Bookmarks</h1>
    </UserProtected>
}