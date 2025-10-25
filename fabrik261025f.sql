-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2025 at 07:53 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `color_id` int(11) NOT NULL,
  `color_name` varchar(50) NOT NULL,
  `hex` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`color_id`, `color_name`, `hex`) VALUES
(1, 'white', '#ffffff'),
(2, 'light yellow', '#fdfbb7'),
(3, 'yellow', '#fef44f'),
(4, 'gold', '#feb52b'),
(5, 'orange', '#f68920'),
(6, 'mandarin', '#eb6a29'),
(7, 'acid pink', '#f7bcd2'),
(8, 'laso', '#f3b1cd'),
(9, 'peach', '#f4979f'),
(10, 'red', '#ed1b24'),
(11, 'maroon', '#790102'),
(12, 'rose red', '#d01e50'),
(13, 'bright fuchsia', '#e7178a'),
(14, 'purple', '#a865aa'),
(15, 'magenta', '#62035f'),
(16, 'violet', '#450e82'),
(17, 'pulis', '#7bb0dc'),
(18, 'light blue', '#8dcff0'),
(19, 'teal', '#1490ae'),
(20, 'dagat', '#123f68'),
(21, 'royal blue', '#2b286f'),
(22, 'navy blue', '#0c1b44'),
(23, 'pool green', '#39a5a4'),
(24, 'apple green', '#6caf62'),
(25, 'batis', '#394748'),
(26, 'fatigue', '#474743'),
(27, 'dahon', '#7eb844'),
(28, 'emerald green', '#21624c'),
(29, 'black', '#040809'),
(30, 'gray', '#474747'),
(31, 'pilak', '#7c7e7b'),
(32, 'nomad', '#cab3a3'),
(33, 'incense', '#cab355'),
(34, 'cinnamon', '#be7b52'),
(35, 'brown', '#603232'),
(36, 'mustasa', '#b37221');

-- --------------------------------------------------------

--
-- Table structure for table `customer_detail`
--

CREATE TABLE `customer_detail` (
  `cd_id` int(50) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_detail`
--

INSERT INTO `customer_detail` (`cd_id`, `first_name`, `last_name`, `phone_number`, `address`) VALUES
(0, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `inventory_id` int(11) NOT NULL,
  `brand` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `color` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `qty` int(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `changed_value` int(11) NOT NULL,
  `timestamp` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `inventory_id` int(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `price` int(11) NOT NULL DEFAULT 0,
  `total` int(11) DEFAULT 0,
  `design_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `payment` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'xs'),
(2, 's'),
(3, 'm'),
(4, 'l'),
(5, 'xl'),
(6, '2xl'),
(7, '3xl'),
(8, '4xl'),
(9, '5xl'),
(10, 'xxx');

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
(2, 'ongoing'),
(3, 'finished'),
(4, 'voided'),
(5, 'expired');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_detail`
--

CREATE TABLE `transaction_detail` (
  `td_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `deadline` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_date` varchar(255) DEFAULT NULL,
  `subtotal` int(255) NOT NULL,
  `discount` int(255) NOT NULL,
  `grand_total` int(250) NOT NULL,
  `last_updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(4, 'admin', '$2y$10$QqhKha1.W1rNneDeseZ1BO6CR6VjVdE0UxdoTEFi8kJt.E5mq5o86', '09630383642', 1, 'John Rajeav', 'Berame');

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
  ADD KEY `fk_status` (`status`),
  ADD KEY `orders_ibfk_1` (`inventory_id`),
  ADD KEY `transaction` (`transaction_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transaction_detail_ibfk_1` (`transaction_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

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
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `customer_detail`
--
ALTER TABLE `customer_detail`
  MODIFY `cd_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  MODIFY `td_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`brand_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `color` FOREIGN KEY (`color`) REFERENCES `color` (`color_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `size` FOREIGN KEY (`size`) REFERENCES `size` (`size_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `type` FOREIGN KEY (`type`) REFERENCES `type` (`type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `inventory` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`inventory_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `status` FOREIGN KEY (`status`) REFERENCES `status` (`status_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction` FOREIGN KEY (`transaction_id`) REFERENCES `transaction_detail` (`td_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `transaction_detail_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction_detail` (`td_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD CONSTRAINT `customer` FOREIGN KEY (`customer_id`) REFERENCES `customer_detail` (`cd_id`),
  ADD CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`role_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
