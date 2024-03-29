import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm:string ='';
  constructor( activatedRoute:ActivatedRoute, private router: Router){
    // read data from the route 
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
    });
  }

  // send data to the route
  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term); // whaterver the search term come the way navigate to it
  }
}
