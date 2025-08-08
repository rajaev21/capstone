-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2025 at 08:40 AM
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
(41, 'new brand'),
(40, 'test brand'),
(42, 'testbrands'),
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
(46, 'new color'),
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
(37, 'test', 'customer', '9565236969', '', '', ''),
(38, 'first', 'name', '09630383642', '', '', ''),
(39, 'test', 'name', '09630383642', '', '', ''),
(40, 'test', 'customer', '09630383642', '', '', ''),
(41, 'test', 'customer', '09630383642', '', '', ''),
(42, 'test', 'customer', '09630383642', '', '', ''),
(43, 'test', 'customer', '09630383642', '', '', ''),
(44, 'test', 'customer', '09630383642', '', '', ''),
(45, 'test', 'customer', '09630383642', '', '', ''),
(46, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(47, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(48, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(49, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(50, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(51, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(52, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(53, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(54, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(55, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(56, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(57, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(58, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(59, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(60, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(61, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(62, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(63, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(64, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(65, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(66, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(67, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(68, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(69, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(70, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(71, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(72, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(73, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(74, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(75, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(76, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(77, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(78, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(79, 'test', 'customer', '123', '', '', ''),
(80, 'new ', 'cus', '1232', '', '', ''),
(81, 'test', 'new', '123', '', '', ''),
(82, 'asd', 'asd', '09630383642', '', '', 'asdf'),
(83, 'mario', 'calusay', '09686552664', '', '', ''),
(84, 'jasmar', 'quintar', '09515573059', '', '', ''),
(85, 'Isaac', 'cajilig', '09218012606', '', '', '');

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
(31, 12, 10, 43, 13, 16, 500),
(32, 14, 10, 41, 34, 30, 50),
(37, 40, 9, 43, 11, 25, 50),
(38, 40, 9, 43, 34, 50, 500),
(39, 40, 9, 40, 34, 323, 400),
(40, 40, 13, 43, 34, 0, 250),
(44, 9, 9, 43, 11, 0, 300),
(47, 14, 9, 43, 11, 1000, 88),
(48, 14, 10, 43, 11, 800, 500),
(49, 14, 10, 40, 12, 1000, 750),
(50, 14, 9, 46, 13, 940, 100),
(51, 14, 10, 41, 40, 1000, 140),
(52, 12, 10, 40, 12, 990, 55),
(53, 12, 10, 43, 34, 984, 75),
(54, 42, 9, 43, 11, 97, 45),
(55, 42, 9, 40, 11, 88, 65),
(56, 42, 9, 41, 11, 100, 52),
(57, 42, 9, 46, 11, 100, 122),
(58, 42, 9, 45, 11, 100, 11),
(59, 41, 9, 43, 12, 1000, 0);

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
(9, 'Add Quantity', 44, 100, 0, '1747180307'),
(10, '9', 9, 43, 11, '1'),
(11, 'Add Inventory', 45, 0, 0, '1748457402'),
(12, '41', 14, 46, 40, '100'),
(13, '41', 14, 46, 40, '100'),
(14, 'Add Inventory', 46, 0, 0, '1748902558'),
(15, 'Add Quantity', 44, 200, 50, '1748902606'),
(16, 'Add Quantity', 44, 350, 200, '1748902648'),
(17, 'Add Quantity', 44, 360, 350, '1748902680'),
(18, 'Add Quantity', 44, 370, 360, '1748902709'),
(19, 'Add Quantity', 44, 380, 370, '1748902728'),
(20, 'Add Quantity', 44, 390, 380, '1748902748'),
(21, 'Add Quantity', 44, 400, 390, '1748902761'),
(22, '40', 13, 43, 34, '110'),
(23, '9', 9, 43, 11, '399'),
(24, '40', 9, 40, 34, '323'),
(25, '40', 9, 43, 34, '50'),
(26, '40', 9, 43, 11, '25'),
(27, 'Add Inventory', 47, 0, 0, '1754419470'),
(28, 'Add Inventory', 48, 0, 0, '1754419470'),
(29, 'Add Inventory', 49, 0, 0, '1754419470'),
(30, 'Add Inventory', 50, 0, 0, '1754419470'),
(31, 'Add Inventory', 51, 0, 0, '1754419470'),
(32, 'Add Inventory', 52, 0, 0, '1754419470'),
(33, 'Add Inventory', 53, 0, 0, '1754419470'),
(34, '12', 10, 43, 34, '1000'),
(35, '12', 10, 40, 12, '1000'),
(36, '14', 10, 41, 40, '1000'),
(37, '14', 10, 41, 40, '1000'),
(38, '14', 9, 46, 13, '1000'),
(39, '14', 10, 40, 12, '1000'),
(40, '14', 10, 43, 11, '1000'),
(41, '14', 9, 43, 11, '1000'),
(42, 'Add Inventory', 54, 0, 0, '1754419600'),
(43, 'Add Inventory', 55, 0, 0, '1754419600'),
(44, 'Add Inventory', 56, 0, 0, '1754419600'),
(45, 'Add Inventory', 57, 0, 0, '1754419600'),
(46, 'Add Inventory', 58, 0, 0, '1754419600'),
(47, '42', 9, 45, 11, '100'),
(48, '42', 9, 46, 11, '100'),
(49, '42', 9, 41, 11, '100'),
(50, '42', 9, 40, 11, '100'),
(51, '42', 9, 43, 11, '100'),
(52, 'Add Inventory', 59, 0, 0, '1754621148');

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
  `status` int(11) DEFAULT NULL,
  `design_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `brand`, `type`, `color`, `size`, `quantity`, `transaction_id`, `status`, `design_id`) VALUES
(1, 9, 9, 43, 11, 88, 39, 1, NULL),
(2, 12, 10, 43, 11, 65, 40, 1, NULL),
(3, 12, 9, 41, 11, 76, 40, 1, NULL),
(4, 9, 10, 43, 12, 65, 40, 1, NULL),
(5, 9, 9, 43, 11, 10, 41, 1, NULL),
(6, 9, 9, 43, 11, 10, 42, 1, NULL),
(7, 9, 9, 43, 11, 30, 43, 1, NULL),
(8, 9, 9, 43, 11, 2, 44, 1, NULL),
(9, 9, 9, 43, 11, 1, 45, 1, NULL),
(10, 9, 9, 43, 11, 1, 50, 1, NULL),
(11, 9, 9, 43, 11, 1, 51, 1, NULL),
(12, 9, 9, 43, 11, 1, 52, 2, NULL),
(13, 9, 9, 43, 11, 1, 53, 3, NULL),
(14, 9, 9, 43, 11, 1, 54, 3, NULL),
(15, 12, 10, 43, 13, 1, 54, 3, NULL),
(20, 12, 10, 43, 13, 1, 73, 1, NULL),
(21, 12, 10, 43, 13, 1, 74, 1, NULL),
(22, 12, 10, 43, 13, 1, 75, 1, NULL),
(23, 9, 9, 43, 11, 1, 80, 1, NULL),
(24, 12, 10, 43, 13, 19, 81, 1, NULL),
(25, 12, 10, 43, 13, 30, 82, 3, NULL),
(26, 12, 10, 43, 13, 1, 83, 3, NULL),
(27, 12, 10, 43, 13, 1, 84, 3, NULL),
(28, 9, 9, 43, 11, 122, 85, 3, NULL),
(29, 40, 13, 43, 34, 32, 85, 3, NULL),
(30, 9, 9, 43, 11, 277, 86, 3, NULL),
(31, 40, 13, 43, 34, 78, 87, 3, NULL),
(32, 12, 10, 43, 13, 2, 88, 3, NULL),
(33, 14, 10, 43, 11, 200, 89, 3, NULL),
(34, 12, 10, 43, 34, 12, 89, 3, NULL),
(35, 42, 9, 40, 11, 12, 90, 3, NULL),
(36, 42, 9, 43, 11, 3, 90, 3, NULL),
(37, 12, 10, 43, 34, 4, 90, 3, NULL),
(38, 12, 10, 40, 12, 10, 91, 3, NULL),
(39, 14, 9, 46, 13, 60, 91, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `placement`
--

CREATE TABLE `placement` (
  `placenemt_id` int(11) NOT NULL,
  `placement` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `placement`
--

INSERT INTO `placement` (`placenemt_id`, `placement`) VALUES
(1, 'Left Chest'),
(2, 'Center Chest'),
(3, 'Full Front'),
(4, 'Back Colar'),
(5, 'Full Back'),
(6, 'Upper Back'),
(7, 'Left sleeve'),
(8, 'Right sleeve'),
(9, 'Custom');

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
(39, 'm'),
(40, 'new size');

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
  `customer_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `deadline` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaction_detail`
--

INSERT INTO `transaction_detail` (`td_id`, `customer_id`, `status`, `user_id`, `deadline`, `note`, `order_date`) VALUES
(28, 37, 5, 4, '1748548004', 'testnote', '1715710539'),
(29, 37, 5, 4, '1748548004', 'testnote', '1747333764'),
(30, 37, 5, 4, '1748548004', 'testnote', '1747212579\n'),
(31, 37, 5, 4, '1748548004', 'testnote', '1747212581'),
(32, 37, 5, 4, '1748548004', 'testnote', '1747212954'),
(33, 37, 5, 4, '1748548004', 'testnote', '1747212959'),
(34, 37, 5, 4, '1748548004', 'testnote', '1747213015'),
(35, 37, 5, 4, '1748548004', 'testnote', '1747213122\n'),
(36, 37, 5, 4, '1748548004', 'testnote', '1747213190'),
(37, 37, 5, 4, '1748600800 ', 'testnote', '1747213194'),
(38, 37, 5, 4, '1748548004', 'testnote', '1747213218'),
(39, 37, 5, 4, '1748548004', 'testnote', '1747213229'),
(40, 37, 5, 4, '1748548004', 'testnote', '1747213267'),
(41, 3, 5, 4, '1747943204', 'test', '1747218628'),
(42, 3, 5, 4, '1748600800 ', '', '1747218868'),
(43, 3, 5, 4, '1748029604', 'test note', '1747219750'),
(44, 38, 5, 4, '1748600800 ', '', '1748051641'),
(45, 39, 5, 4, '1748600800 ', '', '1748052859'),
(46, 40, 5, 4, '1748600800 ', '', '1748053661'),
(47, 41, 5, 4, '1748600800 ', '', '1748053714'),
(50, 44, 5, 4, '1748116004', '', '1748054035'),
(51, 45, 5, 4, '1748600800', '', '1748054042'),
(52, 46, 5, 4, '1748620800', 'testnote', '1748275242'),
(53, 47, 5, 4, '1748620800', 'testnote', '1748217971'),
(54, 48, 5, 4, '1748620800', '32', '1748372167'),
(82, 76, 3, 4, '1753459200', '', '1752900475'),
(83, 77, 3, 4, '1753459200', '', '1752900975'),
(84, 78, 1, 4, '1753372800', '', '1752901072'),
(85, 79, 3, 4, '1755100800', 'new notes', '1754416359'),
(86, 80, 3, 4, '1755792000', 'new', '1754416456'),
(87, 81, 3, 4, '1755100800', '', '1754417283'),
(88, 82, 3, 4, '1755100800', '', '1754417346'),
(89, 83, 3, 4, '1755187200', '', '1754632153'),
(90, 84, 3, 4, '1755187200', '', '1754632395'),
(91, 85, 3, 4, '1755100800', 'test note ni isaac', '1754632700');

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
(14, 'new type');

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
(19, 'user', '$2y$10$/YVlvpr1iBYaH0Z7RP/paOK23/GxeecyUhGBp3fbQMgRksMSGmJYK', '9630383642', 3, 'employee', '1');

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
  ADD KEY `size` (`size`),
  ADD KEY `fk_status` (`status`);

--
-- Indexes for table `placement`
--
ALTER TABLE `placement`
  ADD PRIMARY KEY (`placenemt_id`);

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
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `customer_detail`
--
ALTER TABLE `customer_detail`
  MODIFY `cd_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `design`
--
ALTER TABLE `design`
  MODIFY `design_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `placement`
--
ALTER TABLE `placement`
  MODIFY `placenemt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  MODIFY `td_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
