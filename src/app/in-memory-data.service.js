/*
import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let people = [
      {
        id:1,
        pinCode:null,
        firstName:"Orkhan",
        lastName:"Ahmadov",
        middleName:"Teymur",
        birthDate:null,
        gender:null,
        image:null,
        citizenship:null,
        socialStatus:null,
        maritalStatus:null,
        orphanDegree:null,
        militaryService:null,
        nationality:null,
        createDate:null,
        lastUpdate:null,
        active:false,
        addresses:null,
        contacts:null,
        documents:null,
        relations:null,
        speciality: {
          id:1000140,
          type:null,
          parent:null,
          nodeLevel:0,
          name: {
            az:"Ixtisas",
            en:"Ixtisas",
            ru:"Ixtisas"
          },
          about:null,
          coverPhoto:null,
          createDate:null,
          lastUpdate:null,
          active:false,
          parentNode:false,
          code:null,
          iconPath:null,
          structureInfo:null
        },
        studentCardNo:"qweqeqeqwe",
        actionType:null,
        actionDate:null,
        note:null,
        fromOrgId:null,
        curOrgId:null,
        eduLineId:null,
        eduTypeId:null,
        edupayTypeId:null,
        eduLangId:null,
        score:null,
        eduLevelId:null
      }
    ];
    let universities = [
/*
      {
        id: 100,
        name: 'Azerbaycan Respublikasi Tehsil Nazirliyi',
        eyaniStudentCount : 123,
        qiyabiStudentCount: 45,
        bachelorStudentCount: 123,
        mastersStudentCount: 213,
        doctorsStudentCount: 153,
        kishiStudentCount: 123,
        qadinStudentCount: 531,
        eyaniTeacherCount : 123,
        qiyabiTeacherCount: 45,
        bachelorTeacherCount: 123,
        mastersTeacherCount: 213,
        doctorsTeacherCount: 153,
        kishiTeacherCount: 123,
        qadinTeacherCount: 531,
        studentCount: 100000,
        freshmanCount: 211,
        onCampusCount: 2000,
        offCampusCount: 385,
        teacherCount: 20000,
        city: 'Baku',
        street: "Akademik Zahid Xelilov",
        foundDate: 1920,
        departmentCount: 150,
        faculties: [
          { id: 1, name: "Kompyuter muhandisliyi fakultesi4", director: "Elyiev Rovshan Ilkin"},
          { id: 2, name: "Kompyuter muhandisliyi fakultesi2", director: "Elyiev Rovshan Ilkin"},
          { id: 3, name: "Kompyuter muhandisliyi fakultesi3", director: "Elyiev Rovshan Ilkin"}
        ],
        departments: [
          { id: 1, name: "Kompyuter muhandisliyi kafedra4", director: "Elyiev Rovshan Ilkin"},
          { id: 2, name: "Kompyuter muhandisliyi kafedra2", director: "Elyiev Rovshan Ilkin"},
          { id: 3, name: "Kompyuter muhandisliyi kafedra3", director: "Elyiev Rovshan Ilkin"}
        ],
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore necessitatibus, repellat accusamus assumenda consectetur dolor adipisci quaerat in commodi omnis ad expedita incidunt! Blanditiis sapiente qui aliquam tenetur doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laudantium modi iure sed ullam architecto error culpa debitis deleniti voluptatibus nulla amet explicabo, possimus mollitia, quis quasi rem dolorum animi.",
        history: ['Universitetin yaranma tarixi: 28 may 1919','Azerbaycan dili kafedrasinin acilishi: 01 Iyun 1920','Muhendislik kafedrasinin aclishi: 21 Iyul 1922','Birinci telebelerin buraxilishi: 31 May 1923', 'Universitetde rus dili sektorunun aclishi: 17 Oktyabr 1923', 'Azerbaycanda birinci Kimya Labaratoriyasinin acilishi: 20 Noyabr 1925', 'Birinci ecnebi telebelerin qebulu: 01 Sentyabr 1926'],
        administration: [
          { position: 'Rektor', name: 'Professor Asiman Eliyev Xanlar oglu' },
          { position: 'Prorektor', name: 'Professor Orxan Abdullayev Eli oglu'},
          { position: 'Prorektor', name: 'Professor Aygun Xanlarova Maarif qizi'}
        ],
        languages: ['Azeri', 'English', 'Russian', 'Turkish'],
        imgUrl: "img/logos/artn.png",
        coverImgUrl: "images/bdu.jpg"
      },      */
/*
{
  id: 11,
  name: 'Baki Dovlet Universiteti',
  eyaniStudentCount : 123,
  qiyabiStudentCount: 45,
  bachelorStudentCount: 123,
  mastersStudentCount: 213,
  doctorsStudentCount: 153,
  kishiStudentCount: 123,
  qadinStudentCount: 531,
  eyaniTeacherCount : 123,
  qiyabiTeacherCount: 45,
  bachelorTeacherCount: 123,
  mastersTeacherCount: 213,
  doctorsTeacherCount: 153,
  kishiTeacherCount: 123,
  qadinTeacherCount: 531,
  studentCount: 2385,
  freshmanCount: 211,
  onCampusCount: 2000,
  offCampusCount: 385,
  teacherCount: 71,
  city: 'Baku',
  street: "Akademik Zahid Xelilov",
  foundDate: 1920,
  departmentCount: 3,
  faculties: [
    { id: 1, name: "Kompyuter muhandisliyi fakultesi4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi fakultesi2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi fakultesi3", director: "Elyiev Rovshan Ilkin"}
  ],
  departments: [
    { id: 1, name: "Kompyuter muhandisliyi kafedra4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi kafedra2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi kafedra3", director: "Elyiev Rovshan Ilkin"}
  ],
  info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore necessitatibus, repellat accusamus assumenda consectetur dolor adipisci quaerat in commodi omnis ad expedita incidunt! Blanditiis sapiente qui aliquam tenetur doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laudantium modi iure sed ullam architecto error culpa debitis deleniti voluptatibus nulla amet explicabo, possimus mollitia, quis quasi rem dolorum animi.",
  history: ['Universitetin yaranma tarixi: 28 may 1919','Azerbaycan dili kafedrasinin acilishi: 01 Iyun 1920','Muhendislik kafedrasinin aclishi: 21 Iyul 1922','Birinci telebelerin buraxilishi: 31 May 1923', 'Universitetde rus dili sektorunun aclishi: 17 Oktyabr 1923', 'Azerbaycanda birinci Kimya Labaratoriyasinin acilishi: 20 Noyabr 1925', 'Birinci ecnebi telebelerin qebulu: 01 Sentyabr 1926'],
  administration: [
    { position: 'Rektor', name: 'Professor Asiman Eliyev Xanlar oglu' },
    { position: 'Prorektor', name: 'Professor Orxan Abdullayev Eli oglu'},
    { position: 'Prorektor', name: 'Professor Aygun Xanlarova Maarif qizi'}
  ],
  languages: ['Azeri', 'English', 'Russian', 'Turkish'],
  imgUrl: "img/bdu-logo.png",
  coverImgUrl: "images/bdu.jpg"
},
{
  id: 12,
  name: 'Narxoz',
  eyaniStudentCount : 123,
  qiyabiStudentCount: 45,
  bachelorStudentCount: 123,
  mastersStudentCount: 213,
  doctorsStudentCount: 153,
  kishiStudentCount: 123,
  qadinStudentCount: 531,
  eyaniTeacherCount : 123,
  qiyabiTeacherCount: 45,
  bachelorTeacherCount: 123,
  mastersTeacherCount: 213,
  doctorsTeacherCount: 153,
  kishiTeacherCount: 123,
  qadinTeacherCount: 531,
  studentCount: 2385,
  freshmanCount: 211,
  onCampusCount: 2000,
  offCampusCount: 385,
  teacherCount: 71,
  city: 'Baku',
  street: "Akademik Zahid Xelilov",
  foundDate: 1933,
  departmentCount: 3,
  faculties: [
    { id: 1, name: "Kompyuter muhandisliyi fakultesi4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi fakultesi2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi fakultesi3", director: "Elyiev Rovshan Ilkin"}
  ],
  departments: [
    { id: 1, name: "Kompyuter muhandisliyi kafedra4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi kafedra2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi kafedra3", director: "Elyiev Rovshan Ilkin"}
  ],
  info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore necessitatibus, repellat accusamus assumenda consectetur dolor adipisci quaerat in commodi omnis ad expedita incidunt! Blanditiis sapiente qui aliquam tenetur doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laudantium modi iure sed ullam architecto error culpa debitis deleniti voluptatibus nulla amet explicabo, possimus mollitia, quis quasi rem dolorum animi.",
  history: ['Universitetin yaranma tarixi: 28 may 1919','Azerbaycan dili kafedrasinin acilishi: 01 Iyun 1920','Muhendislik kafedrasinin aclishi: 21 Iyul 1922','Birinci telebelerin buraxilishi: 31 May 1923', 'Universitetde rus dili sektorunun aclishi: 17 Oktyabr 1923', 'Azerbaycanda birinci Kimya Labaratoriyasinin acilishi: 20 Noyabr 1925', 'Birinci ecnebi telebelerin qebulu: 01 Sentyabr 1926'],
  administration: [
    { position: 'Rektor', name: 'Professor Asiman Eliyev Xanlar oglu' },
    { position: 'Prorektor', name: 'Professor Orxan Abdullayev Eli oglu'},
    { position: 'Prorektor', name: 'Professor Aygun Xanlarova Maarif qizi'}
  ],
  languages: ['Azeri', 'English', 'Russian', 'Turkish'],
  imgUrl: "img/bdu-logo.png",
  coverImgUrl: "images/bdu.jpg"
},
{
  id: 13,
  name: 'Baki Slavyan Universiteti',
  eyaniStudentCount : 123,
  qiyabiStudentCount: 45,
  bachelorStudentCount: 123,
  mastersStudentCount: 213,
  doctorsStudentCount: 153,
  kishiStudentCount: 123,
  qadinStudentCount: 531,
  eyaniTeacherCount : 123,
  qiyabiTeacherCount: 45,
  bachelorTeacherCount: 123,
  mastersTeacherCount: 213,
  doctorsTeacherCount: 153,
  kishiTeacherCount: 123,
  qadinTeacherCount: 531,
  studentCount: 2385,
  freshmanCount: 211,
  onCampusCount: 2000,
  offCampusCount: 385,
  teacherCount: 71,
  city: 'Baku',
  street: "Akademik Zahid Xelilov",
  foundDate: 1901,
  departmentCount: 3,
  faculties: [
    { id: 1, name: "Kompyuter muhandisliyi fakultesi4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi fakultesi2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi fakultesi3", director: "Elyiev Rovshan Ilkin"}
  ],
  departments: [
    { id: 1, name: "Kompyuter muhandisliyi kafedra4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi kafedra2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi kafedra3", director: "Elyiev Rovshan Ilkin"}
  ],
  info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore necessitatibus, repellat accusamus assumenda consectetur dolor adipisci quaerat in commodi omnis ad expedita incidunt! Blanditiis sapiente qui aliquam tenetur doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laudantium modi iure sed ullam architecto error culpa debitis deleniti voluptatibus nulla amet explicabo, possimus mollitia, quis quasi rem dolorum animi.",
  history: ['Universitetin yaranma tarixi: 28 may 1919','Azerbaycan dili kafedrasinin acilishi: 01 Iyun 1920','Muhendislik kafedrasinin aclishi: 21 Iyul 1922','Birinci telebelerin buraxilishi: 31 May 1923', 'Universitetde rus dili sektorunun aclishi: 17 Oktyabr 1923', 'Azerbaycanda birinci Kimya Labaratoriyasinin acilishi: 20 Noyabr 1925', 'Birinci ecnebi telebelerin qebulu: 01 Sentyabr 1926'],
  administration: [
    { position: 'Rektor', name: 'Professor Asiman Eliyev Xanlar oglu' },
    { position: 'Prorektor', name: 'Professor Orxan Abdullayev Eli oglu'},
    { position: 'Prorektor', name: 'Professor Aygun Xanlarova Maarif qizi'}
  ],
  languages: ['Azeri', 'English', 'Russian', 'Turkish'],
  imgUrl: "img/bdu-logo.png",
  coverImgUrl: "images/bdu.jpg"
},
{
  id: 14,
  name: 'Odlar Yurdu Universiteti',
  eyaniStudentCount : 123,
  qiyabiStudentCount: 45,
  bachelorStudentCount: 123,
  mastersStudentCount: 213,
  doctorsStudentCount: 153,
  kishiStudentCount: 123,
  qadinStudentCount: 531,
  eyaniTeacherCount : 123,
  qiyabiTeacherCount: 45,
  bachelorTeacherCount: 123,
  mastersTeacherCount: 213,
  doctorsTeacherCount: 153,
  kishiTeacherCount: 123,
  qadinTeacherCount: 531,
  studentCount: 2385,
  freshmanCount: 211,
  onCampusCount: 2000,
  offCampusCount: 385,
  teacherCount: 71,
  city: 'Baku',
  street: "Akademik Zahid Xelilov",
  foundDate: 1919,
  departmentCount: 3,
  faculties: [
    { id: 1, name: "Kompyuter muhandisliyi fakultesi4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi fakultesi2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi fakultesi3", director: "Elyiev Rovshan Ilkin"}
  ],
  departments: [
    { id: 1, name: "Kompyuter muhandisliyi kafedra4", director: "Elyiev Rovshan Ilkin"},
    { id: 2, name: "Kompyuter muhandisliyi kafedra2", director: "Elyiev Rovshan Ilkin"},
    { id: 3, name: "Kompyuter muhandisliyi kafedra3", director: "Elyiev Rovshan Ilkin"}
  ],
  info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore necessitatibus, repellat accusamus assumenda consectetur dolor adipisci quaerat in commodi omnis ad expedita incidunt! Blanditiis sapiente qui aliquam tenetur doloribus.",
  history: ['Universitetin yaranma tarixi: 28 may 1919','Azerbaycan dili kafedrasinin acilishi: 01 Iyun 1920','Muhendislik kafedrasinin aclishi: 21 Iyul 1922','Birinci telebelerin buraxilishi: 31 May 1923', 'Universitetde rus dili sektorunun aclishi: 17 Oktyabr 1923', 'Azerbaycanda birinci Kimya Labaratoriyasinin acilishi: 20 Noyabr 1925', 'Birinci ecnebi telebelerin qebulu: 01 Sentyabr 1926'],
  administration: [
    { position: 'Rektor', name: 'Professor Asiman Eliyev Xanlar oglu' },
    { position: 'Prorektor', name: 'Professor Orxan Abdullayev Eli oglu'},
    { position: 'Prorektor', name: 'Professor Aygun Xanlarova Maarif qizi'}
  ],
  languages: ['Azeri', 'English', 'Russian', 'Turkish'],
  imgUrl: "img/bdu-logo.png",
  coverImgUrl: "images/bdu.jpg"
}
];
let students = [
{
  id: 123,
  name: 'ALBERT MEDIA',
  courseYear: 4,
  universityName: "Baki Dovlet Universiteti",
  universityId: 11,
  title: 'Hello its me, Tural. I’m crazy boy',
  birthday: '9/05/1994',
  gender: 'kishi',
  grade: "bakalavr",
  status: 'əyani',
  jobStatus: 'null',
  faculty: 'Proqramlaşdirma fakültəsi',
  profession: 'Senayenin tewkili ve idare olunmasi',
  admissionScore: 446,
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet sodales ex sollicitudin lobortis. In vitae ornare elit. Etiam nisl sem, tempor at fringilla et, convallis elementum purus. Fusce ac velit ornare, tincidunt nisl ut, cursus quam. Proin quis eleifend dolor. Quisque in pharetra leo. Nullam ornare molestie tincidunt. Suspendisse ac mollis libero. Fusce sit amet tempor tellus. Nullam nec dolor vel dui feugiat sollicitudin id ut arcu. Donec malesuada a ante ac rutrum. Nam condimentum tortor vitae ligula ultrices commodo a a odio. Nunc ultricies orci ut porta condimentum. Etiam efﬁcitur quam ligula, id aliquam nunc iaculis vitae. Duis lectus mi, blandit gravida varius quis, dictum vitae libero. Suspendisse euismod diam in justo volutpat placerat. Etiam ultrices, metus ut fringilla aliquet, ligula ipsum tincidunt mi, vel fermentum nunc tortor vel elit. Nunc ut lacinia metus. Maecenas mattis massa enim, accumsan placerat ligula vulputate vel. Nam euismod consequat posuere.',
  history: [
    {
      id: 1,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 2,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 3,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 4,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    }
  ],
  birthAddress: 'Azerbaycan,Baki sheri,C.Cabbarli kuc. ev 12/8 men 87',
  currentAddress: 'Azerbaycan,Baki sheri,C.Cabbarli kuc. ev 12/8 men 87',
  temporaryAddress: '-',
  phoneNumbers: ['+994 12 404 04 51','+994 12 404 04 51','+994 12 404 04 51'],
  parents:[
    {
        id: 1,
        name: 'Muxtarov Elvin',
        position: 'Ata',
        profileImgUrl: 'img/user1.png'
    },
    {
        id: 2,
        name: 'Muxtarova Lamiye',
        position: 'Ana',
        profileImgUrl: 'img/user1.png'
    }
  ],
  email: '-',
  facebook: '-',
  google: '-',
  imgUrl: 'img/user1.png',
  coverImgUrl: 'img/user2.png',
  documents: [
    {
      id: 2457635,
      series: 'ae12312',
      name: 'HTML5 kurslarinin sertifikati',
      date: '09/02/2016',
      type: 'Sertifikat'
    },
    {
      id: 2457631,
      series: 'ae15312',
      name: 'PHP kurslarinin sertifikati',
      date: '09/05/2016',
      type: 'Sertifikat'
    },
    {
      id: 2457633,
      series: 'ae12352',
      name: 'JavaScript sertifikati',
      date: '09/12/2016',
      type: 'Sertifikat'
    },
  ],
  subjects: [],
  completedClasses: 17,
  incompleteClasses: 7,
  totalClasses: 24,
  gpa: 3.4,
  classes: [
    {
      name: 'Riyaziyyat',
      group: 'R353',
      year: 2016,
      semester: 'P1',
      attendance: 73,
      semesterPoints: 42,
      examPoints: 46,
      grade: 'A',
    },
    {
      name: 'Computer Science',
      group: 'CS183',
      year: 2016,
      semester: 'P2',
      attendance: 99,
      semesterPoints: 45,
      examPoints: 46,
      grade: 'A'
    },
    {
      name: 'Economics',
      group: 'E153',
      year: 2016,
      semester: 'P1',
      attendance: 89,
      semesterPoints: 45,
      examPoints: 41,
      grade: 'A'
    }
  ]
},
{
  id: 12312,
  name: 'ALBERTA MEDINA 3',
  courseYear: 3,
  universityName: "Baki Dovlet Universiteti",
  universityId: 11,
  title: 'Hello its me, Tural. I’m crazy boy',
  birthday: '9/05/1994',
  gender: 'qadin',
  grade: "magistr",
  status: 'əyani',
  jobStatus: 'null',
  faculty: 'Proqramlaşdirma fakültəsi',
  profession: 'Senayenin tewkili ve idare olunmasi',
  admissionScore: 446,
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet sodales ex sollicitudin lobortis. In vitae ornare elit. Etiam nisl sem, tempor at fringilla et, convallis elementum purus. Fusce ac velit ornare, tincidunt nisl ut, cursus quam. Proin quis eleifend dolor. Quisque in pharetra leo. Nullam ornare molestie tincidunt. Suspendisse ac mollis libero. Fusce sit amet tempor tellus. Nullam nec dolor vel dui feugiat sollicitudin id ut arcu. Donec malesuada a ante ac rutrum. Nam condimentum tortor vitae ligula ultrices commodo a a odio. Nunc ultricies orci ut porta condimentum. Etiam efﬁcitur quam ligula, id aliquam nunc iaculis vitae. Duis lectus mi, blandit gravida varius quis, dictum vitae libero. Suspendisse euismod diam in justo volutpat placerat. Etiam ultrices, metus ut fringilla aliquet, ligula ipsum tincidunt mi, vel fermentum nunc tortor vel elit. Nunc ut lacinia metus. Maecenas mattis massa enim, accumsan placerat ligula vulputate vel. Nam euismod consequat posuere.',
  history: [
    {
      id: 1,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 2,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 3,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 4,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    }
  ],
  birthAddress: 'Azerbaycan,Baki sheri,C.Cabbarli kuc. ev 12/8 men 87',
  currentAddress: 'Azerbaycan,Baki sheri,C.Cabbarli kuc. ev 12/8 men 87',
  temporaryAddress: '-',
  phoneNumbers: ['+994 12 404 04 51','+994 12 404 04 51','+994 12 404 04 51'],
  parents:[
    {
        id: 1,
        name: 'Muxtarov Elvin',
        position: 'Ata',
        profileImgUrl: 'img/user1.png'
    },
    {
        id: 2,
        name: 'Muxtarova Lamiye',
        position: 'Ana',
        profileImgUrl: 'img/user1.png'
    }
  ],
  email: '-',
  facebook: '-',
  google: '-',
  imgUrl: 'img/user1.png',
  coverImgUrl: 'img/user2.png',
  documents: [
    {
      id: 2457635,
      series: 'ae12312',
      name: 'HTML5 kurslarinin sertifikati',
      date: '09/02/2016',
      type: 'Sertifikat'
    },
    {
      id: 2457631,
      series: 'ae15312',
      name: 'PHP kurslarinin sertifikati',
      date: '09/05/2016',
      type: 'Sertifikat'
    },
    {
      id: 2457633,
      series: 'ae12352',
      name: 'JavaScript sertifikati',
      date: '09/12/2016',
      type: 'Sertifikat'
    },
  ],
  subjects: [],
  completedClasses: 17,
  incompleteClasses: 7,
  totalClasses: 24,
  gpa: 3.4,
  classes: [
    {
      name: 'Riyaziyyat',
      group: 'R353',
      year: 2016,
      semester: 'P1',
      attendance: 73,
      semesterPoints: 42,
      examPoints: 46,
      grade: 'A',
    },
    {
      name: 'Computer Science',
      group: 'CS183',
      year: 2016,
      semester: 'P2',
      attendance: 99,
      semesterPoints: 45,
      examPoints: 46,
      grade: 'A'
    },
    {
      name: 'Economics',
      group: 'E153',
      year: 2016,
      semester: 'P1',
      attendance: 89,
      semesterPoints: 45,
      examPoints: 41,
      grade: 'A'
    }
  ]
},
{
  id: 24536,
  name: 'ALBERT MEDIA 2',
  courseYear: 2,
  universityName: "Baki Dovlet Universiteti",
  universityId: 12,
  title: 'Hello its me, Tural. I’m crazy boy',
  birthday: '9/05/1994',
  gender: 'kishi',
  grade: "bakalavr",
  status: 'əyani',
  jobStatus: 'null',
  faculty: 'Proqramlaşdirma fakültəsi',
  profession: 'Senayenin tewkili ve idare olunmasi',
  admissionScore: 446,
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet sodales ex sollicitudin lobortis. In vitae ornare elit. Etiam nisl sem, tempor at fringilla et, convallis elementum purus. Fusce ac velit ornare, tincidunt nisl ut, cursus quam. Proin quis eleifend dolor. Quisque in pharetra leo. Nullam ornare molestie tincidunt. Suspendisse ac mollis libero. Fusce sit amet tempor tellus. Nullam nec dolor vel dui feugiat sollicitudin id ut arcu. Donec malesuada a ante ac rutrum. Nam condimentum tortor vitae ligula ultrices commodo a a odio. Nunc ultricies orci ut porta condimentum. Etiam efﬁcitur quam ligula, id aliquam nunc iaculis vitae. Duis lectus mi, blandit gravida varius quis, dictum vitae libero. Suspendisse euismod diam in justo volutpat placerat. Etiam ultrices, metus ut fringilla aliquet, ligula ipsum tincidunt mi, vel fermentum nunc tortor vel elit. Nunc ut lacinia metus. Maecenas mattis massa enim, accumsan placerat ligula vulputate vel. Nam euismod consequat posuere.',
  history: [
    {
      id: 1,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 2,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 3,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    },
    {
      id: 4,
      date: '1982 August 03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit quaerat laborum delectus doloribus aliquam, ullam esse architecto laudantium omnis!'
    }
  ],
  birthAddress: 'Azerbaycan,Baki sheri,C.Cabbarli kuc. ev 12/8 men 87',
  currentAddress: 'Azerbaycan,Baki sheri,C.Cabbarli kuc. ev 12/8 men 87',
  temporaryAddress: '-',
  phoneNumbers: ['+994 12 404 04 51','+994 12 404 04 51','+994 12 404 04 51'],
  parents:[
    {
        id: 1,
        name: 'Muxtarov Elvin',
        position: 'Ata',
        profileImgUrl: 'img/user1.png'
    },
    {
        id: 2,
        name: 'Muxtarova Lamiye',
        position: 'Ana',
        profileImgUrl: 'img/user1.png'
    }
  ],
  email: '-',
  facebook: '-',
  google: '-',
  imgUrl: 'img/user1.png',
  coverImgUrl: 'img/user2.png',
  documents: [
    {
      id: 2457635,
      series: 'ae12312',
      name: 'HTML5 kurslarinin sertifikati',
      date: '09/02/2016',
      type: 'Sertifikat'
    },
    {
      id: 2457631,
      series: 'ae15312',
      name: 'PHP kurslarinin sertifikati',
      date: '09/05/2016',
      type: 'Sertifikat'
    },
    {
      id: 2457633,
      series: 'ae12352',
      name: 'JavaScript sertifikati',
      date: '09/12/2016',
      type: 'Sertifikat'
    }
  ],
  subjects: [],
  completedClasses: 17,
  incompleteClasses: 7,
  totalClasses: 24,
  gpa: 3.4,
  classes: [
    {
      name: 'Riyaziyyat',
      group: 'R353',
      year: 2016,
      semester: 'P1',
      attendance: 73,
      semesterPoints: 42,
      examPoints: 46,
      grade: 'A'
    },
    {
      name: 'Computer Science',
      group: 'CS183',
      year: 2016,
      semester: 'P2',
      attendance: 99,
      semesterPoints: 45,
      examPoints: 46,
      grade: 'A'
    },
    {
      name: 'Economics',
      group: 'E153',
      year: 2016,
      semester: 'P1',
      attendance: 89,
      semesterPoints: 45,
      examPoints: 41,
      grade: 'A'
    }
  ]
}
];
let teachers = [
{
  id: 1,
  name: 'TEACHER MEDIA',
  universityName: "Baki Dovlet Universiteti",
  universityId: 12,
  grade: "doktorant",
  kafedra: 'BM',
  imgUrl: 'img/user1.png',
  subjects: [
    {
      id: 1,
      name: 'edebiyyat'
    },
    {
      id: 2,
      name: 'riyazziyat'
    },
    {
      id: 3,
      name: 'fizika'
    }
  ]
},
{
  id: 2,
  name: 'TEACHER MEDIA 2',
  universityName: "Baki Slavyan Universiteti",
  universityId: 13,
  grade: "magistr",
  kafedra: 'BM',
  imgUrl: 'img/user1.png',
  subjects: [
    {
      id: 1,
      name: 'edebiyyat'
    },
    {
      id: 2,
      name: 'riyazziyat'
    },
    {
      id: 3,
      name: 'fizika'
    }
  ]
},
{
  id: 3,
  name: 'TEACHER MEDIA 3',
  universityName: "Baki Dovlet Universiteti",
  universityId: 11,
  grade: "magistr",
  kafedra: 'BM',
  imgUrl: 'img/user1.png',
  subjects: [
    {
      id: 1,
      name: 'edebiyyat'
    },
    {
      id: 2,
      name: 'riyazziyat'
    },
    {
      id: 3,
      name: 'fizika'
    }
  ]
}
];
let universityFilterProperties = [
{
  id: 1,
  name: 'A-z siralama',
  value: 'name',
},
{
  id: 2,
  name: 'Ile uygun siralama',
  value: 'foundDate',
},
{
  id: 3,
  name: 'Hashtag',
  value: 'hashtag',
}
];
let studentFilterProperties = [
{
  id: 1,
  name: 'A-z siralama',
  value: 'name',
},
{
  id: 2,
  name: 'Ile uygun siralama',
  value: 'foundDate',
},
{
  id: 3,
  name: 'Hashtag',
  value: 'hashtag',
}
];
let teacherFilterProperties = [
{
  id: 1,
  name: 'A-z siralama',
  value: 'name',
},
{
  id: 2,
  name: 'Ile uygun siralama',
  value: 'foundDate',
},
{
  id: 3,
  name: 'Hashtag',
  value: 'hashtag',
}
];
return { universities, students, teachers, universityFilterProperties, studentFilterProperties, teacherFilterProperties };
}
}
*/ 
//# sourceMappingURL=in-memory-data.service.js.map