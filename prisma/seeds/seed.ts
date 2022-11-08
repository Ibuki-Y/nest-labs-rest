import { PrismaClient, Grade } from '@prisma/client';
import {
  facultyData,
  departmentData,
  chars,
  charNums,
  reportData,
} from './data';

const prisma = new PrismaClient();
const N = 100000;
const createdAt = new Date('2022-01-31T04:34:22+09:00');
const updatedAt = new Date('2022-01-31T04:34:22+09:00');

// 学部作成
const doSeedFaculty = async () => {
  const faculties = [];
  for (const faculty of facultyData) {
    const createFaculties = prisma.faculty.create({
      data: faculty,
    });
    faculties.push(createFaculties);
  }

  return await prisma.$transaction(faculties);
};

// 学科作成
const doSeedDepartment = async () => {
  const departments = [];
  for (const department of departmentData) {
    const createDepartments = prisma.department.create({
      data: department,
    });
    departments.push(createDepartments);
  }

  return await prisma.$transaction(departments);
};

// 生徒作成
const doSeedStudent = async () => {
  const students = [];
  for (let i = 1; i <= N; i++) {
    const id = i;
    const randGrade = Math.floor(Math.random() * 4); // 0〜3
    const departmentId = 1 + Math.floor(Math.random() * 26); // 1〜26
    const randNumId =
      1000000 + Math.floor(Math.random() * (10000000 - 1000000)); // 1000000〜9999999
    const randLastId = Math.floor(Math.random() * 26); // 0〜25
    let grade: Grade;
    let originalId: string;
    if (randGrade === 0) {
      originalId =
        '22' +
        chars[departmentId - 1] +
        randNumId.toString() +
        chars[randLastId];
      grade = Grade.FRESHMAN;
    } else if (randGrade === 1) {
      originalId =
        '21' +
        chars[departmentId - 1] +
        randNumId.toString() +
        chars[randLastId];
      grade = Grade.SOPHOMORE;
    } else if (randGrade === 2) {
      originalId =
        '20' +
        chars[departmentId - 1] +
        randNumId.toString() +
        chars[randLastId];
      grade = Grade.JUNIOR;
    } else {
      originalId =
        '19' +
        chars[departmentId - 1] +
        randNumId.toString() +
        chars[randLastId];
      grade = Grade.SENIOR;
    }

    const createStudents = prisma.student.create({
      data: {
        id,
        originalId,
        grade,
        departmentId,
        createdAt,
        updatedAt,
      },
    });
    students.push(createStudents);
  }

  return await prisma.$transaction(students);
};

// プロフィール作成
const doSeedProfile = async () => {
  const profiles = [];
  for (let i = 1; i <= N; i++) {
    const id = i;
    const studentId = i;
    let password = '';
    for (let j = 0; j < 12; j++) {
      password += charNums.charAt(Math.floor(Math.random() * charNums.length));
    }
    const email = password + '@g.chuo-u.ac.jp';

    const createProfiles = prisma.profile.create({
      data: {
        id,
        email,
        password,
        studentId,
        createdAt,
        updatedAt,
      },
    });
    profiles.push(createProfiles);
  }

  return await prisma.$transaction(profiles);
};

// レポート作成 node --max-old-space-size=3000
const doSeedReport = async () => {
  const reports = [];
  for (let i = 1; i <= N; i++) {
    const id = i;
    const randTitle = Math.floor(Math.random() * 9); // 0〜8
    const title = reportData[randTitle];
    const finished = Math.random() >= 0.5;
    const studentId = 1 + Math.floor(Math.random() * N); // 1〜N

    const createReports = prisma.report.create({
      data: {
        id,
        title,
        finished,
        studentId,
        createdAt,
        updatedAt,
      },
    });
    reports.push(createReports);
  }

  return await prisma.$transaction(reports);
};

const main = async () => {
  console.log(`Start seeding ...`);
  // await doSeedFaculty();
  // await doSeedDepartment();
  // await doSeedStudent();
  // await doSeedProfile();
  await doSeedReport();
  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
