import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Хранение кода подтверждения
let verificationCode = null;

app.use(cors());
app.use(express.json());

app.post('/send-sms', (req, res) => {
  const { phoneNumber } = req.body;

  // Генерируем случайный код подтверждения
  verificationCode = Math.floor(100000 + Math.random() * 900000); // Генерируем 6-значный код
  console.log(`Отправка SMS на номер: ${phoneNumber} с кодом: ${verificationCode}`);

  // Здесь должна быть логика отправки SMS
  // В реальном приложении можно использовать библиотеку для отправки SMS

  res.json({ message: 'SMS отправлено!', verificationCode }); // Возвращаем код клиенту
});

// Новый эндпоинт для проверки кода
app.post('/verify-code', (req, res) => {
  const { code } = req.body;

  if (String(code) === String(verificationCode)) {
    res.json({ message: 'Код подтверждения верный!' });
  } else {
    res.status(400).json({ message: 'Неверный код подтверждения' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
