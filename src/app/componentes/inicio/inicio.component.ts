import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
   formularioForm;

   constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre: "",
      apellido: ""
    })
}

ngOnInit() {
  console.log("Hola buen dia");
  console.log("Se muestran los datos");
}

enviardatos(){
  let datos_formulario = this.formularioForm.value;
  console.log(datos_formulario);

}
}
