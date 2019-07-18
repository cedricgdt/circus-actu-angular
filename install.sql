CREATE DATABASE circus;

USE circus;

CREATE TABLE admins (
  id_admin INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  picture_admin VARCHAR(255) NOT NULL,
  describtion_admin VARCHAR(255),
  age INT,
  ville VARCHAR(50)
);

INSERT INTO admins 
  (email, password, picture_admin, first_name, last_name, describtion_admin, age, ville)
VALUES
  ('cedric.gardianot42@gmail.com', '$2b$10$ukXJQ5jVOyvJeQa1Qb/o5.cAoWzK1836sn0B4uLn03m18H8Vh8sxS', 'https://media.licdn.com/dms/image/C4E03AQHu3la0w-auUw/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=GXMfVDgLr9jLtYYmHSgD2I8c2i7HqQEUHLWs4XNP9mM', 'Cédric', 'Gardianot', "Je suis admin sur le site Circus'Actu, pendant mon temps libre, j'aime descendre de la montagne à giraffe !", 24, 'Nantes'),
  ('dupond.dupont42@gmail.com', '$2b$10$ukXJQ5jVOyvJeQa1Qb/o5.cAoWzK1836sn0B4uLn03m18H8Vh8sxS', 'https://www.lamarquezone.fr/images/Image/DUPONDT7_1325258893.jpg', 'Dupond', 'Dupont', "J'aime ne rien faire !", 53, 'Paris');

CREATE TABLE articles (
  id_article INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  describtion VARCHAR(2000) NOT NULL,
  picture VARCHAR(500) NOT NULL,
  article_date DATETIME,
  autor INT NOT NULL,
  FOREIGN KEY (autor) REFERENCES admins(id_admin)
);

INSERT INTO articles
  (title, describtion, picture, article_date, autor)
VALUES
  ('Les Sables-d’Olonne. Le cirque Zavatta est de retour', 'À partir du 16 et jusqu’au 31 juillet, le cirque Zavatta pose ses valises aux Sables-d’Olonne, avec un nouveau spectacle. Les artistes emmènent les spectateurs sur les thèmes des dessins animés. Le cirque s’installe comme à son habitude sur le terrain des Sauniers, aux Sables-d’Olonne du 16 au 31 juillet. « Nous venons chaque année, depuis au moins vingt-cinq ans, mais cette fois-ci, nous avons un spectacle qui comporte beaucoup plus de thématiques », explique James Douchet, le directeur du cirque. Chaque numéro du spectacle est réalisé dans l’univers du dessin animé. Les princesses des contes pour enfants, Peter Pan, Pirates des Caraïbes, ou encore la Belle et la Bête seront au cœur du spectacle de deux heures. Les spectateurs pourront y retrouver les classiques animaux sauvages, numéros de magie ou encore les clowns.', 'https://media.ouest-france.fr/v1/pictures/a1e6011b2086ee9ecc7a02fdb871b309-les-sables-d-olonne-le-cirque-zavatta-est-de-retour.jpg?width=1260&height=712&focuspoint=50%2C25&cropresize=1&client_id=cmsfront&sign=391b019fb731622b387db5380abb5b91481e1565cbecd054aec58785048bcdd9', NOW(), 1),
  ('Trignac : deux plaintes déposées contre le cirque Zavatta', 'Le cirque  Claudio Zavatta s’est installé en début de semaine à Trignac (Loire-Atlantique) sur un vaste terrain entre l’hypermarché Auchan et la quatre-voies. La commune et le département, propriétaires du terrain, ont porté plainte pour occupation illégale. Les spectacles doivent commencer ce mercredi 17 juillet et se prolonger jusqu’au samedi 31 août, en présence du célèbre dompteur, Frédéric Edelstein. L’annonce du dépôt de plainte a été faite sur la page Facebook du groupe de la majorité Ensemble, agissons à Trignac. Le terrain sur lequel le cirque s’est installé est partagé entre la Ville et le département via Loire Atlantique Developpement Sela, l’agence qui gère ses programmes immobiliers, qui a également porté plainte auprès du Tribunal administratif de Nantes.', 'https://static.actu.fr/uploads/2019/07/25234-190717124831774-0-854x569.jpg', NOW(), 2),
  ('Cirque Zavatta. J’ai cru avoir une hallucination', 'Installé dans un pré au Rouillen, le cirque Zavatta donnera encore trois représentations successives, ce jeudi à 18 h, samedi à 20 h 30 et dimanche à 15 h, avant de démonter le chapiteau et partir sous d’autres cieux. Aperçu ! Le moins que l’on puisse dire, c’est que l’arrivée inattendue et l’installation rapide du cirque Zavatta en bordure de voie express au Rouillen a fait causer. Si certains s’émeuvent de voir des animaux « exploités » par des hommes, d’autres, nombreux, se réjouissent de voir toute une ménagerie exotique brouter tranquillement l’herbe du pré Le Roux.', 'https://www.letelegramme.fr/images/2019/07/04/le-dompteur-et-ses-lionnes-evoluent-avec-grace-et-calme-dans_4670674_493x330p.jpg?v=1', NOW(), 1);
