/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

const books = [
  { title: "Book 1", author: "Author 1", sales: 1200000 },
  { title: "Book 2", author: "Author 2", sales: 800000 },
  { title: "Book 3", author: "Author 3", sales: 1500000 },
  // ... (tambahkan data buku lainnya jika diperlukan)
];

// Gunakan filter() untuk mengambil buku-buku dengan sales lebih dari 1000000
const highSalesBooks = books.filter((book) => book.sales > 1000000);

// Gunakan map() untuk mengembalikan array string dengan format yang diinginkan
const greatAuthors = highSalesBooks.map(
  (book) =>
    `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`
);

console.log(greatAuthors);
