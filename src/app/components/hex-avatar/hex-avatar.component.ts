import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-hex-avatar',
  templateUrl: './hex-avatar.component.html',
  styleUrls: ['./hex-avatar.component.scss']
})
export class HexAvatarComponent implements OnInit {
  @Input()
  public image = '';

  @Input()
  @HostBinding('style.width')
  public width = '120px';

  @Input()
  @HostBinding('style.height')
  public height = '120px';

  public get itemDimensions() {
    return {
      width: this.width,
      height: this.height
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
