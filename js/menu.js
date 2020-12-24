let knowledgeableInList = document.querySelector('.knowledgeable-in-container');
let techSkillsList = document.querySelector('.tech-skills-container');
let softSkillsList = document.querySelector('.soft-skills-container');
let studyingList = document.querySelector('.studying-container');
let titles = document.querySelectorAll('.title--menu');

for (let title of titles) {
    title.addEventListener('click', (event) => {
        let containerTitle = event.target.innerHTML;
        switch(containerTitle) {
            case 'Knowledgeable in':
                knowledgeableInList.classList.toggle('close');
                break;
            case 'Tech Skills':
                techSkillsList.classList.toggle('close');
                break;
            case 'Soft Skills':
                softSkillsList.classList.toggle('close');
                break;
            case 'Studying':
                studyingList.classList.toggle('close');
        }       
    })
}