// const divMenuEscondido=document.getElementById('menuEscondido');
// const divFilhoescondido=document.getElementById('filhoEscondido');
// const itenEscondido=document.getElementById('itemescondido');
let icon1="";
let icon2="";
let icon3="";
let icon4="";

function esconder(obj){
    if(obj===1){
        document.getElementById('res').hidden=false;
        document.getElementById('res1').hidden=true;
    }
    else if(obj===2){
        document.getElementById('res').hidden=true;
        document.getElementById('res1').hidden=false;
    }
}
function icones(){
    for(let i=1; i<=4; i++){
    let v=document.getElementById(`div${i}`);       
    v.innerHTML+=`
    <label class="pulaLinha" for="icone${i}">Defina o icone do item ${i}:</label>
    
    <input type="radio" id="icone${i}" name="icone${i}"  onclick="defineIcone(1,${i})"><!--home-->
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>

    <input type="radio"id="icone${i}" name="icone${i}" onclick="defineIcone(2,${i})"><!--watsapp-->
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><g><rect fill="none" height="30" width="30" y="0"/></g><g><g><g><path d="M19.05,4.91C17.18,3.03,14.69,2,12.04,2c-5.46,0-9.91,4.45-9.91,9.91c0,1.75,0.46,3.45,1.32,4.95L2.05,22l5.25-1.38 c1.45,0.79,3.08,1.21,4.74,1.21h0c0,0,0,0,0,0c5.46,0,9.91-4.45,9.91-9.91C21.95,9.27,20.92,6.78,19.05,4.91z M12.04,20.15 L12.04,20.15c-1.48,0-2.93-0.4-4.2-1.15l-0.3-0.18l-3.12,0.82l0.83-3.04l-0.2-0.31c-0.82-1.31-1.26-2.83-1.26-4.38 c0-4.54,3.7-8.24,8.24-8.24c2.2,0,4.27,0.86,5.82,2.42c1.56,1.56,2.41,3.63,2.41,5.83C20.28,16.46,16.58,20.15,12.04,20.15z M16.56,13.99c-0.25-0.12-1.47-0.72-1.69-0.81c-0.23-0.08-0.39-0.12-0.56,0.12c-0.17,0.25-0.64,0.81-0.78,0.97 c-0.14,0.17-0.29,0.19-0.54,0.06c-0.25-0.12-1.05-0.39-1.99-1.23c-0.74-0.66-1.23-1.47-1.38-1.72c-0.14-0.25-0.02-0.38,0.11-0.51 c0.11-0.11,0.25-0.29,0.37-0.43c0.12-0.14,0.17-0.25,0.25-0.41c0.08-0.17,0.04-0.31-0.02-0.43c-0.06-0.12-0.56-1.34-0.76-1.84 c-0.2-0.48-0.41-0.42-0.56-0.43C8.86,7.33,8.7,7.33,8.53,7.33c-0.17,0-0.43,0.06-0.66,0.31C7.65,7.89,7.01,8.49,7.01,9.71 c0,1.22,0.89,2.4,1.01,2.56c0.12,0.17,1.75,2.67,4.23,3.74c0.59,0.26,1.05,0.41,1.41,0.52c0.59,0.19,1.13,0.16,1.56,0.1 c0.48-0.07,1.47-0.6,1.67-1.18c0.21-0.58,0.21-1.07,0.14-1.18S16.81,14.11,16.56,13.99z"/></g></g></g></svg>

    <input type="radio" id="icone${i}" name="icone${i+5}" onclick="defineIcone(3,${i})"><!--email-->
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(4,${i})"><!--cont-profile-->
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(5,${i})"><!--fav-->
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(6,${i})"><!--star-->
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(7,${i})"><!--pending-->
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"/><circle cx="7" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/></g></g></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(8,${i})"><!--settings-->
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(9,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(10,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"/><circle cx="6.5" cy="6.5" r="1.5"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(11,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg><br><br>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(12,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><g><rect fill="none" height="30" width="30"/></g><g><g/><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"/></g></g></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(13,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.27 6.73l-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(14,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(15,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M7.5,4C5.57,4,4,5.57,4,7.5S5.57,11,7.5,11S11,9.43,11,7.5S9.43,4,7.5,4z M7.5,9C6.67,9,6,8.33,6,7.5S6.67,6,7.5,6 S9,6.67,9,7.5S8.33,9,7.5,9z M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z M5.41,20L4,18.59L18.59,4L20,5.41L5.41,20z"/></g></g></g></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(16,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"/></g></g></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(17,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(18,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(19,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><g><rect fill="none" height="30" width="30"/></g><g><g/><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"/></g></g></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(20,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="24px" fill="#000000"><g><rect fill="none" height="30" width="30"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g></svg>

    <input type="radio" id="icone${i}" name="icone${i}" onclick="defineIcone(21,${i})">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="30px" viewBox="0 0 30 30" width="30px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
    `
}
}

function defineIcone(desIcon,itemIcon){
    if(desIcon == 1){
        
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
           icon1=icon;
        }
        else if(itemIcon == 2){
           icon2=icon;
        }
        else if(itemIcon == 3){
           icon3=icon;
        }
        else if(itemIcon == 4){
           icon4=icon;
        }
    }
   else if(desIcon == 2){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30 30" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;rect fill="none" height="24" width="24" y="0"/&gt;&lt;/g&gt;&lt;g&gt;&lt;g&gt;&lt;g&gt;&lt;path d="M19.05,4.91C17.18,3.03,14.69,2,12.04,2c-5.46,0-9.91,4.45-9.91,9.91c0,1.75,0.46,3.45,1.32,4.95L2.05,22l5.25-1.38 c1.45,0.79,3.08,1.21,4.74,1.21h0c0,0,0,0,0,0c5.46,0,9.91-4.45,9.91-9.91C21.95,9.27,20.92,6.78,19.05,4.91z M12.04,20.15 L12.04,20.15c-1.48,0-2.93-0.4-4.2-1.15l-0.3-0.18l-3.12,0.82l0.83-3.04l-0.2-0.31c-0.82-1.31-1.26-2.83-1.26-4.38 c0-4.54,3.7-8.24,8.24-8.24c2.2,0,4.27,0.86,5.82,2.42c1.56,1.56,2.41,3.63,2.41,5.83C20.28,16.46,16.58,20.15,12.04,20.15z M16.56,13.99c-0.25-0.12-1.47-0.72-1.69-0.81c-0.23-0.08-0.39-0.12-0.56,0.12c-0.17,0.25-0.64,0.81-0.78,0.97 c-0.14,0.17-0.29,0.19-0.54,0.06c-0.25-0.12-1.05-0.39-1.99-1.23c-0.74-0.66-1.23-1.47-1.38-1.72c-0.14-0.25-0.02-0.38,0.11-0.51 c0.11-0.11,0.25-0.29,0.37-0.43c0.12-0.14,0.17-0.25,0.25-0.41c0.08-0.17,0.04-0.31-0.02-0.43c-0.06-0.12-0.56-1.34-0.76-1.84 c-0.2-0.48-0.41-0.42-0.56-0.43C8.86,7.33,8.7,7.33,8.53,7.33c-0.17,0-0.43,0.06-0.66,0.31C7.65,7.89,7.01,8.49,7.01,9.71 c0,1.22,0.89,2.4,1.01,2.56c0.12,0.17,1.75,2.67,4.23,3.74c0.59,0.26,1.05,0.41,1.41,0.52c0.59,0.19,1.13,0.16,1.56,0.1 c0.48-0.07,1.47-0.6,1.67-1.18c0.21-0.58,0.21-1.07,0.14-1.18S16.81,14.11,16.56,13.99z"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
  
    else if(desIcon == 3){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/&gt;&lt;/svg&gt`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 4){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24 " width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 5) {
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 6){
       icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;path d="M0,0h24v24H0V0z" fill="none"/&gt;&lt;path d="M0,0h24v24H0V0z" fill="none"/&gt;&lt;/g&gt;&lt;g&gt;&lt;path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/&gt;&lt;/g&gt;&lt;/svg&gt;`
       ;
       if(itemIcon == 1){
        icon1=icon;
    }
    else if(itemIcon == 2){
        icon2=icon;
    }
    else if(itemIcon == 3){
        icon3=icon;
    }
    else if(itemIcon == 4){
        icon4=icon;
    }
    }
    else if(desIcon == 7){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;rect fill="none" height="24" width="24"/&gt;&lt;/g&gt;&lt;g&gt;&lt;g&gt;&lt;path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"/&gt;&lt;circle cx="7" cy="12" r="1.5"/&gt;&lt;circle cx="12" cy="12" r="1.5"/&gt;&lt;circle cx="17" cy="12" r="1.5"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 8){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 9){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 10){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"/&gt;&lt;circle cx="6.5" cy="6.5" r="1.5"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 11){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 12){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;rect fill="none" height="24" width="24"/&gt;&lt;/g&gt;&lt;g&gt;&lt;g/&gt;&lt;g&gt;&lt;path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon ==13){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M17.27 6.73l-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon==14){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 15){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;rect fill="none" height="24" width="24"/&gt;&lt;/g&gt;&lt;g&gt;&lt;g&gt;&lt;g&gt;&lt;path d="M7.5,4C5.57,4,4,5.57,4,7.5S5.57,11,7.5,11S11,9.43,11,7.5S9.43,4,7.5,4z M7.5,9C6.67,9,6,8.33,6,7.5S6.67,6,7.5,6 S9,6.67,9,7.5S8.33,9,7.5,9z M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z M5.41,20L4,18.59L18.59,4L20,5.41L5.41,20z"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 16){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;rect fill="none" height="24" width="24"/&gt;&lt;/g&gt;&lt;g&gt;&lt;g&gt;&lt;path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 17){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/&gt;&lt;circle cx="12" cy="9" r="2.5"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 18){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 19){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;rect fill="none" height="24" width="24"/&gt;&lt;/g&gt;&lt;g&gt;&lt;g/&gt;&lt;g&gt;&lt;path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 21){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;rect fill="none" height="30" width="30"/&gt;&lt;/g&gt;&lt;g&gt;&lt;path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }
        else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
    else if(desIcon == 21){
        icon=`&lt;svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;g&gt;&lt;path d="M0,0h24v24H0V0z" fill="none"/&gt;&lt;/g&gt;&lt;g&gt;&lt;path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/&gt;&lt;/g&gt;&lt;/svg&gt;`;
        if(itemIcon == 1){
            icon1=icon;
        }else if(itemIcon == 2){
            icon2=icon;
        }
        else if(itemIcon == 3){
            icon3=icon;
        }
        else if(itemIcon == 4){
            icon4=icon;
        }
    }
}

function gravarDados(){
    //input menu principal
    const linkItem1=document.getElementById('itemMenu1');
    const linkItem2=document.getElementById('itemMenu2');
    const linkItem3=document.getElementById('itemMenu3');
    const linkItem4=document.getElementById('itemMenu4');
    const legenda1=document.getElementById('legenda1');
    const legenda2=document.getElementById('legenda2');
    const legenda3=document.getElementById('legenda3');
    const legenda4=document.getElementById('legenda4');
    const legenda5=document.getElementById('legenda5');

    //input menu escondido
    const legendEsc1=document.getElementById('itemescondido1');
    const legendEsc2=document.getElementById('itemescondido2');
    const legendEsc3=document.getElementById('itemescondido3');
    const legendEsc4=document.getElementById('itemescondido4');
    const legendEsc5=document.getElementById('itemescondido5');
    const linkEsc1=document.getElementById('linkEscondido1');
    const linkEsc2=document.getElementById('linkEscondido2');
    const linkEsc3=document.getElementById('linkEscondido3');
    const linkEsc4=document.getElementById('linkEscondido4');
    const linkEsc5=document.getElementById('linkEscondido5');

    //cor
    const corBarraP=document.getElementById('corBarraP');
    const corBotao=document.getElementById('corBotao');
    const corIconP=document.getElementById('corIconP');
    const corBtHover=document.getElementById('corBtHover');
    const corFundoEsc=document.getElementById('corFundoEsc');
    const corFonteEsc=document.getElementById('corFonteEsc');

    //interrompe
    const interrompe=document.getElementById('interrompe');

    const codigoHTML=document.getElementById('res');
    const codigoCSS=document.getElementById('res1');
    codigoHTML.innerHTML=`<code>
    &lt;nav id="menu-mobile1"&gt;
            &lt;div class="elflex1" id="divMain1"&gt;
                &lt;div class="elflex1 divMenuOculto1" id="divMenuOculto1"&gt;
                    &lt;input class="divMenuOculto1" id="MenuOculto1" type="checkbox" &gt;
                    &lt;label class="menulabel1 menuOculto1" for="MenuOculto1"&gt;Fechar&lt;svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" width="20px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/&gt;&lt;/svg&gt;&lt;/label&gt;
                    &lt;a href="${linkEsc1.value}"&gt;${legendEsc1.value}&lt;/a&gt;
                    &lt;a href="${linkEsc2.value}"&gt;${legendEsc2.value}&lt;/a&gt;
                    &lt;a href="${linkEsc3.value}"&gt;${legendEsc3.value}&lt;/a&gt;
                    &lt;a href="${linkEsc4.value}"&gt;${legendEsc4.value}&lt;/a&gt;
                    &lt;a href="${linkEsc5.value}"&gt;${legendEsc5.value}&lt;/a&gt;
                &lt;/div&gt;
            &lt;a href="${linkItem1.value}"&gt;&lt;div class="partMenu1 elflex1" onclick="muda(1)"&gt;
                ${icon1}
                        &lt;p&gt;${legenda1.value}&lt;/p&gt;
                &lt;/div&gt;&lt;/a&gt;
                &lt;a href="${linkItem2.value}"&gt;&lt;div class="partMenu1 elflex1" onclick="muda(2)"&gt;
                    ${icon2}
                &lt;p&gt;${legenda2.value}&lt;/p&gt;
                &lt;/div&gt;&lt;/a&gt;
                &lt;a href="${linkItem3.value}"&gt;&lt;div class="partMenu1 elflex1" onclick="muda(3)"&gt;
                    ${icon3}
                    &lt;p&gt;${legenda3.value}&lt;/p&gt;
                &lt;/div&gt;&lt;/a&gt;
                &lt;a href="${linkItem4.value}"&gt;&lt;div class="partMenu1 elflex1" onclick="muda(4)"&gt; 
                    ${icon4}
                    &lt;p&gt;${legenda4.value}&lt;/p&gt;
                &lt;/div&gt;&lt;/a&gt;
                &lt;label class="menulabel1" for="MenuOculto1"&gt;&lt;div class="partMenu1 elflex1 chama1 "&gt;
                &lt;svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"&gt;&lt;path d="M0 0h24v24H0V0z" fill="none"/&gt;&lt;path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/&gt;&lt;/svg&gt;
                            &lt;p&gt;${legenda5.value}&lt;/p&gt;
                       &lt;/div&gt;&lt;/label&gt;
            &lt;/div&gt;
    &lt;/nav&gt;
    &lt;script&gt;
       let divmenu=document.getElementsByClassName(`partMenu`);
       function muda(div){
           let i=div-1;
        divmenu[i].style.backgroundColor=$corBtHover;
    }
   &lt;/script&gt;
    </code>`
    codigoCSS.innerHTML+=`<pre><code>/*formatação do menu-mobile in.*/
        nav#menu-mobile1{
            position: fixed;
            width: 100%;
            left: 0px;
            bottom: 0px;
            z-index:200;
        }
        div#divMain1{
            height: 60px;
            border: 1px solid rgba(0, 0, 0, 0.527);
            background-color: ${corBarraP.value};/*cor de fundo da barra*/
            box-shadow: 0px -2px 5px 1px rgba(0, 0, 0, 0.281);
        }
        div.elflex1{ 
            display: flex;
            align-items: center;
            margin: auto;
        }
        div.partMenu1{
            flex-direction:column;
            display: flex;
            padding-top: 4px;
            height: 44px;
            width: 95%;
            background-color: ${corBotao.value};/*cor div item menu*/
            font-size: 0.9em;
            color: ${corIconP.value};
        }
        div.partMenu1 svg{
            margin: -1% 18%;
            fill:  ${corIconP.value}; /*cor do svg*/
        }
        div.partMenu1 label svg {
            margin-bottom: -25%;   
        }
        div.partMenu1 p {
            margin: -1px auto;
        }
        div#divMain1 a{
            cursor: pointer;
            width: 100%;
            text-decoration: none;
        }
        div.partMenu1.geral1.chama1{
            margin: 0.5%; 
        }
        div.partMenu1:hover{
            background-color: ${corBtHover.value};/*cor ao passar mouse*/
        }
        #divMenuOculto1{
            position: absolute;
        }
        div.divMenuOculto1{
            vertical-align: middle;
            flex-direction: column;
            bottom: 60px;
            left: 29%;
            width: 70%;
            visibility: hidden;   
        }
        .divMenuOculto1 a,.divMenuOculto1 label{
            color: ${corFonteEsc.value};
        }
        div.divMenuOculto1 > input{
            display: none;
        }
        div.divMenuOculto1 input:checked ~a,
        div.divMenuOculto1 input:checked ~label{
            visibility: visible;
            padding: 2%;
            height: 30px;
            color: ${corFonteEsc.value};
            background-color: ${corFundoEsc.value}  
        }
        .menulabel1{
            width: 100%;
        }
            @media screen  and (min-width: ${interrompe.value}px){
            nav#menu-mobile1{
                display: none;
            }
        }
        /*formatação do menu-mobile fim*/<code></pre>`
    }