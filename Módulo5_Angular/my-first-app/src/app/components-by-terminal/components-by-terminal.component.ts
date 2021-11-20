import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-by-terminal', //não obrigatório
  templateUrl: './components-by-terminal.component.html', // obrigatório
  styleUrls: ['./components-by-terminal.component.css'] // não obrigatório
})
export class ComponentsByTerminalComponent implements OnInit {

  permitirAdicaoServidor = false;
  statusAdicaoServidor = 'Nenhum servidor foi criado';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Servidor LETS CODE', 'SERVIDOR TURMA #810'];

  constructor() {
    setTimeout(() => {
      this.permitirAdicaoServidor = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.statusAdicaoServidor = 'Servidor criado! Nome do servidor é ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

}
