# Discord-Bot

[![Build Status](https://travis-ci.org/MathieuAuclair/MoistyTheBot.svg?branch=master)](https://travis-ci.org/MathieuAuclair/MoistyTheBot)

This project is a trial of using [discord.js API](https://discord.js.org/#/). I want to create a useful bot that can really help with server management and include special features to improve discord usage.


# TODO

- [x] Make it work!
- [x] Upgrade database structure
- [x] Create view in database
- [x] Include Unit test
- [x] Review server structure
- [x] Add Regex for security
- [ ] Set an authentification system
- [ ] Create management GUI
- [ ] Include a currency system
- [ ] Activate commands module
- [ ] Try to remove security leaks


## TODO Later

- [ ] Create currency API for all plateform
- [ ] Add a deep learning
- [ ] Add new features!


## Contribute

If you're interested to help in this project, just send me a message by email, and I'll add you to the project! Feel free to send Pull-requests .


## Usage

### Discord requirements

1. Create yourself a bot at https://discordapp.com/developers/applications/me
2. Manage your bot permissions with bot ID at https://discordapi.com/permissions.html
3. Invite the bot in a server where you are manager

### Run locally

```bash
# get in the project directory and open your terminal
npm install
cat database.sql | mysql -u root -p
node server.js
```

then the bot should be online as long as the nodejs server is running, (note) it's really important to hide your bot token or someone could mess with your discord server by using the bot on his own nodejs server.

### Run with `docker-compose`

```bash
docker-compose up -d
```

### Invite my bot (nothing required)

Client ID: `321041087689129994`

Manage bot permissions then invite it to your server at https://discordapi.com/permissions.html

#### Notes

* _You must be server manager to be able to invite a bot_
* _My bot is not always online since it's currently in development_


### Support this project

https://www.patreon.com/MoistyTheBot

## License

[Apache License v2](LICENSE) © [Mathieu Auclair](https://github.com/MathieuAuclair/)
