import { faker, th } from '@faker-js/faker';

describe('', () => {
    
    })
    it('Créer un nouvel utilisateur', () => {
        // utilisation de faker
      const lastName = faker.person.lastName();
      const email = faker.internet.email();
      const password = faker.internet.password();
      cy.request({method:'POST',url:'https://practice.expandtesting.com/notes/api/users/register',
      body :{
          "name":  lastName,
          "email": email,
          "password": password
      }
    })
})
  // création de notes
// jeux de données
beforeEach(() =>{
        cy.fixture('userData_notes').as('newNotes')
})
    it('Création de note HOME', function(){
    const creaNote = this.newNotes[0];
    cy.request({method:'POST', url:'https://practice.expandtesting.com/notes/api/notes',      
        
        headers:{
            "Content-Type":"application/json",
            "x-auth-token":"263163949369403b88d60b5092b438ee32c3c9162c7f4666baeca097b1a40834"
            },              
            body:{
                "title":creaNote.title,
                "description":creaNote.description,
                "category":creaNote.category
            }
        }).then((response) =>{
            expect(response.status).to.eq(200);
      
    })
    })   
    
    it('Création de note WORK', function(){
        const creaNote = this.newNotes[1];
        cy.request({method:'POST', url:'https://practice.expandtesting.com/notes/api/notes',      
            
            headers:{
                "Content-Type":"application/json",
                "x-auth-token":"263163949369403b88d60b5092b438ee32c3c9162c7f4666baeca097b1a40834"
                },              
                body:{
                    "title":creaNote.title,
                    "description":creaNote.description,
                    "category":creaNote.category
                }
            }).then((response) =>{
                expect(response.status).to.eq(200);
          
        })
        })
   
        it('Création de note PERSONAL', function(){
            const creaNote = this.newNotes[2];
            cy.request({method:'POST', url:'https://practice.expandtesting.com/notes/api/notes',      
                
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":"263163949369403b88d60b5092b438ee32c3c9162c7f4666baeca097b1a40834"
                    },              
                    body:{
                        "title":creaNote.title,
                        "description":creaNote.description,
                        "category":creaNote.category
                    }
                }).then((response) =>{
                    expect(response.status).to.eq(200);
              
            })
            })
    // récupération des notes
    it('Récupération des notes', () =>{
        cy.request({method : 'GET', url:'https://practice.expandtesting.com/notes/api/notes',
        headers:{
            "Content-Type": "application/json",
            "x-auth-token": "263163949369403b88d60b5092b438ee32c3c9162c7f4666baeca097b1a40834"
            },
    }).then((response) =>{
            expect(response.status).to.eq(200)
        })
    })


