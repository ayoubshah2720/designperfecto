import { Component, OnInit, Renderer2 } from '@angular/core';

declare var window: any;

@Component({
  selector: 'tawk',
  templateUrl: './tawk.component.html',
  styleUrls: ['./tawk.component.scss']
})
export class TawkComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const script = `
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/630fb70337898912e96679b1/1gbqm5ric';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();`;
    const el = this.renderer.createElement('script');
    el.text = script;
    this.renderer.appendChild(document.body, el);
    

  }

  

}