# RSS-o-Bot Messenger

Send [RSS-o-Bot](https://github.com/Kriegslustig/rss-o-bot) Notifications over Facebook Messenger.

## Configuration

This package requires a file and an option inside your RSS-o-Bot settings (.rss-o-bot):

### appstate.json
- It must be located in the same directory as your .rss-o-bot settings file.
Check the [Saving Session](https://github.com/Schmavery/facebook-chat-api/#saving-session) chapter of the facebook-chat-api's README for more information. 

### .rss-o-bot options :
- #### messenger-recipients
  - An array of Messenger user IDs. User IDs may be retrieved by creating a bot with [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api). It can display the messages you send to it and the [senderID](https://github.com/Schmavery/facebook-chat-api/blob/master/DOCS.md#listen).
