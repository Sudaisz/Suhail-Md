const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Kl1K35jLwE3L8XwEF8gRxq";
global.website=process.env.GURL || "https://chat.whatsapp.com/Kl1K35jLwE3L8XwEF8gRxq" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1097a851cb9c36c23a350.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019760022";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/e1bb527a105259e47e1af.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349019760022";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_42_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4RDMwMG0rM3Zad2RxN245SE5HNE1zQUJhOGZyK3JZajFpQWlQZ3A5SVk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJibGVnUDJOTVJMZUdKWjVwbXpuRlZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNjNWJhYjhiLTY3ODctNGU3YS1hNzA1LTg3ZTliNjIyZDExZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDE2OSxcbiAgICAgIDcwLFxuICAgICAgMTYwLFxuICAgICAgMTIyLFxuICAgICAgMjA3LFxuICAgICAgMjU0LFxuICAgICAgOTIsXG4gICAgICA5NSxcbiAgICAgIDEzMixcbiAgICAgIDc1LFxuICAgICAgNDUsXG4gICAgICAxMTYsXG4gICAgICAxNDUsXG4gICAgICAxNDksXG4gICAgICAyMjksXG4gICAgICA3MCxcbiAgICAgIDI1LFxuICAgICAgMTQ4LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAzOSxcbiAgICAgIDYzLFxuICAgICAgMjM4LFxuICAgICAgMzMsXG4gICAgICAyMzUsXG4gICAgICAxNTAsXG4gICAgICAzNCxcbiAgICAgIDE4MSxcbiAgICAgIDExMSxcbiAgICAgIDIzMSxcbiAgICAgIDQ0LFxuICAgICAgMTcxLFxuICAgICAgMTY0LFxuICAgICAgMTkxLFxuICAgICAgMTY5LFxuICAgICAgMjIwLFxuICAgICAgMjcsXG4gICAgICAyMDAsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0xTMUc3VkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTk3NjAwMjI6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2Njc3MzgyMzc1MDM0NDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaVN3S0VHRU1PWm9MVUdHQmdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitRTmUzZjJZVkgrNW4zWjNtdWdDS2ZkcXFab0E3T1lsOUVGTUtmK2tOUTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzY5NnVvQzBza1hoRlk2M0xkK3A5VklzaUVESzV5VUR1ckRVakd2QlpEYlZnczBpWkxIWUFwMWhadUhsTXB1dU02RkxCcEROeUxhR21URnNsNGFJQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidDJGUjJ2L2J3a1BVaVJWc1R1S2FBVnI0SlNxUitRS0RUUjlnaUh3WjdrZ0J0NUNWa0FxdWJiTzdJOFRFdjNaWG1ZTE82TnRhLzB3emF3YkY0MThJQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxOTc2MDAyMjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI4OTM1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtHOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0c5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUlIdHJZelh2NWozVHpxT1dSVE04bGo0MEJyYXJtdWhLR2NxV21DdG1URT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjgwODY5NzA0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "THE ONE BEYOND",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
