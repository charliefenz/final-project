import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { SearchResponse } from '../../models/search-response';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input()
  searchItem: SearchResponse;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goTo(type: string, id: number): void {
    if (type !== 'tv') {
      this.router.navigate([`movies/${id}`], {relativeTo: this.route});
    } else {
      this.router.navigate(['series'], {relativeTo: this.route});
    }
    }

}
