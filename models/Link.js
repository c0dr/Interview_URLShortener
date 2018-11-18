let Links = {};

const LinkInterface = {};

LinkInterface.getURL = (hash) => {
  return Links[hash];
}

LinkInterface.addURL = (hash, url) => {
  if(Links.hasOwnProperty(hash)) {
    throw new Error('Hash already set');
  } else {
    Links[hash] = url;
  }
}

module.exports =  LinkInterface;



/*

Could use something more advanced

const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  key: { type: [String], index: true },
  url: String,
});

const LinkModel = mongoose.model('Link', linkSchema);

LinkModel.getLinkByHash = (hash) => {
  return LinkModel.findOne({hash});
};

LinkModel.addLink = (linkInstance) => {
  return linkInstance.save();
};
*/