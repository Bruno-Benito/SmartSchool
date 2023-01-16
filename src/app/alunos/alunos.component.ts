import { Component, OnInit } from '@angular/core';
import { Aluno} from '../models/Alunos';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos', 
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})





export class AlunosComponent implements OnInit {
  public modalRef!: BsModalRef;
  alunoform!: FormGroup
  titulo = 'alunos'
  public alunoselected!: Aluno;
  public textsimple!: string
  
  

  ngOnInit() {
  }






 
  constructor(private fb: FormBuilder, 
    private modalService: BsModalService) { this.criarform();}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }













  criarform()
  {
    this.alunoform = this.fb.group({

      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }
  
  alunos = [

    {id: 1, nome: 'neymar', sobrenome: 'junior', telefone: 332255, },
    {id: 2, nome: 'joao', sobrenome: 'Santos', telefone: 334344, },
    {id: 3, nome: 'bruno', sobrenome: 'Benito', telefone: 332678, },
    {id: 4, nome: 'ana', sobrenome: 'Mendes', telefone: 365445, },
    {id: 5, nome: 'maria', sobrenome: 'Luiza', telefone: 338908, },
    {id: 6, nome: 'cezar', sobrenome: 'Meda', telefone: 336545, }

  ]
  alunoselect(aluno: Aluno)
  {
    this.alunoselected= aluno
    this.alunoform.patchValue(aluno)
  }
  alunosubmit()
  {
    console.log(this.alunoform.value)
  }

  public voltar(){
    this.alunoselected == null
    window.location.reload();
  }

  
}
