import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.less']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books = null;
  book=[
    {
      'bookid':1,
      'bookname':'ean etherku eppadi',
      'auther':'venkat',
      'bookstatus':'available',

    },
    {
    'bookid':2,
    'bookname': 'ponniyin selvan',
    'auther':'venkat',
    'bookstatus':'available',
    
  },
  {
  'bookid':1,
  'bookname':'thirukural',
  'auther':'thiruvalluvar',
  'bookstatus':'available',
  
  }
  ]

}
