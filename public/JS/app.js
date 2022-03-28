//create speaker names dynamically
const speakerNameArray = ["Aaron Irizarry","Adam Connor","AJ Self","Arman Ghosh","Bermon Painter","Shay Howe"];
const speakers = (speakerNames)=>{
    const speakerName = document.querySelectorAll(".name");
    speakerName.forEach((speaker,index)=>{
        speaker.textContent = speakerNames[index];
    });
    return speakerName;
    
}
speakers(speakerNameArray);

const changeTopic = (speakerNames)=>{
    const speakerTopic = document.querySelectorAll(".topic-about");

    speakerTopic.forEach((speaker,index)=>{
        const firstName = speakerNames[index].split(" ")[0];
        speaker.textContent = `about ${firstName}`.toUpperCase();
        
    });

    return speakerTopic;
}
changeTopic(speakerNameArray);
