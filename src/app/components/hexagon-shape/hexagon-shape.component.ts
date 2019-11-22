import { Component, OnInit, AfterViewInit, Input, QueryList, Renderer2, ContentChildren, ElementRef, HostBinding } from '@angular/core';
import { HexagonShapeFormations } from 'src/app/common';
import { HiveHexagonComponent } from '../hexagon/hexagon.component';



@Component({
    selector: 'app-hexagon-shape',
    templateUrl: 'hexagon-shape.component.html',
    styleUrls: ['hexagon-shape.component.scss']
})
export class HexagonShapeComponent implements OnInit, AfterViewInit {
    @Input()
    public formation: HexagonShapeFormations;

    @ContentChildren(HiveHexagonComponent, { read: HiveHexagonComponent })
    public hexagons: QueryList<HiveHexagonComponent>;

    @HostBinding('attr.style.width')
    public width = null;

    constructor(protected renderer: Renderer2, protected element: ElementRef) { }

    private arrange() {
        const hexagons = this.hexagons.toArray();
        switch (this.formation) {
            case (HexagonShapeFormations.FLOWER):
                for (let i = 0; i < hexagons.length; i++) {
                    this.transformFlower(hexagons[i], i);
                }
                this.renderer.setStyle(this.element.nativeElement, 'width', `${3 * Math.sqrt(3) * hexagons[0].side}px`);
                break;
            case (HexagonShapeFormations.PYRAMID):
                break;
            default:
                console.warn('Please pass a valid formation');
        }
    }

    private transformFlower(hexagon: HiveHexagonComponent, index: number) {
        this.renderer.setStyle(hexagon.nativeElement, 'position', 'absolute');
        switch (index) {
            case (0):
                this.renderer.setStyle(hexagon.nativeElement, 'left', `${Math.sqrt(3) * hexagon.side}px`);
                this.renderer.setStyle(hexagon.nativeElement, 'top', `${(3 / 2) * hexagon.side}px`);
                break;
            case (1):
                this.renderer.setStyle(hexagon.nativeElement, 'top', `${(3 / 2) * hexagon.side}px`);
                // this.renderer.setStyle(hexagon.nativeElement, 'left', `${(3 / 2) * hexagon.side}px`);
                break;
            case (2):
                this.renderer.setStyle(hexagon.nativeElement, 'left', `${(Math.sqrt(3) * hexagon.side) / 2}px`);
                break;
            case (3):
                this.renderer.setStyle(hexagon.nativeElement, 'left',
                    `${(Math.sqrt(3) * hexagon.side) / 2 + Math.sqrt(3) * hexagon.side}px`);
                break;
            case (4):
                this.renderer.setStyle(hexagon.nativeElement, 'left', `${2 * Math.sqrt(3) * hexagon.side}px`);
                this.renderer.setStyle(hexagon.nativeElement, 'top', `${(3 / 2) * hexagon.side}px`);
                break;
            case (5):
                this.renderer.setStyle(hexagon.nativeElement, 'left', `${(Math.sqrt(3) * hexagon.side) / 2}px`);
                this.renderer.setStyle(hexagon.nativeElement, 'top', `${3 * hexagon.side}px`);
                break;
            case (6):
                this.renderer.setStyle(hexagon.nativeElement, 'left',
                    `${(Math.sqrt(3) * hexagon.side) / 2 + Math.sqrt(3) * hexagon.side}px`);
                this.renderer.setStyle(hexagon.nativeElement, 'top', `${3 * hexagon.side}px`);
                break;
            default:
                console.log('Out of range');
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.arrange();
    }
}
