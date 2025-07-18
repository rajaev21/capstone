-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 02:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fabrik`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`) VALUES
(9, 'dannon'),
(12, 'lucky hanna'),
(40, 'test brand'),
(14, 'thanos');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `color_id` int(11) NOT NULL,
  `color_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`color_id`, `color_name`) VALUES
(43, 'black'),
(40, 'blue'),
(41, 'green'),
(45, 'white');

-- --------------------------------------------------------

--
-- Table structure for table `customer_detail`
--

CREATE TABLE `customer_detail` (
  `cd_id` int(50) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `gmail` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_detail`
--

INSERT INTO `customer_detail` (`cd_id`, `first_name`, `last_name`, `phone_number`, `facebook`, `gmail`, `address`) VALUES
(1, 'john', 'doe', '9183427561', '', '', ''),
(3, 'carter', 'orr', '9952738490', '', '', ''),
(4, 'art', 'sampson', '9193278540', '', '', 'Street'),
(5, 'Katelyn', 'Jacobs', '9076581234', '', '', ''),
(6, 'Arun', 'bowers', '9453789210', '', '', 'asdf'),
(7, 'kyran', 'krueger', '9124567389', '', '', ''),
(8, 'anastasia', 'cramer', '9987654321', '', '', 'asdf'),
(9, 'Khalid', 'Sanches', '9368217456', '', '', ''),
(10, 'Teresa', 'Schneider', '9217483920', '', '', ''),
(11, 'Leena', 'Bush', '9562347812', '', '', ''),
(12, 'Jennie', 'Phillips', '9172345890', '', '', ''),
(13, 'Michelle', 'Lindsey', '9091234567', '', '', ''),
(14, 'jasper', 'reyes', '9278435160', '', '', ''),
(15, 'elena', 'navaro', '9451238976', '', '', ''),
(21, 'test', 'test', '9284567321', '', '', ''),
(22, 'test', 'test', '9563427891', '', '', ''),
(37, 'test', 'customer', '9565236969', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `design`
--

CREATE TABLE `design` (
  `design_id` int(11) NOT NULL,
  `design_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `inventory_id` int(11) NOT NULL,
  `brand` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `qty` int(20) DEFAULT NULL,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`inventory_id`, `brand`, `type`, `color`, `size`, `qty`, `price`) VALUES
(31, 12, 10, 43, 13, 32, 500),
(32, 14, 10, 41, 34, 30, 50),
(37, 40, 9, 43, 11, 25, 0),
(38, 40, 9, 43, 34, 50, 0),
(39, 40, 9, 40, 34, 323, 0),
(40, 40, 13, 43, 34, 110, 0),
(44, 9, 9, 43, 11, 60, 500);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `inventory_id` int(11) DEFAULT NULL,
  `new_value` int(11) DEFAULT NULL,
  `old_value` int(11) DEFAULT NULL,
  `timestamp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `detail`, `inventory_id`, `new_value`, `old_value`, `timestamp`) VALUES
(1, 'Added Quantity', 40, 20, 10, '1747154991'),
(2, 'Add Quantity', 35, 140, 130, '1747157273'),
(3, 'Add Quantity', 35, 150, 140, '1747157387'),
(6, 'Add Quantity', 35, 160, 150, '1747157918'),
(7, 'Add Inventory', 44, 0, 0, '1747158054'),
(8, '9', 9, 43, 11, '10'),
(9, 'Add Quantity', 44, 100, 0, '1747180307');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `brand` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `design_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `brand`, `type`, `color`, `size`, `quantity`, `transaction_id`, `design_id`) VALUES
(1, 9, 9, 43, 11, 88, 39, NULL),
(2, 12, 10, 43, 11, 65, 40, NULL),
(3, 12, 9, 41, 11, 76, 40, NULL),
(4, 9, 10, 43, 12, 65, 40, NULL),
(5, 9, 9, 43, 11, 10, 41, NULL),
(6, 9, 9, 43, 11, 10, 42, NULL),
(7, 9, 9, 43, 11, 30, 43, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `print`
--

CREATE TABLE `print` (
  `print_id` int(11) NOT NULL,
  `print_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `print`
--

INSERT INTO `print` (`print_id`, `print_name`) VALUES
(1, 'dtf'),
(3, 'embroidery'),
(2, 'sublimation');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(50) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'super_admin'),
(2, 'admin'),
(3, 'employee');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `settings_id` int(11) NOT NULL,
  `brand` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `size_id` int(11) NOT NULL,
  `size_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`size_id`, `size_name`) VALUES
(11, '10'),
(12, '12'),
(13, '14'),
(34, 's'),
(39, 'm');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`status_id`, `status_name`) VALUES
(1, 'pending'),
(2, 'production'),
(3, 'finish'),
(4, 'cancel');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_detail`
--

CREATE TABLE `transaction_detail` (
  `td_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaction_detail`
--

INSERT INTO `transaction_detail` (`td_id`, `customer_id`, `status`, `user_id`, `deadline`, `note`, `created_at`, `updated_at`) VALUES
(28, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:08:59', '2025-05-13 22:08:59'),
(29, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:09:24', '2025-05-13 22:09:24'),
(30, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:09:39', '2025-05-13 22:09:39'),
(31, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:09:41', '2025-05-13 22:09:41'),
(32, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:15:54', '2025-05-13 22:15:54'),
(33, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:15:59', '2025-05-13 22:15:59'),
(34, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:16:55', '2025-05-13 22:16:55'),
(35, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:18:42', '2025-05-13 22:18:42'),
(36, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:19:50', '2025-05-13 22:19:50'),
(37, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:19:54', '2025-05-13 22:19:54'),
(38, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:20:18', '2025-05-13 22:20:18'),
(39, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:20:29', '2025-05-13 22:20:29'),
(40, 37, 1, 4, '2025-05-29', 'testnote', '2025-05-13 22:21:07', '2025-05-13 22:21:07'),
(41, 3, 1, 4, '2025-05-22', 'test', '2025-05-13 23:50:28', '2025-05-13 23:50:28'),
(42, 3, 1, 4, '2025-05-30', '', '2025-05-13 23:54:28', '2025-05-13 23:54:28'),
(43, 3, 1, 4, '2025-05-23', 'test note', '2025-05-14 00:09:10', '2025-05-14 00:09:10');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`type_id`, `type_name`) VALUES
(9, 'shirt'),
(10, 'poloshirt'),
(13, 'jacket');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `number`, `role`, `firstname`, `lastname`) VALUES
(1, 'testusername', 'testpassword', '09639485232', 3, 'admin', 'admin'),
(4, 'admin', '$2y$10$QqhKha1.W1rNneDeseZ1BO6CR6VjVdE0UxdoTEFi8kJt.E5mq5o86', '09630383642', 1, 'John Rajeav', 'Berame'),
(10, 'brendan', '$2y$10$qlcsZtLoUh/rb54gs5iw8.VCL8n/6mmG40kCA/fZrArFkcCu5IdGu', '123', 3, 'Brendan', 'Mullen'),
(11, 'Chanel', '$2y$10$Y.EcfOUpPY.TW5ttTYJyZelkVq4tsO.TOhHEtktqch6bQaHwItpUe', '123', 3, 'Chanel', 'Case'),
(12, 'Roxanne', '$2y$10$9hCGtn4sWgtSE4x.IkE6zegP1gKl5j9iT3zL0gCUlHBSIJ7Nlwnam', '123', 3, 'Roxanne', 'Jarvis'),
(13, 'Sumaiya', '$2y$10$IVoT0EvkOkupjB7XbH3omO7.YEiS38NltNUPAGZHM8U06oGxF/1hu', '123', 3, 'Sumaiya', 'Reynolds'),
(14, 'Abdulrahman', '$2y$10$awr5JIz0c72NnM2GoKNapu7BPH1Q.u5rPvgJsvQwy.jhi/nGAhHf6', '123', 3, 'Abdulrahman', 'Barrera'),
(15, 'Rehan', '$2y$10$xPK1U2HAy8ZFwXD//LoaSeN8Fox3Lqs6WtFJdNsJcofjgDbCCPBFS', '21', 3, 'Rehan', 'Baird'),
(16, 'Osian', '$2y$10$i10du5B/hTJq6GQbeyYrR./yPRbzBQrNmNFmRhXC16R0m4dXPz.eK', '123', 3, 'Osian', 'Hendrix'),
(17, 'Aliyah', '$2y$10$DtC0vZSQPrR2/GYr9Zi/JOrVGL01vYYSGcAM23ggcG8tednqEfYE6', '9630383642', 3, 'Aliyah', 'Bruce'),
(18, 'Fatima', '$2y$10$.Ze5NZrv.NA9cIqk4CAt2O1ybmW5m61gAtSNsl7mH3GjAa0D9yZj.', '9630383642', 3, 'Fatima', 'Hatfield');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`),
  ADD UNIQUE KEY `brand_name` (`brand_name`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`color_id`),
  ADD UNIQUE KEY `color_name` (`color_name`);

--
-- Indexes for table `customer_detail`
--
ALTER TABLE `customer_detail`
  ADD PRIMARY KEY (`cd_id`);

--
-- Indexes for table `design`
--
ALTER TABLE `design`
  ADD PRIMARY KEY (`design_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`inventory_id`),
  ADD KEY `brand` (`brand`),
  ADD KEY `type` (`type`),
  ADD KEY `color` (`color`),
  ADD KEY `size` (`size`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventory_id` (`inventory_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `brand` (`brand`),
  ADD KEY `type` (`type`),
  ADD KEY `color` (`color`),
  ADD KEY `size` (`size`);

--
-- Indexes for table `print`
--
ALTER TABLE `print`
  ADD PRIMARY KEY (`print_id`),
  ADD UNIQUE KEY `print_name` (`print_name`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`settings_id`),
  ADD KEY `brand` (`brand`),
  ADD KEY `color` (`color`),
  ADD KEY `size` (`size`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`size_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD PRIMARY KEY (`td_id`),
  ADD KEY `cd_id` (`customer_id`),
  ADD KEY `status_id` (`status`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `customer_detail`
--
ALTER TABLE `customer_detail`
  MODIFY `cd_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `design`
--
ALTER TABLE `design`
  MODIFY `design_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `print`
--
ALTER TABLE `print`
  MODIFY `print_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `settings_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  MODIFY `td_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brand` (`brand_id`),
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`type`) REFERENCES `type` (`type_id`),
  ADD CONSTRAINT `inventory_ibfk_3` FOREIGN KEY (`color`) REFERENCES `color` (`color_id`),
  ADD CONSTRAINT `inventory_ibfk_4` FOREIGN KEY (`size`) REFERENCES `size` (`size_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brand` (`brand_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`type`) REFERENCES `type` (`type_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`color`) REFERENCES `color` (`color_id`),
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`size`) REFERENCES `size` (`size_id`);

--
-- Constraints for table `settings`
--
ALTER TABLE `settings`
  ADD CONSTRAINT `settings_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brand` (`brand_id`),
  ADD CONSTRAINT `settings_ibfk_2` FOREIGN KEY (`color`) REFERENCES `color` (`color_id`),
  ADD CONSTRAINT `settings_ibfk_3` FOREIGN KEY (`size`) REFERENCES `size` (`size_id`);

--
-- Constraints for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD CONSTRAINT `transaction_detail_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_detail` (`cd_id`),
  ADD CONSTRAINT `transaction_detail_ibfk_2` FOREIGN KEY (`status`) REFERENCES `status` (`status_id`),
  ADD CONSTRAINT `transaction_detail_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`role_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
