import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  links: {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
}

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches')
      .subscribe(data => this.missions = data);
  }
}
