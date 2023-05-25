describe('test api avec cypress', () => {

    it('Récupérer une liste dutilisateurs', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.data).to.have.length.above(0);
        });
      });

      it('Créer un nouvel utilisateur', () => {
        cy.request('POST', 'https://reqres.in/api/users', {
          name: 'John Doe',
          job: 'Tester'
        }).then((response) => {
          expect(response.status).to.equal(201);
          expect(response.body.name).to.equal('John Doe');
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