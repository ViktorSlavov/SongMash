import { OnInit, Directive, HostBinding, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: `[hiveHexagon]`
})
export class HiveHexagonDirective implements OnInit, AfterViewInit {

  @HostBinding('class.hive-hexagon')
  public class = true;

  constructor(protected element: ElementRef, protected renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const element = (this.element.nativeElement as HTMLElement);
    const dim = element.getBoundingClientRect();
    const children = { Top: this.renderer.createElement('div'), Bottom: this.renderer.createElement('div')};
    // tslint:disable-next-line:forin
    for (const key in children) {
      this.renderer.appendChild(element, children[key]);
      this.renderer.setStyle(children[key], 'border-left', `${dim.width / 2}px solid transparent`);
      this.renderer.setStyle(children[key], 'border-right', `${dim.width / 2}px solid transparent`);
      this.renderer.setStyle(children[key], 'position', 'absolute');
      // tslint:disable-next-line:max-line-length
      this.renderer.setStyle(children[key], `border-${key.toLowerCase()}`, `${dim.width / 2}px solid ${getComputedStyle(element).backgroundColor}`);
      this.renderer.setStyle(children[key], `${key.toLowerCase()}`, `${dim.height}px`);
    }
  }

}
