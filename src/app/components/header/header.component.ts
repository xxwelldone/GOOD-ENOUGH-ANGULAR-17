import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommunicationSearchResultService } from '../../services/communication-search-result.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private communication: CommunicationSearchResultService,
    private router: Router
  ) {}
  hide: boolean = true;
  searchForm: FormGroup = new FormGroup({
    term: new FormControl('', [Validators.required]),
  });
  handleClick(event: MouseEvent) {
    event.preventDefault();
    if (this.hide) {
      this.hide = !this.hide;
    } else {
      this.search();
      this.hide = !this.hide;
    }
  }
  search() {
    const term = this.searchForm.get('term')?.value;
    this.communication.setTerm(term);
    this.router.navigate(['/searchResults'], { queryParams: { page: 1 } });
  }
}
