
var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");

var los = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", sprawdz);

function sprawdz()
{
    if (input.value > 0 && input.value <= 10){
        if (input.value == los)
        {   
            var value = Number(input.value)
            answer.innerHTML = value + " to prawidlowa cyfra brawo! ";
            answer.classList.add('new');
            button.innerHTML = "odswiez";
            button.removeEventListener("click", sprawdz);
            button.addEventListener("click",odswiez);
        }
        else
        {   
            var value = Number(input.value)
            answer.innerHTML = value + " to nieprawidlowa cyfra!";
            if (los > value)
            {
                answer.innerHTML = "Prawidlowa liczba jest<br> wieksza od " + value;
            }
            else
            answer.innerHTML = "Prawidlowa liczba jest<br> mniejsza od " + value;
        }
    }
    else
    alert("liczba musi byc z przedzialu 1-10!");

 
    var li = document.createElement("li")
    list.appendChild(li);
    list.lastChild.innerHTML = value;
    
}

function odswiez()
{
    location.reload();
}

