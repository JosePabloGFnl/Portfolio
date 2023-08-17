import { Injectable } from '@angular/core';
import { skill } from './skill';
import { SKILLS } from './mock-skills';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private messageService: MessageService) { }

  getSkills(): Observable<skill[]> {
    const skills = of(SKILLS);
    this.messageService.add('SkillService: fetched skills');
    return skills;
  }

}
