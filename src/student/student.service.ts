import { Injectable } from '@nestjs/common';
import { Grade, Student } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async getStudents(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  async getStudentByGrade(grade: Grade): Promise<Student[]> {
    return this.prisma.student.findMany({
      where: {
        grade,
      },
    });
  }

  async getStudentById(id: number): Promise<Student> {
    return this.prisma.student.findFirst({
      where: {
        id,
      },
    });
  }
}
