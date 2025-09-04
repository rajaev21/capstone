-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2025 at 07:22 AM
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
(14, 'thanos');

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
(58, 'x', '#592222');

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
(1, 'john', 'doe', '9183427561', ''),
(3, 'carter', 'orr', '9952738490', ''),
(4, 'art', 'sampson', '9193278540', 'Street'),
(5, 'Katelyn', 'Jacobs', '9076581234', ''),
(6, 'Arun', 'bowers', '9453789210', 'asdf'),
(7, 'kyran', 'krueger', '9124567389', ''),
(8, 'anastasia', 'cramer', '9987654321', 'asdf'),
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
  `qty` int(20) DEFAULT 0,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`inventory_id`, `brand`, `type`, `color`, `size`, `qty`, `price`) VALUES
(0, NULL, NULL, NULL, NULL, 0, 0),
(31, 12, 10, 43, 13, 134, 500),
(37, 40, 9, 43, 11, 100, 50),
(38, 40, 9, 43, 34, 101, 500),
(39, 40, 9, 40, 34, 139, 400),
(44, 9, 9, 43, 11, 991, 300),
(52, 12, 10, 40, 12, 1825, 55),
(53, 12, 10, 43, 34, 901, 75),
(56, 42, 9, 41, 11, 20, 52),
(57, 42, 9, 46, 11, 0, 122),
(58, 42, 9, 45, 11, 0, 11),
(62, 9, 9, 47, 13, 376, 222),
(63, 9, 9, 45, 11, 61, 1),
(64, 9, 9, 43, 13, 610, 100),
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
(252, 12, 10, 40, 13, 0, 0);

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
(1, 'Added Quantity', 40, 20, 10, 0, '1747154991', ''),
(2, 'Add Quantity', 35, 140, 130, 0, '1747157273', ''),
(3, 'Add Quantity', 35, 150, 140, 0, '1747157387', ''),
(6, 'Add Quantity', 35, 160, 150, 0, '1747157918', ''),
(7, 'Add Inventory', 44, 0, 0, 0, '1747158054', ''),
(8, '9', 9, 43, 11, 0, '10', ''),
(9, 'Add Quantity', 44, 100, 0, 0, '1747180307', ''),
(10, '9', 9, 43, 11, 0, '1', ''),
(11, 'Add Inventory', 45, 0, 0, 0, '1748457402', ''),
(12, '41', 14, 46, 40, 0, '100', ''),
(13, '41', 14, 46, 40, 0, '100', ''),
(14, 'Add Inventory', 46, 0, 0, 0, '1748902558', ''),
(15, 'Add Quantity', 44, 200, 50, 0, '1748902606', ''),
(16, 'Add Quantity', 44, 350, 200, 0, '1748902648', ''),
(17, 'Add Quantity', 44, 360, 350, 0, '1748902680', ''),
(18, 'Add Quantity', 44, 370, 360, 0, '1748902709', ''),
(19, 'Add Quantity', 44, 380, 370, 0, '1748902728', ''),
(20, 'Add Quantity', 44, 390, 380, 0, '1748902748', ''),
(21, 'Add Quantity', 44, 400, 390, 0, '1748902761', ''),
(22, '40', 13, 43, 34, 0, '110', ''),
(23, '9', 9, 43, 11, 0, '399', ''),
(24, '40', 9, 40, 34, 0, '323', ''),
(25, '40', 9, 43, 34, 0, '50', ''),
(26, '40', 9, 43, 11, 0, '25', ''),
(27, 'Add Inventory', 47, 0, 0, 0, '1754419470', ''),
(28, 'Add Inventory', 48, 0, 0, 0, '1754419470', ''),
(29, 'Add Inventory', 49, 0, 0, 0, '1754419470', ''),
(30, 'Add Inventory', 50, 0, 0, 0, '1754419470', ''),
(31, 'Add Inventory', 51, 0, 0, 0, '1754419470', ''),
(32, 'Add Inventory', 52, 0, 0, 0, '1754419470', ''),
(33, 'Add Inventory', 53, 0, 0, 0, '1754419470', ''),
(34, '12', 10, 43, 34, 0, '1000', ''),
(35, '12', 10, 40, 12, 0, '1000', ''),
(36, '14', 10, 41, 40, 0, '1000', ''),
(37, '14', 10, 41, 40, 0, '1000', ''),
(38, '14', 9, 46, 13, 0, '1000', ''),
(39, '14', 10, 40, 12, 0, '1000', ''),
(40, '14', 10, 43, 11, 0, '1000', ''),
(41, '14', 9, 43, 11, 0, '1000', ''),
(42, 'Add Inventory', 54, 0, 0, 0, '1754419600', ''),
(43, 'Add Inventory', 55, 0, 0, 0, '1754419600', ''),
(44, 'Add Inventory', 56, 0, 0, 0, '1754419600', ''),
(45, 'Add Inventory', 57, 0, 0, 0, '1754419600', ''),
(46, 'Add Inventory', 58, 0, 0, 0, '1754419600', ''),
(47, '42', 9, 45, 11, 0, '100', ''),
(48, '42', 9, 46, 11, 0, '100', ''),
(49, '42', 9, 41, 11, 0, '100', ''),
(50, '42', 9, 40, 11, 0, '100', ''),
(51, '42', 9, 43, 11, 0, '100', ''),
(52, 'Add Inventory', 59, 0, 0, 0, '1754621148', ''),
(53, 'Add Inventory', 60, 0, 0, 0, '1754974204', ''),
(54, '14', 14, 45, 40, 0, '1000', ''),
(55, 'Add Inventory', 61, 0, 0, 0, '1755032004', ''),
(56, '12', 9, 43, 12, 0, '500', ''),
(57, '12', 9, 43, 12, 0, '500', ''),
(58, 'Add Inventory', 62, 0, 0, 0, '1755032984', ''),
(59, '9', 13, 46, 13, 0, '100', ''),
(60, '9', 13, 46, 13, 0, '1616', ''),
(61, '9', 13, 46, 13, 0, '1630', ''),
(62, 'Add Inventory', 63, 0, 0, 0, '1755634954', ''),
(63, 'Add Inventory', 64, 0, 0, 0, '1755634954', ''),
(64, 'Add Inventory', 65, 0, 0, 0, '1755634954', ''),
(65, '9', 9, 45, 11, 0, '12', ''),
(66, '9', 9, 43, 13, 0, '12', ''),
(67, '9', 9, 45, 13, 0, '12', ''),
(68, 'quantity added', 244, 1, 1, 2, '1756559996', 'supplier deliver'),
(69, 'quantity added', 244, 224, 222, 2, '1756560037', 'supplier deliver'),
(70, 'quantity added', 249, 10, 0, 10, '1756560225', 'supplier deliver'),
(71, 'quantity added', 248, 1036, 1016, 20, '1756561073', 'direct purchase'),
(72, 'quantity added', 249, 14, 12, 2, '1756565243', 'direct purchase'),
(73, 'quantity added', 249, 236, 14, 222, '1756565246', 'supplier deliver'),
(74, 'return item', 47, 995, 1000, 5, '1756565425', 'guba and deputa'),
(75, 'order', 245, 1, 1, 1, '1756567815', 'x note'),
(76, 'order', 244, 1, 1, 1, '1756567815', 'x note'),
(77, 'order', 62, 1587, 1609, 22, '1756567977', 'xtest'),
(78, 'order', 196, 5, 10, 5, '1756568142', '2321'),
(79, 'order', 62, 1586, 1587, 1, '1756589449', '...'),
(80, 'order', 44, 99, 100, 1, '1756589449', '...'),
(81, 'order', 64, 11, 12, 1, '1756589449', '...'),
(82, 'order', 63, 11, 12, 1, '1756589449', '...'),
(83, 'order', 65, 11, 12, 1, '1756589449', '...'),
(84, 'Void order', 64, 12, 11, 1, '1756590575', 'order was cancelled'),
(85, 'Void order', 62, 1587, 1586, 1, '1756591128', 'order was cancelled'),
(86, 'Void order', 44, 100, 99, 1, '1756591829', 'order was cancelled'),
(87, 'Void order', 44, 99, 100, 1, '1756591833', 'item reorder'),
(88, 'void order', 196, 10, 5, 5, '1756591924', 'order cancel'),
(89, 'reorder', 196, 5, 10, 5, '1756591929', 'item reorder'),
(90, 'order', 52, 989, 990, 1, '1756614400', '3.3'),
(91, 'order', 38, 49, 50, 1, '1756614438', '1'),
(92, 'order', 52, 988, 989, 1, '1756614523', '.23'),
(93, 'order', 62, 1564, 1587, 23, '1756615303', 'additional order to 101'),
(94, 'order', 38, 24, 49, 25, '1756615303', 'additional order to 101'),
(95, 'order', 37, 15, 25, 10, '1756615303', 'additional order to 101'),
(96, 'order', 39, 291, 323, 32, '1756615303', 'additional order to 101'),
(97, 'Add Order', 244, 203, 223, 20, '1756650445', 'additional order to 101'),
(98, 'void order', 38, 49, 24, 25, '1756652414', 'order cancel'),
(99, 'cancel transaction', 196, 65, 60, 5, '1756659109', '101 transaction cancelled'),
(100, 'cancel transaction', 62, 1794, 1771, 23, '1756659109', '101 transaction cancelled'),
(101, 'cancel transaction', 37, 115, 105, 10, '1756659109', '101 transaction cancelled'),
(102, 'cancel transaction', 39, 611, 579, 32, '1756659109', '101 transaction cancelled'),
(103, 'cancel transaction', 244, 403, 383, 20, '1756659109', '101 transaction cancelled'),
(104, 'void order', 244, 423, 403, 20, '1756659150', 'order cancel'),
(105, 'void order', 52, 989, 988, 1, '1756659160', 'order cancel'),
(106, 'cancel transaction', 196, 70, 65, 5, '1756659195', '101 transaction cancelled'),
(107, 'cancel transaction', 62, 1817, 1794, 23, '1756659195', '101 transaction cancelled'),
(108, 'cancel transaction', 37, 125, 115, 10, '1756659195', '101 transaction cancelled'),
(109, 'cancel transaction', 39, 643, 611, 32, '1756659195', '101 transaction cancelled'),
(110, 'Add Order', 52, 988, 989, 1, '1756663635', 'additional order to 104'),
(111, 'Add Order', 31, 15, 16, 1, '1756663635', 'additional order to 104'),
(112, 'Add Order', 53, 983, 984, 1, '1756663635', 'additional order to 104'),
(113, 'Add Order', 50, 939, 940, 1, '1756663635', 'additional order to 104'),
(114, 'Add Order', 47, 994, 995, 1, '1756663635', 'additional order to 104'),
(115, 'Add Order', 248, 1035, 1036, 1, '1756663635', 'additional order to 104'),
(116, 'Add Order', 48, 799, 800, 1, '1756663635', 'additional order to 104'),
(117, 'void order', 52, 989, 988, 1, '1756663793', 'order cancel'),
(118, 'reorder', 52, 988, 989, 1, '1756663799', 'item reorder'),
(119, 'order', 196, 20, 70, 50, '1756671421', 'asdas'),
(120, 'quantity added', 196, 30, 20, 10, '1756681331', 'supplier deliver'),
(121, 'quantity added', 196, 40, 30, 10, '1756681339', 'supplier deliver'),
(122, 'return item', 38, 46, 49, 3, '1756681710', ''),
(123, 'return item', 38, 43, 46, 3, '1756681749', 'okii'),
(124, 'quantity added', 65, 61, 11, 50, '1756681904', 'supplier deliver'),
(125, 'quantity added', 189, 2, 0, 2, '1756682991', 'supplier deliver'),
(126, 'void order', 47, 995, 994, 1, '1756721423', 'order cancel'),
(127, 'void order', 52, 989, 988, 1, '1756721425', 'order cancel'),
(128, 'cancel transaction', 38, 44, 43, 1, '1756721445', '104 transaction cancelled'),
(129, 'cancel transaction', 31, 16, 15, 1, '1756721445', '104 transaction cancelled'),
(130, 'cancel transaction', 53, 984, 983, 1, '1756721445', '104 transaction cancelled'),
(131, 'cancel transaction', 50, 940, 939, 1, '1756721445', '104 transaction cancelled'),
(132, 'cancel transaction', 248, 1036, 1035, 1, '1756721445', '104 transaction cancelled'),
(133, 'cancel transaction', 48, 800, 799, 1, '1756721445', '104 transaction cancelled'),
(134, 'order', 55, 84, 85, 1, '1756731375', ''),
(135, 'order', 196, 39, 40, 1, '1756732195', ''),
(136, 'order', 55, 83, 84, 1, '1756732301', 'test1'),
(137, 'order', 56, 69, 70, 1, '1756732301', 'test1'),
(138, 'order', 55, 82, 83, 1, '1756732772', '...'),
(139, 'order', 56, 68, 69, 1, '1756732772', '...'),
(140, 'order', 55, 81, 82, 1, '1756732928', ''),
(141, 'order', 55, 80, 81, 1, '1756733204', '...'),
(142, 'order', 56, 67, 68, 1, '1756733204', '...'),
(143, 'order', 52, 988, 989, 1, '1756733247', ''),
(144, 'order', 31, 15, 16, 1, '1756733247', ''),
(145, 'order', 53, 982, 983, 1, '1756733247', ''),
(146, 'order', 62, 1806, 1807, 1, '1756734339', ''),
(147, 'order', 53, 981, 982, 1, '1756734379', ''),
(148, 'order', 31, 14, 15, 1, '1756734379', ''),
(149, 'order', 52, 983, 988, 5, '1756734548', ''),
(150, 'order', 55, 79, 80, 1, '1756740238', ''),
(151, 'order', 55, 69, 79, 10, '1756740293', ''),
(152, 'order', 55, 59, 69, 10, '1756740349', ''),
(153, 'order', 55, 49, 59, 10, '1756740697', ''),
(154, 'order', 62, 1805, 1806, 1, '1756740728', ''),
(155, 'order', 62, 1804, 1805, 1, '1756740892', ''),
(156, 'Add Order', 38, 42, 43, 1, '1756741077', 'additional order to 124'),
(157, 'Add Order', 62, 1803, 1804, 1, '1756741099', 'additional order to 124'),
(158, 'order', 55, 48, 49, 1, '1756741180', ''),
(159, 'order', 55, 47, 48, 1, '1756741257', ''),
(160, 'order', 55, 34, 43, 9, '1756742678', ''),
(161, 'order', 62, 1798, 1803, 5, '1756744082', ''),
(162, 'order', 64, 2, 12, 10, '1756744082', ''),
(163, 'order', 44, 94, 99, 5, '1756744082', ''),
(164, 'additional order', 38, 24, 29, 5, '1756744617', 'additional order to 135'),
(165, 'additional order', 38, 19, 24, 5, '1756744664', 'additional order to 135'),
(166, 'direct order', 38, -3, 19, 22, '1756748312', 'shirt only buy no print'),
(167, 'direct order', 38, -33, -3, 30, '1756749487', 'shirt only buy no print'),
(168, 'transaction order', 52, 982, 983, 1, '1756751727', ''),
(169, 'transaction order', 52, 981, 982, 1, '1756751820', ''),
(170, 'transaction order', 57, 65, 70, 5, '1756751950', ''),
(171, 'additional order', 39, 642, 643, 1, '1756752787', 'additional order to 147'),
(172, 'additional order', 47, 994, 995, 1, '1756752787', 'additional order to 147'),
(173, 'additional order', 39, 637, 642, 5, '1756753102', 'additional order to 147'),
(174, 'additional order', 39, 632, 637, 5, '1756753126', 'additional order to 147'),
(175, 'transaction order', 55, 24, 34, 10, '1756753267', ''),
(176, 'quantity added', 255, 100, 0, 100, '1756753335', 'supplier deliver'),
(177, 'quantity added', 189, 52, 2, 50, '1756753377', 'supplier deliver'),
(178, 'quantity added', 64, 52, 2, 50, '1756753389', 'supplier deliver'),
(179, 'quantity added', 63, 61, 11, 50, '1756753400', 'supplier deliver'),
(180, 'quantity added', 38, 67, -33, 100, '1756754048', 'supplier deliver'),
(181, 'shirt only buy no print', 56, 0, 67, 67, '0', '10'),
(182, 'shirt only buy no print', 57, 0, 65, 65, '0', '10'),
(183, 'direct order', 38, 47, 57, 10, '1756800071', 'shirt only buy no print'),
(184, 'additional order', 52, 976, 981, 5, '1756801066', 'additional order to 103'),
(185, 'transaction order', 38, 0, 47, 47, '1756806714', ''),
(186, 'transaction order', 38, -47, 0, 47, '1756807430', ''),
(187, 'transaction order', 38, -94, -47, 47, '1756807438', ''),
(188, 'direct order', 52, 966, 976, 10, '1756808005', 'shirt only buy no print'),
(189, 'transaction order', 39, 622, 632, 10, '1756811236', ''),
(190, 'transaction order', 39, 612, 622, 10, '1756811274', ''),
(191, 'direct order', 39, 602, 612, 10, '1756811282', 'shirt only buy no print'),
(192, 'transaction order', 58, 88, 98, 10, '1756811560', ''),
(193, 'quick order', 58, 78, 88, 10, '1756811589', 'quick order no customer details'),
(194, 'direct order', 58, -22, 78, 100, '1756811600', 'shirt only buy no print'),
(195, 'direct order', 58, 99, 100, 1, '1756811787', 'shirt only buy no print'),
(196, 'direct order', 58, 1, 99, 98, '1756811796', 'shirt only buy no print'),
(197, 'cancel transaction', 39, 612, 612, 10, '1756813492', '155 transaction cancelled'),
(198, 'cancel transaction', 39, 622, 612, 10, '1756813527', '155 transaction cancelled'),
(199, 'void order', 58, 11, 1, 10, '1756813801', 'order cancel'),
(200, 'transaction order', 58, 1, 11, 10, '1756813984', ''),
(201, 'transaction order', 39, 621, 622, 1, '1756814070', ''),
(202, 'quick order', 58, 0, 1, 1, '1756814181', 'quick order no customer details'),
(203, 'quick order', 39, 611, 621, 10, '1756814181', 'quick order no customer details'),
(204, 'quick order', 248, 1026, 1036, 10, '1756814339', 'quick order no customer details'),
(205, 'quick order', 48, 790, 800, 10, '1756814339', 'quick order no customer details'),
(206, 'direct order', 49, 989, 999, 10, '1756814381', 'shirt only buy no print'),
(207, 'reorder', 58, -10, 0, 10, '1756816643', 'item reorder'),
(208, 'quick order', 38, 187, 188, 1, '1756818528', 'quick order no customer details'),
(209, 'quick order', 38, 186, 187, 1, '1756818558', 'quick order no customer details'),
(210, 'quick order', 39, 610, 611, 1, '1756818558', 'quick order no customer details'),
(211, 'quick order', 38, 185, 186, 1, '1756819732', 'quick order no customer details'),
(212, 'quick order', 38, 184, 185, 1, '1756823949', 'quick order no customer details'),
(213, 'direct order', 38, 174, 184, 10, '1756823996', 'shirt only buy no print'),
(214, 'transaction order', 38, 164, 174, 10, '1756824033', ''),
(215, 'quick order', 38, 154, 164, 10, '1756824937', 'quick order no customer details'),
(216, 'quick order', 39, 600, 610, 10, '1756824937', 'quick order no customer details'),
(217, 'quick order', 38, 144, 154, 10, '1756824990', 'quick order no customer details'),
(218, 'quick order', 39, 590, 600, 10, '1756824990', 'quick order no customer details'),
(219, 'quick order', 38, 134, 144, 10, '1756825025', 'quick order no customer details'),
(220, 'quick order', 39, 580, 590, 10, '1756825025', 'quick order no customer details'),
(221, 'quick order', 38, 124, 134, 10, '1756825097', 'quick order no customer details'),
(222, 'quick order', 39, 570, 580, 10, '1756825097', 'quick order no customer details'),
(223, 'order expired', 38, 144, 134, 10, '1756825398', 'transaction expired'),
(224, 'order expired', 38, 134, 124, 10, '1756825398', 'transaction expired'),
(225, 'order expired', 39, 580, 570, 10, '1756825398', 'transaction expired'),
(226, 'order expired', 39, 590, 580, 10, '1756825398', 'transaction expired'),
(227, 'order expired', 38, 154, 144, 10, '1756825398', 'transaction expired'),
(228, 'order expired', 38, 164, 154, 10, '1756825398', 'transaction expired'),
(229, 'order expired', 39, 600, 590, 10, '1756825398', 'transaction expired'),
(230, 'order expired', 39, 610, 600, 10, '1756825398', 'transaction expired'),
(231, 'order expired', 38, 184, 164, 10, '1756825418', 'transaction expired'),
(232, 'order expired', 38, 184, 164, 10, '1756825418', 'transaction expired'),
(233, 'order expired', 39, 620, 610, 10, '1756825418', 'transaction expired'),
(234, 'order expired', 39, 630, 610, 10, '1756825418', 'transaction expired'),
(235, 'order expired', 38, 194, 184, 10, '1756825556', 'transaction expired'),
(236, 'order expired', 39, 640, 630, 10, '1756825556', 'transaction expired'),
(237, 'order expired', 38, 204, 194, 10, '1756825556', 'transaction expired'),
(238, 'order expired', 39, 650, 640, 10, '1756825556', 'transaction expired'),
(239, 'order expired', 38, 214, 204, 10, '1756825557', 'transaction expired'),
(240, 'order expired', 39, 660, 650, 10, '1756825557', 'transaction expired'),
(241, 'order expired', 38, 224, 214, 10, '1756825557', 'transaction expired'),
(242, 'order expired', 39, 670, 660, 10, '1756825557', 'transaction expired'),
(243, 'order expired', 38, 244, 224, 10, '1756825642', 'transaction expired'),
(244, 'order expired', 38, 244, 224, 10, '1756825642', 'transaction expired'),
(245, 'order expired', 39, 690, 670, 10, '1756825642', 'transaction expired'),
(246, 'order expired', 39, 690, 680, 10, '1756825642', 'transaction expired'),
(247, 'order expired', 38, 264, 244, 10, '1756825643', 'transaction expired'),
(248, 'order expired', 38, 264, 244, 10, '1756825643', 'transaction expired'),
(249, 'order expired', 39, 700, 690, 10, '1756825643', 'transaction expired'),
(250, 'order expired', 39, 710, 700, 10, '1756825643', 'transaction expired'),
(251, 'order expired', 38, 284, 264, 10, '1756825644', 'transaction expired'),
(252, 'order expired', 38, 284, 264, 10, '1756825644', 'transaction expired'),
(253, 'order expired', 39, 730, 710, 10, '1756825644', 'transaction expired'),
(254, 'order expired', 39, 730, 720, 10, '1756825644', 'transaction expired'),
(255, 'order expired', 38, 304, 284, 10, '1756825645', 'transaction expired'),
(256, 'order expired', 38, 304, 294, 10, '1756825645', 'transaction expired'),
(257, 'order expired', 39, 750, 730, 10, '1756825645', 'transaction expired'),
(258, 'order expired', 39, 750, 730, 10, '1756825645', 'transaction expired'),
(259, 'order expired', 38, 314, 304, 10, '1756825646', 'transaction expired'),
(260, 'order expired', 39, 760, 750, 10, '1756825646', 'transaction expired'),
(261, 'order expired', 38, 324, 314, 10, '1756825646', 'transaction expired'),
(262, 'order expired', 39, 770, 760, 10, '1756825646', 'transaction expired'),
(263, 'order expired', 38, 334, 324, 10, '1756825725', 'transaction expired'),
(264, 'order expired', 38, 344, 334, 10, '1756825725', 'transaction expired'),
(265, 'order expired', 39, 780, 770, 10, '1756825725', 'transaction expired'),
(266, 'order expired', 39, 790, 780, 10, '1756825725', 'transaction expired'),
(267, 'order expired', 38, 354, 344, 10, '1756825725', 'transaction expired'),
(268, 'order expired', 38, 364, 354, 10, '1756825725', 'transaction expired'),
(269, 'order expired', 39, 800, 790, 10, '1756825725', 'transaction expired'),
(270, 'order expired', 39, 810, 800, 10, '1756825725', 'transaction expired'),
(271, 'order expired', 38, 384, 364, 10, '1756825726', 'transaction expired'),
(272, 'order expired', 38, 384, 374, 10, '1756825726', 'transaction expired'),
(273, 'order expired', 39, 820, 810, 10, '1756825726', 'transaction expired'),
(274, 'order expired', 39, 830, 820, 10, '1756825726', 'transaction expired'),
(275, 'order expired', 38, 394, 384, 10, '1756825727', 'transaction expired'),
(276, 'order expired', 38, 404, 394, 10, '1756825727', 'transaction expired'),
(277, 'order expired', 39, 840, 830, 10, '1756825727', 'transaction expired'),
(278, 'order expired', 39, 850, 840, 10, '1756825727', 'transaction expired'),
(279, 'order expired', 38, 414, 404, 10, '1756825728', 'transaction expired'),
(280, 'order expired', 38, 424, 414, 10, '1756825728', 'transaction expired'),
(281, 'order expired', 39, 860, 850, 10, '1756825728', 'transaction expired'),
(282, 'order expired', 39, 870, 860, 10, '1756825728', 'transaction expired'),
(283, 'order expired', 38, 444, 424, 10, '1756825728', 'transaction expired'),
(284, 'order expired', 38, 444, 434, 10, '1756825728', 'transaction expired'),
(285, 'order expired', 39, 890, 870, 10, '1756825728', 'transaction expired'),
(286, 'order expired', 39, 890, 880, 10, '1756825728', 'transaction expired'),
(287, 'order expired', 38, 464, 444, 10, '1756825729', 'transaction expired'),
(288, 'order expired', 38, 464, 444, 10, '1756825729', 'transaction expired'),
(289, 'order expired', 39, 910, 890, 10, '1756825729', 'transaction expired'),
(290, 'order expired', 39, 910, 890, 10, '1756825729', 'transaction expired'),
(291, 'order expired', 38, 474, 464, 10, '1756825740', 'transaction expired'),
(292, 'order expired', 39, 920, 910, 10, '1756825740', 'transaction expired'),
(293, 'order expired', 38, 484, 474, 10, '1756825740', 'transaction expired'),
(294, 'order expired', 39, 930, 920, 10, '1756825740', 'transaction expired'),
(295, 'order expired', 38, 504, 484, 10, '1756825741', 'transaction expired'),
(296, 'order expired', 38, 504, 484, 10, '1756825741', 'transaction expired'),
(297, 'order expired', 39, 940, 930, 10, '1756825741', 'transaction expired'),
(298, 'order expired', 39, 950, 930, 10, '1756825741', 'transaction expired'),
(299, 'order expired', 38, 514, 504, 10, '1756825743', 'transaction expired'),
(300, 'order expired', 39, 960, 950, 10, '1756825743', 'transaction expired'),
(301, 'order expired', 38, 524, 514, 10, '1756825743', 'transaction expired'),
(302, 'order expired', 39, 970, 960, 10, '1756825743', 'transaction expired'),
(303, 'order expired', 38, 544, 524, 10, '1756825743', 'transaction expired'),
(304, 'order expired', 38, 544, 524, 10, '1756825743', 'transaction expired'),
(305, 'order expired', 39, 990, 970, 10, '1756825743', 'transaction expired'),
(306, 'order expired', 39, 990, 970, 10, '1756825743', 'transaction expired'),
(307, 'order expired', 38, 564, 544, 10, '1756825875', 'transaction expired'),
(308, 'order expired', 38, 564, 544, 10, '1756825875', 'transaction expired'),
(309, 'order expired', 39, 1000, 990, 10, '1756825875', 'transaction expired'),
(310, 'order expired', 39, 1010, 1000, 10, '1756825875', 'transaction expired'),
(311, 'order expired', 38, 584, 564, 10, '1756826154', 'transaction expired'),
(312, 'order expired', 38, 584, 564, 10, '1756826154', 'transaction expired'),
(313, 'order expired', 39, 1030, 1010, 10, '1756826154', 'transaction expired'),
(314, 'order expired', 39, 1030, 1010, 10, '1756826154', 'transaction expired'),
(315, 'quick order', 38, 284, 584, 300, '1756826173', 'quick order no customer details'),
(316, 'order expired', 38, 304, 284, 10, '1756826178', 'transaction expired'),
(317, 'order expired', 38, 304, 284, 10, '1756826178', 'transaction expired'),
(318, 'order expired', 39, 1040, 1030, 10, '1756826178', 'transaction expired'),
(319, 'order expired', 39, 1050, 1040, 10, '1756826178', 'transaction expired'),
(320, 'order expired', 38, 314, 304, 10, '1756826232', 'transaction expired'),
(321, 'order expired', 38, 324, 314, 10, '1756826232', 'transaction expired'),
(322, 'order expired', 39, 1060, 1050, 10, '1756826232', 'transaction expired'),
(323, 'order expired', 39, 1070, 1060, 10, '1756826232', 'transaction expired'),
(324, 'order expired', 38, 334, 324, 10, '1756826235', 'transaction expired'),
(325, 'order expired', 38, 344, 334, 10, '1756826235', 'transaction expired'),
(326, 'order expired', 39, 1080, 1070, 10, '1756826235', 'transaction expired'),
(327, 'order expired', 39, 1090, 1080, 10, '1756826235', 'transaction expired'),
(328, 'order expired', 38, 354, 344, 10, '1756826237', 'transaction expired'),
(329, 'order expired', 38, 364, 354, 10, '1756826237', 'transaction expired'),
(330, 'order expired', 39, 1100, 1090, 10, '1756826237', 'transaction expired'),
(331, 'order expired', 39, 1110, 1100, 10, '1756826237', 'transaction expired'),
(332, 'order expired', 38, 374, 364, 10, '1756826392', 'transaction expired'),
(333, 'order expired', 39, 1120, 1110, 10, '1756826392', 'transaction expired'),
(334, 'order expired', 38, 384, 374, 10, '1756826392', 'transaction expired'),
(335, 'order expired', 39, 1130, 1120, 10, '1756826392', 'transaction expired'),
(336, 'order expired', 38, 394, 384, 10, '1756826393', 'transaction expired'),
(337, 'order expired', 39, 1140, 1130, 10, '1756826393', 'transaction expired'),
(338, 'order expired', 38, 404, 394, 10, '1756826393', 'transaction expired'),
(339, 'order expired', 39, 1150, 1140, 10, '1756826393', 'transaction expired'),
(340, 'order expired', 38, 424, 404, 10, '1756826394', 'transaction expired'),
(341, 'order expired', 38, 424, 404, 10, '1756826394', 'transaction expired'),
(342, 'order expired', 39, 1160, 1150, 10, '1756826394', 'transaction expired'),
(343, 'order expired', 39, 1170, 1160, 10, '1756826394', 'transaction expired'),
(344, 'order expired', 38, 444, 424, 10, '1756826395', 'transaction expired'),
(345, 'order expired', 38, 444, 424, 10, '1756826395', 'transaction expired'),
(346, 'order expired', 39, 1180, 1170, 10, '1756826395', 'transaction expired'),
(347, 'order expired', 39, 1190, 1180, 10, '1756826395', 'transaction expired'),
(348, 'order expired', 38, 454, 444, 10, '1756826396', 'transaction expired'),
(349, 'order expired', 38, 464, 454, 10, '1756826396', 'transaction expired'),
(350, 'order expired', 39, 1200, 1190, 10, '1756826396', 'transaction expired'),
(351, 'order expired', 39, 1210, 1200, 10, '1756826396', 'transaction expired'),
(352, 'order expired', 38, 774, 464, 10, '1756826400', 'transaction expired'),
(353, 'order expired', 38, 774, 464, 300, '1756826400', 'transaction expired'),
(354, 'order expired', 39, 1220, 1210, 10, '1756826400', 'transaction expired'),
(355, 'order expired', 38, 784, 774, 10, '1756826400', 'transaction expired'),
(356, 'order expired', 39, 1230, 1220, 10, '1756826400', 'transaction expired'),
(357, 'order expired', 38, 1084, 784, 300, '1756826400', 'transaction expired'),
(358, 'order expired', 38, 1394, 1084, 10, '1756826402', 'transaction expired'),
(359, 'order expired', 38, 1404, 1084, 300, '1756826402', 'transaction expired'),
(360, 'order expired', 38, 1704, 1394, 10, '1756826402', 'transaction expired'),
(361, 'order expired', 38, 1704, 1404, 300, '1756826402', 'transaction expired'),
(362, 'order expired', 39, 1240, 1230, 10, '1756826402', 'transaction expired'),
(363, 'order expired', 39, 1250, 1240, 10, '1756826402', 'transaction expired'),
(364, 'order expired', 38, 1714, 1704, 10, '1756826596', 'transaction expired'),
(365, 'order expired', 38, 2014, 1714, 300, '1756826596', 'transaction expired'),
(366, 'order expired', 39, 1260, 1250, 10, '1756826596', 'transaction expired'),
(367, 'order expired', 38, 2324, 2014, 10, '1756826596', 'transaction expired'),
(368, 'order expired', 38, 2324, 2024, 300, '1756826596', 'transaction expired'),
(369, 'order expired', 39, 1270, 1260, 10, '1756826596', 'transaction expired'),
(370, 'order expired', 38, 2334, 2324, 10, '1756826598', 'transaction expired'),
(371, 'order expired', 38, 2644, 2334, 10, '1756826598', 'transaction expired'),
(372, 'order expired', 38, 2644, 2334, 300, '1756826598', 'transaction expired'),
(373, 'order expired', 39, 1290, 1270, 10, '1756826598', 'transaction expired'),
(374, 'order expired', 39, 1290, 1280, 10, '1756826598', 'transaction expired'),
(375, 'order expired', 38, 2944, 2644, 300, '1756826598', 'transaction expired'),
(376, 'order expired', 38, 3254, 2944, 10, '1756826631', 'transaction expired'),
(377, 'order expired', 38, 3254, 2954, 300, '1756826631', 'transaction expired'),
(378, 'order expired', 38, 3564, 3254, 300, '1756826631', 'transaction expired'),
(379, 'order expired', 38, 3564, 3254, 10, '1756826631', 'transaction expired'),
(380, 'order expired', 39, 1300, 1290, 10, '1756826631', 'transaction expired'),
(381, 'order expired', 39, 1310, 1300, 10, '1756826631', 'transaction expired'),
(382, 'order expired', 38, 3864, 3564, 300, '1756826631', 'transaction expired'),
(383, 'order expired', 38, 3884, 3564, 10, '1756826631', 'transaction expired'),
(384, 'order expired', 38, 4184, 3864, 10, '1756826631', 'transaction expired'),
(385, 'order expired', 38, 4184, 3884, 300, '1756826631', 'transaction expired'),
(386, 'order expired', 39, 1330, 1310, 10, '1756826631', 'transaction expired'),
(387, 'order expired', 39, 1330, 1320, 10, '1756826631', 'transaction expired'),
(388, 'transaction order', 39, 1207, 1330, 123, '1756826885', ''),
(389, 'void order', 39, 1330, 1207, 123, '1756827211', 'order cancel'),
(390, 'order expired', 38, 4484, 4184, 300, '1756829001', 'transaction expired'),
(391, 'order expired', 38, 4784, 4484, 300, '1756829001', 'transaction expired'),
(392, 'order expired', 38, 5384, 4784, 300, '1756829002', 'transaction expired'),
(393, 'order expired', 38, 5384, 4784, 300, '1756829002', 'transaction expired'),
(394, 'order expired', 38, 5984, 5384, 300, '1756829004', 'transaction expired'),
(395, 'order expired', 38, 5984, 5384, 300, '1756829004', 'transaction expired'),
(396, 'void order', 52, 967, 966, 1, '1756829257', 'order cancel'),
(397, 'reorder', 52, 966, 967, 1, '1756829259', 'item reorder'),
(398, 'void order', 248, 1036, 1026, 10, '1756829292', 'order cancel'),
(399, 'reorder', 248, 1026, 1036, 10, '1756829516', 'item reorder'),
(400, 'void order', 248, 1036, 1026, 10, '1756829522', 'order cancel'),
(401, 'reorder', 248, 1026, 1036, 10, '1756830293', 'item reorder'),
(402, 'void order', 48, 800, 790, 10, '1756830295', 'order cancel'),
(403, 'quick order', 38, 5884, 5984, 100, '1756833881', 'quick order no customer details'),
(404, 'order expired', 248, 1036, 1026, 10, '1756833903', 'transaction expired'),
(405, 'order expired', 38, 5984, 5884, 100, '1756833903', 'transaction expired'),
(406, 'order expired', 48, 810, 800, 10, '1756833903', 'transaction expired'),
(407, 'order expired', 248, 1046, 1036, 10, '1756833903', 'transaction expired'),
(408, 'order expired', 48, 820, 810, 10, '1756833903', 'transaction expired'),
(409, 'order expired', 38, 6084, 5984, 100, '1756833903', 'transaction expired'),
(410, 'quick order', 38, 6079, 6084, 5, '1756833944', 'quick order no customer details'),
(411, 'quick order', 39, 1325, 1330, 5, '1756833944', 'quick order no customer details'),
(412, 'void order', 39, 1330, 1325, 5, '1756834072', 'order cancel'),
(413, 'order expired', 38, 6084, 6079, 5, '1756834080', 'transaction expired'),
(414, 'order expired', 38, 6089, 6084, 5, '1756834080', 'transaction expired'),
(415, 'order expired', 39, 1335, 1330, 5, '1756834080', 'transaction expired'),
(416, 'order expired', 39, 1340, 1335, 5, '1756834080', 'transaction expired'),
(417, 'additional order', 62, 1797, 1798, 1, '1756839681', 'additional order to 174'),
(418, 'additional order', 44, 93, 94, 1, '1756839681', 'additional order to 174'),
(419, 'additional order', 64, 51, 52, 1, '1756839681', 'additional order to 174'),
(420, 'quick order', 62, 1787, 1797, 10, '1756841028', 'quick order no customer details'),
(421, 'quick order', 64, 41, 51, 10, '1756841028', 'quick order no customer details'),
(422, 'quick order', 44, 83, 93, 10, '1756841028', 'quick order no customer details'),
(423, 'direct order', 62, 1777, 1787, 10, '1756841051', 'shirt only buy no print'),
(424, 'direct order', 62, 1677, 1777, 100, '1756841147', 'shirt only buy no print'),
(425, 'direct order', 196, 29, 39, 10, '1756842519', 'shirt only buy no print'),
(426, 'direct order', 52, 956, 966, 10, '1756842597', 'shirt only buy no print'),
(427, 'direct order', 52, 946, 956, 10, '1756842715', 'shirt only buy no print'),
(428, 'direct order', 52, 936, 946, 10, '1756842782', 'shirt only buy no print'),
(429, 'direct order', 52, 926, 936, 10, '1756842829', 'shirt only buy no print'),
(430, 'quick order', 52, 916, 926, 10, '1756842871', 'quick order no customer details'),
(431, 'quick order', 53, 971, 981, 10, '1756842871', 'quick order no customer details'),
(432, 'quick order', 31, 104, 114, 10, '1756842871', 'quick order no customer details'),
(433, 'quick order', 52, 906, 916, 10, '1756843025', 'quick order no customer details'),
(434, 'quick order', 53, 961, 971, 10, '1756843025', 'quick order no customer details'),
(435, 'quick order', 31, 94, 104, 10, '1756843025', 'quick order no customer details'),
(436, 'quick order', 52, 896, 906, 10, '1756843174', 'quick order no customer details'),
(437, 'quick order', 53, 951, 961, 10, '1756843174', 'quick order no customer details'),
(438, 'quick order', 31, 84, 94, 10, '1756843174', 'quick order no customer details'),
(439, 'quick order', 52, 886, 896, 10, '1756843321', 'quick order no customer details'),
(440, 'quick order', 53, 941, 951, 10, '1756843321', 'quick order no customer details'),
(441, 'quick order', 31, 74, 84, 10, '1756843321', 'quick order no customer details'),
(442, 'direct order', 62, 1577, 1677, 100, '1756843386', 'shirt only buy no print'),
(443, 'direct order', 62, 1477, 1577, 100, '1756843699', 'shirt only buy no print'),
(444, 'transaction order', 62, 1466, 1477, 11, '1756843763', ''),
(445, 'transaction order', 64, 30, 41, 11, '1756843763', ''),
(446, 'transaction order', 44, 72, 83, 11, '1756843763', ''),
(447, 'additional order', 52, 876, 886, 10, '1756844018', 'additional order to 185'),
(448, 'additional order', 52, 866, 876, 10, '1756844224', 'additional order to 185'),
(450, 'quick order', 64, -60, -30, 30, '1756846902', 'quick order no customer details'),
(451, 'quick order', 44, 0, 72, 72, '1756846902', 'quick order no customer details'),
(452, 'quick order', 62, 1366, 1466, 100, '1756846902', 'quick order no customer details'),
(453, 'reorder', 44, -30, 0, 30, '1756848084', 'reorder transaction id number 43'),
(454, 'reorder', 44, -60, -30, 30, '1756848224', 'reorder transaction id number 43'),
(455, 'order expired', 44, 0, -60, 30, '1756848277', 'transaction expired'),
(456, 'order expired', 44, 0, -60, 30, '1756848277', 'transaction expired'),
(457, 'order expired', 44, 30, 0, 30, '1756848285', 'transaction expired'),
(458, 'order expired', 44, 60, 30, 30, '1756848285', 'transaction expired'),
(459, 'order expired', 44, 90, 60, 30, '1756848312', 'transaction expired'),
(460, 'order expired', 44, 120, 90, 30, '1756848312', 'transaction expired'),
(461, 'order expired', 44, 150, 120, 30, '1756848314', 'transaction expired'),
(462, 'order expired', 44, 180, 120, 30, '1756848314', 'transaction expired'),
(463, 'order expired', 44, 210, 180, 30, '1756848337', 'transaction expired'),
(464, 'order expired', 44, 240, 210, 30, '1756848337', 'transaction expired'),
(465, 'order expired', 44, 270, 240, 30, '1756848344', 'transaction expired'),
(466, 'order expired', 44, 300, 270, 30, '1756848344', 'transaction expired'),
(467, 'order expired', 44, 360, 300, 30, '1756848347', 'transaction expired'),
(468, 'order expired', 44, 360, 300, 30, '1756848347', 'transaction expired'),
(469, 'order expired', 44, 390, 360, 30, '1756848348', 'transaction expired'),
(470, 'order expired', 44, 420, 390, 30, '1756848348', 'transaction expired'),
(471, 'order expired', 44, 480, 420, 30, '1756848351', 'transaction expired'),
(472, 'order expired', 44, 480, 420, 30, '1756848351', 'transaction expired'),
(473, 'order expired', 44, 540, 480, 30, '1756848352', 'transaction expired'),
(474, 'order expired', 44, 540, 480, 30, '1756848352', 'transaction expired'),
(475, 'order expired', 44, 570, 540, 30, '1756848353', 'transaction expired'),
(476, 'order expired', 44, 600, 570, 30, '1756848353', 'transaction expired'),
(477, 'order expired', 44, 660, 600, 30, '1756848354', 'transaction expired'),
(478, 'order expired', 44, 660, 600, 30, '1756848354', 'transaction expired'),
(479, 'order expired', 44, 690, 660, 30, '1756848355', 'transaction expired'),
(480, 'order expired', 44, 720, 690, 30, '1756848355', 'transaction expired'),
(481, 'order expired', 44, 750, 720, 30, '1756848359', 'transaction expired'),
(482, 'order expired', 44, 780, 750, 30, '1756848359', 'transaction expired'),
(483, 'order expired', 44, 810, 780, 30, '1756848360', 'transaction expired'),
(484, 'order expired', 44, 840, 810, 30, '1756848360', 'transaction expired'),
(485, 'order expired', 44, 870, 840, 30, '1756848368', 'transaction expired'),
(486, 'order expired', 44, 900, 870, 30, '1756848368', 'transaction expired'),
(487, 'order expired', 44, 930, 900, 30, '1756848371', 'transaction expired'),
(488, 'order expired', 44, 960, 930, 30, '1756848371', 'transaction expired'),
(489, 'order expired', 44, 1020, 960, 30, '1756848371', 'transaction expired'),
(490, 'order expired', 44, 1020, 960, 30, '1756848371', 'transaction expired'),
(491, 'order expired', 44, 1080, 1020, 30, '1756848376', 'transaction expired'),
(492, 'order expired', 44, 1080, 1020, 30, '1756848376', 'transaction expired'),
(493, 'reorder', 52, 865, 866, 1, '1756893461', 'reorder transaction id number 147'),
(494, 'reorder', 39, 1339, 1340, 1, '1756893461', 'reorder transaction id number 147'),
(495, 'reorder', 47, 993, 994, 1, '1756893461', 'reorder transaction id number 147'),
(496, 'reorder', 39, 1334, 1339, 5, '1756893461', 'reorder transaction id number 147'),
(497, 'reorder', 39, 1329, 1334, 5, '1756893461', 'reorder transaction id number 147'),
(498, 'reorder', 47, 992, 993, 1, '1756894915', 'reorder transaction id number 147'),
(499, 'reorder', 39, 1324, 1329, 5, '1756894915', 'reorder transaction id number 147'),
(500, 'reorder', 39, 1319, 1324, 5, '1756894915', 'reorder transaction id number 147'),
(501, 'void order', 52, 866, 865, 1, '1756895250', 'order cancel'),
(502, 'void order', 39, NULL, NULL, 5, '1756895362', 'order cancel'),
(503, 'reorder', 39, NULL, NULL, 5, '1756895369', 'item reorder'),
(504, 'void order', 39, NULL, NULL, 1, '1756895476', 'order cancel'),
(505, 'reorder', 39, NULL, NULL, 1, '1756895480', 'item reorder'),
(506, 'cancel transaction', 47, 993, 992, 1, '1756895521', '147 transaction cancelled'),
(507, 'cancel transaction', 39, NULL, NULL, 5, '1756895521', '147 transaction cancelled'),
(508, 'cancel transaction', 39, NULL, NULL, 5, '1756895521', '147 transaction cancelled'),
(509, 'reorder', 52, 865, 866, 1, '1756898058', 'reorder transaction id number 147'),
(510, 'reorder', 47, 992, 993, 1, '1756898058', 'reorder transaction id number 147'),
(511, 'reorder', 39, NULL, NULL, 5, '1756898058', 'reorder transaction id number 147'),
(512, 'reorder', 39, NULL, NULL, 5, '1756898058', 'reorder transaction id number 147'),
(513, 'cancel transaction', 52, 866, 865, 1, '1756898061', '147 transaction cancelled'),
(514, 'cancel transaction', 47, 993, 992, 1, '1756898061', '147 transaction cancelled'),
(515, 'cancel transaction', 39, NULL, NULL, 5, '1756898061', '147 transaction cancelled'),
(516, 'cancel transaction', 39, NULL, NULL, 5, '1756898061', '147 transaction cancelled'),
(517, 'reorder', 52, 865, 866, 1, '1756898069', 'reorder transaction id number 147'),
(518, 'reorder', 47, 992, 993, 1, '1756898069', 'reorder transaction id number 147'),
(519, 'reorder', 39, NULL, NULL, 5, '1756898069', 'reorder transaction id number 147'),
(520, 'reorder', 39, NULL, NULL, 5, '1756898069', 'reorder transaction id number 147'),
(521, 'cancel transaction', 52, 866, 865, 1, '1756898079', '147 transaction cancelled'),
(522, 'cancel transaction', 47, 993, 992, 1, '1756898079', '147 transaction cancelled'),
(523, 'cancel transaction', 39, NULL, NULL, 5, '1756898079', '147 transaction cancelled'),
(524, 'cancel transaction', 39, NULL, NULL, 5, '1756898079', '147 transaction cancelled'),
(525, 'reorder', 52, 865, 866, 1, '1756898102', 'reorder transaction id number 147'),
(526, 'reorder', 47, 992, 993, 1, '1756898102', 'reorder transaction id number 147'),
(527, 'reorder', 39, NULL, NULL, 5, '1756898102', 'reorder transaction id number 147'),
(528, 'reorder', 39, NULL, NULL, 5, '1756898102', 'reorder transaction id number 147'),
(529, 'cancel transaction', 52, 866, 865, 1, '1756898198', '147 transaction cancelled'),
(530, 'cancel transaction', 47, 993, 992, 1, '1756898198', '147 transaction cancelled'),
(531, 'cancel transaction', 39, NULL, NULL, 5, '1756898198', '147 transaction cancelled'),
(532, 'cancel transaction', 39, NULL, NULL, 5, '1756898198', '147 transaction cancelled'),
(533, 'reorder', 52, 865, 866, 1, '1756898204', 'reorder transaction id number 147'),
(534, 'reorder', 47, 992, 993, 1, '1756898204', 'reorder transaction id number 147'),
(535, 'reorder', 39, NULL, NULL, 5, '1756898204', 'reorder transaction id number 147'),
(536, 'reorder', 39, NULL, NULL, 5, '1756898204', 'reorder transaction id number 147'),
(537, 'cancel transaction', 52, 866, 865, 1, '1756898498', '147 transaction cancelled'),
(538, 'cancel transaction', 39, NULL, NULL, 1, '1756898498', '147 transaction cancelled'),
(539, 'cancel transaction', 47, 993, 992, 1, '1756898498', '147 transaction cancelled'),
(540, 'cancel transaction', 39, NULL, NULL, 5, '1756898498', '147 transaction cancelled'),
(541, 'cancel transaction', 39, NULL, NULL, 5, '1756898498', '147 transaction cancelled'),
(542, 'reorder', 52, 865, 866, 1, '1756898552', 'reorder transaction id number 147'),
(543, 'reorder', 39, NULL, NULL, 1, '1756898552', 'reorder transaction id number 147'),
(544, 'reorder', 47, 992, 993, 1, '1756898552', 'reorder transaction id number 147'),
(545, 'reorder', 39, NULL, NULL, 5, '1756898552', 'reorder transaction id number 147'),
(546, 'reorder', 39, NULL, NULL, 5, '1756898552', 'reorder transaction id number 147'),
(547, 'cancel transaction', 52, 866, 865, 1, '1756898603', '147 transaction cancelled'),
(548, 'cancel transaction', 39, NULL, NULL, 1, '1756898603', '147 transaction cancelled'),
(549, 'cancel transaction', 47, 993, 992, 1, '1756898603', '147 transaction cancelled'),
(550, 'cancel transaction', 39, NULL, NULL, 5, '1756898603', '147 transaction cancelled'),
(551, 'cancel transaction', 39, NULL, NULL, 5, '1756898603', '147 transaction cancelled'),
(552, 'reorder', 52, 865, 866, 1, '1756898627', 'reorder transaction id number 147'),
(553, 'reorder', 39, NULL, NULL, 1, '1756898627', 'reorder transaction id number 147'),
(554, 'reorder', 47, 992, 993, 1, '1756898627', 'reorder transaction id number 147'),
(555, 'reorder', 39, NULL, NULL, 5, '1756898627', 'reorder transaction id number 147'),
(556, 'reorder', 39, NULL, NULL, 5, '1756898627', 'reorder transaction id number 147'),
(557, 'cancel transaction', 52, 866, 865, 1, '1756898654', '147 transaction cancelled'),
(558, 'cancel transaction', 39, NULL, NULL, 1, '1756898654', '147 transaction cancelled'),
(559, 'cancel transaction', 47, 993, 992, 1, '1756898654', '147 transaction cancelled'),
(560, 'cancel transaction', 39, NULL, NULL, 5, '1756898654', '147 transaction cancelled'),
(561, 'cancel transaction', 39, NULL, NULL, 5, '1756898654', '147 transaction cancelled'),
(562, 'quantity added', 39, 100, 0, 100, '1756900320', 'supplier deliver'),
(563, 'reorder', 52, 865, 866, 1, '1756900336', 'reorder transaction id number 147'),
(564, 'reorder', 39, 99, 100, 1, '1756900336', 'reorder transaction id number 147'),
(565, 'reorder', 47, 992, 993, 1, '1756900336', 'reorder transaction id number 147'),
(566, 'reorder', 39, 94, 99, 5, '1756900336', 'reorder transaction id number 147'),
(567, 'reorder', 39, 89, 94, 5, '1756900336', 'reorder transaction id number 147'),
(568, 'reorder', 44, 1079, 1080, 1, '1756900494', 'reorder transaction id number 45'),
(569, 'deadline extention', 44, 991, 1079, 88, '1756900663', 'deadline extention transaction id number 39'),
(570, 'cancel transaction', 52, 875, 865, 10, '1756901180', '183 transaction cancelled'),
(571, 'cancel transaction', 53, 951, 941, 10, '1756901180', '183 transaction cancelled'),
(572, 'cancel transaction', 31, 84, 74, 10, '1756901180', '183 transaction cancelled'),
(573, 'cancel transaction', 52, 885, 875, 10, '1756901207', '184 transaction cancelled'),
(574, 'cancel transaction', 53, 961, 951, 10, '1756901207', '184 transaction cancelled'),
(575, 'cancel transaction', 31, 94, 84, 10, '1756901207', '184 transaction cancelled'),
(576, 'cancel transaction', 52, 895, 885, 10, '1756901305', '185 transaction cancelled'),
(577, 'cancel transaction', 53, 971, 961, 10, '1756901305', '185 transaction cancelled'),
(578, 'cancel transaction', 31, 104, 94, 10, '1756901305', '185 transaction cancelled'),
(579, 'cancel transaction', 52, 905, 895, 10, '1756901305', '185 transaction cancelled'),
(580, 'cancel transaction', 52, 915, 905, 10, '1756901305', '185 transaction cancelled'),
(581, 'reorder', 52, 905, 915, 10, '1756901388', 'reorder transaction id number 185'),
(582, 'reorder', 53, 961, 971, 10, '1756901388', 'reorder transaction id number 185'),
(583, 'reorder', 31, 94, 104, 10, '1756901388', 'reorder transaction id number 185'),
(584, 'reorder', 52, 895, 905, 10, '1756901388', 'reorder transaction id number 185'),
(585, 'reorder', 52, 885, 895, 10, '1756901388', 'reorder transaction id number 185'),
(586, 'quantity added', 37, 100, 0, 100, '1756905968', 'supplier deliver'),
(587, 'additional order', 52, 785, 885, 100, '1756909677', 'additional order to 182'),
(588, 'quick order', 56, 150, 200, 50, '1756910034', 'quick order no customer details'),
(589, 'direct order', 44, 981, 991, 10, '1756910092', 'shirt only buy no print'),
(590, 'direct order', 44, 971, 981, 10, '1756910137', 'shirt only buy no print'),
(591, 'direct order', 196, 1119, 1129, 10, '1756911047', 'shirt only buy no print'),
(592, 'quick order', 196, 1019, 1119, 100, '1756911134', 'quick order no customer details'),
(593, 'additional order', 38, 5989, 6089, 100, '1756912430', 'additional order to 196'),
(594, 'additional order', 37, 50, 100, 50, '1756912430', 'additional order to 196'),
(595, 'quick order', 196, 919, 1019, 100, '1756915139', 'quick order no customer details'),
(596, 'transaction order', 196, 819, 919, 100, '1756915149', ''),
(597, 'direct order', 196, 719, 819, 100, '1756915159', 'shirt only buy no print'),
(598, 'order expired', 56, 250, 150, 50, '1756915276', 'transaction expired'),
(599, 'order expired', 56, 250, 150, 50, '1756915276', 'transaction expired'),
(600, 'order expired', 196, 819, 719, 100, '1756915276', 'transaction expired'),
(601, 'order expired', 248, 1056, 1046, 10, '1756915276', 'transaction expired'),
(602, 'order expired', 196, 919, 819, 100, '1756915276', 'transaction expired'),
(603, 'order expired', 196, 1019, 919, 100, '1756915276', 'transaction expired'),
(604, 'order expired', 48, 830, 820, 10, '1756915276', 'transaction expired'),
(605, 'order expired', 196, 1119, 1019, 100, '1756915276', 'transaction expired'),
(606, 'order expired', 38, 6089, 5989, 100, '1756915276', 'transaction expired'),
(607, 'order expired', 196, 1219, 1119, 100, '1756915276', 'transaction expired'),
(608, 'order expired', 38, 6189, 6089, 100, '1756915276', 'transaction expired'),
(609, 'order expired', 64, 60, 0, 30, '1756915276', 'transaction expired'),
(610, 'order expired', 64, 60, 0, 30, '1756915276', 'transaction expired'),
(611, 'order expired', 37, 100, 50, 50, '1756915276', 'transaction expired'),
(612, 'order expired', 37, 150, 100, 50, '1756915276', 'transaction expired'),
(613, 'order expired', 52, 795, 785, 10, '1756915276', 'transaction expired'),
(614, 'order expired', 52, 805, 795, 10, '1756915276', 'transaction expired'),
(615, 'order expired', 44, 972, 971, 1, '1756915276', 'transaction expired'),
(616, 'order expired', 53, 981, 971, 10, '1756915276', 'transaction expired'),
(617, 'order expired', 64, 120, 60, 30, '1756915276', 'transaction expired'),
(618, 'order expired', 38, 6194, 6189, 5, '1756915276', 'transaction expired'),
(619, 'order expired', 53, 981, 961, 10, '1756915276', 'transaction expired'),
(620, 'order expired', 64, 120, 90, 30, '1756915276', 'transaction expired'),
(621, 'order expired', 31, 114, 94, 10, '1756915276', 'transaction expired'),
(622, 'order expired', 39, 94, 89, 5, '1756915276', 'transaction expired'),
(623, 'order expired', 31, 114, 94, 10, '1756915276', 'transaction expired'),
(624, 'order expired', 44, 973, 972, 1, '1756915276', 'transaction expired'),
(625, 'order expired', 38, 6199, 6194, 5, '1756915276', 'transaction expired'),
(626, 'order expired', 248, 1066, 1056, 10, '1756915276', 'transaction expired'),
(627, 'order expired', 52, 1005, 805, 100, '1756915276', 'transaction expired'),
(628, 'order expired', 52, 1005, 905, 100, '1756915276', 'transaction expired'),
(629, 'order expired', 62, 1367, 1366, 1, '1756915276', 'transaction expired'),
(630, 'order expired', 39, 99, 94, 5, '1756915276', 'transaction expired'),
(631, 'order expired', 48, 840, 830, 10, '1756915276', 'transaction expired'),
(632, 'order expired', 44, 974, 973, 1, '1756915276', 'transaction expired'),
(633, 'order expired', 62, 1368, 1367, 1, '1756915276', 'transaction expired'),
(634, 'order expired', 64, 121, 120, 1, '1756915276', 'transaction expired'),
(635, 'order expired', 44, 975, 974, 1, '1756915276', 'transaction expired'),
(636, 'order expired', 64, 122, 121, 1, '1756915276', 'transaction expired'),
(637, 'order expired', 196, 1319, 1219, 100, '1756915276', 'transaction expired'),
(638, 'quick order', 38, 6149, 6199, 50, '1756919443', 'quick order no customer details'),
(639, 'quick order', 37, 100, 150, 50, '1756919443', 'quick order no customer details'),
(640, 'quick order', 38, 6099, 6149, 50, '1756919721', 'quick order no customer details'),
(641, 'quick order', 37, 50, 100, 50, '1756919721', 'quick order no customer details'),
(642, 'quick order', 38, 6049, 6099, 50, '1756919889', 'quick order no customer details'),
(643, 'quick order', 37, 0, 50, 50, '1756919889', 'quick order no customer details'),
(644, 'quick order', 38, 5999, 6049, 50, '1756919898', 'quick order no customer details'),
(645, 'quick order', 37, -50, 0, 50, '1756919898', 'quick order no customer details'),
(646, 'quick order', 38, 5949, 5999, 50, '1756919903', 'quick order no customer details'),
(647, 'quick order', 37, -100, -50, 50, '1756919903', 'quick order no customer details'),
(648, 'quick order', 38, 5899, 5949, 50, '1756919954', 'quick order no customer details'),
(649, 'quick order', 37, -150, -100, 50, '1756919954', 'quick order no customer details'),
(650, 'quick order', 38, 5849, 5899, 50, '1756919968', 'quick order no customer details'),
(651, 'quick order', 37, -200, -150, 50, '1756919968', 'quick order no customer details'),
(652, 'quick order', 38, 5799, 5849, 50, '1756920003', 'quick order no customer details'),
(653, 'quick order', 37, -250, -200, 50, '1756920003', 'quick order no customer details'),
(654, 'quick order', 38, 5749, 5799, 50, '1756920013', 'quick order no customer details'),
(655, 'quick order', 37, -300, -250, 50, '1756920013', 'quick order no customer details'),
(656, 'direct order', 38, 5649, 5749, 100, '1756920070', 'shirt only buy no print'),
(657, 'order expired', 56, 300, 250, 50, '1756920097', 'transaction expired'),
(658, 'order expired', 196, 1419, 1319, 100, '1756920097', 'transaction expired'),
(659, 'order expired', 196, 1519, 1419, 100, '1756920097', 'transaction expired'),
(660, 'order expired', 56, 350, 300, 50, '1756920097', 'transaction expired'),
(661, 'order expired', 38, 5749, 5649, 100, '1756920097', 'transaction expired'),
(662, 'order expired', 196, 1719, 1519, 100, '1756920097', 'transaction expired'),
(663, 'order expired', 196, 1719, 1519, 100, '1756920097', 'transaction expired'),
(664, 'order expired', 38, 5849, 5749, 100, '1756920097', 'transaction expired'),
(665, 'order expired', 37, -250, -300, 50, '1756920097', 'transaction expired'),
(666, 'order expired', 196, 1819, 1719, 100, '1756920097', 'transaction expired'),
(667, 'order expired', 52, 1015, 1005, 10, '1756920097', 'transaction expired'),
(668, 'order expired', 37, -200, -250, 50, '1756920097', 'transaction expired'),
(669, 'order expired', 64, 152, 122, 30, '1756920097', 'transaction expired'),
(670, 'order expired', 53, 991, 981, 10, '1756920097', 'transaction expired'),
(671, 'order expired', 64, 182, 152, 30, '1756920097', 'transaction expired'),
(672, 'order expired', 196, 1919, 1819, 100, '1756920097', 'transaction expired'),
(673, 'order expired', 64, 212, 152, 30, '1756920097', 'transaction expired'),
(674, 'order expired', 31, 124, 114, 10, '1756920097', 'transaction expired'),
(675, 'order expired', 52, 1025, 1015, 10, '1756920097', 'transaction expired'),
(676, 'order expired', 44, 976, 975, 1, '1756920097', 'transaction expired');
INSERT INTO `logs` (`id`, `detail`, `inventory_id`, `new_value`, `old_value`, `changed_value`, `timestamp`, `remarks`) VALUES
(677, 'order expired', 52, 1125, 1025, 100, '1756920097', 'transaction expired'),
(678, 'order expired', 53, 1001, 991, 10, '1756920097', 'transaction expired'),
(679, 'order expired', 38, 5854, 5849, 5, '1756920097', 'transaction expired'),
(680, 'order expired', 44, 977, 976, 1, '1756920097', 'transaction expired'),
(681, 'order expired', 31, 134, 124, 10, '1756920097', 'transaction expired'),
(682, 'order expired', 39, 104, 99, 5, '1756920097', 'transaction expired'),
(683, 'order expired', 248, 1076, 1066, 10, '1756920097', 'transaction expired'),
(684, 'order expired', 52, 1225, 1125, 100, '1756920097', 'transaction expired'),
(685, 'order expired', 248, 1086, 1076, 10, '1756920097', 'transaction expired'),
(686, 'order expired', 62, 1369, 1368, 1, '1756920097', 'transaction expired'),
(687, 'order expired', 48, 850, 840, 10, '1756920097', 'transaction expired'),
(688, 'order expired', 38, 5859, 5854, 5, '1756920097', 'transaction expired'),
(689, 'order expired', 48, 860, 850, 10, '1756920097', 'transaction expired'),
(690, 'order expired', 44, 978, 977, 1, '1756920097', 'transaction expired'),
(691, 'order expired', 64, 242, 212, 30, '1756920097', 'transaction expired'),
(692, 'order expired', 39, 109, 104, 5, '1756920097', 'transaction expired'),
(693, 'order expired', 64, 243, 242, 1, '1756920097', 'transaction expired'),
(694, 'order expired', 62, 1370, 1369, 1, '1756920097', 'transaction expired'),
(695, 'order expired', 44, 979, 978, 1, '1756920097', 'transaction expired'),
(696, 'order expired', 64, 244, 243, 1, '1756920097', 'transaction expired'),
(697, 'order expired', 196, 2019, 1919, 100, '1756920099', 'transaction expired'),
(698, 'order expired', 56, 400, 350, 50, '1756920099', 'transaction expired'),
(699, 'order expired', 64, 274, 244, 30, '1756920099', 'transaction expired'),
(700, 'order expired', 196, 2219, 2019, 100, '1756920099', 'transaction expired'),
(701, 'order expired', 52, 1235, 1225, 10, '1756920099', 'transaction expired'),
(702, 'order expired', 196, 2219, 2019, 100, '1756920099', 'transaction expired'),
(703, 'order expired', 38, 5959, 5859, 100, '1756920099', 'transaction expired'),
(704, 'order expired', 53, 1011, 1001, 10, '1756920099', 'transaction expired'),
(705, 'order expired', 64, 304, 274, 30, '1756920099', 'transaction expired'),
(706, 'order expired', 248, 1096, 1086, 10, '1756920099', 'transaction expired'),
(707, 'order expired', 31, 144, 134, 10, '1756920099', 'transaction expired'),
(708, 'order expired', 38, 5964, 5959, 5, '1756920099', 'transaction expired'),
(709, 'order expired', 44, 980, 979, 1, '1756920099', 'transaction expired'),
(710, 'order expired', 37, -150, -200, 50, '1756920099', 'transaction expired'),
(711, 'order expired', 48, 870, 860, 10, '1756920099', 'transaction expired'),
(712, 'order expired', 52, 1335, 1235, 100, '1756920099', 'transaction expired'),
(713, 'order expired', 39, 114, 109, 5, '1756920099', 'transaction expired'),
(714, 'order expired', 56, 450, 400, 50, '1756920099', 'transaction expired'),
(715, 'order expired', 62, 1371, 1370, 1, '1756920099', 'transaction expired'),
(716, 'order expired', 196, 2319, 2219, 100, '1756920099', 'transaction expired'),
(717, 'order expired', 196, 2419, 2319, 100, '1756920099', 'transaction expired'),
(718, 'order expired', 44, 981, 980, 1, '1756920099', 'transaction expired'),
(719, 'order expired', 196, 2519, 2319, 100, '1756920099', 'transaction expired'),
(720, 'order expired', 52, 1345, 1335, 10, '1756920099', 'transaction expired'),
(721, 'order expired', 38, 6064, 5964, 100, '1756920099', 'transaction expired'),
(722, 'order expired', 64, 334, 304, 30, '1756920099', 'transaction expired'),
(723, 'order expired', 64, 335, 334, 1, '1756920099', 'transaction expired'),
(724, 'order expired', 53, 1021, 1011, 10, '1756920099', 'transaction expired'),
(725, 'order expired', 37, -100, -150, 50, '1756920099', 'transaction expired'),
(726, 'order expired', 64, 365, 335, 30, '1756920099', 'transaction expired'),
(727, 'order expired', 31, 154, 144, 10, '1756920099', 'transaction expired'),
(728, 'order expired', 38, 6069, 6064, 5, '1756920099', 'transaction expired'),
(729, 'order expired', 248, 1106, 1096, 10, '1756920099', 'transaction expired'),
(730, 'order expired', 52, 1445, 1345, 100, '1756920099', 'transaction expired'),
(731, 'order expired', 39, 119, 114, 5, '1756920099', 'transaction expired'),
(732, 'order expired', 48, 880, 870, 10, '1756920099', 'transaction expired'),
(733, 'order expired', 62, 1372, 1371, 1, '1756920099', 'transaction expired'),
(734, 'order expired', 44, 982, 981, 1, '1756920099', 'transaction expired'),
(735, 'order expired', 44, 983, 982, 1, '1756920099', 'transaction expired'),
(736, 'order expired', 64, 366, 365, 1, '1756920099', 'transaction expired'),
(737, 'order expired', 196, 2719, 2519, 100, '1756920101', 'transaction expired'),
(738, 'order expired', 56, 500, 450, 50, '1756920101', 'transaction expired'),
(739, 'order expired', 52, 1455, 1445, 10, '1756920101', 'transaction expired'),
(740, 'order expired', 196, 2719, 2519, 100, '1756920101', 'transaction expired'),
(741, 'order expired', 64, 396, 366, 30, '1756920101', 'transaction expired'),
(742, 'order expired', 38, 6169, 6069, 100, '1756920101', 'transaction expired'),
(743, 'order expired', 53, 1031, 1021, 10, '1756920101', 'transaction expired'),
(744, 'order expired', 37, -50, -100, 50, '1756920101', 'transaction expired'),
(745, 'order expired', 44, 984, 983, 1, '1756920101', 'transaction expired'),
(746, 'order expired', 196, 2819, 2719, 100, '1756920101', 'transaction expired'),
(747, 'order expired', 64, 426, 396, 30, '1756920101', 'transaction expired'),
(748, 'order expired', 31, 164, 154, 10, '1756920101', 'transaction expired'),
(749, 'order expired', 38, 6174, 6169, 5, '1756920101', 'transaction expired'),
(750, 'order expired', 52, 1555, 1455, 100, '1756920101', 'transaction expired'),
(751, 'order expired', 39, 124, 119, 5, '1756920101', 'transaction expired'),
(752, 'order expired', 248, 1116, 1106, 10, '1756920101', 'transaction expired'),
(753, 'order expired', 56, 550, 500, 50, '1756920101', 'transaction expired'),
(754, 'order expired', 196, 3019, 2819, 100, '1756920101', 'transaction expired'),
(755, 'order expired', 196, 3019, 2919, 100, '1756920101', 'transaction expired'),
(756, 'order expired', 48, 890, 880, 10, '1756920101', 'transaction expired'),
(757, 'order expired', 62, 1373, 1372, 1, '1756920101', 'transaction expired'),
(758, 'order expired', 38, 6274, 6174, 100, '1756920101', 'transaction expired'),
(759, 'order expired', 196, 3119, 3019, 100, '1756920101', 'transaction expired'),
(760, 'order expired', 44, 985, 984, 1, '1756920101', 'transaction expired'),
(761, 'order expired', 52, 1565, 1555, 10, '1756920101', 'transaction expired'),
(762, 'order expired', 37, 0, -50, 50, '1756920101', 'transaction expired'),
(763, 'order expired', 64, 487, 426, 30, '1756920101', 'transaction expired'),
(764, 'order expired', 64, 487, 426, 30, '1756920101', 'transaction expired'),
(765, 'order expired', 64, 487, 486, 1, '1756920101', 'transaction expired'),
(766, 'order expired', 53, 1041, 1031, 10, '1756920101', 'transaction expired'),
(767, 'order expired', 44, 986, 985, 1, '1756920101', 'transaction expired'),
(768, 'order expired', 31, 174, 164, 10, '1756920101', 'transaction expired'),
(769, 'order expired', 248, 1126, 1116, 10, '1756920101', 'transaction expired'),
(770, 'order expired', 52, 1665, 1565, 100, '1756920101', 'transaction expired'),
(771, 'order expired', 48, 900, 890, 10, '1756920101', 'transaction expired'),
(772, 'order expired', 38, 6279, 6274, 5, '1756920101', 'transaction expired'),
(773, 'order expired', 39, 129, 124, 5, '1756920101', 'transaction expired'),
(774, 'order expired', 62, 1374, 1373, 1, '1756920101', 'transaction expired'),
(775, 'order expired', 44, 987, 986, 1, '1756920101', 'transaction expired'),
(776, 'order expired', 64, 488, 487, 1, '1756920101', 'transaction expired'),
(777, 'order expired', 196, 3319, 3119, 100, '1756920103', 'transaction expired'),
(778, 'order expired', 196, 3319, 3119, 100, '1756920103', 'transaction expired'),
(779, 'order expired', 44, 988, 987, 1, '1756920103', 'transaction expired'),
(780, 'order expired', 56, 600, 550, 50, '1756920103', 'transaction expired'),
(781, 'order expired', 38, 6284, 6279, 5, '1756920103', 'transaction expired'),
(782, 'order expired', 248, 1136, 1126, 10, '1756920103', 'transaction expired'),
(783, 'order expired', 39, 134, 129, 5, '1756920103', 'transaction expired'),
(784, 'order expired', 38, 6384, 6284, 100, '1756920103', 'transaction expired'),
(785, 'order expired', 48, 910, 900, 10, '1756920103', 'transaction expired'),
(786, 'order expired', 196, 3419, 3319, 100, '1756920103', 'transaction expired'),
(787, 'order expired', 62, 1375, 1374, 1, '1756920103', 'transaction expired'),
(788, 'order expired', 56, 650, 600, 50, '1756920103', 'transaction expired'),
(789, 'order expired', 37, 50, 0, 50, '1756920103', 'transaction expired'),
(790, 'order expired', 52, 1675, 1665, 10, '1756920103', 'transaction expired'),
(791, 'order expired', 53, 1051, 1041, 10, '1756920103', 'transaction expired'),
(792, 'order expired', 44, 989, 988, 1, '1756920103', 'transaction expired'),
(793, 'order expired', 64, 519, 488, 30, '1756920103', 'transaction expired'),
(794, 'order expired', 31, 184, 174, 10, '1756920103', 'transaction expired'),
(795, 'order expired', 196, 3719, 3419, 100, '1756920103', 'transaction expired'),
(796, 'order expired', 64, 519, 518, 1, '1756920103', 'transaction expired'),
(797, 'order expired', 196, 3719, 3419, 100, '1756920103', 'transaction expired'),
(798, 'order expired', 196, 3719, 3619, 100, '1756920103', 'transaction expired'),
(799, 'order expired', 38, 6484, 6384, 100, '1756920103', 'transaction expired'),
(800, 'order expired', 52, 1775, 1675, 100, '1756920103', 'transaction expired'),
(801, 'order expired', 52, 1785, 1775, 10, '1756920103', 'transaction expired'),
(802, 'order expired', 37, 100, 50, 50, '1756920103', 'transaction expired'),
(803, 'order expired', 64, 609, 519, 30, '1756920103', 'transaction expired'),
(804, 'order expired', 64, 609, 519, 30, '1756920103', 'transaction expired'),
(805, 'order expired', 64, 609, 519, 30, '1756920103', 'transaction expired'),
(806, 'order expired', 53, 1061, 1051, 10, '1756920103', 'transaction expired'),
(807, 'order expired', 44, 990, 989, 1, '1756920103', 'transaction expired'),
(808, 'order expired', 31, 194, 184, 10, '1756920103', 'transaction expired'),
(809, 'order expired', 38, 6489, 6484, 5, '1756920103', 'transaction expired'),
(810, 'order expired', 248, 1146, 1136, 10, '1756920103', 'transaction expired'),
(811, 'order expired', 52, 1885, 1785, 100, '1756920103', 'transaction expired'),
(812, 'order expired', 39, 139, 134, 5, '1756920103', 'transaction expired'),
(813, 'order expired', 48, 920, 910, 10, '1756920103', 'transaction expired'),
(814, 'order expired', 62, 1376, 1375, 1, '1756920103', 'transaction expired'),
(815, 'order expired', 44, 991, 990, 1, '1756920103', 'transaction expired'),
(816, 'order expired', 64, 610, 609, 1, '1756920103', 'transaction expired'),
(817, 'quick order', 56, 550, 650, 100, '1756921348', 'quick order no customer details'),
(818, 'transaction order', 56, 450, 550, 100, '1756921708', ''),
(819, 'transaction order', 62, 876, 1376, 500, '1756921708', ''),
(820, 'quick order', 56, 350, 450, 100, '1756921724', 'quick order no customer details'),
(821, 'quick order', 62, 376, 876, 500, '1756921724', 'quick order no customer details'),
(822, 'quick order', 52, 1875, 1885, 10, '1756922048', 'quick order no customer details'),
(823, 'quick order', 53, 1051, 1061, 10, '1756922048', 'quick order no customer details'),
(824, 'quick order', 31, 184, 194, 10, '1756922048', 'quick order no customer details'),
(825, 'quick order', 52, 1865, 1875, 10, '1756922134', 'quick order no customer details'),
(826, 'quick order', 53, 1041, 1051, 10, '1756922134', 'quick order no customer details'),
(827, 'quick order', 31, 174, 184, 10, '1756922134', 'quick order no customer details'),
(828, 'quick order', 52, 1855, 1865, 10, '1756922153', 'quick order no customer details'),
(829, 'quick order', 53, 1031, 1041, 10, '1756922153', 'quick order no customer details'),
(830, 'quick order', 31, 164, 174, 10, '1756922153', 'quick order no customer details'),
(831, 'quick order', 52, 1845, 1855, 10, '1756922309', 'quick order no customer details'),
(832, 'quick order', 53, 1021, 1031, 10, '1756922309', 'quick order no customer details'),
(833, 'quick order', 31, 154, 164, 10, '1756922309', 'quick order no customer details'),
(834, 'quick order', 52, 1835, 1845, 10, '1756922332', 'quick order no customer details'),
(835, 'quick order', 53, 1011, 1021, 10, '1756922332', 'quick order no customer details'),
(836, 'quick order', 31, 144, 154, 10, '1756922332', 'quick order no customer details'),
(837, 'transaction order', 52, 1825, 1835, 10, '1756922360', ''),
(838, 'transaction order', 53, 1001, 1011, 10, '1756922360', ''),
(839, 'transaction order', 31, 134, 144, 10, '1756922360', ''),
(840, 'direct order', 53, 901, 1001, 100, '1756922401', 'shirt only buy no print'),
(841, 'return item', 56, -50, 350, 400, '1756926583', 'lulaw\'ay man ni'),
(842, 'quantity added', 56, 50, -50, 100, '1756927552', 'supplier deliver'),
(843, 'return item', 266, 0, 100, 100, '1756928315', 'kakson ko nlng ni'),
(844, 'return item', 255, 0, 100, 100, '1756928387', '0'),
(845, 'return item', 50, 0, 940, 940, '1756928471', '0'),
(846, 'return item', 249, 0, 236, 236, '1756928533', '10'),
(847, 'return item', 47, 0, 992, 992, '1756928538', '2'),
(848, 'return item', 49, 989, 989, 0, '1756928667', '9'),
(849, 'return item', 49, 989, 989, 0, '1756928679', '1111'),
(850, 'return item', 49, 989, 989, 0, '1756928683', '1111'),
(851, 'return item', 49, 989, 989, 0, '1756928747', '0000000'),
(852, 'return item', 49, 0, 989, 989, '1756928879', '0'),
(853, 'return item', 51, 0, 1298, 1298, '1756928896', '0'),
(854, 'return item', 32, 0, 130, 130, '1756928903', '0'),
(855, 'return item', 248, 0, 1146, 1146, '1756928919', '10'),
(856, 'return item', 48, 0, 920, 920, '1756928927', '0'),
(857, 'return item', 38, 1, 6489, 6488, '1756958147', 'a'),
(858, 'quantity added', 38, 101, 1, 100, '1756958196', 'supplier deliver'),
(859, 'return item', 56, 20, 50, 30, '1756958285', 'a'),
(860, 'quantity added', 56, 120, 20, 100, '1756958384', 'supplier deliver'),
(861, 'return item', 56, 20, 120, 100, '1756958452', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `inventory_id` int(255) NOT NULL,
  `brand` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `total` int(11) DEFAULT 0,
  `design_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `inventory_id`, `brand`, `type`, `color`, `size`, `quantity`, `transaction_id`, `status`, `total`, `design_name`) VALUES
(1, 0, 9, 9, 43, 11, 88, 39, 1, 0, ''),
(2, 0, 12, 10, 43, 11, 65, 40, 5, 0, ''),
(3, 0, 12, 9, 41, 11, 76, 40, 5, 0, ''),
(4, 0, 9, 10, 43, 12, 65, 40, 5, 0, ''),
(5, 0, 9, 9, 43, 11, 10, 41, 5, 0, ''),
(6, 0, 9, 9, 43, 11, 10, 42, 5, 0, ''),
(7, 0, 9, 9, 43, 11, 30, 43, 5, 0, ''),
(8, 0, 9, 9, 43, 11, 2, 44, 5, 0, ''),
(9, 0, 9, 9, 43, 11, 1, 45, 1, 0, ''),
(10, 0, 9, 9, 43, 11, 1, 50, 5, 0, ''),
(11, 0, 9, 9, 43, 11, 1, 51, 5, 0, ''),
(12, 0, 9, 9, 43, 11, 1, 52, 5, 0, ''),
(13, 0, 9, 9, 43, 11, 1, 53, 5, 0, ''),
(14, 0, 9, 9, 43, 11, 1, 54, 5, 0, ''),
(15, 0, 12, 10, 43, 13, 1, 54, 5, 0, ''),
(20, 0, 12, 10, 43, 13, 1, 73, 1, 0, ''),
(21, 0, 12, 10, 43, 13, 1, 74, 1, 0, ''),
(22, 0, 12, 10, 43, 13, 1, 75, 1, 0, ''),
(23, 0, 9, 9, 43, 11, 1, 80, 1, 0, ''),
(24, 0, 12, 10, 43, 13, 19, 81, 1, 0, ''),
(25, 0, 12, 10, 43, 13, 30, 82, 3, 0, ''),
(26, 0, 12, 10, 43, 13, 1, 83, 3, 0, ''),
(27, 0, 12, 10, 43, 13, 1, 84, 5, 0, ''),
(28, 0, 9, 9, 43, 11, 122, 85, 3, 0, ''),
(29, 0, 40, 13, 43, 34, 32, 85, 3, 0, ''),
(30, 0, 9, 9, 43, 11, 277, 86, 3, 0, ''),
(31, 0, 40, 13, 43, 34, 78, 87, 3, 0, ''),
(32, 0, 12, 10, 43, 13, 2, 88, 3, 0, ''),
(33, 0, 14, 10, 43, 11, 200, 89, 3, 0, ''),
(34, 0, 12, 10, 43, 34, 12, 89, 3, 0, ''),
(35, 0, 42, 9, 40, 11, 12, 90, 3, 0, ''),
(36, 0, 42, 9, 43, 11, 3, 90, 3, 0, ''),
(37, 0, 12, 10, 43, 34, 4, 90, 3, 0, ''),
(38, 0, 12, 10, 40, 12, 10, 91, 3, 0, ''),
(39, 0, 14, 9, 46, 13, 60, 91, 3, 0, ''),
(40, 0, 42, 9, 46, 11, 20, 92, 5, 0, ''),
(41, 0, 42, 9, 41, 11, 20, 92, 5, 0, ''),
(42, 0, 42, 9, 46, 11, 10, 93, 5, 0, ''),
(43, 0, 42, 9, 41, 11, 10, 93, 5, 0, ''),
(44, 0, 42, 9, 45, 11, 1, 94, 5, 0, ''),
(45, 0, 14, 14, 45, 40, 30, 95, 3, 0, ''),
(46, 0, 9, 13, 46, 13, 21, 96, 3, 0, ''),
(47, 0, 12, 9, 43, 12, 10, 96, 3, 0, ''),
(48, 0, 42, 9, 45, 11, 1, 96, 3, 0, ''),
(49, 0, 14, 10, 41, 40, 2, 97, 5, 0, ''),
(50, 0, 14, 10, 43, 52, 4, 98, 3, 0, ''),
(51, 0, 78, 1054, 58, 13, 1, 99, 3, 0, ''),
(52, 0, 78, 1054, 58, 54, 1, 99, 3, 0, ''),
(53, 0, 9, 9, 47, 13, 22, 100, 3, 0, ''),
(54, 0, 52, 14, 43, 11, 5, 101, 2, 0, ''),
(55, 0, 9, 9, 47, 13, 1, 102, 3, 0, ''),
(56, 0, 9, 9, 43, 11, 1, 102, 3, 0, ''),
(57, 0, 9, 9, 43, 13, 1, 102, 4, 0, ''),
(58, 0, 9, 9, 45, 11, 1, 102, 3, 0, ''),
(59, 0, 9, 9, 45, 13, 1, 102, 3, 0, ''),
(60, 0, 12, 10, 40, 12, 1, 103, 2, 0, ''),
(61, 0, 40, 9, 43, 34, 1, 104, 2, 0, ''),
(62, 0, 12, 10, 40, 12, 1, 105, 4, 0, ''),
(63, 0, 9, 9, 47, 13, 23, 101, 2, 0, ''),
(64, 0, 40, 9, 43, 34, 25, 101, 4, 0, ''),
(65, 0, 40, 9, 43, 11, 10, 101, 2, 0, ''),
(66, 0, 40, 9, 40, 34, 32, 101, 2, 0, ''),
(67, 0, 78, 1054, 58, 54, 20, 101, 4, 0, ''),
(68, 0, 12, 10, 40, 12, 1, 104, 4, 0, ''),
(69, 0, 12, 10, 43, 13, 1, 104, 2, 0, ''),
(70, 0, 12, 10, 43, 34, 1, 104, 2, 0, ''),
(71, 0, 14, 9, 46, 13, 1, 104, 2, 0, ''),
(72, 0, 14, 9, 43, 11, 1, 104, 4, 0, ''),
(73, 0, 14, 10, 43, 52, 1, 104, 2, 0, ''),
(74, 0, 14, 10, 43, 11, 1, 104, 2, 0, ''),
(75, 0, 52, 14, 43, 11, 50, 106, 2, 0, ''),
(76, 0, 42, 9, 40, 11, 1, 114, 5, 0, '0'),
(77, 0, 52, 14, 43, 11, 1, 115, 5, 0, '0'),
(78, 0, 42, 9, 40, 11, 1, 116, 2, 0, '0'),
(79, 0, 42, 9, 41, 11, 1, 116, 2, 0, '0'),
(80, 0, 42, 9, 40, 11, 1, 118, 5, 0, '0'),
(81, 0, 42, 9, 41, 11, 1, 118, 5, 0, '0'),
(82, 0, 42, 9, 40, 11, 1, 119, 5, 0, '0'),
(83, 0, 42, 9, 40, 11, 1, 120, 2, 0, '0'),
(84, 0, 42, 9, 41, 11, 1, 120, 2, 0, '0'),
(85, 0, 12, 10, 40, 12, 1, 121, 5, 0, '0'),
(86, 0, 12, 10, 43, 13, 1, 121, 5, 0, '0'),
(87, 0, 12, 10, 43, 34, 1, 121, 5, 0, '0'),
(88, 0, 9, 9, 47, 13, 1, 122, 5, 0, '0'),
(89, 0, 12, 10, 43, 34, 1, 123, 5, 0, '0'),
(90, 0, 12, 10, 43, 13, 1, 123, 5, 0, '0'),
(91, 0, 12, 10, 40, 12, 5, 124, 5, 0, '0'),
(92, 0, 42, 9, 40, 11, 1, 125, 5, 0, '0'),
(93, 0, 42, 9, 40, 11, 10, 126, 5, 0, '0'),
(94, 0, 42, 9, 40, 11, 10, 127, 5, 0, '0'),
(95, 0, 42, 9, 40, 11, 10, 128, 5, 0, '0'),
(96, 0, 9, 9, 47, 13, 1, 129, 5, 0, '0'),
(97, 0, 9, 9, 47, 13, 1, 130, 5, 0, '0'),
(98, 0, 40, 9, 43, 34, 1, 124, 5, 0, '0'),
(99, 0, 9, 9, 47, 13, 1, 124, 5, 0, '0'),
(100, 0, 42, 9, 40, 11, 1, 131, 5, 0, '0'),
(101, 0, 42, 9, 40, 11, 1, 132, 5, 0, ''),
(102, 0, 42, 9, 40, 11, 9, 134, 5, 585, ''),
(103, 0, 9, 9, 47, 13, 5, 135, 5, 1110, 'test'),
(104, 0, 9, 9, 43, 13, 10, 135, 5, 1000, 'test'),
(105, 0, 9, 9, 43, 11, 5, 135, 5, 1500, 'test'),
(106, 0, 40, 9, 43, 34, 5, 135, 5, 2500, 'test'),
(107, 0, 40, 9, 43, 34, 5, 135, 5, 2500, 'test'),
(108, 0, 40, 9, 43, 34, 22, 0, 2, 11000, ''),
(109, 0, 40, 9, 43, 34, 30, 0, 2, 15000, ''),
(110, 0, 12, 10, 40, 12, 1, 147, 1, 0, ''),
(111, 0, 12, 10, 40, 12, 1, 148, 5, 55, ''),
(112, 0, 42, 9, 46, 11, 5, 149, 5, 610, ''),
(113, 0, 40, 9, 40, 34, 1, 147, 1, 0, ''),
(114, 0, 14, 9, 43, 11, 1, 147, 1, 0, ''),
(115, 0, 40, 9, 40, 34, 5, 147, 1, 2000, ''),
(116, 0, 40, 9, 40, 34, 5, 147, 1, 2000, ''),
(117, 0, 42, 9, 40, 11, 10, 150, 2, 650, ''),
(118, 0, 42, 9, 41, 11, 67, 0, 2, 3484, '1756799542'),
(119, 0, 42, 9, 46, 11, 65, 0, 2, 7930, '1756799559'),
(120, 0, 40, 9, 43, 34, 10, 0, 2, 5000, '1756799899'),
(121, 0, 40, 9, 43, 34, 10, 0, 2, 5000, ''),
(122, 0, 12, 10, 40, 12, 5, 103, 2, 275, ''),
(123, 0, 40, 9, 43, 34, 47, 151, 5, 23500, ''),
(124, 0, 40, 9, 43, 34, 47, 152, 2, 23500, ''),
(125, 0, 40, 9, 43, 34, 47, 153, 2, 23500, ''),
(126, 0, 12, 10, 40, 12, 10, 0, 3, 550, ''),
(127, 0, 40, 9, 40, 34, 10, 154, 2, 4000, ''),
(128, 0, 40, 9, 40, 34, 10, 155, 2, 4000, ''),
(129, 0, 40, 9, 40, 34, 10, 0, 3, 4000, ''),
(130, 0, 42, 9, 45, 11, 10, 156, 5, 110, ''),
(131, 0, 42, 9, 45, 11, 10, 157, 5, 110, ''),
(132, 0, 42, 9, 45, 11, 100, 0, 3, 1100, ''),
(133, 0, 42, 9, 45, 11, 1, 0, 3, 11, ''),
(134, 0, 42, 9, 45, 11, 98, 0, 3, 1078, ''),
(135, 0, 42, 9, 45, 11, 10, 158, 5, 110, ''),
(136, 0, 40, 9, 40, 34, 1, 159, 5, 400, ''),
(137, 0, 42, 9, 45, 11, 1, 160, 5, 11, ''),
(138, 0, 40, 9, 40, 34, 10, 160, 5, 4000, ''),
(139, 0, 14, 10, 43, 52, 10, 161, 5, 1000, ''),
(140, 0, 14, 10, 43, 11, 10, 161, 4, 5000, ''),
(141, 0, 14, 10, 40, 12, 10, 0, 3, 7500, ''),
(142, 0, 40, 9, 43, 34, 1, 162, 5, 500, ''),
(143, 0, 40, 9, 43, 34, 1, 163, 5, 500, ''),
(144, 0, 40, 9, 40, 34, 1, 163, 5, 400, ''),
(145, 0, 40, 9, 43, 34, 1, 164, 5, 500, ''),
(146, 0, 40, 9, 43, 34, 1, 165, 5, 500, ''),
(147, 0, 40, 9, 43, 34, 10, 0, 3, 5000, ''),
(148, 0, 40, 9, 43, 34, 10, 166, 5, 5000, ''),
(149, 0, 40, 9, 43, 34, 10, 167, 5, 5000, ''),
(150, 0, 40, 9, 40, 34, 10, 167, 5, 4000, ''),
(151, 0, 40, 9, 43, 34, 10, 168, 5, 5000, ''),
(152, 0, 40, 9, 40, 34, 10, 168, 5, 4000, ''),
(153, 0, 40, 9, 43, 34, 10, 169, 5, 5000, ''),
(154, 0, 40, 9, 40, 34, 10, 169, 5, 4000, ''),
(155, 0, 40, 9, 43, 34, 10, 170, 5, 5000, ''),
(156, 0, 40, 9, 40, 34, 10, 170, 5, 4000, ''),
(157, 0, 40, 9, 43, 34, 300, 171, 5, 150000, ''),
(158, 0, 40, 9, 40, 34, 123, 172, 4, 49200, ''),
(159, 0, 40, 9, 43, 34, 100, 173, 5, 50000, ''),
(160, 0, 40, 9, 43, 34, 5, 174, 5, 2500, ''),
(161, 0, 40, 9, 40, 34, 5, 174, 4, 2000, ''),
(162, 0, 9, 9, 47, 13, 1, 174, 5, 222, ''),
(163, 0, 9, 9, 43, 11, 1, 174, 5, 300, ''),
(164, 0, 9, 9, 43, 13, 1, 174, 5, 100, ''),
(165, 0, 9, 9, 47, 13, 10, 175, 2, 2220, ''),
(166, 0, 9, 9, 43, 13, 10, 175, 2, 1000, ''),
(167, 0, 9, 9, 43, 11, 10, 175, 2, 3000, ''),
(168, 0, 9, 9, 47, 13, 10, 0, 3, 2220, ''),
(169, 0, 9, 9, 47, 13, 100, 176, 3, 22200, ''),
(170, 0, 52, 14, 43, 11, 10, 177, 3, 1000, ''),
(171, 0, 12, 10, 40, 12, 10, 178, 3, 550, ''),
(172, 0, 12, 10, 40, 12, 10, 179, 3, 550, ''),
(173, 0, 12, 10, 40, 12, 10, 180, 3, 550, ''),
(174, 0, 12, 10, 40, 12, 10, 181, 3, 550, ''),
(175, 0, 12, 10, 40, 12, 10, 182, 5, 550, ''),
(176, 0, 12, 10, 43, 34, 10, 182, 5, 750, ''),
(177, 0, 12, 10, 43, 13, 10, 182, 5, 5000, ''),
(178, 0, 12, 10, 40, 12, 10, 183, 4, 6050, ''),
(179, 0, 12, 10, 43, 34, 10, 183, 4, 8250, ''),
(180, 0, 12, 10, 43, 13, 10, 183, 4, 55000, ''),
(181, 0, 12, 10, 40, 12, 10, 184, 4, 1550, ''),
(182, 0, 12, 10, 43, 34, 10, 184, 4, 1750, ''),
(183, 0, 12, 10, 43, 13, 10, 184, 4, 6000, ''),
(184, 0, 12, 10, 40, 12, 10, 185, 1, 550, ''),
(185, 0, 12, 10, 43, 34, 10, 185, 1, 750, ''),
(186, 0, 12, 10, 43, 13, 10, 185, 1, 5000, ''),
(187, 0, 9, 9, 47, 13, 100, 186, 3, 22200, ''),
(188, 0, 9, 9, 47, 13, 100, 187, 3, 22200, ''),
(189, 0, 9, 9, 47, 13, 11, 188, 2, 2442, ''),
(190, 0, 9, 9, 43, 13, 11, 188, 2, 1100, ''),
(191, 0, 9, 9, 43, 11, 11, 188, 2, 3300, ''),
(192, 0, 12, 10, 40, 12, 10, 185, 1, 550, ''),
(193, 0, 12, 10, 40, 12, 10, 185, 1, 550, ''),
(194, 0, 9, 9, 43, 13, 30, 189, 5, 3000, ''),
(195, 0, 9, 9, 43, 13, 30, 190, 5, 3000, ''),
(196, 0, 9, 9, 43, 13, 30, 191, 2, 3000, ''),
(197, 0, 9, 9, 43, 11, 72, 191, 2, 21600, ''),
(198, 0, 9, 9, 47, 13, 100, 191, 2, 22200, ''),
(199, 0, 12, 10, 40, 12, 100, 182, 5, 5500, ''),
(200, 0, 42, 9, 41, 11, 50, 192, 5, 2600, ''),
(201, 0, 9, 9, 43, 11, 10, 193, 3, 3000, ''),
(202, 0, 9, 9, 43, 11, 10, 194, 3, 3000, ''),
(203, 0, 52, 14, 43, 11, 10, 195, 3, 1000, ''),
(204, 0, 52, 14, 43, 11, 100, 196, 5, 10000, ''),
(205, 0, 40, 9, 43, 34, 100, 196, 5, 50000, ''),
(206, 0, 40, 9, 43, 11, 50, 196, 5, 2500, ''),
(207, 0, 52, 14, 43, 11, 100, 197, 5, 10000, ''),
(208, 0, 52, 14, 43, 11, 100, 198, 5, 10000, ''),
(209, 0, 52, 14, 43, 11, 100, 199, 3, 10000, ''),
(210, 0, 40, 9, 43, 34, 50, 200, 2, 25000, ''),
(211, 0, 40, 9, 43, 11, 50, 200, 2, 2500, ''),
(212, 0, 40, 9, 43, 34, 50, 201, 2, 25000, ''),
(213, 0, 40, 9, 43, 11, 50, 201, 2, 2500, ''),
(214, 0, 40, 9, 43, 34, 50, 202, 2, 25000, ''),
(215, 0, 40, 9, 43, 11, 50, 202, 2, 2500, ''),
(216, 0, 40, 9, 43, 34, 50, 203, 2, 25000, ''),
(217, 0, 40, 9, 43, 11, 50, 203, 2, 2500, ''),
(218, 0, 40, 9, 43, 34, 50, 204, 2, 25000, ''),
(219, 0, 40, 9, 43, 11, 50, 204, 2, 2500, ''),
(220, 0, 40, 9, 43, 34, 50, 205, 2, 25000, ''),
(221, 0, 40, 9, 43, 11, 50, 205, 2, 2500, ''),
(222, 0, 40, 9, 43, 34, 50, 206, 2, 25000, ''),
(223, 0, 40, 9, 43, 11, 50, 206, 2, 2500, ''),
(224, 0, 40, 9, 43, 34, 50, 207, 2, 25000, ''),
(225, 0, 40, 9, 43, 11, 50, 207, 2, 2500, ''),
(226, 0, 40, 9, 43, 34, 50, 208, 2, 25000, ''),
(227, 0, 40, 9, 43, 11, 50, 208, 2, 2500, ''),
(228, 0, 40, 9, 43, 34, 100, 209, 3, 50000, ''),
(229, 0, 42, 9, 41, 11, 100, 210, 2, 5200, ''),
(230, 0, 42, 9, 41, 11, 100, 211, 2, 5200, ''),
(231, 0, 9, 9, 47, 13, 500, 211, 2, 111000, ''),
(232, 0, 42, 9, 41, 11, 100, 212, 2, 5200, ''),
(233, 0, 9, 9, 47, 13, 500, 212, 2, 111000, ''),
(234, 0, 12, 10, 40, 12, 10, 213, 2, 550, ''),
(235, 0, 12, 10, 43, 34, 10, 213, 2, 750, ''),
(236, 0, 12, 10, 43, 13, 10, 213, 2, 5000, ''),
(237, 0, 12, 10, 40, 12, 10, 214, 2, 550, ''),
(238, 0, 12, 10, 43, 34, 10, 214, 2, 750, ''),
(239, 0, 12, 10, 43, 13, 10, 214, 2, 5000, ''),
(240, 0, 12, 10, 40, 12, 10, 215, 2, 550, ''),
(241, 0, 12, 10, 43, 34, 10, 215, 2, 750, ''),
(242, 0, 12, 10, 43, 13, 10, 215, 2, 5000, ''),
(243, 0, 12, 10, 40, 12, 10, 216, 2, 1550, ''),
(244, 0, 12, 10, 43, 34, 10, 216, 2, 1750, ''),
(245, 0, 12, 10, 43, 13, 10, 216, 2, 6000, ''),
(246, 0, 12, 10, 40, 12, 10, 217, 2, 1550, ''),
(247, 0, 12, 10, 43, 34, 10, 217, 2, 1750, ''),
(248, 0, 12, 10, 43, 13, 10, 217, 2, 6000, ''),
(249, 0, 12, 10, 40, 12, 10, 218, 2, 1550, ''),
(250, 0, 12, 10, 43, 34, 10, 218, 2, 1750, ''),
(251, 0, 12, 10, 43, 13, 10, 218, 2, 6000, ''),
(252, 0, 12, 10, 43, 34, 100, 219, 3, 7500, '');

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
(40, 'new size'),
(52, 'large'),
(54, 'a');

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
(28, 37, 5, 4, '1748548004', 'testnote', '1715710539', 0, 0, 0, 0),
(29, 37, 5, 4, '1748548004', 'testnote', '1747333764', 0, 0, 0, 0),
(30, 37, 5, 4, '1748548004', 'testnote', '1747212579\n', 0, 0, 0, 0),
(31, 37, 5, 4, '1748548004', 'testnote', '1747212581', 0, 0, 0, 0),
(32, 37, 5, 4, '1748548004', 'testnote', '1747212954', 0, 0, 0, 0),
(33, 37, 5, 4, '1748548004', 'testnote', '1747212959', 0, 0, 0, 0),
(34, 37, 5, 4, '1748548004', 'testnote', '1747213015', 0, 0, 0, 0),
(37, 37, 5, 4, '1748600800 ', 'testnote', '1747213194', 0, 0, 0, 0),
(39, 37, 2, 4, '1756941999', 'testnote', '1747213229', 0, 0, 0, 0),
(40, 37, 5, 4, '1748548004', 'testnote', '1747213267', 0, 0, 0, 0),
(41, 3, 5, 4, '1756857600', 'test', '1747218628', 0, 0, 0, 0),
(42, 3, 5, 4, '1748600800 ', '', '1747218868', 0, 0, 0, 0),
(43, 3, 1, 4, '1758672000', 'test note', '1747219750', 0, 0, 0, 0),
(44, 38, 5, 4, '1748600800 ', '', '1748051641', 0, 0, 0, 0),
(45, 39, 2, 4, '1760570799', '', '1748052859', 0, 0, 0, 0),
(46, 40, 5, 4, '1748600800 ', '', '1748053661', 0, 0, 0, 0),
(47, 41, 5, 4, '1748600800 ', '', '1748053714', 0, 0, 0, 0),
(50, 44, 5, 4, '1756857600', '', '1748054035', 0, 0, 0, 0),
(51, 45, 5, 4, '1748600800', '', '1748054042', 0, 0, 0, 0),
(52, 46, 5, 4, '1748620800', 'testnote', '1748275242', 0, 0, 0, 0),
(53, 47, 5, 4, '1748620800', 'testnote', '1748217971', 0, 0, 0, 0),
(54, 48, 5, 4, '1748620800', '32', '1748372167', 0, 0, 0, 0),
(82, 76, 3, 4, '1753459200', '', '1752900475', 0, 0, 0, 0),
(83, 77, 3, 4, '1753459200', '', '1752900975', 0, 0, 0, 0),
(84, 78, 5, 4, '1753372800', '', '1752901072', 0, 0, 0, 0),
(85, 79, 3, 4, '1755100800', 'new notes', '1754416359', 0, 0, 0, 0),
(86, 80, 3, 4, '1755792000', 'new', '1754416456', 0, 0, 0, 0),
(87, 81, 3, 4, '1755100800', '', '1754417283', 0, 0, 0, 0),
(88, 82, 3, 4, '1755100800', '', '1754417346', 0, 0, 0, 0),
(89, 83, 3, 4, '1755187200', '', '1754632153', 0, 0, 0, 0),
(90, 84, 3, 4, '1755187200', '', '1754632395', 0, 0, 0, 0),
(91, 85, 3, 4, '1755100800', 'test note ni isaac', '1754632700', 0, 0, 0, 0),
(92, 86, 5, 4, '1755187200', '', '1754842466', 0, 0, 0, 0),
(93, 87, 5, 4, '1755014400', 'aug 13', '1754842516', 0, 0, 0, 0),
(94, 88, 5, 4, '1755619200', 'aug 20', '1754843673', 0, 0, 0, 0),
(95, 89, 3, 4, '1755878400', 'test 12', '1754974256', 0, 0, 0, 0),
(96, 90, 3, 4, '1755705600', '', '1755033982', 0, 0, 0, 0),
(97, 91, 5, 4, '1756483200', '\n', '1756441315', 0, 0, 0, 0),
(98, 92, 4, 4, '1757001600', 'Ungoo', '1756548564', 0, 0, 0, 0),
(99, 93, 3, 4, '1760544000', 'x note', '1756567815', 0, 0, 0, 0),
(100, 94, 3, 4, '1757692800', 'xtest', '1756567977', 0, 0, 0, 0),
(101, 95, 4, 4, '1756915200', '2321', '1756568142', 0, 0, 0, 0),
(102, 96, 3, 4, '1757520000', '...', '1756589449', 0, 0, 0, 0),
(103, 97, 1, 4, '1760140800', '3.3', '1756614400', 0, 0, 0, 275),
(104, 98, 4, 4, '1756915200', '1', '1756614438', 0, 0, 0, 0),
(105, 99, 4, 4, '1756915200', '.23', '1756614523', 0, 0, 0, 0),
(106, 100, 1, 4, '1760025600', 'asdas', '1756671421', 0, 0, 0, 0),
(109, 103, 5, 4, '1756656000', '', '1756729701', 0, 0, 0, 0),
(110, 104, 5, 4, '1756656000', '...', '1756729776', 0, 0, 0, 0),
(111, 105, 5, 4, '1756656000', '', '1756731096', 0, 0, 0, 0),
(112, 106, 5, 4, '1756656000', '', '1756731149', 0, 0, 0, 0),
(113, 107, 5, 4, '1756656000', '', '1756731155', 0, 0, 0, 0),
(114, 108, 5, 4, '1756656000', '', '1756731375', 0, 0, 0, 0),
(115, 109, 5, 4, '1756656000', '', '1756732195', 0, 0, 0, 0),
(116, 0, 1, 4, '1757520000', 'test1', '1756732301', 0, 0, 0, 0),
(118, 0, 5, 4, '1756656000', '...', '1756732772', 0, 0, 0, 0),
(119, 0, 5, 4, '1756656000', '', '1756732928', 0, 0, 0, 0),
(120, 0, 4, 4, '1757347200', '...', '1756733204', 0, 0, 0, 0),
(121, 111, 5, 4, '1756656000', '', '1756733247', 0, 0, 0, 0),
(122, 0, 5, 4, '1756656000', '', '1756734339', 0, 0, 0, 0),
(123, 0, 5, 4, '1756656000', '', '1756734379', 0, 0, 0, 0),
(124, 0, 5, 4, '1756656000', '', '1756734548', 0, 0, 0, 0),
(125, 0, 5, 4, '1756656000', '', '1756740238', 0, 0, 0, 0),
(126, 0, 5, 4, '1756742400', '', '1756740293', 0, 0, 0, 0),
(127, 0, 5, 4, '1756742400', '', '1756740349', 0, 0, 0, 0),
(128, 0, 5, 4, '1756742400', '', '1756740697', 0, 0, 0, 0),
(129, 0, 5, 4, '1756656000', '', '1756740728', 0, 0, 0, 0),
(130, 0, 5, 4, '1756656000', '', '1756740892', 0, 0, 0, 0),
(131, 0, 5, 4, '1756656000', '', '1756741180', 0, 0, 0, 0),
(132, 0, 5, 4, '1756656000', '', '1756741257', 0, 0, 0, 0),
(133, 0, 5, 4, '1756656000', '', '1756741972', 0, 0, 0, 0),
(134, 0, 5, 4, '1756656000', '', '1756742678', 0, 0, 0, 585),
(135, 0, 5, 4, '1756742400', '', '1756744082', 0, 0, 0, 8610),
(136, 0, 5, 4, '1756742400', '', '1756749877', 0, 0, 0, 0),
(137, 0, 5, 4, '1756742400', '', '1756749885', 0, 0, 0, 0),
(143, 0, 5, 4, '1756742400', '', '1756751662', 0, 0, 0, 0),
(144, 0, 5, 4, '1756742400', '', '1756751668', 0, 0, 0, 0),
(145, 0, 5, 4, '1756742400', '', '1756751700', 0, 0, 0, 0),
(146, 0, 5, 4, '1756742400', '', '1756751718', 0, 0, 0, 0),
(147, 0, 2, 4, '1757546799', '', '1756751727', 0, 0, 0, 4000),
(148, 0, 5, 4, '1756742400', '', '1756751820', 0, 0, 0, 55),
(149, 0, 5, 4, '1756742400', '', '1756751950', 0, 0, 0, 610),
(150, 112, 3, 4, '1756828800', '', '1756753267', 0, 0, 0, 650),
(151, 0, 5, 4, '1756742400', '', '1756806714', 0, 0, 0, 23500),
(152, 38, 4, 4, '1756742400', '', '1756807430', 0, 0, 0, 23500),
(153, 38, 4, 4, '1756742400', '', '1756807438', 0, 0, 0, 23500),
(154, 128, 4, 4, '1756742400', '', '1756811236', 0, 0, 0, 4000),
(155, 0, 4, 4, '1756742400', '', '1756811274', 0, 0, 0, 4000),
(156, 38, 5, 4, '1756742400', '', '1756811560', 0, 0, 0, 110),
(157, 0, 5, 4, '1756742400', 'quick order no customer details', '1756811589', 0, 0, 0, 110),
(158, 38, 5, 4, '1756742400', '', '1756813984', 0, 0, 0, 110),
(159, 38, 5, 4, '1756742400', '', '1756814070', 0, 0, 0, 400),
(160, 0, 5, 4, '1756742400', 'quick order no customer details', '1756814181', 0, 0, 0, 4011),
(161, 0, 5, 4, '1756857600', 'quick order no customer details', '1756814339', 0, 0, 0, 6000),
(162, 0, 5, 4, '1756742400', 'quick order no customer details', '1756818528', 0, 0, 0, 500),
(163, 0, 5, 4, '1756742400', 'quick order no customer details', '1756818558', 0, 0, 0, 900),
(164, 0, 5, 4, '1756742400', 'quick order no customer details', '1756819732', 0, 0, 0, 500),
(165, 0, 5, 4, '1756742400', 'quick order no customer details', '1756823949', 0, 0, 0, 500),
(166, 38, 5, 4, '1756742400', '', '1756824033', 0, 0, 0, 5000),
(167, 0, 5, 4, '1756742400', 'quick order no customer details', '1756824937', 0, 0, 0, 9000),
(168, 0, 5, 4, '1756742400', 'quick order no customer details', '1756824990', 0, 0, 0, 9000),
(169, 0, 5, 4, '1756742400', 'quick order no customer details', '1756825025', 0, 0, 0, 9000),
(170, 0, 4, 4, '1756742400', 'quick order no customer details', '1756825097', 0, 0, 0, 9000),
(171, 0, 5, 4, '1756742400', 'quick order no customer details', '1756826173', 0, 0, 0, 150000),
(172, 38, 4, 4, '1756742400', '', '1756826885', 0, 0, 0, 49200),
(173, 0, 5, 4, '1756828800', 'quick order no customer details', '1756833881', 0, 0, 0, 50000),
(174, 0, 5, 4, '1756857600', 'quick order no customer details', '1756833944', 0, 0, 0, 5122),
(175, 0, 2, 4, '1757114799', 'quick order no customer details', '1756841028', 0, 0, 0, 0),
(176, 0, 3, 4, '1756841147', 'shirt only buy no print', '1756841147', 0, 0, 0, 0),
(177, 0, 3, 4, '1756842519', 'shirt only buy no print', '1756842519', 0, 0, 0, 0),
(178, 0, 3, 4, '1756842597', 'shirt only buy no print', '1756842597', 0, 0, 0, 0),
(179, 0, 3, 4, '1756842715', 'shirt only buy no print', '1756842715', 0, 0, 0, 550),
(180, 0, 3, 4, '1756842782', 'shirt only buy no print', '1756842782', 0, 0, 0, 550),
(181, 0, 3, 4, '1756842829', 'shirt only buy no print', '1756842829', 0, 0, 0, 550),
(182, 0, 5, 4, '1756828800', 'quick order no customer details', '1756842871', 0, 0, 0, 21800),
(183, 0, 4, 4, '1756828800', 'quick order no customer details', '1756843025', 0, 0, 0, 69300),
(184, 0, 4, 4, '1756828800', 'quick order no customer details', '1756843174', 0, 0, 0, 9300),
(185, 0, 2, 4, '1756941999', 'quick order no customer details', '1756843321', 0, 0, 0, 12400),
(186, 0, 3, 4, '1756843386', 'shirt only buy no print', '1756843386', 0, 0, 0, 22200),
(187, 0, 3, 4, '1756843699', 'shirt only buy no print', '1756843699', 0, 0, 0, 22200),
(188, 38, 1, 4, '1756915200', '', '1756843763', 0, 0, 0, 10142),
(189, 0, 5, 4, '1756828800', 'quick order no customer details', '1756846755', 0, 0, 0, 0),
(190, 0, 5, 4, '1756828800', 'quick order no customer details', '1756846883', 0, 0, 0, 0),
(191, 0, 2, 4, '1757028399', 'quick order no customer details', '1756846902', 0, 0, 0, 67000),
(192, 0, 5, 4, '1756828800', 'quick order no customer details', '1756910034', 0, 0, 0, 7600),
(193, 0, 3, 4, '1756910092', 'shirt only buy no print', '1756910092', 0, 0, 0, 3000),
(194, 0, 3, 4, '1756910137', 'shirt only buy no print', '1756910137', 0, 0, 0, 3000),
(195, 0, 3, 4, '1756911047', 'shirt only buy no print', '1756911047', 0, 0, 100, 1000),
(196, 0, 5, 4, '1756828800', 'quick order no customer details', '1756911134', 0, 0, 1000, 87500),
(197, 0, 5, 4, '1756828800', 'quick order no customer details', '1756915139', 0, 0, 0, 15000),
(198, 38, 5, 4, '1756828800', '', '1756915149', 0, 0, 0, 15000),
(199, 0, 3, 4, '1756915159', 'shirt only buy no print', '1756915159', 0, 0, 0, 10000),
(200, 0, 1, 4, '1756915200', 'quick order no customer details', '1756919443', 100, 0, 0, 0),
(201, 0, 1, 4, '1756915200', 'quick order no customer details', '1756919721', 100, 0, 0, 0),
(202, 0, 1, 4, '1756915200', 'quick order no customer details', '1756919889', 100, 0, 0, 0),
(203, 0, 1, 4, '1756915200', 'quick order no customer details', '1756919898', 100, 0, 0, 0),
(204, 0, 1, 4, '1756915200', 'quick order no customer details', '1756919903', 100, 0, 0, 0),
(205, 0, 1, 4, '1756915200', 'quick order no customer details', '1756919954', 100, 0, 0, 0),
(206, 0, 1, 4, '1756915200', 'quick order no customer details', '1756919968', 100, 0, 0, 0),
(207, 0, 1, 4, '1756915200', 'quick order no customer details', '1756920003', 100, 37500, 0, 37500),
(208, 0, 1, 4, '1756915200', 'quick order no customer details', '1756920013', 100, 37500, 5000, 32500),
(209, 0, 3, 4, '1756920070', 'shirt only buy no print', '1756920070', 0, 50000, 1000, 49000),
(210, 0, 1, 4, '1756915200', 'quick order no customer details', '1756921348', 100, 15200, 5000, 10200),
(211, 38, 1, 4, '1757001600', '', '1756921708', 100, 176200, 10000, 166200),
(212, 0, 1, 4, '1756915200', 'quick order no customer details', '1756921724', 100, 176200, 10000, 166200),
(213, 0, 1, 4, '1757001600', 'quick order no customer details', '1756922048', 100, 9300, 100, 9200),
(214, 0, 1, 4, '1757001600', 'quick order no customer details', '1756922134', 100, 9300, 100, 9200),
(215, 0, 1, 4, '1757001600', 'quick order no customer details', '1756922153', 100, 9300, 100, 9200),
(216, 0, 1, 4, '1757001600', 'quick order no customer details', '1756922309', 100, 0, 100, 0),
(217, 0, 1, 4, '1757001600', 'quick order no customer details', '1756922332', 100, 9300, 100, 9200),
(218, 38, 1, 4, '1757001600', '', '1756922360', 100, 9300, 100, 9200),
(219, 0, 3, 4, '1756922401', 'shirt only buy no print', '1756922401', 0, 7500, 1000, 6500);

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
  ADD KEY `fk_status` (`status`),
  ADD KEY `orders_ibfk_5` (`inventory_id`);

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
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `customer_detail`
--
ALTER TABLE `customer_detail`
  MODIFY `cd_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `design`
--
ALTER TABLE `design`
  MODIFY `design_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=269;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=862;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=253;

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
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  MODIFY `td_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=220;

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
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brand` (`brand_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`type`) REFERENCES `type` (`type_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`color`) REFERENCES `color` (`color_id`),
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`size`) REFERENCES `size` (`size_id`),
  ADD CONSTRAINT `orders_ibfk_5` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`inventory_id`);

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
