<script setup>
import { useCartStore } from "./stores/cart"

const cart = useCartStore()
</script>

<template>
  <header class="navbar">
    <h1>Swalayan Komputer</h1>
    <nav>
      <RouterLink to="/">Beranda</RouterLink>
      <RouterLink to="/cart">Keranjang ({{ cart.totalItem }})</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
