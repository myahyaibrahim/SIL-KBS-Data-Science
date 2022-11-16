# Tugas IF4043 Sistem Informasi Lanjut - Pengembangan SI (KBS) dengan Data Science

Pengembangan suatu KBS menggunakan pendekatan data science untuk memprediksi tingkat pencemaran udara di suatu daerah. Pembahasan dan analisis mengenai tugas berikut dapat diakses pada [laporan berikut](https://github.com/myahyaibrahim/SIL-KBS-Data-Science/blob/main/!Documentation/Laporan%20IF4043-13519057-13519077-13519091.pdf)

# Deployment

Website dapat diakses di pranala [berikut](https://kbs-sil-frontend-ed4kbl429-dwibagus154.vercel.app/)

# Cara menggunakan secara lokal

## Cara menjalankan backend

1. Pastikan Python beserta module yang dibuthkan ter-install, dapat dilihat pada file [requirements.txt](https://github.com/myahyaibrahim/SIL-KBS-Data-Science/blob/main/requirements.txt)
2. Jalankan file app.py
3. Apabila aplikasi berhasil berjalan, akan diberikan atau tampil sebuah link localhost sesuai, contohnya http://127.0.0.1:5000/

## Cara menjalankan frontend

1. Lakukan clone github ini
2. Buka folder hasil dari clone github ini di text editor kesayangan anda
3. Buka terminal dan masuk ke dalam folder fronend
4. Ketik npm install untuk menginstall semua package yang diperlukan oleh frontend
5. buat file .env sesuai contoh yang telah diberikan (.env.example)
6. Masukkan link backend berikut pada file .env
7. Jalankan npm start untuk membuka website di lokal anda

- https://sil-kbs.herokuapp.com/predict (bisa digunakan hingga 28 november 2022)
- myahyaibrahim.pythonanywhere.com (bisa digunakan hingga februari 2023)

8. Jika anda tidak ingin menjalankannya di lokal, anda cukup masuk ke link [berikut](https://kbs-sil-frontend-ed4kbl429-dwibagus154.vercel.app/)

# Dataset

Dataset yang digunakan merupakan dataset pencemaran udara dengan feature berupa tingkat PM10, SO2, CO, O3, dan NO2. Dataset dapat diakses pada pranala [berikut](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2020/resource/0f168955-5771-43a2-9fed-9c74ac3c268e) atau dapat mengakses [file berikut](https://github.com/myahyaibrahim/SIL-KBS-Data-Science/blob/main/indeks-standar-pencemar-udara-di-spku-bulan-januari-tahun-2020.csv)

# Hasil Pengembangan Website

1. Halaman form input data feature
   ![Halaman form input data feature](/!Documentation/SIL-1.jpeg "Form input data feature")

2. Halaman kesimpulan/hasil
   ![Halaman kesimpulan/hasil](/!Documentation/SIL-2.jpeg "Kesimpulan/Hasil")

# Author

Kadek Dwi Bagus Ananta Udayana / 13519057
Muhammad Fahmi Alamsyah / 13519077
Mohammad Yahya Ibrahim / 13519091
