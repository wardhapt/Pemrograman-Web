<script setup>
import { useCartStore } from "../stores/cart"

const cart = useCartStore()
const rupiah = (n) => "Rp " + n.toLocaleString("id-ID")
</script>

<template>
  <section>
    <h2>Keranjang Belanja</h2>

    <p v-if="cart.items.length === 0">
      Keranjang masih kosong.
      <RouterLink to="/">Belanja dulu yuk</RouterLink>
    </p>

    <template v-else>
      <table>
        <thead>
          <tr>
            <th>Produk</th>
            <th>Harga</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.id">
            <td>{{ item.nama }}</td>
            <td>{{ rupiah(item.harga) }}</td>
            <td>
              <button class="kecil" @click="cart.kurangiItem(item.id)">-</button>
              {{ item.qty }}
              <button class="kecil" @click="cart.tambahItem(item)">+</button>
            </td>
            <td>{{ rupiah(item.harga * item.qty) }}</td>
            <td>
              <button class="hapus" @click="cart.hapusItem(item.id)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="total">
        Total ({{ cart.totalItem }} item): <strong>{{ rupiah(cart.totalHarga) }}</strong>
      </p>
      <button class="hapus" @click="cart.kosongkan()">Kosongkan Keranjang</button>
    </template>
  </section>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}
th, td {
  padding: 0.7rem;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}
.total {
  margin: 1rem 0;
  font-size: 1.1rem;
}
button {
  cursor: pointer;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
}
.kecil {
  background: #e2e8f0;
  padding: 0.2rem 0.6rem;
}
.hapus {
  background: #ef4444;
  color: #fff;
}
</style>
