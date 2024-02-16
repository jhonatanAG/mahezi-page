import { Component } from '@angular/core';
import { faAngleRight, faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faInstagram = faInstagram;
  faTikTok = faTiktok;
  faAngleRight = faAngleRight;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
}
