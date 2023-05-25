const { titleize } = require("cypress/lib/util");

describe('test api avec cypress', () => {

    it('Récupérer une liste dutilisateurs', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
          expect(response.status).to.equal(200);
          expect((response) => response.json());
          expect((json) => console.log(json));
        });
      });

      it('Créer un nouvel utilisateur', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {      
        body:{
         title:'reo',
        body:'bar',
        userId: 1,   
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((response) => {
          expect(response.status).to.equal(201);
          expect(response.body.title).to.equal('John Doe');
          expect(response.body.job).to.equal('Tester');
        });
      });
      
      

    it('Mettre à jour un utilisateur', () => {
        cy.request('PUT', 'https://reqres.in/api/users/2', {
          name: 'Updated User',
          job: 'QA Engineer'
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.name).to.equal('Updated User');
          expect(response.body.job).to.equal('QA Engineer');
        });
      });
    
        
        it('Supprimer un utilisateur', () => {
           cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.equal(204);
           });
     // });
      
  });
});