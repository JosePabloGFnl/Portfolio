import { Component, OnInit } from '@angular/core';

import { skill } from '../skill';
import { SkillService } from '../skill.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  selectedSkill?: skill;

  skills: skill[] = [];

  constructor(private skillService: SkillService, private messageService: MessageService) {}

  onSelect(skill: skill): void {
    this.selectedSkill = skill;
    this.messageService.add('SkillsComponent: Selected skill id=${skill.id}');
  }

  getSkills(): void {
    this.skillService.getSkills()
    .subscribe(skills => this.skills = skills);
  }

  ngOnInit(): void {
    this.getSkills();
  }

}