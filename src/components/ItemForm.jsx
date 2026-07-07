import React, { useState, useEffect } from 'react'

export default function ItemForm({ onSave, currentItem, setEditingItem }) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (currentItem) setText(currentItem.text)
    else setText('')
  }, [currentItem])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onSave(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="font-mono mt-8 p-4 border border-dashed border-gray-800 rounded bg-[#0a0a0a]">
      <p className="text-[#33ff33] mb-2">
        {currentItem ? '$ update --target project' : '$ insert --target project'}
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Yeni proje başlığı, görev veya teknoloji logu gir..."
          className="flex-1 bg-black border border-gray-700 text-white p-2 focus:outline-none focus:border-[#ffff33] text-sm"
        />
        <button type="submit" className="bg-[#ffff33] text-black px-4 py-2 text-sm font-bold hover:bg-yellow-400 transition-colors">
          {currentItem ? 'UPDATE' : 'COMMIT'}
        </button>
        {currentItem && (
          <button type="button" onClick={() => setEditingItem(null)} className="border border-red-500 text-red-500 px-3 py-2 text-sm hover:bg-red-950 transition-colors">
            ABORT
          </button>
        )}
      </div>
    </form>
  )
}