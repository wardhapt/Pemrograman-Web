<script setup>
import { ref } from "vue"
import ProductCard from "../components/ProductCard.vue"
import { useCartStore } from "../stores/cart"

const cart = useCartStore()

const produk = ref([
  { id: 1, nama: "Keyboard Mekanik", harga: 450000, stok: 10 },
  { id: 2, nama: "Mouse Wireless", harga: 175000, stok: 5 },
  { id: 3, nama: "Headset Gaming", harga: 320000, stok: 3 },
  { id: 4, nama: "Monitor 24 Inch", harga: 1650000, stok: 0 }
])

const tambahKeCart = (item) => {
  cart.tambahItem(item)
}
</script>

<template>
  <section>
    <h2>Katalog Produk</h2>
    <div class="grid">
      <ProductCard
        v-for="p in produk"
        :key="p.id"
        :id="p.id"
        :nama="p.nama"
        :harga="p.harga"
        :stok="p.stok"
        @beli-produk="tambahKeCart"
      />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
