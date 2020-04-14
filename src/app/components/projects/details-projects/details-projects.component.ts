import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ProjectInterface } from 'src/app/Models/Project';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-details-projects',
  templateUrl: './details-projects.component.html',
  styleUrls: ['./details-projects.component.scss']
})
export class DetailsProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService,private route: ActivatedRoute) { }

  // private unsubscribe$ = new Subject<void>();
  public project: ProjectInterface = {
    project_code : "",
    project_name : "",
    investment_amount : "",
    start_date : new Date,
    ending_date : new Date,
    state : 1

  };

  ngOnInit(): void {
    const project_id = this.route.snapshot.params[ "id"];
    this.getDetailsProyects(project_id);
  }

  getDetailsProyects(id: number) {
  this.projectService.getProjectById(id).subscribe(project => (this.project = project));
  }
}
