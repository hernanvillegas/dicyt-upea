import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ProjectInterface } from '../Models/Project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient, private authService: AuthService ) { }

  private url_api: string = "http://localhost:3000/api/idh-projects";

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllProject(): Observable<ProjectInterface[]>{
    return this.http.get<ProjectInterface[]>(this.url_api);
  }

  getProjectById(idProject: number){
    let url: string = `${this.url_api}/${idProject}`;
    // console.log(url);
    return this.http.get<ProjectInterface>(url);
  }

  saveProject(project: ProjectInterface){
    return this.http.post(this.url_api, project);
  }

  updateProject(project: ProjectInterface): Observable<ProjectInterface> {
    //TODO: get token
    // this.prepareProduct(capacitation);
    const token = this.authService.getToken();
    const url_api = `${this.url_api}/${project.project_code}/?access_token=${token}`;
    return this.http.put<ProjectInterface>(url_api, project, { headers: this.headers }).pipe(map(data => data));
  }

  deleteProject(id: string) {
    //TODO: get token
    const token = this.authService.getToken();
    const url_api = `${this.url_api}/${id}?access_token=${token}`;
    return this.http.delete(url_api, { headers: this.headers }).pipe(map(data => data));
  }

}
