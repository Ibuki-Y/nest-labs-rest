import { Injectable } from '@nestjs/common';
import { Department } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async getDepartments(): Promise<Department[]> {
    return this.prisma.department.findMany();
  }
}
