import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CoreModule } from '../core/core.module';
import { AlertToastDirective } from './directives/alert-toast.directive';

@NgModule({
  declarations: [ ToastComponent, SpinnerComponent,AlertToastDirective],
  imports: [CommonModule,CoreModule],
  exports: [ToastComponent, SpinnerComponent,AlertToastDirective],
})
export class SharedModule {}
