import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-under-construction',
  template: `
    <div class="under-construction">
      <h1>Site Under Construction</h1>
      <p>We're working hard to bring you a better experience. Please check back soon.</p>
    </div>
  `,
  styles: [
    `.under-construction {
      margin: 50px auto;
      text-align: center;
      font-size: 24px;
      line-height: 1.5;
      max-width: 600px;
    }
    
    .under-construction h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    
    .under-construction p {
      margin-bottom: 40px;
    }
  `
  ]
})
export class UnderConstructionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
