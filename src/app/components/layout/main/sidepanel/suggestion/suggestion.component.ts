import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
})
export class SuggestionComponent implements OnInit {
  loginUser = "Test";
  public fetched: boolean = true;

  public suggestions: any = [];
  public followLabel = [];

  constructor() {}

  ngOnInit(): void {

  }
}
