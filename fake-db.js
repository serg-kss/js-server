const likeCount = {
  min: 15,
  max: 200,
};

const avatarCount = {
  min: 1,
  max: 7,
};

const comments = [
  "Все відмінно!",
  "Загалом все непогано. Але не всі.",
  "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
  "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
  "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
  "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?",
];

const names = ["Яйцеслав", "Педуард", "Синий", "Просто Толик"];

// функция для получения случайного числа от 15 до 200
function getRandomLikes() {
  let randomNum = 0;
  while (randomNum < likeCount.min) {
    randomNum = Math.floor(Math.random() * likeCount.max);
  }
  return randomNum;
}

// генерация Id для комментов
function getId() {
  return Math.floor(Math.random() * 200);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

//генерация коммента
function getComment(id) {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInt(avatarCount.min, avatarCount.max)}.svg`,
    message: comments[Math.floor(Math.random() * comments.length)],
    name: names[Math.floor(Math.random() * names.length)],
  };
}

//генерация массива комментов
function getRandomComments() {
  const commentsList = [];

  for (let index = 0; index < Math.floor(Math.random() * 101); index++) {
    let id = getId();

    //проверяем есть ли сгенерированный id в массиве, если есть генерируем заново
    for (let a = 0; a <= commentsList.length; a++) {
      if (commentsList.length != 0) {
        if (commentsList[a]?.id === id) {
          id = getId();
        }
      }
    }
    commentsList.push(getComment(id));
  }
  return commentsList;
}

// инициализация фото
function getPhotos() {
  const photos = [];
  for (let index = 0; index < 25; index++) {
    photos.push({
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: "some description here!",
      likes: getRandomLikes(),
      comments: getRandomComments(),
    });
  }
  return photos;
}

// создание файла и запись и чтение обьекта конвертация в json для отправки на фронтенд
const fs = require("fs");
const path = "fake.txt";

function createTxtFile() {
  const data = getPhotos();

  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify(data), "utf8");
  }
}

function readTxtFile() {
  return JSON.parse(fs.readFileSync(path, "utf8"))
}
module.exports.createTxtFile = createTxtFile();
module.exports.readTxtFile = readTxtFile();
