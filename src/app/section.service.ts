import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Section } from './section';

const api = '/api/articleManagement';

@Injectable()
export class SectionService {
  constructor(private http: HttpClient) {}

  getSections() {
    return this.http.get<Array<Section>>(`http://localhost:3000/api/sectionManagement/activeSections`);
  }
  getListOfSections() {
    
  }
}
