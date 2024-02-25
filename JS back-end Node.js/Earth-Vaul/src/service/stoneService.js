const Stone = require('../models/stones');

exports.create = (createData) => Stone.create(createData);

exports.getAll = () => Stone.find();

exports.singleStone = (stoneId) => Stone.findById(stoneId).populate('likedList');

exports.update = (stoneId, createData) => Stone.findByIdAndUpdate(stoneId, createData, {runValidators: true});

exports.delete = (stoneId) => Stone.findByIdAndDelete(stoneId);

exports.getLastStones = () => Stone.find().sort({_id: -1}).limit(3);

exports.addLikeToStone = async (stoneId, userId) => {
    const stone = await this.singleStone(stoneId);
    const isExistingInLikes = stone.likedList.some((l) => l?.toString() === userId);
  
    if (isExistingInLikes) {
      return
    }
  
    stone.likedList.push(userId);
    return stone.save();
  }