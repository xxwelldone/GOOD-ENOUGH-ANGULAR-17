import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/Imovie';
import { ApiService } from '../../services/api.service';
import { CommunicationSearchResultService } from '../../services/communication-search-result.service';
import { map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

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

  constructor(
    private api: ApiService,
    private communication: CommunicationSearchResultService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.communication.getTerm().subscribe((result) => {
      this.getResults(result);
    });
  }

  getResults(term: string) {
    this.api
      .getResults(term)
      .pipe(map((result) => result.results))
      .subscribe((result) => {
        this.resultArr = result;
      });
  }
}
