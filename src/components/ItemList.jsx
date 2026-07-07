import React, { useState } from 'react'

export default function ItemList({ items, onEdit, onDelete, onAddSubTask, onToggleSubTask, onDeleteSubTask }) {
  // Hangi projenin alt görevlerinin açık (expand) olduğunu tutan state
  const [expandedItems, setExpandedItems] = useState({})
  const [subTaskInputs, setSubTaskInputs] = useState({})

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSubTaskSubmit = (e, itemId) => {
    e.preventDefault()
    const text = subTaskInputs[itemId] || ''
    if (!text.trim()) return
    onAddSubTask(itemId, text)
    setSubTaskInputs(prev => ({ ...prev, [itemId]: '' }))
  }

  return (
    <div className="font-mono text-white mt-4">
      <p className="text-[#ffff33] mb-4">&gt; active_project_log / mevcut_projeler:</p>
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm italic pl-4">[Sistem]: Log kaydı bulunamadı. Yeni bir proje ekleyin.</p>
      ) : (
        <ul className="space-y-4 pl-4">
          {items.map((item) => {
            const isExpanded = expandedItems[item.id]
            return (
              <li key={item.id} className="border-l border-gray-900 pl-3">
                {/* Ana Proje Satırı */}
                <div className="group flex items-center justify-between max-w-2xl text-[#ffff33]">
                  <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => toggleExpand(item.id)}>
                    <span className="text-green-500 font-bold transition-transform inline-block">
                      {isExpanded ? '▼' : '▶'}
                    </span>
                    <span className="text-white hover:text-[#ffff33] font-medium transition-colors">
                      {item.text}
                    </span>
                    <span className="text-xs text-gray-600">({item.subTasks?.length || 0} alt_adim)</span>
                  </div>
                  <div className="text-xs space-x-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(item)} className="text-blue-400 hover:underline">[düzenle]</button>
                    <button onClick={() => onDelete(item.id)} className="text-red-500 hover:underline">[sil]</button>
                  </div>
                </div>

                {/* Alt Başlıklar / Adımlar Alanı */}
                {isExpanded && (
                  <div className="mt-2 pl-6 space-y-2 border-l border-dashed border-gray-800 ml-1.5">
                    {/* Alt Görev Listesi */}
                    {item.subTasks && item.subTasks.map((sub) => (
                      <div key={sub.id} className="flex items-center justify-between max-w-xl text-sm group/sub">
                        <div 
                          className={`flex items-center gap-2 cursor-pointer select-none ${sub.completed ? 'line-through text-gray-600' : 'text-gray-300'}`}
                          onClick={() => onToggleSubTask(item.id, sub.id)}
                        >
                          <span>{sub.completed ? '[✓]' : '[ ]'}</span>
                          <span>{sub.text}</span>
                        </div>
                        <button 
                          onClick={() => onDeleteSubTask(item.id, sub.id)}
                          className="text-xs text-red-700 hover:underline opacity-0 group-hover/sub:opacity-100 transition-opacity"
                        >
                          [sil]
                        </button>
                      </div>
                    ))}

                    {/* Alt Göreg Ekleme Mini Formu */}
                    <form onSubmit={(e) => handleSubTaskSubmit(e, item.id)} className="flex gap-2 pt-1 max-w-md">
                      <span className="text-gray-600 text-sm font-bold">+</span>
                      <input
                        type="text"
                        value={subTaskInputs[item.id] || ''}
                        onChange={(e) => setSubTaskInputs(prev => ({ ...prev, [item.id]: e.target.value }))}
                        placeholder="Yeni alt adim ekle..."
                        className="flex-1 bg-transparent border-b border-gray-800 text-gray-400 focus:text-white text-xs focus:outline-none focus:border-[#ffff33] pb-0.5"
                      />
                      <button type="submit" className="text-xs text-[#33ff33] hover:underline">[ekle]</button>
                    </form>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}