import { buttonStateTrigger } from './animations';
import { Project } from '../projects/project.model';
import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  animations: [
    buttonStateTrigger
  ]

})
export class NewProjectComponent implements OnInit {

  @Output() creationCancelled = new EventEmitter<void>();
  @Output() projectCreated = new EventEmitter<Project>();
  @ViewChild('f') form: NgForm;
  availableStatus = [
    'active',
    'inactive',
    'critical'
  ];

  constructor() { }

  ngOnInit() {
  }

  onCreateProject() {
    this.projectCreated.emit({name: this.form.value.name, description: this.form.value.description, status: this.form.value.status});
  }

  onCancel() {
    this.form.reset();
    this.creationCancelled.emit();
  }

}
