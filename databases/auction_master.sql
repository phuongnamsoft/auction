-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2021 at 03:47 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auction_master`
--

-- --------------------------------------------------------

--
-- Table structure for table `auctions`
--

CREATE TABLE `auctions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `currency_code` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `images` text COLLATE utf8_unicode_ci,
  `min_bid_amount` int(10) UNSIGNED NOT NULL,
  `shipping_fee` int(10) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `auctions`
--

INSERT INTO `auctions` (`id`, `name`, `user_id`, `category_id`, `currency_code`, `start_date`, `end_date`, `description`, `image`, `images`, `min_bid_amount`, `shipping_fee`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Accient Dual Dragons', 1, 3, 'USD', '2021-01-18 04:07:41', '2021-02-18 04:07:41', 'Accient Dual Dragons', '/upload/images/1.jpg', '[\"\\/upload\\/images\\/1.jpg\",\"\\/upload\\/images\\/1.jpg\"]', 1500, 200, 1, '2021-01-18 04:07:41', NULL),
(2, 'Accient Dual Dragons (1955)', 1, 3, 'USD', '2021-01-18 04:07:45', '2021-02-18 04:07:45', 'Accient Dual Dragons', '/upload/images/1.jpg', '[\"\\/upload\\/images\\/1.jpg\",\"\\/upload\\/images\\/1.jpg\"]', 1200, 200, 1, '2021-01-18 04:07:45', '2021-01-18 04:44:33'),
(3, 'Accient Dual Dragons  (1952)', 1, 3, 'USD', '2021-01-18 04:07:46', '2021-02-18 04:07:46', 'Accient Dual Dragons', '/upload/images/1.jpg', '[\"\\/upload\\/images\\/1.jpg\",\"\\/upload\\/images\\/1.jpg\"]', 1500, 200, 1, '2021-01-18 04:07:46', '2021-01-18 04:08:22'),
(4, 'Accient Dual Dragons (1923)', 1, 3, 'USD', '2021-01-18 04:07:41', '2021-02-18 04:07:41', 'Accient Dual Dragons', '/upload/images/1.jpg', '[\"\\/upload\\/images\\/1.jpg\",\"\\/upload\\/images\\/1.jpg\"]', 1500, 200, 1, '2021-01-18 04:07:41', NULL),
(5, 'Accient Dual Dragons (1855)', 1, 3, 'USD', '2021-01-18 04:07:45', '2021-02-18 04:07:45', 'Accient Dual Dragons', '/upload/images/1.jpg', '[\"\\/upload\\/images\\/1.jpg\",\"\\/upload\\/images\\/1.jpg\"]', 1500, 200, 1, '2021-01-18 04:07:45', '2021-01-18 04:08:10'),
(6, 'Accient Dual Dragons  (1932)', 1, 3, 'USD', '2021-01-18 04:07:46', '2021-02-18 04:07:46', 'Accient Dual Dragons', '/upload/images/1.jpg', '[\"\\/upload\\/images\\/1.jpg\",\"\\/upload\\/images\\/1.jpg\"]', 2500, 200, 1, '2021-01-18 04:07:46', '2021-01-18 04:44:42'),
(7, 'Dong Son bronze drum (No.537)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-01-30 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 23000, 200, 1, '2021-01-18 05:20:10', NULL),
(8, 'Dong Son bronze drum (No.409)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-02-06 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 20000, 200, 1, '2021-01-18 05:20:10', NULL),
(9, 'Dong Son bronze drum (No.316)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-01-28 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 20000, 200, 1, '2021-01-18 05:20:10', NULL),
(10, 'Dong Son bronze drum (No.414)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-01-28 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 22000, 200, 1, '2021-01-18 05:20:10', NULL),
(11, 'Dong Son bronze drum (No.332)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-02-03 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 20000, 200, 1, '2021-01-18 05:20:10', NULL),
(12, 'Dong Son bronze drum (No.668)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-02-11 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 19000, 200, 1, '2021-01-18 05:20:10', NULL),
(13, 'Dong Son bronze drum (No.617)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-02-06 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 22000, 200, 1, '2021-01-18 05:20:10', NULL),
(14, 'Dong Son bronze drum (No.405)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-02-16 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 19000, 200, 1, '2021-01-18 05:20:10', NULL),
(15, 'Dong Son bronze drum (No.258)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-02-01 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 23000, 200, 1, '2021-01-18 05:20:10', NULL),
(16, 'Dong Son bronze drum (No.259)', 1, 3, 'USD', '2021-01-18 05:20:10', '2021-02-06 05:20:10', 'Dong Son bronze drum in Vietnam', '/upload/images/2.jpg', '[\"\\/upload\\/images\\/2.jpg\",\"\\/upload\\/images\\/2.jpg\"]', 23000, 200, 1, '2021-01-18 05:20:10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `auction_categories`
--

CREATE TABLE `auction_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `auction_categories`
--

INSERT INTO `auction_categories` (`id`, `name`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Antique coins', 'All ancient coins', 1, '2021-01-16 10:07:27', NULL),
(2, 'Antique potteries', 'All antique potteries', 1, '2021-01-16 10:07:27', NULL),
(3, 'Special Antiques', 'All Special Antiques', 1, '2021-01-18 03:20:27', '2021-01-18 03:41:45');

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `auction_id` bigint(20) UNSIGNED NOT NULL,
  `amount` int(11) NOT NULL,
  `is_winner` tinyint(4) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`id`, `user_id`, `auction_id`, `amount`, `is_winner`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1501, 0, '2021-01-19 02:14:51', NULL),
(2, 1, 1, 1502, 0, '2021-01-19 02:26:28', NULL),
(3, 1, 1, 1503, 0, '2021-01-19 02:39:40', NULL),
(4, 1, 1, 1504, 0, '2021-01-19 02:43:22', NULL),
(5, 1, 1, 1505, 0, '2021-01-19 02:43:53', NULL),
(6, 1, 1, 2000, 0, '2021-01-19 02:43:59', NULL),
(7, 1, 1, 5000, 0, '2021-01-19 02:44:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `connection` text COLLATE utf8_unicode_ci NOT NULL,
  `queue` text COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_01_15_050218_create_auctions_table', 1),
(5, '2021_01_15_050227_create_bids_table', 1),
(6, '2021_01_16_064227_create_auction_categories_table', 1),
(7, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(8, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(9, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(10, '2016_06_01_000004_create_oauth_clients_table', 2),
(11, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('602b54bb8df928290e048f17cc34354368c211ff513fef546853211445ec24ececb88c205db4d162', 1, 1, 'AuctionToken', '[]', 0, '2021-01-17 20:57:55', '2021-01-17 20:57:55', '2021-07-18 03:57:54'),
('7c658132f5724a5830d5e6f8ca73738359a08603a2efd559c51ec747e47c05827560899af2432598', 1, 1, 'AuctionToken', '[]', 0, '2021-01-17 21:00:24', '2021-01-17 21:00:24', '2021-07-18 04:00:23'),
('945d55b47d0e9868c3f7acf8eb861893f10537484368e2103cdc24b9b4e2d9248b61b3c6849396ff', 1, 1, 'AuctionToken', '[]', 0, '2021-01-16 02:44:28', '2021-01-16 02:44:28', '2021-07-16 09:44:27'),
('9f65d52610ab74d6fc5d078333b7dd3bdb1fa992da0bf3232e474a49440ed283c35e84a769571b7e', 1, 1, 'AuctionToken', '[]', 0, '2021-01-16 02:15:03', '2021-01-16 02:15:03', '2021-07-16 09:15:03'),
('a04cdcc545cc8f526a0d1a8fbd53fee81f640c3e6f17fb82262623d60d5c81e19af669ae50104051', 1, 1, 'AuctionToken', '[]', 0, '2021-01-16 02:14:08', '2021-01-16 02:14:08', '2021-07-16 09:14:08'),
('ef1e3735d954038ccdb2aceef572d0d74c789b9a3f468da3db3cbb9ce6f9eb1bd3d18932c0d7855b', 1, 1, 'AuctionToken', '[]', 0, '2021-01-16 02:18:31', '2021-01-16 02:18:31', '2021-07-16 09:18:31'),
('fac780e35477e5689e066614862133509c8dfd9bb8baff550f05a09d9fe98ee613cc3ac04f4fb30c', 1, 1, 'AuctionToken', '[]', 0, '2021-01-17 21:01:55', '2021-01-17 21:01:55', '2021-07-18 04:01:55');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Auction Personal Access Client', 'UYmN4pfSsmE2bLu7e3mXGcz0bnocwArHDgBVLPI3', NULL, 'http://localhost', 1, 0, 0, '2021-01-16 01:07:19', '2021-01-16 01:07:19'),
(2, NULL, 'Auction Password Grant Client', 'SJeTvjtlWEmrwhuQ4I5MQ3dYTc5WxutRXp4t5YWH', 'users', 'http://localhost', 0, 1, 0, '2021-01-16 01:07:19', '2021-01-16 01:07:19');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-01-16 01:07:19', '2021-01-16 01:07:19');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `max_bid_amount` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `max_bid_amount`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Nam Nguyen', 'phuongnam@phuongnam.org', NULL, 3002, '$2y$10$TMIndgQu2UbUpXbk3zBjNOH4XF7kdUmg9kC4p7M7JDWEXFyxRE.r2', NULL, '2021-01-16 07:30:49', '2021-01-18 18:45:21'),
(2, 'Scopic Bidder 1', 'bidder1@scopicsoftware.com', NULL, 3000, '$2y$10$OR3BHUK/xjWTHSiPXkxJr.d.RB8bn152LUUFgLAQAap80SggERZem', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(3, 'Scopic Bidder 2', 'bidder2@scopicsoftware.com', NULL, 3000, '$2y$10$ridpIIBSw7k5q6yyuOxrYO6Ie6txaLzHE7A3V9F4VRIcnBsgf4QWG', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(4, 'Scopic Bidder 3', 'bidder3@scopicsoftware.com', NULL, 3000, '$2y$10$4Q/qASgBCLV/t6/7ZI3DWuw7zqNbc7X/hpFEDCEUH.8by6UQ8UqhK', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(5, 'Scopic Bidder 4', 'bidder4@scopicsoftware.com', NULL, 3000, '$2y$10$Cfy5Tm6FDO5OrT7B2pzXQ.4wCjwtivNqymcveQ36vwsW8YCSdNygq', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(6, 'Scopic Bidder 5', 'bidder5@scopicsoftware.com', NULL, 3000, '$2y$10$SBa.OnMXkAFJ.0RV.JqzP.vkRmvWYVXA7u3izawOKMQQwltb30XHu', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(7, 'Scopic Bidder 6', 'bidder6@scopicsoftware.com', NULL, 3000, '$2y$10$ejvprjNqDCpxYupOANZ9FOrWX/6xQ5nDLEhDZI/Gui9Skzd.tRNTe', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(8, 'Scopic Bidder 7', 'bidder7@scopicsoftware.com', NULL, 3000, '$2y$10$vHk/OwYDq6Z1p1E86bIzN.RhG3D23/tW8mOY8P/4g4c0hkmQASDNK', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(9, 'Scopic Bidder 8', 'bidder8@scopicsoftware.com', NULL, 3000, '$2y$10$ahp6KzkGL1f59V6Z7OfS/ONEN7Raik1Py2HvnfvK2.JYhY0IZGQmG', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(10, 'Scopic Bidder 9', 'bidder9@scopicsoftware.com', NULL, 3000, '$2y$10$oa0WL29GEizC6UXmeW0OA.CbPO5iNVqChOce4U7ASvu2xd1mk3PFC', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43'),
(11, 'Scopic Bidder 10', 'bidder10@scopicsoftware.com', NULL, 3000, '$2y$10$8OXtRSUeaDkv5BZ8LhnSyu9Z.JRivJAd9GQDFuWTkGWJWmAb7IHfy', NULL, '2021-01-16 07:30:49', '2021-01-19 01:07:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auctions`
--
ALTER TABLE `auctions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auction_categories`
--
ALTER TABLE `auction_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auctions`
--
ALTER TABLE `auctions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `auction_categories`
--
ALTER TABLE `auction_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
