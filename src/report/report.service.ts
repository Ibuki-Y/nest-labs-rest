import { Injectable } from '@nestjs/common';
import { Report } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  getReports(): Promise<Report[]> {
    return this.prisma.report.findMany();
  }

  getStudentById(id: number): Promise<Report> {
    return this.prisma.report.findFirst({
      where: {
        id,
      },
    });
  }
}
