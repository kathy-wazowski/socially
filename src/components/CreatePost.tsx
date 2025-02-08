"use client"

import { useUser } from "@clerk/nextjs"
import { useState } from "react";

function CreatePost() {
    const { user } = useUser();
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isPosting, setIsPosting] = useState("");
    const [showImageUpload, setImageUpload] = useState("");
    return (
        <div>CreatePost</div>
    )
}

export default CreatePost