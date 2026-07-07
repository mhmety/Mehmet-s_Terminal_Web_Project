import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import ItemList from '../components/ItemList'
import ItemForm from '../components/ItemForm'

export default function Home() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('retro_items_v2')
    return saved ? JSON.parse(saved) : [
      { 
        id: '1', 
        text: 'Huawei & Spheretech Data Science Bootcamp', 
        subTasks: [
          { id: '1-1', text: 'Numpy ve Pandas ile Veri Manipülasyonu', completed: true },
          { id: '1-2', text: 'Özellik Mühendisliği (Feature Engineering)', completed: false },
          { id: '1-3', text: 'Makine Öğrenmesi Modellerinin Dağıtılması', completed: false }
        ] 
      },
      { 
        id: '2', 
        text: 'Automated Code Reviewer Pipeline', 
        subTasks: [
          { id: '2-1', text: 'n8n Webhook Yapılandırması', completed: true },
          { id: '2-2', text: 'Ollama ve Yerel LLM Entegrasyonu', completed: true }
        ] 
      }
    ]
  })
  
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    localStorage.setItem('retro_items_v2', JSON.stringify(items))
  }, [items])

  // ANA PROJE EKLEME & GÜNCELLEME
  const handleSaveItem = (text) => {
    if (editingItem) {
      setItems(items.map(i => i.id === editingItem.id ? { ...i, text } : i))
      setEditingItem(null)
    } else {
      setItems([...items, { id: Date.now().toString(), text, subTasks: [] }])
    }
  }

  // ANA PROJE SİLME
  const handleDeleteItem = (id) => {
    setItems(items.filter(i => i.id !== id))
    if (editingItem?.id === id) setEditingItem(null)
  }

  // ALT GÖREV EKLEME
  const handleAddSubTask = (itemId, subTaskText) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        const newSub = { id: Date.now().toString(), text: subTaskText, completed: false }
        return { ...item, subTasks: [...(item.subTasks || []), newSub] }
      }
      return item
    }))
  }

  // ALT GÖREV DURUMU DEĞİŞTİRME (CHECKBOX)
  const handleToggleSubTask = (itemId, subTaskId) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          subTasks: item.subTasks.map(sub => sub.id === subTaskId ? { ...sub, completed: !sub.completed } : sub)
        }
      }
      return item
    }))
  }

  // ALT GÖREV SİLME
  const handleDeleteSubTask = (itemId, subTaskId) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          subTasks: item.subTasks.filter(sub => sub.id !== subTaskId)
        }
      }
      return item
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 selection:bg-[#ffff33] selection:text-black">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <div className="font-mono space-y-4 text-sm md:text-base mb-8">
          <p className="text-[#ffff33]">
            &gt; Merhaba, ben Mehmet. Bilişim Sistemleri ve Teknolojileri mezunuyum. Yazılım geliştirme, veri analitiği ve otomasyon sistemleri üzerine çalışıyorum.
          </p>
          <p className="text-[#ffff33]">
            &gt; Çalışmalarıma ve açık kaynak kodlu repository'lerime <span className="underline decoration-dashed cursor-pointer">GitHub</span> üzerinden erişebilir, benimle <span className="underline decoration-dashed cursor-pointer">LinkedIn</span> aracılığıyla iletişime geçebilirsiniz.
          </p>
        </div>

        <ItemList 
          items={items} 
          onEdit={setEditingItem} 
          onDelete={handleDeleteItem} 
          onAddSubTask={handleAddSubTask}
          onToggleSubTask={handleToggleSubTask}
          onDeleteSubTask={handleDeleteSubTask}
        />
        
        <ItemForm onSave={handleSaveItem} currentItem={editingItem} setEditingItem={setEditingItem} />

        <footer className="font-mono text-xs text-gray-600 mt-16 pt-4 border-t border-gray-900">
          sys_admin@mehmet_yildiz:~$ exit
        </footer>
      </div>
    </div>
  )
}