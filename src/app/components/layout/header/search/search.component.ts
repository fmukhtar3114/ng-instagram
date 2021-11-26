import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public clickInput: boolean = false;
  public dataFetched: boolean = false;
  public searchKey: string = '';
  public imgUrl: string = '/assets/img/userdata/';
  public suggestions = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  public onClickInput() {
    document.getElementById('nav-search-input').focus();
    this.clickInput = true;
    this.dataFetched = true;
  }

  public handleBlurInput() {
    this.clickInput = false;
    this.suggestions = [];
    this.searchKey = '';
  }

  public handleKeyup(e) {
    this.dataFetched = false;
    this.searchKey = e.target.value;

  }

  public clickSuggestion(e) {
    e.preventDefault();
    this.clickInput = false;
    this.suggestions = [];
  }
}
