import { Component, OnInit , Input } from '@angular/core';
import { ChildComponent} from '../child/child.component'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input()
  ParentMessage = "Parent"
  constructor() { }

  ngOnInit() {
  }

}
