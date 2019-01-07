import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Section } from './section';

const api = '/api/articleManagement';

@Injectable()
export class SectionService {
  constructor(private http: HttpClient) {}

  getSections() {
    return this.http.get<Array<Section>>(`http://localhost:3000/api/sectionManagement/activeSections`);
  }
  getPlannedSections() {
    return this.http.get<Array<Section>>(`http://localhost:3000/api/sectionManagement/plannedSections`);
  }
  deleteSection (section: Section): Observable<Section> {
    const id = section._id;
    const url = `http://localhost:3000/api/sectionManagement/section/${id}`;
    return this.http.delete<Section>(url);
  }
  activateSection (section: Section): Observable<Section> {
    const id = section._id;
    const url = `http://localhost:3000/api/sectionManagement/section/${id}/activate`;
    return this.http.put<Section>(url, true);
  }
  blockSection (section: Section): Observable<Section> {
    const id = section._id;
    const url = `http://localhost:3000/api/sectionManagement/section/${id}/block`;
    return this.http.put<Section>(url, true);
  }
  getListOfSections() {

  }
}
