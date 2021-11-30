CREATE DATABASE  IF NOT EXISTS `dados212d`
USE `dados212d`;

-- Estrutura da tabela `fabricantes`

DROP TABLE IF EXISTS `fabricantes`;

CREATE TABLE `fabricantes` (
  `fab_codigo` int NOT NULL AUTO_INCREMENT,
  `fab_nome` varchar(40) DEFAULT NULL,
  `fab_fantasia` varchar(15) DEFAULT NULL,
  `fab_pais` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`fab_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Inserts da tabela `fabricantes`

LOCK TABLES `fabricantes` WRITE;

INSERT INTO `fabricantes` VALUES (1,'Fernanda Fernandes','Fernandes','Brasil'),(2,'Aguinaldo Pereira','Aguinho','Brasil'),(3,'Vladimir Verovisky','Vlad','Rússia'),(4,'Willian White','Walter','Estados Unidos'),(5,'Zhao Tianyou','Youtian','China'),(6,'Saeko Sakura','Sakura','Japão');

UNLOCK TABLES;

-- Estrutura da tabela `computadores`

DROP TABLE IF EXISTS `computadores`;

CREATE TABLE `computadores` (
  `cmp_codigo` int NOT NULL AUTO_INCREMENT,
  `cmp_modelo` varchar(20) DEFAULT NULL,
  `cmp_tipo` varchar(10) DEFAULT NULL,
  `cmp_memoria` varchar(10) DEFAULT NULL,
  `cmp_garantia` int DEFAULT NULL,
  `fab_codigo` int NOT NULL,
  KEY `fk_pcs_fabricantes_idx` (`fab_codigo`),
  CONSTRAINT `fk_pcs_fabricantes` FOREIGN KEY (`fab_codigo`) REFERENCES `fabricantes` (`fab_codigo`),
  PRIMARY KEY (`cmp_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Inserts da tabela `computadores`

LOCK TABLES `computadores` WRITE;

INSERT INTO `computadores` VALUES (1,'Preto portatil','Notebook','4RAM', 24 , 1),(2,'Branco retro','Desktop','2RAM', 12, 3),(3,'Vermelho moderno','Desktop','8RAM', 36, 5),(4,'Mini cor-de-rosa','Notebook','4RAM', 12, 6);

UNLOCK TABLES;