import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/Imovie';
import { ApiService } from '../../services/api.service';
import { CommunicationSearchResultService } from '../../services/communication-search-result.service';
import { map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent implements OnInit {
  posterPath: string = 'https://image.tmdb.org/t/p/w500';
  resultArr: Imovie[] = [];
  page: number = 0;
  totalPages = 0;

  constructor(
    private api: ApiService,
    private communication: CommunicationSearchResultService,
    private params: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.params.queryParams.subscribe((query) => (this.page = query['page']));

    this.setSearchResults(this.page);
  }
  setSearchResults(currentPage: number) {
    this.communication.getTerm().subscribe((result) => {
      this.getResults(result, currentPage);
    });
  }
  getResults(term: string, page: number) {
    this.api
      .getResults(term, page)
      .pipe(tap((result) => console.log(result)))
      .subscribe((result) => {
        this.totalPages = result.total_pages;
        this.resultArr = result.results;
      });
  }
  onBack() {
    this.setSearchResults(--this.page);
  }
  onNext() {
    this.setSearchResults(++this.page);
  }
}
