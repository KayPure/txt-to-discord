# txt-to-discord #

a little javascript that read the last line of a txt file, and post it in a specific discord channel. 
every filechange triggers the script.

i wrote this little script to do a live playlist of my dj sets on discord. at the moment im using native instruments traktor with an second app, that reads the metadata of a played track and store it in a text file.
https://github.com/radusuciu/traktor_nowplaying
after the traktor_nowplaying script updates the text file with the actually played track, my script detect the change and post the line in my discord playlist channel.

to create a discord bot, head over to https://discord.com/developers/applications - to get the channel id of the channel you want to post in, simply right click on a discord channel and click "copy ID"

install:

```
clone the repo
cd to repo dir
npm install
edit settings_blank.js and fill in your bot and channel infos
rename it to settings.js
node playlist
open nowplaying.txt and edit the file - save it
the script should now be able to post the changes into your discord channel
```
to install the traktor_nowplaying app, please go to https://github.com/radusuciu/traktor_nowplaying

dependencies
```
date-and-time
discord.js
fs
read-last-lines
```
