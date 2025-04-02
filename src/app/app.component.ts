import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { SpaceXApiService } from './network/spacexapi.service';  // Assuming your service is in the services folder
import { RouterModule } from '@angular/router';  // Import RouterModule


@Component({
  selector: 'app-root',
  standalone: true, // This is the standalone component setup in Angular 14+ or Universal SSR
  imports: [RouterModule, HttpClientModule],  // Add RouterModule to imports
  providers: [SpaceXApiService],  // Register the service here if needed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private spaceXService: SpaceXApiService) {}
}
