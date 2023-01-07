import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Report } from '@prisma/client';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get()
  async getReports(): Promise<Report[]> {
    const start = performance.now();
    const reports = this.reportService.getReports();
    const end = performance.now();
    console.log(`getReports: ${end - start}`);
    return reports;
  }

  @Get(':id')
  async getReportById(@Param('id', ParseIntPipe) id: number): Promise<Report> {
    const start = performance.now();
    const report = this.reportService.getReportById(id);
    const end = performance.now();
    console.log(`getReportById: ${end - start}`);
    return report;
  }

  @Get('student/:id')
  async getReportsByStudnetId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Report[] | null> {
    return this.reportService.getReportsByStudnetId(id);
  }
}
