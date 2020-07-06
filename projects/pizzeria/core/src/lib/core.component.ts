import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <p>
      core Pedro!
    </p>
  `,
  styles: [
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
