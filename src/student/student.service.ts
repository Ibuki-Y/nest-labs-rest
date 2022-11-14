import { Injectable } from '@nestjs/common';
import { Grade, Profile, Student } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  getStudents(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  getStudentProfiles(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  getStudentByGrade(grade: Grade): Promise<Student[]> {
    return this.prisma.student.findMany({
      where: {
        grade,
      },
    });
  }

  getStudentById(id: number): Promise<Student> {
    return this.prisma.student.findFirst({
      where: {
        id,
      },
    });
  }

  getStudentProfileById(id: number): Promise<Profile> {
    return this.prisma.profile.findFirst({
      where: {
        id,
      },
    });
  }
}
