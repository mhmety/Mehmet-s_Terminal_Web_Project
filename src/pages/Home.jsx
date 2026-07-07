import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import ItemList from '../components/ItemList'
import ItemForm from '../components/ItemForm'

export default function Home() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('retro_items')
    return saved ? JSON.parse(saved) : [
      { id: '1', text: 'E-Commerce SQL Veri Analizi ve Veritabanı Yönetimi' },
      { id: '2', text: 'GitHub Webhook Entegrasyonlu n8n Otomasyon Pipeline' },
      { id: '3', text: 'MATLAB Sinyal İşleme ve Sayısal Analiz Modeli' }
    ]
  })
  
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    localStorage.setItem('retro_items', JSON.stringify(items))
  }, [items])

  const handleSaveItem = (text) => {
    if (editingItem) {
      setItems(items.map(i => i.id === editingItem.id ? { ...i, text } : i))
      setEditingItem(null)
    } else {
      setItems([...items, { id: Date.now().toString(), text }])
    }
  }

  const handleDeleteItem = (id) => {
    setItems(items.filter(i => i.id !== id))
    if (editingItem?.id === id) setEditingItem(null)
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

        <ItemList items={items} onEdit={setEditingItem} onDelete={handleDeleteItem} />
        <ItemForm onSave={handleSaveItem} currentItem={editingItem} setEditingItem={setEditingItem} />

        <footer className="font-mono text-xs text-gray-600 mt-16 pt-4 border-t border-gray-900">
          sys_admin@mehmet_yildiz:~$ exit
        </footer>
      </div>
    </div>
  )
}