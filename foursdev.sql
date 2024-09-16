-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2024 at 02:32 PM
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
-- Database: `foursdev`
--

-- --------------------------------------------------------

--
-- Table structure for table `lpleads4s`
--

CREATE TABLE `lpleads4s` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `emailid` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `utm_source` varchar(200) NOT NULL,
  `utm_medium` varchar(200) NOT NULL,
  `utm_campaign` varchar(200) NOT NULL,
  `utm_term` varchar(200) NOT NULL,
  `custom_field_1` varchar(200) DEFAULT NULL,
  `custom_field_2` varchar(200) DEFAULT NULL,
  `custom_field_3` varchar(200) DEFAULT NULL,
  `custom_field_4` varchar(200) DEFAULT NULL,
  `custom_field_5` varchar(200) DEFAULT NULL,
  `custom_field_6` varchar(200) DEFAULT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `flag` int(11) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `lpleads4s`
--

INSERT INTO `lpleads4s` (`id`, `name`, `emailid`, `phone`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `custom_field_1`, `custom_field_2`, `custom_field_3`, `custom_field_4`, `custom_field_5`, `custom_field_6`, `time_stamp`, `flag`) VALUES
(1, 'Test', 'test1@gmail.com', '8888888888', 'Web', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '2024-09-16 12:23:31', 0),
(2, 'Test Banner', 'testing@gmail.com', '9999999999', 'Web', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '2024-09-16 12:26:55', 0),
(3, 'Test Banner', 'testing@gmail.com', '9999999999', 'Web', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '2024-09-16 12:29:28', 0),
(4, 'Test', 'testing3@gmail.com', '9898989898', 'Web', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '2024-09-16 12:31:31', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lpleads4s`
--
ALTER TABLE `lpleads4s`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lpleads4s`
--
ALTER TABLE `lpleads4s`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
