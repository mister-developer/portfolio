let skillsBlock = document.querySelector('.skills-container');

skillsBlock.addEventListener('click', (event) => {
    let textarea = document.createElement('textarea');
    let span = event.target.closest('span');

    textarea.className = 'active';

    if (!span) return;
    textarea.value = span.innerHTML;
    span.replaceWith(textarea);
    textarea.focus();
    
    textarea.onkeydown = (event) => {
        if (event.key == 'Enter') textarea.blur();
    }

    textarea.onblur = () => {
        span.innerHTML = textarea.value;
        textarea.replaceWith(span);
    }
})