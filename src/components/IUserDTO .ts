
interface IUserDTO{
  name: string,
  surname: string,
  age:number
}

interface IinfoMovie{
  tittel: string,
  year: number
}

interface Itodo {
  id:  number,
  name: string,
  completed: boolean
}

enum Emat {
  suma = "suma",
  resta = "resta",
  multiplicar = "multiplicar",
  dividir = "dividir",
}

export{IUserDTO, IinfoMovie, Emat,Itodo}