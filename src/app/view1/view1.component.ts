import { Component, OnInit } from '@angular/core';
import { BeritaService } from '../services/berita.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public beritaBeritaTerbaru: any = null;

  constructor(
    private beritaService: BeritaService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.beritaService.getBeritaTerbaru().subscribe(data => this.beritaBeritaTerbaru = data);
  }
}
