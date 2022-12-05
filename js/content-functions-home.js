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
    
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.ASM_Manager'>https://play.google.com - ASM Manager</a><br>"
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.app13'>https://play.google.com - UBM Stareng</a><br>"
    +"- <a href='https://play.google.com/store/apps/details?id=com.trocky2012.Ola_Task'>https://play.google.com - Ola Task</a><br>"
    +"- <a href='https://www.starengtech.com/'>https://www.starengtech.com/</a><br><br>"
    +"<b>Azure DP900 certified (2022):</b><br><br>"
    +"<a href='./img/azure_dp900.jpeg'><img src=img/azure_dp900.jpeg style='width:30%'></a><br>"

    clearList();
    
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

    +"<a href='experiences.html'><button style=background-color:#257886;border-radius:16px;border-color:#103d46;color:white;>more info...</button></a><br><br>"

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
    
    +"<a href='projects.html'><button style=background-color:#257886;border-radius:16px;border-color:#103d46;color:white;>more info...</button></a><br><br>"

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