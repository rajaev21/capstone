-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2025 at 08:55 PM
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
(78, 'a'),
(52, 'brand x'),
(9, 'dannon'),
(12, 'lucky hanna'),
(40, 'test brand'),
(42, 'testbrands'),
(82, 'thanos'),
(83, 'x');

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
(40, 'blue', '#3944bc'),
(41, 'green', '#3cb043'),
(43, 'black', '#000000'),
(45, 'white', '#ffffff'),
(46, 'new color', '#C1CC96'),
(47, 'laso', '#cc96a6'),
(50, 'asd', '#653e3e'),
(52, '123', '#714b4b'),
(53, '23', '#d24141'),
(55, 's', '#ad7b7b'),
(56, 'mink', '#b0436c'),
(57, 'orange', '#d18942'),
(58, 'x', '#592222'),
(59, 'sf', '#813232');

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
(0, '', '', '', ''),
(1, 'john', 'doe', '09183427561', ''),
(3, 'carter', 'orr', '09952738490', ''),
(4, 'art', 'sampson', '09193278540', 'Street'),
(5, 'Katelyn', 'Jacobs', '09076581234', ''),
(6, 'Arun', 'bowers', '09453789210', 'asdf'),
(7, 'kyran', 'krueger', '09124567389', ''),
(8, 'anastasia', 'cramer', '09987654321', 'asdf'),
(9, 'Khalid', 'Sanches', '9368217456', ''),
(10, 'Teresa', 'Schneider', '9217483920', ''),
(11, 'Leena', 'Bush', '9562347812', ''),
(12, 'Jennie', 'Phillips', '9172345890', ''),
(13, 'Michelle', 'Lindsey', '9091234567', ''),
(14, 'jasper', 'reyes', '9278435160', ''),
(15, 'elena', 'navaro', '9451238976', ''),
(21, 'test', '', '9284567321', ''),
(22, 'test', 'test', '9563427891', ''),
(37, 'test', 'customer', '9565236969', ''),
(38, 'first', 'name', '09630383642', ''),
(39, 'test', 'name', '09630383642', ''),
(40, 'test', 'customer', '09630383642', ''),
(41, 'test', 'customer', '09630383642', ''),
(42, 'test', 'customer', '09630383642', ''),
(43, 'test', 'customer', '09630383642', ''),
(44, 'test', 'customer', '09630383642', ''),
(45, 'test', 'customer', '09630383642', ''),
(46, 'asd', 'asd', '09630383642', 'asdf'),
(47, 'asd', 'asd', '09630383642', 'asdf'),
(48, 'asd', 'asd', '09630383642', 'asdf'),
(49, 'asd', 'asd', '09630383642', 'asdf'),
(50, 'asd', 'asd', '09630383642', 'asdf'),
(51, 'asd', 'asd', '09630383642', 'asdf'),
(52, 'asd', 'asd', '09630383642', 'asdf'),
(53, 'asd', 'asd', '09630383642', 'asdf'),
(54, 'asd', 'asd', '09630383642', 'asdf'),
(55, 'asd', 'asd', '09630383642', 'asdf'),
(56, 'asd', 'asd', '09630383642', 'asdf'),
(57, 'asd', 'asd', '09630383642', 'asdf'),
(58, 'asd', 'asd', '09630383642', 'asdf'),
(59, 'asd', 'asd', '09630383642', 'asdf'),
(60, 'asd', 'asd', '09630383642', 'asdf'),
(61, 'asd', 'asd', '09630383642', 'asdf'),
(62, 'asd', 'asd', '09630383642', 'asdf'),
(63, 'asd', 'asd', '09630383642', 'asdf'),
(64, 'asd', 'asd', '09630383642', 'asdf'),
(65, 'asd', 'asd', '09630383642', 'asdf'),
(66, 'asd', 'asd', '09630383642', 'asdf'),
(67, 'asd', 'asd', '09630383642', 'asdf'),
(68, 'asd', 'asd', '09630383642', 'asdf'),
(69, 'asd', 'asd', '09630383642', 'asdf'),
(70, 'asd', 'asd', '09630383642', 'asdf'),
(71, 'asd', 'asd', '09630383642', 'asdf'),
(72, 'asd', 'asd', '09630383642', 'asdf'),
(73, 'asd', 'asd', '09630383642', 'asdf'),
(74, 'asd', 'asd', '09630383642', 'asdf'),
(75, 'asd', 'asd', '09630383642', 'asdf'),
(76, 'asd', 'asd', '09630383642', 'asdf'),
(77, 'asd', 'asd', '09630383642', 'asdf'),
(78, 'asd', 'asd', '09630383642', 'asdf'),
(79, 'test', 'customer', '123', ''),
(80, 'new ', 'cus', '1232', ''),
(81, 'test', 'new', '123', ''),
(82, 'asd', 'asd', '09630383642', 'asdf'),
(83, 'mario', 'calusay', '09686552664', ''),
(84, 'jasmar', 'quintar', '09515573059', ''),
(85, 'Isaac', 'cajilig', '09218012606', ''),
(86, 'asd', 'asd', '09630383642', 'asdf'),
(87, 'asd', 'asd', '09630383642', 'asdf'),
(88, 'aug', '20', '09630383642', 'asdf'),
(89, 'aug 12', 'customer', '09630383642', ''),
(90, 'firstname', 'lastname', '09630383642', ''),
(91, 'testname', 'testlastname', '09630383642', ''),
(92, 'Mario ', 'Calusay', '09686552664', ''),
(93, 'x', 'x', '1', ''),
(94, 'x', '2', '2', ''),
(95, 'test', 'test', '09504523658', ''),
(96, 'firstname', 'lastname', '09630383642', ''),
(97, 'test', 'lastname', '09630383642', ''),
(98, 'firstname', 'name', '09630383641', ''),
(99, 'firstname', 'customer', '09630383642', ''),
(100, 'firstname', 'customer', '09630383642', ''),
(102, '', '', '', ''),
(103, '', '', '', ''),
(104, 'firstname', '', '09630383642', ''),
(105, '', '', '', ''),
(106, '', '', '', ''),
(107, '', '', '', ''),
(108, '', '', '', ''),
(109, '', '', '', ''),
(111, 'test', '', '09630383642', ''),
(112, 'test', '', '9630383642', ''),
(113, 'asd', '', '10245214141', ''),
(114, 'asd', '', '10245214142', ''),
(115, 'asd', '', '10245214154', ''),
(116, 'asd', '', '10245214125', ''),
(117, 'asd', '', '10245214188', ''),
(118, 'asd', '', '9630387485', ''),
(119, 'asd', '', '9630387485', ''),
(120, 'asd', '', '9630387485', ''),
(121, 'asd', '', '9630387485', ''),
(122, 'asd', '', '9630383284', ''),
(123, 'asd', '', '9630383284', ''),
(124, 'asd', '', '9630383284', ''),
(125, 'asd', '', '9630383284', ''),
(126, 'asd', '', '9630383284', ''),
(127, 'asd', '', '9630383284', ''),
(128, 'asd', '', '09630383284', '');

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
  `qty` int(20) DEFAULT 0,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`inventory_id`, `brand`, `type`, `color`, `size`, `qty`, `price`) VALUES
(31, 12, 10, 43, 13, 5464, 500),
(37, 40, 9, 43, 11, 0, 50),
(38, 40, 9, 43, 34, 101, 500),
(39, 40, 9, 40, 34, 139, 400),
(44, 9, 9, 43, 11, 991, 300),
(52, 12, 10, 40, 12, 1275, 55),
(53, 12, 10, 43, 34, 109751, 75),
(56, 42, 9, 41, 11, 60, 52),
(57, 42, 9, 46, 11, 0, 122),
(58, 42, 9, 45, 11, 0, 11),
(62, 9, 9, 47, 13, 166, 222),
(63, 9, 9, 45, 11, 61, 1),
(64, 9, 9, 43, 13, 760, 100),
(65, 9, 9, 45, 13, 61, 1),
(110, 9, 9, NULL, NULL, 0, 0),
(133, 12, 9, NULL, NULL, 0, 0),
(171, 52, 14, 41, NULL, 0, 0),
(187, 9, 9, 47, 12, 0, 50),
(188, 52, 14, 41, 34, 0, 0),
(189, 12, 10, 56, 34, 52, 200),
(190, 52, 14, 41, 13, 0, 0),
(191, 52, 14, 43, NULL, 0, 0),
(196, 52, 14, 43, 11, 3719, 100),
(198, 52, 14, 43, 13, 0, 50),
(220, 52, 14, 43, 34, 0, 0),
(221, 52, 14, 43, 40, 0, 0),
(233, 52, 14, 46, NULL, 0, 0),
(240, 78, 1054, NULL, NULL, 0, 0),
(241, 78, 1054, 58, NULL, 0, 0),
(244, 78, 1054, 58, 54, 423, 300),
(245, 78, 1054, 58, 13, 785, 200),
(252, 12, 10, 40, 13, 0, 0),
(269, 82, 9, NULL, NULL, 0, 0),
(270, 82, 9, 41, NULL, 0, 0),
(271, 82, 9, 41, 34, 100, 0),
(272, 83, 9, NULL, NULL, 0, 0),
(273, 83, 9, 41, NULL, 0, 0),
(274, 83, 9, 59, NULL, 0, 0),
(275, 83, 9, 59, 12, 100, 0),
(276, 83, 9, 59, 55, 100, 100);

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

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `detail`, `inventory_id`, `new_value`, `old_value`, `changed_value`, `timestamp`, `remarks`) VALUES
(2050, 'quick order', 52, 1285, 1295, 10, '1757007859', 'quick order no customer details'),
(2051, 'quick order', 53, 109861, 109871, 10, '1757007859', 'quick order no customer details'),
(2052, 'quick order', 31, 5574, 5584, 10, '1757007859', 'quick order no customer details'),
(2053, 'void order', 52, 1295, 1285, 10, '1757007866', 'item voided'),
(2054, 'reorder', 52, 1285, 1295, 10, '1757007881', 'item reorder'),
(2055, 'quick order', 52, 1185, 1285, 100, '1757008043', 'quick order no customer details'),
(2056, 'quick order', 53, 109761, 109861, 100, '1757008043', 'quick order no customer details'),
(2057, 'quick order', 31, 5474, 5574, 100, '1757008043', 'quick order no customer details'),
(2058, 'void order', 53, 109861, 109761, 100, '1757008076', 'item voided'),
(2059, 'void order', 52, 1285, 1185, 100, '1757008078', 'item voided'),
(2060, 'void order', 31, 5574, 5474, 100, '1757008249', 'item voided'),
(2061, 'reorder', 52, 1185, 1285, 100, '1757008260', 'item reorder'),
(2062, 'cancel transaction', 52, 1285, 1185, 100, '1757008260', '229 transaction cancelled'),
(2063, 'reorder', 52, 1185, 1285, 100, '1757008269', 'reorder transaction id number 229'),
(2064, 'void order', 52, 1285, 1185, 100, '1757008274', 'item voided'),
(2065, 'reorder', 52, 1185, 1285, 100, '1757008332', 'item reorder'),
(2066, 'cancel transaction', 52, 1285, 1185, 100, '1757008332', '229 transaction cancelled'),
(2067, 'reorder', 52, 1185, 1285, 100, '1757008344', 'reorder transaction id number 229'),
(2068, 'reorder', 53, 109761, 109861, 100, '1757008363', 'item reorder'),
(2069, 'reorder', 31, 5474, 5574, 100, '1757008365', 'item reorder'),
(2070, 'void order', 31, 5574, 5474, 100, '1757008369', 'item voided'),
(2071, 'cancel transaction', 52, 1285, 1185, 100, '1757008373', '229 transaction cancelled'),
(2072, 'cancel transaction', 53, 109861, 109761, 100, '1757008373', '229 transaction cancelled'),
(2073, 'reorder', 52, 1185, 1285, 100, '1757008540', 'reorder transaction id number 229'),
(2074, 'reorder', 53, 109761, 109861, 100, '1757008540', 'reorder transaction id number 229'),
(2075, 'reorder', 31, 5474, 5574, 100, '1757008888', 'item reorder'),
(2076, 'void order', 31, 5574, 5474, 100, '1757008999', 'item voided'),
(2077, 'order expired', 52, 1285, 1185, 100, '1757009055', 'transaction expired'),
(2078, 'order expired', 52, 1385, 1185, 100, '1757009055', 'transaction expired'),
(2079, 'reorder', 52, 1285, 1385, 100, '1757009103', 'reorder transaction id number 229'),
(2080, 'reorder', 31, 5474, 5574, 100, '1757009103', 'reorder transaction id number 229'),
(2081, 'cancel transaction', 52, 1385, 1285, 100, '1757009128', '229 transaction cancelled'),
(2082, 'cancel transaction', 31, 5574, 5474, 100, '1757009128', '229 transaction cancelled'),
(2083, 'reorder', 52, 1285, 1385, 100, '1757009143', 'reorder transaction id number 229'),
(2084, 'reorder', 31, 5474, 5574, 100, '1757009143', 'reorder transaction id number 229'),
(2085, 'cancel transaction', 52, 1385, 1285, 100, '1757009365', '229 transaction cancelled'),
(2086, 'cancel transaction', 53, 109861, 109761, 100, '1757009365', '229 transaction cancelled'),
(2087, 'cancel transaction', 31, 5574, 5474, 100, '1757009365', '229 transaction cancelled'),
(2088, 'reorder', 52, 1285, 1385, 100, '1757009376', 'reorder transaction id number 229'),
(2089, 'reorder', 53, 109761, 109861, 100, '1757009376', 'reorder transaction id number 229'),
(2090, 'reorder', 31, 5474, 5574, 100, '1757009376', 'reorder transaction id number 229'),
(2091, 'transaction order', 52, 1275, 1285, 10, '1757011257', ''),
(2092, 'transaction order', 31, 5464, 5474, 10, '1757011257', ''),
(2093, 'transaction order', 53, 109751, 109761, 10, '1757011257', '');

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
  `total` int(11) DEFAULT 0,
  `design_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `inventory_id`, `quantity`, `transaction_id`, `status`, `total`, `design_name`) VALUES
(274, 52, 10, 228, 3, 1550, ''),
(275, 53, 10, 228, 3, 1750, ''),
(276, 31, 10, 228, 3, 6000, ''),
(277, 52, 100, 229, 3, 15500, ''),
(278, 53, 100, 229, 3, 17500, ''),
(279, 31, 100, 229, 3, 60000, ''),
(280, 52, 10, 230, 2, 1550, ''),
(281, 31, 10, 230, 2, 6000, ''),
(282, 53, 10, 230, 2, 1750, '');

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
(40, 'new size'),
(52, 'large'),
(54, 'a'),
(55, '100');

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
  `print_price` int(255) NOT NULL,
  `subtotal` int(255) NOT NULL,
  `discount` int(255) NOT NULL,
  `grand_total` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaction_detail`
--

INSERT INTO `transaction_detail` (`td_id`, `customer_id`, `status`, `user_id`, `deadline`, `note`, `order_date`, `print_price`, `subtotal`, `discount`, `grand_total`) VALUES
(228, 0, 3, 4, '1757001600', 'quick order no customer details', '1757007859', 100, 9300, 0, 9300),
(229, 0, 3, 4, '1757030400', 'quick order no customer details', '1757008043', 100, 60000, 10000, 83000),
(230, 3, 1, 4, '1757606400', '', '1757011257', 100, 9300, 500, 8800);

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
(13, 'jacket'),
(14, 'new type'),
(1054, 'x');

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
(18, 'Fatima', '$2y$10$.Ze5NZrv.NA9cIqk4CAt2O1ybmW5m61gAtSNsl7mH3GjAa0D9yZj.', '9630383642', 3, 'Fatima', 'Hatfield'),
(19, 'user', '$2y$10$/YVlvpr1iBYaH0Z7RP/paOK23/GxeecyUhGBp3fbQMgRksMSGmJYK', '9630383642', 3, 'employee', '1'),
(20, 'usertesting', '$2y$10$6/KlIb6I57V7/RPteeTUMuzy6MfKQpT7Ec3rAEG8bLIW2wC6JeyWe', '9630383642', 3, 'aug', 'thirteen');

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
  ADD KEY `orders_ibfk_1` (`inventory_id`);

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
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `customer_detail`
--
ALTER TABLE `customer_detail`
  MODIFY `cd_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=277;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2094;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=283;

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
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  MODIFY `td_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=231;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1055;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
  ADD CONSTRAINT `fk_status` FOREIGN KEY (`status`) REFERENCES `status` (`status_id`),
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`inventory_id`);

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
