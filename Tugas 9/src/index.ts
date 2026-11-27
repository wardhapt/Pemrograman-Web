import { Hono } from 'hono'

const app = new Hono()

// Koleksi data inventaris (in-memory)
const inventaris = [
  { id: 1, nama: 'Komputer Dell', kategori: 'komputer', jumlah: 20, kondisi: 'baik' },
  { id: 2, nama: 'Proyektor Epson', kategori: 'proyektor', jumlah: 2, kondisi: 'baik' },
  { id: 3, nama: 'Switch TP-Link 24 Port', kategori: 'switch', jumlah: 3, kondisi: 'baik' },
  { id: 4, nama: 'Router Mikrotik', kategori: 'router', jumlah: 2, kondisi: 'rusak ringan' },
]

// GET semua
app.get('/api/inventaris', (c) => c.json(inventaris))

// GET detail
app.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id'))
  const item = inventaris.find((i) => i.id === id)
  if (!item) return c.json({ pesan: 'Barang tidak ditemukan' }, 404)
  return c.json(item)
})

// POST tambah
app.post('/api/inventaris', async (c) => {
  const body = await c.req.json()
  const baru = { id: inventaris.length + 1, ...body }
  inventaris.push(baru)
  return c.json(baru, 201)
})

export default app