-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 01:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `youtubeapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `video_data`
--

CREATE TABLE `video_data` (
  `title` varchar(500) NOT NULL,
  `published_at` varchar(500) NOT NULL,
  `view_count` varchar(100) NOT NULL,
  `like_count` varchar(100) NOT NULL,
  `comment_count` varchar(100) NOT NULL,
  `video_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video_data`
--

INSERT INTO `video_data` (`title`, `published_at`, `view_count`, `like_count`, `comment_count`, `video_id`) VALUES('Custom Checkbox Using CSS', '2023-06-03T14:00:27Z', '2376', '68', '8', 'l_20R1YTspk');
INSERT INTO `video_data` (`title`, `published_at`, `view_count`, `like_count`, `comment_count`, `video_id`) VALUES('What is GitHub?', '2022-11-09T23:32:53Z', '984383', '43774', '1408', 'pBy1zgt0XPc');
INSERT INTO `video_data` (`title`, `published_at`, `view_count`, `like_count`, `comment_count`, `video_id`) VALUES('Web Developer Portfolio - 9.5/10 (Front End, React)', '2023-03-07T18:44:37Z', '855193', '26977', '388', 'VjiWpGR82t0');
INSERT INTO `video_data` (`title`, `published_at`, `view_count`, `like_count`, `comment_count`, `video_id`) VALUES('10,000 Drawings in 1000 Days!', '2019-03-10T19:50:52Z', '9379852', '167812', '11664', 'Mqat_PWMhN4');

-- --------------------------------------------------------

--
-- Table structure for table `video_data_old1`
--

CREATE TABLE `video_data_old1` (
  `row_Id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `published_at` varchar(255) NOT NULL,
  `view_count` varchar(255) NOT NULL,
  `like_count` varchar(255) NOT NULL,
  `comment_count` varchar(255) NOT NULL,
  `video_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video_data_old1`
--

INSERT INTO `video_data_old1` (`row_Id`, `title`, `published_at`, `view_count`, `like_count`, `comment_count`, `video_id`) VALUES(12, 'Bathroom-ல இப்படி பண்ணிட்டானுங்களே😳🖐🏻 |  Kolkata Epi-4 | Vj Siddhu Vlogs', '2023-12-24T04:30:11Z', '85433', '22104', '843', '');

-- --------------------------------------------------------

--
-- Table structure for table `video_id`
--

CREATE TABLE `video_id` (
  `vid` int(11) NOT NULL,
  `Vtitle` varchar(150) NOT NULL,
  `Videoid` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `video_data_old1`
--
ALTER TABLE `video_data_old1`
  ADD PRIMARY KEY (`row_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `video_data_old1`
--
ALTER TABLE `video_data_old1`
  MODIFY `row_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
