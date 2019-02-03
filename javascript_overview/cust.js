window.onload = function(){
    with(document){
        getElementById('rAdd').onclick=function(){
            var tr = createElement('tr');
            var td_1 = createElement('td');
            var td_2 = createElement('td');
            var td_3 = createElement('td');
            var td_4 = createElement('td');
            var input_1 = createElement('input');
            input_1.setAttribute('placeholder','Name');
            var input_2 = createElement('input');
            input_2.setAttribute('placeholder','Email');
            var input_3 = createElement('input');
            input_3.setAttribute('placeholder','Mobile');
            var input_4 = createElement('button');
            input_4.innerHTML = 'Remove';
            input_4.onclick = function(){
                this.parentNode.parentNode.remove();
            }
            td_1.appendChild(input_1);
            td_2.appendChild(input_2);
            td_3.appendChild(input_3);
            td_4.appendChild(input_4);
            tr.appendChild(td_1);
            tr.appendChild(td_2);
            tr.appendChild(td_3);
            tr.appendChild(td_4);
            getElementById("main").appendChild(tr);
        }
    }
}