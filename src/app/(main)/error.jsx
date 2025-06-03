"use client"

export default function Error({ error }) {
    return(
        <div>Bir Hata Olustu: {error === "string" ? error : "Bilinmeyen hata"}</div>
    )
}