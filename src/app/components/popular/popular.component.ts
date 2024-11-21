import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs';
import { Imovie } from '../../models/Imovie';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css',
})
export class PopularComponent implements OnInit {
  title: string = 'See how good enough  these films are';
  popularArr: Imovie[] = [];
  posterPath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .getPopular()
      .pipe(map((result) => result.results.splice(0, 3)))
      .subscribe((result) => {
        this.popularArr = result;
      });
  }
}
