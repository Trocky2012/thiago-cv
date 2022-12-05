function moreInfoBtn(fcn){
    return "<p><button style=background-color:#257886;border-radius:16px;border-color:#103d46;color:white; onclick="+fcn+"()>more info...</button></p><br><br>"
    
}

function experiences_introduction(){
    document.getElementById("title").innerHTML = "Introduction of experiences"; 
    document.getElementById("text1").innerHTML = 
    "<b>CWI Software</b>, Brazil: Software Analyst / Developer.<br>"
    +"- MARCH 2021 - APRIL 2022<br>"
    +"- Analyst and JAVA back-end developer at CWI Software.<br>"
    +"<p><button style=background-color:#257886;border-radius:16px;border-color:#103d46;color:white; onclick=experiences_cwi()>more info...</button></p><br>"


    +"<b>StarEng Technology</b>, Brazil: Developer.<br>"
    +"- JANUARY 2017 - JANUARY 2021 and MAY 2022 - ON GOING<br>"
    +"- Development of cloud microservices, APIs, applications, interaction with relational (AWS) and non-relational database (Firebase - Google) are among some StarEng`s projects.<br>"
    +"<p><button style=background-color:#257886;border-radius:16px;border-color:#103d46;color:white; onclick=experiences_stareng()>more info...</button></p><br>"

    +"<b>GACS (Automation and Control Systems Group)</b>, Brazil: Software developer.<br>"
    +"- JANUARY 2015 - DECEMBER 2016<br>"
    +"- Software developer of the team responsible for the first stage of new automatic pilot project for the STARA tractors.<br>"
    +"<p><button style=background-color:#257886;border-radius:16px;border-color:#103d46;color:white; onclick=experiences_gacs()>more info...</button></p><br>"

    +"<b>Wischral Consultoria</b>, Brazil: Member of sales team.<br>"
    +"- JANUARY 2013 - AUGUST 2014<br>"
    +"- Reponsible for the sales of equipment for industrial construction, buildings and sanitary works, technical visits and commercial process follow-ups.<br>"

}

function experiences_cwi(){
    document.getElementById("title").innerHTML = "CWI Software"; 
    document.getElementById("text1").innerHTML = 
    "<b>CWI Software</b>, Brazil: Software Analyst / Developer.<br>"
    +"MARCH 2021 - APRIL 2022<br><br>"
    +"&nbsp &nbsp &nbsp Analyst and JAVA back-end developer at CWI Software, a national and international market leader company of software development. <br>&nbsp &nbsp &nbsp As a programmer, I joined the team responsible for the PIX (new format of instant payment or money transfer) API development of Banco Votorantim, a brazilian bank and CWI`s partner. With a PO, a Scrum master, one tech leader and other 6 developers, the complete management of this project is done by an Agile environment (JIRA and MIRO softwares) and all tasks assigned by every developer can be followed by all members of the team.<br>&nbsp &nbsp &nbsp Java, Springboot, JPA, SQL, queries to read from Microsoft server (database), Bitbucket or Guithub as code repositories, Jenkins for continuous integration and RabbitMQ as the message broker are among  skills and systems  knowledge needed for the role that I used to do. <br>"
    +"<br><a href='https://cwi.com.br/'>https://cwi.com.br/</a><br>"

    +`<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAXVBMVEX///9YWFdJSUhUVFNRUVBgYF9NTUxGRkXPz8/T09Ly8vL6+vpjY2L39/fDw8Pm5uZqammOjo6urq20tLTg4OB2dnV+fn6amppBQUClpaSDg4Ls7Oy8vLyUlJTJycndN1qFAAACqElEQVRoge2W3baiMAyFbRNSBOVPRBD1`
    +`/R/zAGlLRTztrFlzNd1XiOFjN00aDoeoqKioqKioqKio/0LHy/Pe3YdzSGhR/gm5fCIRAgCJzBebVZLkPRid1QqFFt180d0cK5tAdgoWLQRUnuiyX+KSMPalF47At+BBOwljyzd2f/TEJxzXhbBf1jdNiYdT6ok/shfpi5t1JoNOmjbLvKVyqDkrFGJcxwq6hERPZjgevTU1qdUJp/b9fv4YXuuv4jmM5lJnZY7Pm/tz89ye8S17FBKlrcl`
    +`OIir9rivYej0nBPb+nvr9nNzRaadmMSuXc2Fk4zi30HMxhl/Zeuu3NZvr9XAu0DHQ8P7388ZzTaqviWnQ+tiB43P+8ZJO51aclevBwuXXvqhh/+V6K9RssANhLbaKgUUInLdHfhyzI1nrpWkErE2ahTiHw/HzDNcUyuxRMmHyA9nX/IVzs/6pV9YDk4qUXJ4PzvlUO3OF4QIuZOHQ1eAWlw9+w90yn5KuTKbFKmA2DmHwF/v6nA+NC93ILNQ`
    +`Hz7lD5baH8+9oXeQBcFvEm6O23hhPnGt6hMJTzi0kbwUzyHc2pQ6dTKgXrotx2qt1smT3DXsaxuserDNWw38ZSa2ZcrJ75cuNAbabOVW7rR6hLOzkwvdHWGNsAimoEikt2l707bo5zgnqwFPo+3qPXq9t4gqSwvxxmqIeZFfxCV/6mfbp2xSz7UwnlXvsrJ07M2uFc3HRuEdvFGzZ8ppZt7g8xAD3e2yFc87k/thoT/INj7SMD570ujyOvV2`
    +`FWfHy9zyU+BTBb98lr6tCXZSoxKDDLj0INN3eTdmjk/PMODtS80GT4fQ51f/yaVo2nZBKYnVLc3uzqLCzix0E3N56rbxK4JWMtaiK7+yoqKioqKioqKiof68fY/Ma13W+VQwAAAAASUVORK5CYII=' alt='cwi' style='width:15%'>`
}

function experiences_stareng(){
    document.getElementById("title").innerHTML = "Stareng Technology"; 
    document.getElementById("text1").innerHTML = 
    "<b>CWI Software</b>, Brazil: Software Analyst / Developer.<br>"
    +"JANUARY 2017 - JANUARY 2021 and MAY 2022 - ON GOING<br><br>"
    +"&nbsp &nbsp &nbsp The VR StarEng system for Unity3D`s creator and programmer of the company which develops digital games, SAAS systems and app (javascript and react-native) for Android and iOS. Also, StarEng has developed a large range of electronic systems that are used for gamification and automation projects. <br>&nbsp &nbsp &nbsp Interaction with cloud microservices, APIs, relational (AWS) and non-relational database (Firebase - Google) are among some techniques used for StarEng`s softwares and app development. However, in the  automation experiences side, it is possible to mention bluetooth controls for VR applications and the full concept and implementation of UBM Stareng hardware and software, which is an industrial maintenance management and control system that increases the productivity of electrical machines by measuring the real timing of its operation and reporting all necessary maintenance through UBM app. <br>&nbsp &nbsp &nbsp Since May 2022, during the period that I`m studying in Montreal-Canada, I've been working in a project called Stareng Timing Control (STC) system, and it is already implemented and running in production mode at Mega Graphics-Montreal. This system manages not only the employees effective working hours, but the timing that the workers take to complete jobs for the company`s clients.<br>"
    +"<br><a href='https://www.starengtech.com/'>https://www.starengtech.com/</a><br>"
    +`<br><img src='https://static.wixstatic.com/media/f39314_e384eaecb0e7486f9783b7e05740d45e~mv2.png/v1/crop/x_376,y_463,w_2705,h_790/fill/w_345,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO_STARGENG1%2018_4.png' alt='stareng' style='width:20%'>`
}

function experiences_gacs(){
    document.getElementById("title").innerHTML = "GACS / PUCRS"; 
    document.getElementById("text1").innerHTML = 
    "<b>GACS (Automation and Control Systems Group)</b>, Brazil: Software developer.<br>"
    +"- JANUARY 2015 - DECEMBER 2016<br><br>"
    +"&nbsp &nbsp &nbsp From October 2015 to December 2016: Software developer of the team responsible for the first stage of new automatic pilot project for the STARA tractors. Was built a Kalman Filter to determine the orientation and position of a tractor in the space, only through measurement fusion of a GPS and two inertial sensors, accelerometer and gyroscope. A Cortex M4 was used in this project. This microcontroller was responsible for sensors reading, filter processing and data logs generation for post-processing using I2C protocol.<br>"
    +"&nbsp &nbsp &nbsp From January 2015 to October 2015: Academic projects study and developing associated with control system innovations and dynamic modeling to control analysis and test of a quadcopter VANT. All projects were done using software like Matlab, Octave and Eclipse.<br>"
    +"<br><a href='https://www.pucrs.br/'>https://www.pucrs.br/</a><br>"
    +`<br><img src='https://www.educabras.com/blog/wp-content/uploads/2021/03/logo-pucrs-gd.jpg' alt='pucrs' style='width:20%'>`
    
}