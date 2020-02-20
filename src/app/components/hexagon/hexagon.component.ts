import { OnInit, HostBinding, ElementRef, AfterViewInit, Renderer2, Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: `app-hexagon`,
  templateUrl: `hexagon.component.html`,
  styleUrls: [`hexagon.component.scss`]
})
export class HiveHexagonComponent implements OnInit, AfterViewInit {

  @ViewChild('hexContainer', { read: ElementRef, static: true })
  private hexContainer: ElementRef;

  @ViewChild('hexCore', { read: ElementRef, static: true })
  private hexCore: ElementRef;

  /**
   * The side of the hexagon
   */
  @Input()
  public side = 80;

  /**
   * The color of the hexagon
   */
  @Input()
  public color = '#fffc02';

  @HostBinding('class.hive-hexagon')
  public class = true;

  constructor(protected element: ElementRef, protected renderer: Renderer2) {
  }

  get nativeElement() {
    return this.element.nativeElement;
  }

  ngOnInit() {
    const element = (this.hexCore.nativeElement as HTMLElement);
    this.renderer.setStyle(element, 'width', `${Math.sqrt(3) * this.side}px`);
    this.renderer.setStyle(element, 'height', `${this.side}px`);
    this.renderer.setStyle(element, 'background-color', this.color);
  }

  ngAfterViewInit() {
    const element = (this.hexCore.nativeElement as HTMLElement);
    const dim = element.getBoundingClientRect();
    const children = { Top: this.renderer.createElement('div'), Bottom: this.renderer.createElement('div')};
    // tslint:disable-next-line:forin
    for (const key in children) {
      if (key === 'Bottom') {
        this.renderer.insertBefore(this.hexContainer.nativeElement, children[key], this.hexCore.nativeElement);
      } else {
        this.renderer.appendChild(this.hexContainer.nativeElement, children[key]);
      }
      this.renderer.addClass(children[key], 'hexagon-added');
      this.renderer.setStyle(children[key], 'width', `${dim.width}px`);
      this.renderer.setStyle(children[key], 'border-left', `${dim.width / 2}px solid transparent`);
      this.renderer.setStyle(children[key], 'border-right', `${dim.width / 2}px solid transparent`);
      // tslint:disable-next-line:max-line-length
      this.renderer.setStyle(children[key], `border-${key.toLowerCase()}`, `${dim.height / 2}px solid ${this.color}`);
      this.renderer.setStyle(children[key], `${key.toLowerCase()}`, `${dim.height}px`);
    }
    this.renderer.setStyle(this.nativeElement, 'width', `${dim.width}px`);
  }

}
