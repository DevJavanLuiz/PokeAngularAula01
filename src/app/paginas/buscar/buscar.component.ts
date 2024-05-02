import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.sass'
})
export class BuscarComponent {
constructor(private http: HttpClient){

}
pokemon: any = {}

getPokemon(nome: string){
  this.http.get(`https://pokeapi.co/api/v2/pokemon/${nome}`).subscribe(
    {
      next: (data: any) => {
        this.pokemon = {
          id: data.id,
          nome: data.name,
          url: data.sprites.other['official-artwork'].front_default
        } 
        console.log(this.pokemon)
      },
      error: (error:any) => {
        console.log(error)
      }
    }
  )
}
}
