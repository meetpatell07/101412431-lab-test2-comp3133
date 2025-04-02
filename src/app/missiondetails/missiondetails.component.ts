import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXApiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission | undefined;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXApiService
  ) {}

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('id'));
    this.spaceXService.getMissionByFlightNumber(flightNumber).subscribe((data) => {
      this.mission = data;
    });
  }
}
