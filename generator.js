const Agent = require('socks5-https-client/lib/Agent')
const telegram_api = require('node-telegram-bot-api')

const token = "956250090:AAG3op0mNVRhY5OKQ7DJARvmafALmmq3N9w";
const bot = new telegram_api(token, {
    polling: true,
    request: {
        agentClass: Agent,
        agentOptions: {
            socksHost: '127.0.0.1',
            socksPort: '9050',
            // If authorization is needed:
             socksUsername: '',
             socksPassword: ''
        }
    }
});


module.exports = bot