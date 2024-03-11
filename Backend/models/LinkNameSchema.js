const mongoose = require('mongoose');

const linkNameSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  chatLinkName: [{
    chatLink: {type: String, required: true},
    name: {type: String}
  }]
});

const LinkName = mongoose.model('LinkName', linkNameSchema);

module.exports = LinkName;