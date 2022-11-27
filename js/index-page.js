
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
    document.getElementById("text1").innerHTML = "This webpage contains some informations about <b>Trebas Institute's projects.</b> <br><br>"
    +"The projects were created by students and bring some important features for who has interesting in technology, cyber security, big data and others. <br><br>"
    +"Access Trebas` website for more informations and be part of this amazing community.<br><br>"
    +"- <a href='https://www.trebas.com/'>https://www.trebas.com/</a><br><br>"

    let li = `<tr>
        <th align="left";>Stareng Technology</th>
        <th></th>
        </tr>`;
    li += `<tr>
            <td><img src='https://static.wixstatic.com/media/f39314_e384eaecb0e7486f9783b7e05740d45e~mv2.png/v1/crop/x_376,y_463,w_2705,h_790/fill/w_345,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO_STARGENG1%2018_4.png' alt='stareng' style='width:100%' class='center'></td>
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
