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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347056066015";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_27_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk0LFxuICAgICAgICA4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9nRGhubWpDZG00RUhDUkpHTThXVElKOTJyMXBPeFVQT0JENzNLME5QNG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA1NjA2NjAxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjRFRTI1MThGQ0MzRjBDMTdFRkJBQjFDNzA4OEZFNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTc1MjU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9qXzBjZlFEVEYtU2VtZUNJbmxVV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTI3NDFjMmQtM2U3NC00ZTdlLWE1ZmQtZTE2NjE0YmY2N2Y0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMjI4LFxuICAgICAgMjQ3LFxuICAgICAgOTQsXG4gICAgICAxNzcsXG4gICAgICAyMTMsXG4gICAgICAzMixcbiAgICAgIDEwMyxcbiAgICAgIDg4LFxuICAgICAgMjMxLFxuICAgICAgNTcsXG4gICAgICAxNTksXG4gICAgICA4OSxcbiAgICAgIDExLFxuICAgICAgMzEsXG4gICAgICAxOTcsXG4gICAgICAxMDQsXG4gICAgICAxMTEsXG4gICAgICAxMDksXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjQ4LFxuICAgICAgMjAsXG4gICAgICA0MSxcbiAgICAgIDE2NyxcbiAgICAgIDEwMSxcbiAgICAgIDEyLFxuICAgICAgMTIwLFxuICAgICAgMTgsXG4gICAgICAyNDIsXG4gICAgICA1NSxcbiAgICAgIDE5LFxuICAgICAgNTAsXG4gICAgICAxMTYsXG4gICAgICA1NyxcbiAgICAgIDExLFxuICAgICAgMjM5LFxuICAgICAgNTIsXG4gICAgICAxMjUsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDOU4yVk5ER1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NjA2NjAxNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTUyMTU5NTczNjA3ODE6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMjU2SUFFRUkyVm43UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZuNGdpeC9PMXd6NUxiM1FObmRPNStSSWtVRDU3WHhjMEd3UmFNb29Ra0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDcrNTZoWDA3TlFoaXB5ay9mSnk4aFFmdXdsV3lUNTAwSVZsSHVBTExXckliQnZaa2lHdTRUVGNDN2J4MFJZSkVHZFhsanRxT0tWbVczK2lPazdjQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidldVWW95enY2TElQSlpVOWk3c3FSYlRaSHM3M0ExSFl1OWNDYU5kOU9ldDlFT25iSU0wcUlGVXFydi9rak5ZclUzaG91OHQvZTNmSnlBOS9QYWlnaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1NjA2NjAxNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNzUyNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQd0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB3Sy5qc29uIjogIntcImtleURhdGFcIjpcIlhqWG01clA5ck5mY29BRnNyT2o4UzJ5eFdmRWlTNjRweUI0VVgxNE1KcEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTQ1MzEzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
