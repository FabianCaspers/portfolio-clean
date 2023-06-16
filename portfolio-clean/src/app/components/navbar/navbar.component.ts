import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor( public translate: TranslateService) {
  }

  translateEN() {
    this.translate.use('en').subscribe(() => { 
    });
  }
  
  translateDE() {
    this.translate.use('de').subscribe(() => { 
    });
  }

  translateENMobile() {
    this.translate.use('en').subscribe(() => { 
      this.openAndCloseMenu();
    });
  }
  
  translateDEMobile() {
    this.translate.use('de').subscribe(() => { 
      this.openAndCloseMenu();
    });
  }
  
  


  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  ngOnInit(): void {

  }

  openAndCloseMenu() {
    this.mobileMenuButton.nativeElement.classList.toggle('active');
    this.mobileMenu.nativeElement.classList.toggle('show');
  }

}
