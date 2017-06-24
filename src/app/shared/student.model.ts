interface Subject {
    id: number;
    series: number;
    name: string;
    date: number;
    grade: string;
    imgUrl: string;
}
export interface Document {
    id: number;
    series: string;
    date: number;
    type: string;
}
export interface Contact {
    name: string;
    address: string;
}
export interface Address {
    name: string;
    value: string;
}
interface Parent {
    id: number;
    name: string;
    position: string; 
    profileImgUrl: string;   
}
interface Fact {
    id: number,
    date: string,
    text: string,
}
interface Class {
    name: string,
    group: string,
    year: number,
    semester: string,
    attendance: number,
    semesterPoints: number,
    examPoints: number,
    grade: string,
}

export class Student {
  constructor(
    public id: number,
    public name: string,
    public courseYear: number,
    public title: string,
    public universityId: number,
    public universityName: string,
    public birthday: string, 
    public gender: string,
    public grade: string,
    public status: string,
    public jobStatus: string,
    public faculty: string,
    public profession: string,
    public admissionScore: number,
    public bio: string,
    public history: Fact[],
    public addresses: Address[],
    public parents: Parent[],
    public contacts: Contact[],
    public imgUrl: string,
    public coverImgUrl: string,
    public documents: Document[],
    public subjects: Subject[],
    public completedClasses: number,
    public incompleteClasses: number,
    public totalClasses: number,
    public gpa: number,
    public classes: Class[]
  ) {  }
}
