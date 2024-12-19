export class Courses {

    constructor(id, name, color) {
        this.id = id;                 
        this.name = name;             
        this.color = color;           // Code d'acces 
        
    }
}

export const courses = [
  new Courses(1, 'Développement',"#fe1bc3"),
  new Courses(2, 'Anglais',"#e3bb77"),
  new Courses(3, 'Marketing',"#70b37c"),
];

// module.exports = { courses, Courses}