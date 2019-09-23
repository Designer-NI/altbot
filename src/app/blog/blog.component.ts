import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogtitle=[
    {
      t1:'How to beat the market with Al.t.bot',
    },
    {
      t1:'How to beat the market with Al.t.bot',
    },
    {
      t1:'How to beat the market with Al.t.bot',
    },
    {
      t1:'How to beat the market with Al.t.bot',
    }
  ]
  tags=[
    {
      tag1:'Tags',
    },
    {
      tag1:'Al.t.bot',
    },
    {
      tag1:'Beat market',
    },
    {
      tag1:'Beat market',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
