const elemsExercicio = document.querySelectorAll(".exercicio");
const elemTela = document.querySelector(".tela")
const elemCronometro = document.querySelector(".cronometro")
const elemsVoltar = document.querySelectorAll(".voltar")

const elemClose = document.querySelector(".close")
const elemPlay = document.querySelector(".play")
const elemPause = document.querySelector(".pause")

const elemHoraio = document.querySelector(".horario")
const elemTempo = document.querySelector(".tempo")

const elemMinuto = document.querySelector(".minuto")
const elemSegundo = document.querySelector(".segundo")
const elemCentesimo = document.querySelector(".centesimo")


var timer = 0;
var IdIntervalo = null


elemsExercicio.forEach(
    function(elemeExercicio){
        elemeExercicio.addEventListener('click',
            function () {
                elemTela.classList.add("tela--cronometro");
                // console.log("cliccou")
            })
    }

)

elemsVoltar.forEach(
    function (elemsVoltar)
    {
        elemsVoltar.addEventListener('click',
            function () {
                elemTela.classList.remove("tela--cronometro");
                ClicouClose()

                // console.log("cliccou")
            })
    }
)

elemClose.addEventListener('click',
    function () {
        ClicouClose()
        // console.log("cliccou")
    })
elemPlay.addEventListener('click',
        function () {
            
            ClicouPlay();
            // console.log("cliccou")
        })
    
elemClose.addEventListener('click',
        function () {
            elemCronometro.classList.remove("iniciou");
            // console.log("cliccou")
        })
    
elemPause.addEventListener('click',
            function () {
                ClicouPause()
                // console.log("cliccou")
            })


function AtualizarHorario(){
    const Hora = new Date().getHours().toString().padStart(2,"0");
    const Minutos = new Date().getMinutes().toString().padStart(2,"0")
    const Horario = Hora+":"+Minutos;
    elemHoraio.innerText = Horario;

}  

function ClicouPlay()
{
   elemCronometro.classList.add("iniciou");
   RodarTimer()
}
function ClicouPause()
{
    elemCronometro.classList.remove("iniciou");
   clearInterval(IdIntervalo)
}
function ClicouClose()
{
   elemCronometro.classList.remove("iniciou");
   clearInterval(IdIntervalo)
   timer = 0
   AtualizaCronometro()
}

function RodarTimer()
{
    IdIntervalo =  setInterval(()=>{
        timer = timer + 10
        AtualizaCronometro()
    },10)
}

function AtualizaCronometro()
{
 var Minutos =Math.floor(timer/60000).toString().padStart(2,"0")
 var Segundos =Math.floor((timer%60000) / 1000).toString().padStart(2,"0")
 var centesimos = Math.floor(((timer % 60000) % 1000) / 10).toString().padStart(2, "0");
 elemMinuto.innerText = Minutos
 elemSegundo.innerText = Segundos
 elemCentesimo.innerText = centesimos;
}

AtualizarHorario();
setInterval(()=>{
    AtualizarHorario();

},1000 *20)
   

