import { Injectable } from '@nestjs/common';
import { Report } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  async getReports(): Promise<Report[]> {
    return this.prisma.report.findMany();
  }

  async getReportById(id: number): Promise<Report> {
    return this.prisma.report.findFirst({
      where: {
        id,
      },
    });
  }

  async getReportsByStudnetId(id: number): Promise<Report[] | null> {
    return this.prisma.report.findMany({
      where: {
        studentId: id,
      },
    });
  }
}
