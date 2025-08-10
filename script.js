const help = `
<div class="output">
Available commands:<br><br>
<span class="commands">about</span><br>
<span class="commands">social</span><br>
<span class="commands">projects</span><br>
<span class="commands">help</span><br>
<span class="commands">clear</span><br>
</div>
<br>
`;

const about = `
<br><br><div>
Hi,My name is G VENKAT<br> I am a Computer Science student currently pursuing a degree i made this simple portfolio website
to introduce my self and my work,also to show everyone how cool this portfolio looks!!
</div><br><br>
`;
const social=`
  <div class="output">
  <pre>
    <span class="commands">github</span>     - https://github.com/venkat-jay-krishna<br>
    <span class="commands">linkedin</span>   - https://www.linkedin.com/in/gummalla-venkata-jaya-krishna-chowdhary-0b02412a4<br>
    <span class="commands">instagram</span>  - https://www.instagram.com/venkatg6093?igsh=Zzl6b21vMWE3YnM5<br>
    <span class="commands">x</span>          - https://x.com/v_6093?s=21&t=1qK2XbCGWhBrp1P54bHKIw<br>
    <span class="commands">email</span>      - venkatg4200@gmail.com<br> 
    press any social command to visit the page<pre>
    </div>
`;
const terminal = document.getElementById('terminal');

function newPrompt() {
  const line = document.createElement('div');
  line.classList.add('input-line');
  line.innerHTML = ` <div class="cmndline">
        <span id="prompt" style="color:chartreuse;">Portfolio@Venkat:</span>
        <span style="color:blueviolet" >~</span>
        <span class="symbols">$</span>
        <input type="text" id="input" name="command" autofocus>
    </div>
    `;
  terminal.appendChild(line);
  line.querySelector('input').focus();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const activeInput = document.querySelector('.input-line input');
    if (!activeInput) return;

    const cmd = activeInput.value.trim().toLowerCase();

    // Turn input into static text
    const parent = activeInput.parentNode;
    parent.innerHTML = ` <div class="cmndline">
        <span id="prompt" style="color:chartreuse;">Portfolio@Venkat:</span>
        <span style="color:blueviolet" >~</span>
        <span class="symbols">$</span>
        ${cmd}
    </div>
     `;


    switch (cmd) {
      case 'help':
        terminal.innerHTML += `<div>${help}</div>`;
        break;
      case 'about':
        terminal.innerHTML += `<div>${about}</div>`;
        break;
      case 'social':
        terminal.innerHTML += `<div>${social}</div>`;
        break;
      case 'linkedin':
        terminal.innerHTML += `<div>Opening Linkedin profile......</div>`;
        window.open(' https://www.linkedin.com/in/gummalla-venkata-jaya-krishna-chowdhary-0b02412a4','_blank')
        break;
      case 'github':
        terminal.innerHTML += `<div>Opening Github profile......</div>`;
        window.open(' https://github.com/venkat-jay-krishna','_blank')
        break;
      case 'instagram':
        terminal.innerHTML += `<div>Opening Instagram profile......</div>`;
        window.open(' https://www.instagram.com/venkatg6093?igsh=Zzl6b21vMWE3YnM5','_blank')
        break;
      case 'x':
        terminal.innerHTML += `<div>Opening X profile......</div>`;
        window.open(' https://x.com/v_6093?s=21&t=1qK2XbCGWhBrp1P54bHKIw','_blank')
        break;
      case 'email':
        terminal.innerHTML += `<div>emailing.....</div>`;
        window.location.href="mailto:venkatg4200@gmail.com";
        break;
      case 'projects':
        terminal.innerHTML += `<div>wait a min getting projects....</div>`;
        window.open('https://youtu.be/MxrktEnlsh0?si=j_idXvE4A3cOV2fr','_blank')
        break;
      case 'clear':
        terminal.innerHTML = ``;
        break;
      default:
        terminal.innerHTML += `<div>Command not found: <span class="error">${cmd}</span> type <span class="commands">help</span></div>`;
    }

    newPrompt();


    window.scrollTo(0, document.body.scrollHeight);
  }
});


newPrompt();
