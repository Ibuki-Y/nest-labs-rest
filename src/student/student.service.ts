import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  getStudents(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  getStudentById(id: number): Promise<Student> {
    return this.prisma.student.findFirst({
      where: {
        id,
      },
    });
  }
}
