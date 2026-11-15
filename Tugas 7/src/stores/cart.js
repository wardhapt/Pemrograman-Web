import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore("cart", () => {
  const items = ref([])

  const totalItem = computed(() =>
    items.value.reduce((total, item) => total + item.qty, 0)
  )

  const totalHarga = computed(() =>
    items.value.reduce((total, item) => total + item.harga * item.qty, 0)
  )

  function tambahItem(produk) {
    const existing = items.value.find((i) => i.id === produk.id)
    if (existing) {
      existing.qty++
    } else {
      items.value.push({ ...produk, qty: 1 })
    }
  }

  function kurangiItem(id) {
    const existing = items.value.find((i) => i.id === id)
    if (!existing) return
    if (existing.qty > 1) {
      existing.qty--
    } else {
      hapusItem(id)
    }
  }

  function hapusItem(id) {
    items.value = items.value.filter((i) => i.id !== id)
  }

  function kosongkan() {
    items.value = []
  }

  return { items, totalItem, totalHarga, tambahItem, kurangiItem, hapusItem, kosongkan }
})
