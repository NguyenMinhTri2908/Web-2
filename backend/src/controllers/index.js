const Vocab = require('../models/index');

// Lấy tất cả từ vựng
exports.list_all_words = async (req, res) => {
  try {
    const words = await Vocab.find({});
    res.json(words);
  } catch (err) {
    res.send(err);
  }
};

// Tạo từ mới
exports.create_a_word = async (req, res) => {
  const newWord = new Vocab(req.body);
  try {
    const word = await newWord.save();
    res.json(word);
  } catch (err) {
    res.send(err);
  }
};

// Xem chi tiết 1 từ
exports.read_a_word = async (req, res) => {
  try {
    const word = await Vocab.findById(req.params.wordId);
    res.json(word);
  } catch (err) {
    res.send(err);
  }
};

// Cập nhật từ
exports.update_a_word = async (req, res) => {
  try {
    const word = await Vocab.findOneAndUpdate(
      { _id: req.params.wordId },
      req.body,
      { new: true }
    );
    res.json(word);
  } catch (err) {
    res.send(err);
  }
};

// Xóa từ
exports.delete_a_word = async (req, res) => {
  try {
    await Vocab.deleteOne({ _id: req.params.wordId });
    res.json({ message: 'Word successfully deleted', _id: req.params.wordId });
  } catch (err) {
    res.send(err);
  }
};
// Hàm tìm kiếm riêng biệt
exports.search_words = async (req, res) => {
  try {
    const { q } = req.query; // Lấy từ khóa từ URL (?q=...)
    
    if (q) {
      const words = await Vocab.find({
        $or: [
          { english: { $regex: q, $options: 'i' } },
          { german: { $regex: q, $options: 'i' } },
          { vietnamese: { $regex: q, $options: 'i' } }
        ]
      });
      res.json(words);
    } else {
      // Nếu không có từ khóa thì trả về mảng rỗng hoặc thông báo
      res.json([]); 
    }
  } catch (err) {
    res.send(err);
  }
};