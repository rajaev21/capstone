-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2025 at 04:17 PM
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
(31, 12, 10, 43, 13, 117, 500),
(37, 40, 9, 43, 11, 0, 50),
(38, 40, 9, 43, 34, 101, 500),
(39, 40, 9, 40, 34, 139, 400),
(44, 9, 9, 43, 11, 291, 300),
(52, 12, 10, 40, 12, 123, 55),
(53, 12, 10, 43, 34, 106, 75),
(56, 42, 9, 41, 11, 125, 52),
(57, 42, 9, 46, 11, 0, 122),
(58, 42, 9, 45, 11, 0, 11),
(62, 9, 9, 47, 13, 156, 222),
(63, 9, 9, 45, 11, 61, 1),
(64, 9, 9, 43, 13, 260, 100),
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
(244, 78, 1054, 58, 54, 223, 300),
(245, 78, 1054, 58, 13, 75, 200),
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
(2093, 'transaction order', 53, 109751, 109761, 10, '1757011257', ''),
(2094, 'void order', 52, 1285, 1275, 10, '1757060291', 'item voided'),
(2095, 'void order', 31, 5474, 5464, 10, '1757060293', 'item voided'),
(2096, 'cancel transaction', 53, 109761, 109751, 10, '1757060314', '230 transaction cancelled'),
(2097, 'reorder', 52, 1275, 1285, 10, '1757060332', 'reorder transaction id number 230'),
(2098, 'reorder', 31, 5464, 5474, 10, '1757060332', 'reorder transaction id number 230'),
(2099, 'reorder', 53, 109751, 109761, 10, '1757060332', 'reorder transaction id number 230'),
(2100, 'order expired', 52, 1285, 1275, 10, '1757094253', 'transaction expired'),
(2101, 'order expired', 31, 5474, 5464, 10, '1757094253', 'transaction expired'),
(2102, 'order expired', 52, 1295, 1285, 10, '1757094253', 'transaction expired'),
(2103, 'order expired', 53, 109761, 109751, 10, '1757094253', 'transaction expired'),
(2104, 'order expired', 31, 5484, 5474, 10, '1757094253', 'transaction expired'),
(2105, 'order expired', 53, 109771, 109761, 10, '1757094253', 'transaction expired'),
(2106, 'return item', 53, 271, 109771, 109500, '1757094290', 'x'),
(2107, 'return item', 31, 84, 5484, 5400, '1757094299', 's'),
(2108, 'return item', 52, 95, 1295, 1200, '1757094325', '1200'),
(2109, 'return item', 64, 260, 760, 500, '1757094556', '500'),
(2110, 'return item', 44, 291, 991, 700, '1757094562', '700'),
(2111, 'return item', 245, 85, 785, 700, '1757094580', '700'),
(2112, 'return item', 244, 223, 423, 200, '1757094586', '200'),
(2113, 'return item', 53, 71, 271, 200, '1757094622', '200'),
(2114, 'direct order', 62, 156, 166, 10, '1757098149', 'shirt only buy no print'),
(2115, 'direct order', 56, 55, 60, 5, '1757099364', 'shirt only buy no print'),
(2116, 'direct order', 245, 75, 85, 10, '1757099371', 'shirt only buy no print'),
(2117, 'quick order', 56, 45, 55, 10, '1757099420', 'quick order no customer details'),
(2118, 'quick order', 52, 85, 95, 10, '1757099420', 'quick order no customer details'),
(2119, 'quick order', 52, 84, 85, 1, '1757100572', 'quick order no customer details'),
(2120, 'cancel transaction', 56, 55, 45, 10, '1757100726', '234 transaction cancelled'),
(2121, 'cancel transaction', 52, 94, 84, 10, '1757100726', '234 transaction cancelled'),
(2122, 'cancel transaction', 52, 95, 94, 1, '1757100739', '235 transaction cancelled'),
(2123, 'reorder', 52, 94, 95, 1, '1757101268', 'reorder transaction id number 235'),
(2124, 'reorder', 52, 84, 94, 10, '1757101275', 'reorder transaction id number 230'),
(2125, 'reorder', 31, 74, 84, 10, '1757101275', 'reorder transaction id number 230'),
(2126, 'reorder', 53, 61, 71, 10, '1757101275', 'reorder transaction id number 230'),
(2127, 'order expired', 52, 94, 84, 10, '1757101275', 'transaction expired'),
(2128, 'order expired', 52, 104, 94, 10, '1757101276', 'transaction expired'),
(2129, 'order expired', 31, 84, 74, 10, '1757101275', 'transaction expired'),
(2130, 'order expired', 31, 94, 84, 10, '1757101276', 'transaction expired'),
(2131, 'order expired', 53, 71, 61, 10, '1757101275', 'transaction expired'),
(2132, 'order expired', 53, 81, 71, 10, '1757101276', 'transaction expired'),
(2133, 'order expired', 52, 114, 104, 10, '1757101276', 'transaction expired'),
(2134, 'order expired', 52, 124, 114, 10, '1757101276', 'transaction expired'),
(2135, 'order expired', 31, 114, 94, 10, '1757101276', 'transaction expired'),
(2136, 'order expired', 31, 114, 104, 10, '1757101276', 'transaction expired'),
(2137, 'order expired', 53, 91, 81, 10, '1757101276', 'transaction expired'),
(2138, 'order expired', 53, 101, 91, 10, '1757101276', 'transaction expired'),
(2139, 'reorder', 52, 114, 124, 10, '1757101735', 'reorder transaction id number 230'),
(2140, 'reorder', 31, 104, 114, 10, '1757101735', 'reorder transaction id number 230'),
(2141, 'reorder', 53, 91, 101, 10, '1757101735', 'reorder transaction id number 230'),
(2142, 'order expired', 52, 134, 114, 10, '1757101736', 'transaction expired'),
(2143, 'order expired', 52, 134, 114, 10, '1757101736', 'transaction expired'),
(2144, 'order expired', 31, 114, 104, 10, '1757101736', 'transaction expired'),
(2145, 'order expired', 31, 124, 104, 10, '1757101736', 'transaction expired'),
(2146, 'order expired', 53, 101, 91, 10, '1757101736', 'transaction expired'),
(2147, 'order expired', 53, 111, 101, 10, '1757101736', 'transaction expired'),
(2148, 'reorder', 52, 124, 134, 10, '1757101803', 'reorder transaction id number 230'),
(2149, 'reorder', 31, 114, 124, 10, '1757101803', 'reorder transaction id number 230'),
(2150, 'reorder', 53, 101, 111, 10, '1757101803', 'reorder transaction id number 230'),
(2151, 'order expired', 52, 134, 124, 10, '1757101829', 'transaction expired'),
(2152, 'order expired', 52, 144, 124, 10, '1757101829', 'transaction expired'),
(2153, 'order expired', 31, 134, 114, 10, '1757101829', 'transaction expired'),
(2154, 'order expired', 31, 134, 114, 10, '1757101829', 'transaction expired'),
(2155, 'order expired', 53, 111, 101, 10, '1757101829', 'transaction expired'),
(2156, 'order expired', 53, 121, 111, 10, '1757101829', 'transaction expired'),
(2157, 'reorder', 52, 134, 144, 10, '1757101841', 'reorder transaction id number 230'),
(2158, 'reorder', 31, 124, 134, 10, '1757101841', 'reorder transaction id number 230'),
(2159, 'reorder', 53, 111, 121, 10, '1757101841', 'reorder transaction id number 230'),
(2160, 'transaction order', 52, 124, 134, 10, '1757104376', ''),
(2161, 'transaction order', 53, 101, 111, 10, '1757104376', ''),
(2162, 'transaction order', 31, 114, 124, 10, '1757104376', ''),
(2163, 'quick order', 52, 114, 124, 10, '1757104903', 'quick order no customer details'),
(2164, 'quick order', 31, 107, 114, 7, '1757104903', 'quick order no customer details'),
(2165, 'quick order', 53, 96, 101, 5, '1757104903', 'quick order no customer details'),
(2166, 'quick order', 52, 110, 114, 4, '1757105029', 'quick order no customer details'),
(2167, 'quick order', 53, 91, 96, 5, '1757105029', 'quick order no customer details'),
(2168, 'quick order', 31, 105, 107, 2, '1757105029', 'quick order no customer details'),
(2169, 'cancel transaction', 52, 120, 110, 10, '1757105301', '236 transaction cancelled'),
(2170, 'cancel transaction', 53, 101, 91, 10, '1757105301', '236 transaction cancelled'),
(2171, 'cancel transaction', 31, 115, 105, 10, '1757105301', '236 transaction cancelled'),
(2172, 'cancel transaction', 52, 124, 120, 4, '1757105306', '238 transaction cancelled'),
(2173, 'cancel transaction', 53, 106, 101, 5, '1757105306', '238 transaction cancelled'),
(2174, 'cancel transaction', 31, 117, 115, 2, '1757105306', '238 transaction cancelled'),
(2175, 'cancel transaction', 52, 134, 124, 10, '1757105309', '237 transaction cancelled'),
(2176, 'cancel transaction', 31, 124, 117, 7, '1757105309', '237 transaction cancelled'),
(2177, 'cancel transaction', 53, 111, 106, 5, '1757105309', '237 transaction cancelled'),
(2178, 'reorder', 52, 124, 134, 10, '1757105371', 'reorder transaction id number 237'),
(2179, 'reorder', 31, 117, 124, 7, '1757105371', 'reorder transaction id number 237'),
(2180, 'reorder', 53, 106, 111, 5, '1757105371', 'reorder transaction id number 237'),
(2181, 'transaction order', 56, 45, 55, 10, '1757167126', ''),
(2182, 'direct order', 56, 25, 45, 20, '1757167145', 'shirt only buy no print'),
(2183, 'direct order', 52, 123, 124, 1, '1757167165', 'shirt only buy no print'),
(2184, 'quantity added', 56, 125, 25, 100, '1757167187', 'supplier deliver');

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
(280, 52, 10, 230, 3, 1550, ''),
(281, 31, 10, 230, 3, 6000, ''),
(282, 53, 10, 230, 3, 1750, ''),
(283, 62, 10, 231, 3, 2220, ''),
(284, 56, 5, 232, 3, 260, ''),
(285, 245, 10, 233, 3, 2000, ''),
(286, 56, 10, 234, 1, 1520, ''),
(287, 52, 10, 234, 1, 1550, ''),
(288, 52, 1, 235, 3, 155, ''),
(289, 52, 10, 236, 1, 1550, ''),
(290, 53, 10, 236, 1, 1750, ''),
(291, 31, 10, 236, 1, 6000, ''),
(292, 52, 10, 237, 1, 1550, ''),
(293, 31, 7, 237, 1, 4200, ''),
(294, 53, 5, 237, 1, 875, ''),
(295, 52, 4, 238, 1, 620, ''),
(296, 53, 5, 238, 1, 875, ''),
(297, 31, 2, 238, 1, 1200, ''),
(298, 56, 10, 239, 2, 1520, ''),
(299, 56, 20, 240, 3, 1040, ''),
(300, 52, 1, 241, 3, 55, '');

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
  `grand_total` int(250) NOT NULL,
  `last_updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaction_detail`
--

INSERT INTO `transaction_detail` (`td_id`, `customer_id`, `status`, `user_id`, `deadline`, `note`, `order_date`, `print_price`, `subtotal`, `discount`, `grand_total`, `last_updated`) VALUES
(228, 0, 3, 4, '1757001600', 'quick order no customer details', '1757007859', 100, 9300, 0, 9300, '2025-09-03 16:00:00'),
(229, 0, 3, 4, '1757030400', 'quick order no customer details', '1757008043', 100, 60000, 10000, 83000, '2025-09-02 16:00:00'),
(230, 3, 3, 4, '1757116800', '', '1757011257', 100, 1750, 500, 8800, '2025-09-05 20:29:40'),
(231, 0, 3, 4, '1757098149', 'shirt only buy no print', '1757098149', 0, 2220, 100, 2120, '2025-09-03 02:13:13'),
(232, 0, 3, 4, '1757099364', 'shirt only buy no print', '1757099364', 0, 260, 0, 260, '2025-09-03 00:25:15'),
(233, 0, 3, 4, '1757099371', 'shirt only buy no print', '1757099371', 0, 2000, 0, 2000, '2025-09-02 23:20:25'),
(234, 0, 4, 4, '1757692800', 'quick order no customer details', '1757099420', 100, 1550, 0, 3070, '2025-09-02 23:20:34'),
(235, 0, 3, 4, '1757116800', 'quick order no customer details', '1757100572', 100, 155, 100, 55, '2025-09-05 20:29:53'),
(236, 4, 4, 4, '1757606400', '', '1757104376', 100, 6000, 0, 9300, '2025-09-05 20:48:21'),
(237, 0, 2, 4, '1757116800', 'quick order no customer details', '1757104903', 100, 875, 0, 6625, '2025-09-05 20:49:31'),
(238, 0, 4, 4, '1757088000', 'quick order no customer details', '1757105029', 100, 1200, 0, 2695, '2025-09-05 20:48:26'),
(239, 85, 1, 4, '1757174400', '', '1757167126', 100, 1520, 0, 1520, '2025-09-06 13:58:46'),
(240, 0, 3, 4, '1757167145', 'shirt only buy no print', '1757167145', 0, 1040, 0, 1040, '2025-09-06 13:59:05'),
(241, 0, 3, 4, '1757167165', 'shirt only buy no print', '1757167165', 0, 55, 0, 55, '2025-09-06 13:59:25');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2185;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;

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
  MODIFY `td_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=242;

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
