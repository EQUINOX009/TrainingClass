import React from 'react'

export default function CustomButton({type}) {
  return (
    <button className={type === "PRIMARY" ? "primary" : "outline"}>
    Custom Button{" "}
        </button>
  )
}