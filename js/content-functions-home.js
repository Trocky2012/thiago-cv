function clearList(){
    let li = `<tr><th align="left";></th> </tr>`;
    li += `<tr> <td></td> </tr>`;
    document.getElementById("messages").innerHTML = li;
}

function addHeaderList(ah1, ah2, ah3, ah4, ah5){
    let li = `<tr>
        <th align="left";>${ah1}</th>
        <th align="left";>${ah2} </th>
        <th align="left";>${ah3}</th>
        <th align="left";>${ah4}</th>
        <th align="left";>${ah5}</th>
        </tr>`;
    document.getElementById("messages").innerHTML += li;
}

function addInList(degree, school, course, start, end){
    let li = `<tr>
            <td>${degree} </td>
            <td>${school} </td>
            <td>${course} </td>
            <td>${start} </td>
            <td>${end} </td>
        </tr>`;
    document.getElementById("messages").innerHTML += li;
}

function home_introduction(){
    document.getElementById("title").innerHTML = "Introduction"; 
    document.getElementById("text1").innerHTML = "<b>Thiago Trolle Cavalheiro - Software developer.</b><br><br>"
    +"&nbsp &nbsp As a programmer with over 5 years of experience, I believe that my strong technical experience and education makes me a experienced software developer and ready for new challenges.<br><br>"
    +"&nbsp &nbsp I am a 30 year old Software Developer / Engineer with a broad range of technical skills. My B.S in Automation and Control Engineering and experiences have made me a professional with a strong background in different  areas such as programming, software development and data analysis.<br><br>"
    +"&nbsp &nbsp The knowledge I've obtained with my diploma and B.S as well as my previous jobs have prepared me for this position. My experiences always involved a great deal of independent research, self-management, requiring initiative, self-motivation and logical approach to problem solving. <br><br>"
    +"&nbsp &nbsp I have learned and applied different programming techniques and some projects that I developed are available to free download on the links below.<br><br>"
    
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.ASM_Manager'>https://play.google.com - ASM Manager</a><br><br>"
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.app13'>https://play.google.com - UBM Stareng</a><br><br>"
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
function home_experiences(){
    document.getElementById("title").innerHTML = "Experiences"; 
    document.getElementById("text1").innerHTML = 
    "<b>CWI Software</b>, Brazil: Software Analyst / Developer.<br>"
    +"- Analyst and JAVA back-end developer at CWI Software.<br><br>"
    
    +"<b>StarEng Technology</b>, Brazil: Developer.<br>"
    +"- Development of cloud microservices, APIs, applications, interaction with relational (AWS) and non-relational database (Firebase - Google) are among some StarEng`s projects.<br><br>"

    +"<b>GACS (Automation and Control Systems Group)</b>, Brazil: Software developer.<br>"
    +"- Software developer of the team responsible for the first stage of new automatic pilot project for the STARA tractors.<br><br>"

    +"<b>Wischral Consultoria</b>, Brazil: Member of sales team.<br>"
    +"- Reponsible for the sales of equipment for industrial construction, buildings and sanitary works, technical visits and commercial process follow-ups.<br><br>"

    +"<b><br>Education: </b><br>"

    clearList();
    addHeaderList("Degree", "School", "Course", "Start", "End");
    addInList(  
        "Bachelors",
        "PUC-RS, Brazil",
        "Control and Automation engineering",
        "2010",
        "2016",
    );
    addInList(  
        "Diploma",
        "TREBAS, Canada",
        "Cyber security",
        "2022",
        "On going",
    );
}
function home_projects(){
    document.getElementById("title").innerHTML = "Projects"; 
    document.getElementById("text1").innerHTML = 
    "<b>Timing Control(2022)</b>:<br>"
    +"With Timing Control system, its possible to monitor users or employees time registers. "
    +"It's not only a digital and online punsh card, but it can be a manager of company activities. Also, the company can insert clients and manage the timing of every job that must be done.<br>"
    +"Development tools: Java, JPA, Spring Boot, clound database managment, React-Native and Expo.<br>"
    +"- <a href='https://www.starengtech.com/timing-control'>https://www.starengtech.com/timing-control</a><br><br>"
    
    +"<b>ASM Manager (2022)</b>:<br>"
    +"ASM Manager is an app that help companies to control and manage the business stock, products, sales and purchases.<br>"
    +"Development tools: Java, JPA, Spring Boot, React-Native and Expo.<br>"
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.ASM_Manager'>https://play.google.com - ASM Manager</a><br><br>"

    +"<b>OLA TASK (2022) </b>:<br>"
    +"OLA TASK is the easiest way to manage tasks for you or your team. Publish, assign and get tasks to do. Very useful for group managers.<br>"
    +"Development tools: Java, JPA, Spring Boot, React-Native and Expo.<br>"
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.Ola_Task'>https://play.google.com - Ola Task</a><br><br>"
    
    +"<b>UBM STARENG (2021) </b>:<br>"
    +"Maintenance timing management and control system that increases the productivity of industrial electrical machines.<br>"
    +"Development tools: Firebase (Google), React-Native and Expo.<br>"
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.app13'>https://play.google.com - UBM Stareng</a><br><br>"
    
    clearList();
    addHeaderList("APP", "Year", "Company", "Published", "Technology");
    addInList(  
        "Timing Control",
        "2022",
        "Stareng Technology",
        "Private webpages",
        "Back-end development",
    );
    addInList(  
        "ASM Manager",
        "2022",
        "Stareng Technology",
        "Google Play",
        "Back and front-end",
    );
    addInList(  
        "OLA TASK",
        "2022",
        "Stareng Technology",
        "Google Play",
        "Back and front-end",
    );
    addInList(  
        "UBM Stareng",
        "2021",
        "Stareng Technology",
        "Google Play",
        "Back, front-end and hardware",
    );
}