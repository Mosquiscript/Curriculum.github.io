
//Variables
    let barra_javascript = document.getElementById('barra_javascript') 
    let barra_redes = document.getElementById('barra_redes')
    let barra_html = document.getElementById('barra_html')
    let barra_css = document.getElementById('barra_css')
    let barra_sql = document.getElementById('barra_sql')
    let barra_php = document.getElementById('barra_php')
    let barra_ingles = document.getElementById('barra_ingles')
    let porcentaje_barras = 0   
    
//Funciones
    let porcentaje = function () {
        porcentaje_barras++
        if (porcentaje_barras <= 60) {
            barra_javascript.style.background = `-webkit-linear-gradient(0deg, var(--color-secundario) ${porcentaje_barras}%, #FFF6E9 0)` 
        }
        if (porcentaje_barras <= 40) {
            barra_redes.style.background = `-webkit-linear-gradient(0deg, var(--color-secundario) ${porcentaje_barras}%, #FFF6E9 0)`  
        }
        if (porcentaje_barras <= 80) {
            barra_html.style.background = `-webkit-linear-gradient(0deg, var(--color-secundario) ${porcentaje_barras}%, #FFF6E9 0)`  
        }
        if (porcentaje_barras <= 55) {
            barra_css.style.background = `-webkit-linear-gradient(0deg, var(--color-secundario) ${porcentaje_barras}%, #FFF6E9 0)`  
        }
        if (porcentaje_barras <= 40) {
            barra_sql.style.background = `-webkit-linear-gradient(0deg, var(--color-secundario) ${porcentaje_barras}%, #FFF6E9 0)` 
        }
        if (porcentaje_barras <= 30) {
            barra_php.style.background = `-webkit-linear-gradient(0deg, var(--color-secundario) ${porcentaje_barras}%, #FFF6E9 0)` 
        }
        if (porcentaje_barras <= 40) {
            barra_ingles.style.background = `-webkit-linear-gradient(0deg, var(--color-secundario) ${porcentaje_barras}%, #FFF6E9 0)` 
        }
    }

//Ejecuciones
    window.onload = function(){
      setInterval(porcentaje, 100)   
    }

