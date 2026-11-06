const form = document.getElementById("form-cari");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const user = document.getElementById("username").value.trim();

    const loading = document.getElementById("loading");
    const pesan = document.getElementById("pesan");
    const profil = document.getElementById("profil");

    loading.hidden = false;
    pesan.hidden = true;
    profil.hidden = true;

    try {

        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(user)}`
        );

        if (!response.ok) {
            throw new Error("Akun GitHub tidak ditemukan!");
        }

        const data = await response.json();

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("nama").textContent =
            data.name || "Nama tidak tersedia";

        document.getElementById("login").textContent =
            "@" + data.login;

        document.getElementById("bio").textContent =
            data.bio || "Pengguna belum menambahkan bio.";

        document.getElementById("repo").textContent =
            data.public_repos;

        document.getElementById("followers").textContent =
            data.followers;

        document.getElementById("following").textContent =
            data.following;

        document.getElementById("link").href =
            data.html_url;

        profil.hidden = false;

    } catch (error) {

        pesan.textContent = error.message;
        pesan.hidden = false;

    } finally {

        loading.hidden = true;

    }

});