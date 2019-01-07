import { Component, OnInit } from '@angular/core';
import { Section } from '../../section'
import { SectionService } from '../../section.service';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.less']
})
export class SectionDetailsComponent implements OnInit {
  activeSections: any = [];
  plannedSections: any = [];
  flag: boolean = true;
  constructor(
    private sectionService: SectionService
  ) { }

  ngOnInit() {
    this.getPlannedSections();
    this.getActiveSections();
  }
  getActiveSections() {
    return this.sectionService.getSections().subscribe(sections => {
      this.activeSections = sections;
    });
  }
  getPlannedSections() {
    return this.sectionService.getPlannedSections().subscribe(sections => {
      this.plannedSections = sections;
    });
  }
  deleteSection(section: Section) {
    this.activeSections = this.activeSections.filter(a => a !== section);
    this.plannedSections = this.plannedSections.filter(a => a !== section);
    this.sectionService.deleteSection(section).subscribe();
  }
  activateSection(section: Section) {
  //  this.plannedSections = this.plannedSections.filter(a => a !== section);
    //this.activeSections = this.activeSections.filter(a => a);
    // this.activeSections.push(section);
    this.sectionService.activateSection(section).subscribe(
      suc => {
          this.ngOnInit();
        }
    );
    // this.flag = true;
    // this.ngOnInit();
  }
  blockSection(section: Section) {
  //  this.activeSections = this.activeSections.filter(a => a !== section);
//    this.plannedSections = this.plannedSections.filter(a => a);
    // this.plannedSections.push(section);
    this.sectionService.blockSection(section).subscribe(
      suc => {
          this.ngOnInit();
        }
    );
    // this.flag = true;
    // this.ngOnInit();
  }
}
