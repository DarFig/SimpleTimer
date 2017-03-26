var cronotick;

function parar(){
    clearInterval(cronotick);
}


function arranque(){
    segundos = 0;
    minutos = 0;
    s = document.getElementById("seg");
    m = document.getElementById("min");
	m.innerHTML = minutos;
	s.innerHTML = segundos;
    cronotick = setInterval(
        function(){
            if(segundos==60){
                segundos=0;
                minutos++;
                m.innerHTML = minutos;
                if(minutos==0){
                    minutos=0;
                }
            }
            s.innerHTML = segundos;
            segundos++;
        }
        , 1000);
}
