import { Component, Input } from '@angular/core';
import { skill } from '../skill';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent {
  @Input() skill?: skill;
}