const shortid = require('shortid');
const config = require('../config/config');
const controller = {};
const LinkModel = require('../models/Link');



controller.generateRandomID = () => {
  return shortid.generate().substr(0, config.defaultHashLength);
};

controller.isValidHashLength = (hash) => {
  // This might not be fully true as JavaScript uses UTF-16, but should be good enough
  return hash.length <= config.maxHashLength && hash.length >= 0;
};

controller.addURL = (hash, url) => {
  if(!controller.isValidHashLength(hash)) {
    throw new Error(`Hash lenght is invalid, the maximum length is ${config.maxHashLength}`);
  } else {
    LinkModel.addURL(hash, url);
  }
}

controller.postURLsHandler = (req, res) => {
  try {
    let URL = req.body.URL;
    let hash = req.body.hash || controller.generateRandomID();
    console.log(hash);

    if (!URL) {
      throw new Error('No URL passed');
    }
    controller.addURL(hash, URL);
    res.status(200).json({success: true, hash: hash, fullURL: config.baseURL + '/' + hash});
  } catch(err) {
    console.log(err);
    res.status(400).json({success: false, errorMessage: err.toString()});
  }
}

controller.getURLHandler = (req, res) => {
  try {
    let hash = req.params.hash;
    let url = LinkModel.getURL(hash);
    res.status(200).json({success: true, url: url});
  } catch(err) {
    console.log(err);
  }
}

controller.getURLHandlerRedirect = (req, res) => {
  try {
    let hash = req.params.hash;
    let url = LinkModel.getURL(hash);
    res.redirect(url);
  } catch(err) {
    console.log(err);
  }
}


module.exports = controller;