-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Sep 2020 pada 15.54
-- Versi server: 10.1.36-MariaDB
-- Versi PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_admin`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `email` text,
  `password` text,
  `resetToken` text,
  `resetTokenExpiretion` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `resetToken`, `resetTokenExpiretion`, `createdAt`, `updatedAt`) VALUES
(3, 'rsparujember@gmail.com', '$2a$12$hW/V1EvDFnGj1ySaylMri.cCN.lK0maxl4Cplm//ggXNkzhoNY3gi', NULL, NULL, '2020-08-31 02:56:12', '2020-08-31 02:56:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `indikators`
--

CREATE TABLE `indikators` (
  `id` int(11) NOT NULL,
  `bor` varchar(255) DEFAULT NULL,
  `avlos` varchar(255) DEFAULT NULL,
  `toi` varchar(255) DEFAULT NULL,
  `bto` varchar(255) DEFAULT NULL,
  `ndr` varchar(255) DEFAULT NULL,
  `gdr` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `indikators`
--

INSERT INTO `indikators` (`id`, `bor`, `avlos`, `toi`, `bto`, `ndr`, `gdr`, `createdAt`, `updatedAt`) VALUES
(1, '36.00', '4.15', '7.16', '2.68', '0.00', '19.90', '2020-08-12 06:26:39', '2020-08-12 06:26:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `inventaris`
--

CREATE TABLE `inventaris` (
  `id` int(11) NOT NULL,
  `vip` int(11) DEFAULT NULL,
  `anggrek` int(11) DEFAULT NULL,
  `hcu` int(11) DEFAULT NULL,
  `icu` int(11) DEFAULT NULL,
  `dahlia2` int(11) DEFAULT NULL,
  `dahliaI` int(11) DEFAULT NULL,
  `melati2` int(11) DEFAULT NULL,
  `tulip2` int(11) DEFAULT NULL,
  `bougenvile2` int(11) DEFAULT NULL,
  `lavender2` int(11) DEFAULT NULL,
  `mawar3` int(11) DEFAULT NULL,
  `mawarI` int(11) DEFAULT NULL,
  `mawarIK` int(11) DEFAULT NULL,
  `melati3` int(11) DEFAULT NULL,
  `tulip3` int(11) DEFAULT NULL,
  `bougenvile3` int(11) DEFAULT NULL,
  `lavender3` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `inventaris`
--

INSERT INTO `inventaris` (`id`, `vip`, `anggrek`, `hcu`, `icu`, `dahlia2`, `dahliaI`, `melati2`, `tulip2`, `bougenvile2`, `lavender2`, `mawar3`, `mawarI`, `mawarIK`, `melati3`, `tulip3`, `bougenvile3`, `lavender3`, `createdAt`, `updatedAt`) VALUES
(1, 12, 14, 17, 2, 1, 12, 15, 19, 20, 8, 11, 2, 3, 4, 6, 7, 8, '2020-08-18 03:58:43', '2020-08-18 03:58:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kontens`
--

CREATE TABLE `kontens` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `image` text,
  `isi` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kontens`
--

INSERT INTO `kontens` (`id`, `judul`, `image`, `isi`, `createdAt`, `updatedAt`) VALUES
(4, 'Lepas Pisah Direktur Rumah Sakit Paru Jember dr. Nur Siti Maimunah, M.Si. (Tahun 2017-2020)', 'images\\konten\\1598328980950-Agung.png', '<p>W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our&nbsp;<a href=\"https://www.w3schools.com/about/about_copyright.asp\">terms of use</a>,&nbsp;<a href=\"https://www.w3schools.com/about/about_privacy.asp\">cookie and privacy policy</a>.&nbsp;<a href=\"https://www.w3schools.com/about/about_copyright.asp\">Copyright 1999-2020</a>&nbsp;by Refsnes Data. All Rights Reserved.<br />\r\n<a href=\"https://www.w3schools.com/w3css/default.asp\">Powered by W3.CSS</a>.</p>\r\n', '2020-08-25 04:16:21', '2020-08-25 04:16:21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `krisans`
--

CREATE TABLE `krisans` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tlpn` int(11) DEFAULT NULL,
  `isi` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `ppids`
--

CREATE TABLE `ppids` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tgl` datetime DEFAULT NULL,
  `image` text,
  `isi` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ppids`
--

INSERT INTO `ppids` (`id`, `nama`, `email`, `tgl`, `image`, `isi`, `createdAt`, `updatedAt`) VALUES
(1, 'Agung Jumantoro Andrian', 'agung_jumantoro_27rpl@student.smktelkom-mlg.sch.id', '2020-08-27 00:00:00', 'images\\konten\\1598513549582-1. Agung Jumantoro Andrian.jpg', 'MANTAB MANTAB', '2020-08-27 07:32:29', '2020-08-27 07:32:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(32) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('PHiCjSY1ZXmKYJHcZSxVwpLeskdP64KJ', '2020-09-05 14:51:12', '{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2020-09-05T14:27:26.357Z\",\"httpOnly\":true,\"path\":\"/\"},\"isLogedIn\":true,\"admin\":[{\"id\":3,\"email\":\"rsparujember@gmail.com\",\"password\":\"$2a$12$hW/V1EvDFnGj1ySaylMri.cCN.lK0maxl4Cplm//ggXNkzhoNY3gi\"}],\"expires\":\"2020-09-05T14:27:26.357Z\"}', '2020-09-05 13:27:26', '2020-09-05 13:51:12');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `indikators`
--
ALTER TABLE `indikators`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `inventaris`
--
ALTER TABLE `inventaris`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kontens`
--
ALTER TABLE `kontens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `krisans`
--
ALTER TABLE `krisans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `ppids`
--
ALTER TABLE `ppids`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `indikators`
--
ALTER TABLE `indikators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `inventaris`
--
ALTER TABLE `inventaris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `kontens`
--
ALTER TABLE `kontens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `krisans`
--
ALTER TABLE `krisans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `ppids`
--
ALTER TABLE `ppids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
