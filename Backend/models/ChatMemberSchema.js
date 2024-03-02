const mongoose = require('mongoose')

// Create a schema for chat members
const chatMemberSchema = new mongoose.Schema({
    chatId: { type: String, required: true, index: true },
    channelName: { type: String, required: true, index: true },
    phone: { 
      type: Number,
      unique: true,
      minlength: [10, "Phone number should have minimum 10 digits"],
      maxlength: [10, "Phone number should have maximum 10 digits"],
      match: [/^\d{10}$/, "Phone number should only contain digits"]
    },
    joinedMembersCount: { type: Number, default: 0 },
    leftMembersCount: { type: Number, default: 0 },
    members: [{
      memberId: { type: Number, required: true },
      chatLink: { type: String },
      joinedAt: { type: Date },
      leftAt: { type: Date },
    }],
  });
  
  chatMemberSchema.index({ channelName: 1, 'members.memberId': 1 });

  const ChatMember = mongoose.model('ChatMember', chatMemberSchema);

  module.exports = ChatMember;
