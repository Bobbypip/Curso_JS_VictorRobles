import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  @ViewChild('textos', {static:true}) textos: ElementRef;

  constructor() { 
    this.captions = false;
  }

  ngOnInit() {
    console.log(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = null;
  }

  getAutor(event){
    this.autor = event
  }

}
