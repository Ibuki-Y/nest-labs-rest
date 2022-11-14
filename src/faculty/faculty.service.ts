import { Injectable } from '@nestjs/common';
import { Faculty } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FacultyService {
  constructor(private prisma: PrismaService) {}

  getFaculties(): Promise<Faculty[]> {
    return this.prisma.faculty.findMany();
  }
}
