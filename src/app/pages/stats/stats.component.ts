import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @ViewChild('file') upload: ElementRef;
  uploadInProgress = false;
  isVideoUploaded = false;
  file: any;
  fileName:any;
  constructor() { }

  ngOnInit() {
  }

  fileUploaded(event) {
 
    this.file = event.target.files[0];
    console.log(this.file.name);
    this.fileName = this.file.name;
    this.uploadInProgress = true;
  }

  uploadFile() {
    this.upload.nativeElement.click();
  }


  closeUpload(){
    this.uploadInProgress = false;
  }

  uploadVideo(){
    this.isVideoUploaded = true;
  }
}
