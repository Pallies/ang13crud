import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Toast } from '../../../core/model/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, AfterViewInit  {
  @Input() toast$!: Observable<Toast>;

  constructor() {}

  toast!: Toast;
  isShow = false;

  ngOnInit(): void {
    this.ngAfterViewInit();
  }


  ngAfterViewInit(): void {
    this.toast$.subscribe((toast) => {
      this.toast = toast;
      this.isShow = toast.title != '';
      setTimeout(() => (this.isShow = false), 5000);
    });
  }

}
