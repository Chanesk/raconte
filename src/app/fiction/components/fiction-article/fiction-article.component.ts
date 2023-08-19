import { Component, Input } from '@angular/core';
import { Raconte } from 'src/app/core/model/raconte.model';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fiction-article',
  templateUrl: './fiction-article.component.html',
  styleUrls: ['./fiction-article.component.scss'],
})
export class FictionArticleComponent {
  @Input() raconte!: Raconte;
  icon = faArrowUpRightFromSquare;
}
