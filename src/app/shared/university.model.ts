interface Specialty {
    position: string;
    name: string;   
    imgUrl: string; 
}

interface Faculty {
    id: number;
    name: string;
    director: string;    
}
interface Department {
    id: number;
    name: string;
    director: string;    
}

export class University {
  constructor(
    public id: number,
    public name: string,
    public rektorName: string,
    public buildingCount: number,
    public commonArea: number,
    public eduLabArea: number,
    public sportArea: number,
    public campusArea: number,
    public pcCount: number,
    public specialtyCount: number, 
    public departmentCount: number,     
    public studentCount: number, 
    public teacherCount: number,
    public eyaniStudentCount : number,
    public qiyabiStudentCount: number,
    public bachelorStudentCount: number,
    public mastersStudentCount: number,
    public doctorsStudentCount: number,
    public kishiStudentCount: number,
    public qadinStudentCount: number,
    public eyaniTeacherCount : number,
    public qiyabiTeacherCount: number,
    public bachelorTeacherCount: number,
    public mastersTeacherCount: number,
    public doctorsTeacherCount: number,
    public kishiTeacherCount: number,
    public qadinTeacherCount: number,
    public faculties: Faculty[],
    public freshmanCount: number, 
    public onCampusCount: number,
    public offCampusCount: number,
    public city: string,
    public street: string,
    public foundDate: number,
    public departments: Department[],
    public info: string,
    public history: string[],
    public specialties: Specialty[],
    public languages: string[],
    public imgUrl: string,
    public coverImgUrl: string
  ) {  }
}
