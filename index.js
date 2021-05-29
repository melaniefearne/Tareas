document.addEventListener('DOMContentLoaded', function(){
 //``
    const btn = document.getElementById("add");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const tabla = document.getElementById("table");
    const alert = document.getElementById("alert");
    var time = document.getElementById("Time");
        function CuentaSegundos(time) {
            switch(time)
           {
                 case "15": 
                 return AB(15);
                 break;
                 case "30": 
                 return  AB(30)
                 break;
                 case "60":
                 return  AB(60)
                 break;
           }
        }
    let id = 1; 
        function RemoverXid(id)
        {
            document.getElementById(id).remove();
        } 
    const btnRemove = document.createElement("button");
          btnRemove.classList.add("btn", "btn-danger", "mb-1", "ml-1");
          btnRemove.innerHTML = '<i class="fa fa-trash"></i>';
          btnRemove.addEventListener("click", e=> {
            Music();
          })
          btn.onclick = AddTodo;
        
        function AddTodo()
        {    
            if(title.value === '' || description.value === '')
            {
              alert.classList.remove('d-none');
               alert.innerText = "dsfugyhjfkds"
               return;
            }
    
             alert.classList.add('d-none');
             const row = tabla.insertRow();
             row.setAttribute("id", id++);
             Swal.fire({
                title: `Estas guardando la tarea: ${title.value},
                 ${description.value}`,
                showDenyButton: true,
                confirmButtonText: `Guardar`,
                denyButtonText: `No guardar`,
                backdrop:true,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {                   
                  Swal.fire('Guardado!', '', 'success')
                  row.innerHTML = `
                  <td>${title.value}</td>
                  <td>${description.value}</td>
                  <td class="text-rigth">
                  <time>${CuentaSegundos(time.value)}</time>
                  </td>
                  <td class="text-center">
                  <input type="checkbox" id="Check">
                  </td>
                  <td class="text-rigth">
                  
                  </td>
                  `; 
                   Check();
                 row.children[4].appendChild(btnRemove);
                 Swal.fire({text: `tenes: ${time.value} minutos para terminar la tarea`})
               

                }

                else if (result.isDenied) {
                  Swal.fire('No guardamos nada, terrible fiaca', '', 'info')
                }
              })

            btnRemove.onclick = e => 
            {   
                RemoverXid(row.getAttribute("id"));
            }          
        }
   
        function Check() {
          const Check = document.querySelector("#Check");
          const Abuelo = Check.parentElement.parentElement;
          Check.addEventListener("click", e=>{
            RemoverXid(Abuelo.getAttribute("id"));
            FinishHer();
          }) }
});
// funcion tiempo 
function AB(timeDiscount) 
{
    let SelectTime = timeDiscount;
    let retornado = `${Math.floor(SelectTime / 60)}:${Math.floor(
        SelectTime % 60
      )}`
      return retornado ;
}
// funcion que da inicio a la cancion 
function Music(result) {
  const songFinish = document.querySelector("#Finish");
  const songNotFinish = document.querySelector("#Notfinish");
  if(result == "success")
  {
    songFinish.play();
  }  
  else
  {
    songNotFinish.play();
  }

}

function FinishHer()
{
  Music("success");
  Swal.fire({
    title: '<strong>Claro <u>Q U E S I</u> :D </strong>',
    icon: 'success',
    html:
      "tarea completa bebe!!" ,
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> iupi!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
})
}
/*Swal.fire({
  title: '<strong>Tarea <u>Incompleta</u> :( </strong>',
  icon: 'error',
  html:
    'No diste check a "tarea completa"',
  showCloseButton: false,
  showCancelButton: false,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-down"></i> buuu!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
})*/

