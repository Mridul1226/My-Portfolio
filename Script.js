document.addEventListener("DOMContentLoaded", function () {
    
    const aboutText = "A electrical engineering B.tech student from shri guru gobind shinghji institute of engineering and technology nandedwith excellent academic background and a decent experience in web development,python,c++,html,css.";
    document.getElementById("aboutText").innerText = aboutText;

    
    const projects = [
        { name: "Human following bot", description: "This project was done by me in the first year of my college in ths i used arduino and arduino IDE for programming my bot.This project took around 2 months to get completed and it was successfully presented by me and was kept in college exhibition." },
        { name: "MultiGas Sensor", description: "This project was done by me in SIH2023 PSID-1368.This was a team project in which we used different gas sensor and made a multi gas sensor.This projected was selected and we got second prize from GOI.This was the major project that was successfully completed by me and my Teammates which got us recognition in our college." }
        
    ];

    const projectList = document.getElementById("projectList");
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectDiv);
    });
});

function toggleHide(){
    if(aboutText.style.display !="none"){
    aboutText.style.display = "none";
    }
    else{
        aboutText.style.display = "block";
    }

}

