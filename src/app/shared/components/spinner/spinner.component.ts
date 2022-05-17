import { Component, Input, OnInit } from '@angular/core';
import { LoadingSpinnerService } from 'src/app/core/services/loadingSpinner/loading-spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor(private loadingService: LoadingSpinnerService) {}
  show!: boolean;
  ngOnInit(): void {
    this.loadingService.getState().subscribe((state) => {
console.log(state)
      this.show = state
    });
  }
}
