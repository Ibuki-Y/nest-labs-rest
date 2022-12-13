import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Report } from '@prisma/client';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get()
  async getReports(): Promise<Report[]> {
    return this.reportService.getReports();
  }

  @Get(':id')
  async getReportById(@Param('id', ParseIntPipe) id: number): Promise<Report> {
    return this.reportService.getReportById(id);
  }
}
