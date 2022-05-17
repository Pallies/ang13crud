import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ALERT_BS } from 'src/app/core/model/alert';
import { Toast } from 'src/app/core/model/toast';

import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let template: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
    }).compileComponents();
  });

  beforeEach(async() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    component.toast$ = of(
      new Toast('title', 'message', ALERT_BS.DANGER, 'type')
    );
    template = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('inject toast in component', () => {
    expect(component.toast.title).toEqual('title');
    expect(component.toast.message).toEqual('message');
    expect(component.toast.alert).toEqual(ALERT_BS.DANGER);
    expect(component.toast.type).toEqual('type');
  });
  it('inject toast in template', () => {
    let titleNode = template.getElementsByTagName('strong');
    let message=template.querySelector('.toast-body')
    let typeNode = template.getElementsByTagName('small');

    expect(titleNode.item(0)?.innerHTML).toEqual('title');
    expect(message?.innerHTML).toEqual('message');
    expect(typeNode.item(0)?.innerHTML).toEqual('type');
  });
});
