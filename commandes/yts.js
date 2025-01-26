const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝘼𝙇𝙊𝙉𝙀 𝙈𝘿 𝙞𝙨 𝙧𝙚𝙨𝙩𝙖𝙧𝙩𝙞𝙣𝙜.... ⏳");

  exec("pm2 restart all");
  

  



}
