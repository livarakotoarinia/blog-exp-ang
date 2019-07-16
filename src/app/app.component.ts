import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae illo saepe quidem. Vitae nobis suscipit dignissimos inventore iure quo similique hic sapiente expedita eaque debitis nam rerum velit quisquam consequuntur impedit, iusto quis quos dolore facilis voluptatum! Accusantium magni optio tenetur officiis perferendis amet recusandae repudiandae dolorem expedita incidunt?",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sed saepe voluptatibus unde, soluta odit necessitatibus. Voluptas quaerat recusandae blanditiis!",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quam dolores minus provident quas similique esse temporibus culpa obcaecati, totam eum sunt, ut dolorem error veritatis, rem voluptatem iusto ratione dolore libero perspiciatis autem! Rerum blanditiis consequuntur totam a accusamus sit cum repellendus laudantium laborum, maiores facere maxime? Numquam similique cum distinctio consectetur, corrupti nostrum, repellendus corporis ab quam rem provident sit! Nostrum vero dicta aspernatur error ipsum corporis veniam!",
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor(){}
}
