import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-library-template',
  template: `
    <input type="test" (keydown.enter)="markText($event.target.value)">
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>

    <div [innerHTML]="controlledContent"></div>
  `,
  styles: [`.mark {background-color: green}`],
  encapsulation: ViewEncapsulation.None
})
export class LibraryTemplateComponent implements AfterViewInit {

  @ViewChild('content') content: ElementRef;

  originalContent: string;
  controlledContent: string;

  ngAfterViewInit(): void {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }

  markText(value: any) {
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(
      new RegExp(value, 'g'),
        `<span class="mark">${value}</span>`
      );
    console.log(value);
  }

}
