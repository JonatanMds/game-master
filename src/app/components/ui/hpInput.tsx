'use client'
import { useState } from "react";

interface HpInputProps{
    operationName: string
    maxHp?: number
    bgColor: 'danger' | 'success'
    onSubmit: (value: number) => void
  }

export default function HpInput({operationName, maxHp, bgColor, onSubmit}:HpInputProps){

  const colorClasses = {
    danger: 'bg-[#ed4343]',
    success: 'bg-[#43ed6e]',
  }

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
  const value = Number(inputValue)

  const isValid =
    !isNaN(value) &&
    value >= 0 &&
    (maxHp === undefined || value <= maxHp)

  if (isValid) {
    onSubmit(value)
    setInputValue('')
  }
}

  return(
    <div className="flex flex-col items-center justify-center gap-1">
      <input
        type="number"
        placeholder="0"
        min={0}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === '-' || e.key === '+') {
             e.preventDefault();
          }
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
        className={`w-12 text-center text-sm rounded px-1 py-0.5 ${colorClasses[bgColor]} border-none outline-none placeholder-white`}
        />
        <p className="text-xs text-white">{operationName}</p>
    </div>
  )
}