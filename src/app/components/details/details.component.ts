import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Imovie } from '../../models/Imovie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  movie!: Imovie;
  posterPath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private api: ApiService, private parameters: ActivatedRoute) {}
  ngOnInit(): void {
    const num: number = this.parameters.snapshot.params['id'];
    this.getMovieDetails(num);
    console.log(this.movie);
  }
  getMovieDetails(id: number) {
    this.api.getById(id).subscribe((result) => (this.movie = result));
  }
}
