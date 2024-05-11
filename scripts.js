let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Miguel', number: '(96) 99145-3780' },
    { name: 'Mario', number: '(96) 99145-3790' },
    { name: 'Maria', number: '(96) 99145-3710' },
    { name: 'Laudeci', number: '(96) 99145-3711' },
    { name: 'Joao', number: '(96) 99145-3712' },
    { name: 'Rogerio', number: '(96) 99145-3713' },
]

function search() {
    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase === contacts[i].name.toLowerCase) {
            p.innerHTML = `Contato Encontrado, Nome: ${contacts[i].name} tel: ${contacts[i].number}`

            break
        } else {
            p.innerHTML = "Contato Nao Encontrado,tente novamente"
        }

    }
}