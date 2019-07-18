import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
data = [];
  constructor() { }

  ngOnInit() {
    axios.get('http://localhost:8000/api/articles')
      .then((result) => {
        console.log(result.data);
        this.data = result.data;
      })
      .catch(() => {
        console.log('no');
      })
  }
}
