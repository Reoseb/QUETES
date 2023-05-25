import { faker, th } from '@faker-js/faker';
describe('tests API notes', () =>{
    // nouvel utilisateur
    it('création compte utilisateur', () =>{
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
            cy.fixture('jeux-de-donnees').as('notesCrea')
        })
    it('Création de note HOME', function(){
        const newNote = this.notesCrea[0];
        cy.request({method:'POST', url:'https://practice.expandtesting.com/notes/api/notes',
        headers:{
            "Content-Type": "application/json",
            "x-auth-token": "a954749ac85a45679e0499f95a52a0196793a70a10ee4397a58425ee58b8aa4f"
            },
        body:{
            "category": newNote.category,
            "description": newNote.description,
            "title": newNote.title
        }
    }).then((response) =>{
        expect(response.status).to.eq(200);
    })
})
it('Création de note Work', function(){
    const newNote = this.notesCrea[1];
    cy.request({method:'POST', url:'https://practice.expandtesting.com/notes/api/notes',
    headers:{
        "Content-Type": "application/json",
        "x-auth-token": "a954749ac85a45679e0499f95a52a0196793a70a10ee4397a58425ee58b8aa4f"
        },
    body:{
        "category": newNote.category,
        "description": newNote.description,
        "title": newNote.title
    }
}).then((response) =>{
    expect(response.status).to.eq(200);
})
})
it('Création de note Personal', function(){
    const newNote = this.notesCrea[2];
    cy.request({method:'POST', url:'https://practice.expandtesting.com/notes/api/notes',
    headers:{
        "Content-Type": "application/json",
        "x-auth-token": "a954749ac85a45679e0499f95a52a0196793a70a10ee4397a58425ee58b8aa4f"
        },
    body:{
        "category": newNote.category,
        "description": newNote.description,
        "title": newNote.title
    }
}).then((response) =>{
    expect(response.status).to.eq(200);
})
})
    // récupération des notes
    it('récupération des notes', () =>{
        cy.request({method : 'GET', url:'https://practice.expandtesting.com/notes/api/notes',
        headers:{
            "Content-Type": "application/json",
            "x-auth-token": "a954749ac85a45679e0499f95a52a0196793a70a10ee4397a58425ee58b8aa4f"
            },
    }).then((response) =>{
            expect(response.status).to.eq(200)
        })
    })
})