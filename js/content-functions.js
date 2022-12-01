
function mountList(commands, functions, input, output, obs){
    let li = `<tr><th align="left";>Command</th>
        <th align="left";>Functions</th>
        <th align="left";>Input</th>
        <th align="left";>Output</th>
        <th align="left";>Extra info</th>
        </tr>`;
    li += `<tr>
            <td>${commands} </td>
            <td>${functions} </td>
            <td>${input} </td>
            <td>${output} </td>
            <td>${obs} </td>
        </tr>`;
    document.getElementById("messages").innerHTML = li;

}

function introduction(){
    document.getElementById("title").innerHTML = "Introduction"; 
    document.getElementById("text1").innerHTML = "<b>Thiago Trolle Cavalheiro - Software developer.</b><br><br>"
    +"&nbsp &nbsp As a programmer with over 5 years of experience, I believe that my strong technical experience and education makes me a experienced software developer and ready for new challenges.<br><br>"
    +"&nbsp &nbsp I am a 30 year old Software Developer / Engineer with a broad range of technical skills. My B.S in Automation and Control Engineering and experiences have made me a professional with a strong background in different  areas such as programming, software development and data analysis.<br><br>"
    +"&nbsp &nbsp The knowledge I've obtained with my diploma and B.S as well as my previous jobs have prepared me for this position. My experiences always involved a great deal of independent research, self-management, requiring initiative, self-motivation and logical approach to problem solving. <br><br>"
    +"&nbsp &nbsp I have learned and applied different programming techniques and some projects that I developed are available to free download on the links below.<br><br>"
    
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.ASM_Manager'>https://play.google.com - ASM Manager</a><br><br>"
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.Ola_Task'>https://play.google.com - Ola Task</a><br><br>"
    +"- <a href='https://www.starengtech.com/'>https://www.starengtech.com/</a><br><br>"

    let li = `<tr>
        <th align="left";>Stareng Technology</th>
        <th align="left">CWI Software</th>
        </tr>`;
    li += `<tr>
            <td><img src='https://static.wixstatic.com/media/f39314_e384eaecb0e7486f9783b7e05740d45e~mv2.png/v1/crop/x_376,y_463,w_2705,h_790/fill/w_345,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO_STARGENG1%2018_4.png' alt='stareng' style='width:40%'></td>
            <td><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAXVBMVEX///9YWFdJSUhUVFNRUVBgYF9NTUxGRkXPz8/T09Ly8vL6+vpjY2L39/fDw8Pm5uZqammOjo6urq20tLTg4OB2dnV+fn6amppBQUClpaSDg4Ls7Oy8vLyUlJTJycndN1qFAAACqElEQVRoge2W3baiMAyFbRNSBOVPRBD1`
                +`/R/zAGlLRTztrFlzNd1XiOFjN00aDoeoqKioqKioqKio/0LHy/Pe3YdzSGhR/gm5fCIRAgCJzBebVZLkPRid1QqFFt180d0cK5tAdgoWLQRUnuiyX+KSMPalF47At+BBOwljyzd2f/TEJxzXhbBf1jdNiYdT6ok/shfpi5t1JoNOmjbLvKVyqDkrFGJcxwq6hERPZjgevTU1qdUJp/b9fv4YXuuv4jmM5lJnZY7Pm/tz89ye8S17FBKlrcl`
                +`OIir9rivYej0nBPb+nvr9nNzRaadmMSuXc2Fk4zi30HMxhl/Zeuu3NZvr9XAu0DHQ8P7388ZzTaqviWnQ+tiB43P+8ZJO51aclevBwuXXvqhh/+V6K9RssANhLbaKgUUInLdHfhyzI1nrpWkErE2ahTiHw/HzDNcUyuxRMmHyA9nX/IVzs/6pV9YDk4qUXJ4PzvlUO3OF4QIuZOHQ1eAWlw9+w90yn5KuTKbFKmA2DmHwF/v6nA+NC93ILNQ`
                +`Hz7lD5baH8+9oXeQBcFvEm6O23hhPnGt6hMJTzi0kbwUzyHc2pQ6dTKgXrotx2qt1smT3DXsaxuserDNWw38ZSa2ZcrJ75cuNAbabOVW7rR6hLOzkwvdHWGNsAimoEikt2l707bo5zgnqwFPo+3qPXq9t4gqSwvxxmqIeZFfxCV/6mfbp2xSz7UwnlXvsrJ07M2uFc3HRuEdvFGzZ8ppZt7g8xAD3e2yFc87k/thoT/INj7SMD570ujyOvV2`
                +`FWfHy9zyU+BTBb98lr6tCXZSoxKDDLj0INN3eTdmjk/PMODtS80GT4fQ51f/yaVo2nZBKYnVLc3uzqLCzix0E3N56rbxK4JWMtaiK7+yoqKioqKioqKiof68fY/Ma13W+VQwAAAAASUVORK5CYII=' alt='cwi' style='width:60%'>
            </td>
        </tr>`;
    document.getElementById("messages").innerHTML = li;
}
function experiences(){
    document.getElementById("title").innerHTML = "Developed By"; 
    document.getElementById("text1").innerHTML = 
    "Sorry, we are still building this page.<br><br>"
    +"Have a look at the top navegation bar for more subjects.<br><br>"
    +"Thiago Trolle Cavalheiro - Software developer <br><br>"
    mountList(  
        "Thiago",
        "Trolle",
        "Cavalheiro",
        "<img src='https://www.trebas.com/assets/svg/header-logo.svg' alt='trebas'>",
        "Studying Cyber Security in Trebas Institute - Montreal",
    );
}
function projects(){
    document.getElementById("title").innerHTML = "Projects"; 
    document.getElementById("text1").innerHTML = 
    "Sorry, we are still building this page.<br><br>"
    +"Have a look at the top navegation bar for more subjects.<br><br>"
    mountList(  
        "List of projects",
        "Building",
        "Thiago`CV",
        "<img src='https://www.trebas.com/assets/svg/header-logo.svg' alt='trebas'>",
        "<a href='https://www.linkedin.com/in/thiagotrollec/'>Thiago`s Linkedin</a>",
    );
}
