import { Component } from '@angular/core';
import { skill } from '../skill';
import { SKILLS } from '../mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = SKILLS;

  selectedSkill?: skill;
  onSelect(skill: skill): void {
    this.selectedSkill = skill;
  }
}
