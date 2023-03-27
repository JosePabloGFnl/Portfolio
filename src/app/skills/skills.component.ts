import { Component } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  
  skill: Skill = {

    id: 1,
    name: 'Python'

  };
}
