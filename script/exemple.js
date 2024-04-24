//template for cmd that is 75% compatible to both goat and mirai
//NO NEED CONVERT UNLESS MISSING DEPENDENCY

async function reply(form, callback) {
    api.sendMessage(form, event.threadID, event.messageID, callback);
}
async function react(emoji) {
api.setMessageReaction(emoji, event.messageID, () => {}, true);
}
const message = {
    reaction: react,
    reply,
}

module.exports = {
    config: {
        name: "example",
        aliases: ["alias1", "alias2"], //goat 
        version: "1.0",
        hasPermission: 2 //mirai
        role: this.hasPermission - 2, //goat
        author: "Your name", //goat
        credits: this.author, //mirai
        description: " Your description ", //mirai
        shortDescription: this.description, //goat
        longDescription: this.description, //goat
        usePrefix: true, //botpack
        category: " Your category ", //goat
        commandCategory: this.category, //mirai
        usages: " Your usages ", //mirai
        guide: this.usages, //goat
        cooldowns: 5, //mirai
        countDown:  this.cooldowns, //goat
    },
    onMAIN: async({ api, event }) =>     {
//this is your main function
    api.sendMessage('Hi', event.threadID, event.messageID);
    },
    onStart: async (context) => {
    await module.exports.onMAIN(context); //from goat
   },
   run: async (context) => {
    await module.exports.onMAIN(context); //from mirai
    },
    onChat: async (context) => { 
//from goat
    //code for noprefix
    }, 
    handleEvent: async (context) => {
//from mirai
    await module.exports.onChat(context);
    },
};
