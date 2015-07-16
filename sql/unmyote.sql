-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 16 Juillet 2015 à 21:31
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `unmyote`
--
CREATE DATABASE IF NOT EXISTS `unmyote` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `unmyote`;

-- --------------------------------------------------------

--
-- Structure de la table `subscriber`
--

CREATE TABLE IF NOT EXISTS `subscriber` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=24 ;

--
-- Contenu de la table `subscriber`
--

INSERT INTO `subscriber` (`id`, `email`) VALUES
(17, 'dsfqsdfqs@qqfdfq'),
(6, 'fqdfqsdf@sdfsqdfsdf'),
(8, 'ghjklm@ghjkl'),
(1, 'hello@gmail.com'),
(15, 'qsdfqsdf@hgqdsdfqsdqvg'),
(7, 'qsdfqsdfq@gmail.com'),
(16, 'qsdqfdsfdsqdsqfqdfs@qdskbbqdhbkqsd'),
(19, 'qsdqsdfqsdfqsdf@hdbqdbhjfqs'),
(21, 'qsdqsdfqsdfqsdfqsdfqsdfqsd@hdbqdbhjfqs'),
(22, 'qsfd@qsfdhbqbhjbqdf'),
(18, 'sdf@gfh'),
(14, 'sdfqsdfqsdfqsfd@sfkjbfqsdjbkqdfbklsd'),
(9, 'sqdfqsdfqsdf@QDqsdQSD'),
(10, 'sqdfqsdfqsdf@qdsfqsdfqsdfq'),
(11, 'SQDQSD@JKSVQDJGVqskdg'),
(12, 'sqdqsdfsd@sfgsfdgfsdfgsd'),
(5, 'tata@gmail.com'),
(3, 'test@gmail'),
(4, 'toto@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
