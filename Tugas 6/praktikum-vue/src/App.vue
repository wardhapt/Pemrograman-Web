<script setup>
import { ref, computed } from 'vue'

// Menyimpan data buku
const daftarBuku = ref([])

// Menyimpan data input
const judulBuku = ref('')
const kategoriBuku = ref('')
const statusBaca = ref(false)

// Menghitung jumlah buku yang sudah selesai dibaca
const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.sudahDibaca).length
})

// Menambahkan buku ke daftar
function tambahBuku() {
  if (judulBuku.value.trim() === '' || kategoriBuku.value === '') {
    alert('Judul dan kategori buku harus diisi!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judulBuku.value,
    kategori: kategoriBuku.value,
    sudahDibaca: statusBaca.value
  })

  // Mengosongkan form setelah buku ditambahkan
  judulBuku.value = ''
  kategoriBuku.value = ''
  statusBaca.value = false
}
</script>

<template>
  <main class="container">
    <header>
      <h1>Buku Catatan</h1>
      <p>Simpan dan kelola daftar bacaanmu.</p>
    </header>

    <section class="form-section">

      <form @submit.prevent="tambahBuku">
        <label for="judul">Judul Buku</label>
        <input
          id="judul"
          type="text"
          v-model="judulBuku"
          placeholder="Masukkan judul buku"
        />

        <label for="kategori">Kategori Buku</label>
        <select id="kategori" v-model="kategoriBuku">
          <option value="">Pilih kategori</option>
          <option value="Novel">Novel</option>
          <option value="Pendidikan">Pendidikan</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Komik">Komik</option>
          <option value="Lainnya">Lainnya</option>
        </select>

        <label class="checkbox">
          <input type="checkbox" v-model="statusBaca" />
          Sudah selesai dibaca
        </label>

        <button type="submit">Tambah Buku</button>
      </form>
    </section>

    <section class="daftar-section">
      <h2>Daftar Buku</h2>

      <p class="jumlah">
        Jumlah buku selesai dibaca:
        <strong>{{ jumlahSelesai }}</strong>
        dari
        <strong>{{ daftarBuku.length }}</strong> buku
      </p>

      <div v-if="daftarBuku.length === 0" class="kosong">
        Belum ada buku. Silahkan tambahkan buku terlebih dahulu!
      </div>

      <div v-for="buku in daftarBuku" :key="buku.id" class="buku-card">
        <h3>{{ buku.judul }}</h3>
        <p>Kategori: {{ buku.kategori }}</p>
        <span :class="buku.sudahDibaca ? 'selesai' : 'belum'">
          {{ buku.sudahDibaca ? 'Sudah Dibaca' : 'Belum Dibaca' }}
        </span>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 25px;
  font-family: Arial, sans-serif;
  color: #da5392;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  color: #d8459b;
}

.form-section,
.daftar-section {
  background: white;
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

h2 {
  color: #a86090;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input[type="text"],
select {
  padding: 11px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

button {
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #d15d9d;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #d360a3;
}

.jumlah {
  background: #eef4f4;
  padding: 12px;
  border-radius: 6px;
}

.buku-card {
  padding: 15px;
  margin-top: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.buku-card h3 {
  margin-top: 0;
}

.selesai {
  color: #1e9c61c7;
  font-weight: bold;
}

.belum {
  color: #f3df2b;
  font-weight: bold;
}

.kosong {
  color: #777;
  text-align: center;
  padding: 20px;
}

body {
    background: linear-gradient(135deg, #fff0f5, #f5efff, #fff8e7);
    font-family: 'Poppins', sans-serif;
    color: #70566d;
}

/* Judul */
h1 {
    color: #d879a5;
    text-align: center;
    font-weight: bold;
}

/* Deskripsi */
p {
    color: #967b91;
}

/* Container utama */
.container {
    background-color: #ffffff;
    border: 2px solid #f9d5e5;
    border-radius: 25px;
    padding: 25px;
    box-shadow: 0 8px 20px rgba(219, 145, 180, 0.15);
}

/* Input */
input, select {
    border: 2px solid #f4c6dc;
    border-radius: 12px;
    padding: 10px;
    outline: none;
    background-color: #fffafd;
    color: #70566d;
}

input:focus, select:focus {
    border-color: #d98bb5;
    box-shadow: 0 0 8px #f5c8df;
}

button {
    background: linear-gradient(135deg, #f5a9c8, #c9a7ed);
    color: white;
    border: none;
    border-radius: 15px;
    padding: 11px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 12px rgba(200, 140, 190, 0.3);
}

.card, .book-card {
    background: #fff8fc;
    border: 1px solid #f5d6e7;
    border-radius: 18px;
    padding: 15px;
    margin-top: 15px;
    box-shadow: 0 4px 10px rgba(219, 145, 180, 0.12);
    transition: 0.3s;
}

.card:hover, .book-card:hover {
    transform: translateY(-4px);
}

/* Checkbox */
input[type="checkbox"] {
    accent-color: #df91b8;
}

/* Teks tambahan */
small {
    color: #b58ca9;
}

/* Tampilan layar HP */
@media (max-width: 600px) {
    .container {
        margin: 10px;
        padding: 18px;
    }

    button {
        width: 100%;
        margin-top: 8px;
    }
}

</style>
