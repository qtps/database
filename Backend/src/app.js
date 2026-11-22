const express = require('express');
const multer = require('multer');
const { uploadFile } = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors');

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = express();
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());


const upload = multer({storage: multer.memoryStorage()});

app.post('/create-post', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
      title,
      description: req.body.description,
      image: result.url,
    });

    return res.status(201).json({
      message: 'Post created successfully',
      post,
    });
  } catch (error) {
    next(error);
  }
});

app.get(['/post', '/posts'], async (req, res, next) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error);

  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        message: `Unexpected file field "${error.field}". Use "title" and "description" as text fields and "image" as the file field.`,
      });
    }
  }

  res.status(500).json({ message: error.message });
});


module.exports = app;