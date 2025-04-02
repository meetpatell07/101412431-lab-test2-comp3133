import { Component, OnInit } from '@angular/core';
import { SpaceXApiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { CommonModule } from '@angular/common';
import { MissionFilterComponent } from '../missionfilter/missionfilter.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [RouterModule, CommonModule, MissionFilterComponent],  // Add RouterModule to imports
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  allMissions: Mission[] = [];

  constructor(private spaceXService: SpaceXApiService) {}

  ngOnInit(): void {
    this.spaceXService.getAllMissions().subscribe((data) => {
      this.missions = data;
      this.allMissions = data; // Store all missions for reset when needed
    });
  }

  filterByYear(year: string): void {
    if (year) {
      this.missions = this.allMissions.filter(
        (mission) => mission.launch_year === year
      );
    } else {
      this.missions = [...this.allMissions]; // Reset to all missions if no filter
    }
  }
}
