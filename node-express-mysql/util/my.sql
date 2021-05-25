CREATE TABLE `node-complete`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` TEXT NOT NULL,
  `imageURL` VARCHAR(2555) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
