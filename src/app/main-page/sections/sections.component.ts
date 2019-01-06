import { Component, OnInit } from '@angular/core';

import { Section } from '../../section'
import { SectionService } from '../../section.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.less']
})
export class SectionsComponent implements OnInit {

  constructor(private sectionService: SectionService) { }

sections: any = [];
Status: boolean = true;
  ngOnInit() {
     this.getSections();
  }

  getSections() {
   return this.sectionService.getSections().subscribe(sections => {
     this.sections = sections;
   });
   }

}
