import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
})
export class MissionFilterComponent {
  @Output() filterChange = new EventEmitter<string>();
  
  // Static list of years (or you can dynamically generate this list from available missions)
  years: string[] = ['2006','2020', '2021', '2022', '2023', '2024'];

  onYearChange(event: any): void {
    this.filterChange.emit(event.target.value);  // Emit the selected year
  }
}
