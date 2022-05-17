import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Toast } from './core/model/toast';
import { LoadingSpinnerService } from './core/services/loadingSpinner/loading-spinner.service';
import { MessageToastService } from './core/services/message-toast/message-toast.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TP CRUD';
  toast$!: Observable<Toast>;
  constructor(private messageToast: MessageToastService) {}
  ngOnInit(): void {
    this.toast$ = this.messageToast.getMessage();
  }
}
