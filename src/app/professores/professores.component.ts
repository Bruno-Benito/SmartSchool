import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { VirtualTimeScheduler } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})


export class ProfessoresComponent implements OnInit {

  titulo = 'professores'
  
  

  ngOnInit() {
  }


  constructor(private fb: FormBuilder, 
    private modalService: BsModalService) {this.criarform();}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }





  public modalRef!: BsModalRef;
  public professorselected!: Professor;
  public professorform!: FormGroup


  public criarform()
  {
    this.professorform = this.fb.group({

      nome: ['', Validators.required],
      disciplina: ['', Validators.required],
    });
  }
  
  
  professores = [

    { id: 1, nome: 'mario', disciplina: 'Lingua Inglesa' },
    { id: 2, nome: 'bola', disciplina: 'Historia' },
    { id: 3, nome: 'nei', disciplina: 'Filosofia' },
    { id: 4, nome: 'luciana', disciplina: 'Lingua Portuguesa' },
    { id: 5, nome: 'brasa', disciplina: 'Fisica' },

  ]
    
  professorselect(professores: Professor)
  {
    this.professorselected = professores
    this.professorform.patchValue(professores)
  }
  professorsubmit(){console.log(this.professorform.value)}

  voltar(){
    this.professorselected == null
    window.location.reload();
  }
 

}
