import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  public onDebounce: Subject<string> = new Subject<string>();
  public subscriptionDebounce?: Subscription;


  ngOnInit(): void {
    this.subscriptionDebounce = this.onDebounce
      .pipe(debounceTime(400))
      .subscribe((value) => {
        this.onDebouncer.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.subscriptionDebounce?.unsubscribe();
  }
  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue: string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public onDebouncer: EventEmitter<string> = new EventEmitter<string>();

  // emitValue(value: string) {
  //   this.onValue.emit(value);
  // }

  onKeyPress(value: string) {
    this.onDebounce.next(value);
    console.log('debounce value:', value);
  }
}
